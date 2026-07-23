<script setup>
import { nextTick } from "vue";

const props = defineProps({
  question: { type: Object, required: true },
  questionIndex: { type: Number, required: true },
  total: { type: Number, required: true },
  selected: { type: Number, default: null },
  error: { type: String, default: "" },
});

const emit = defineEmits(["select", "back", "next"]);
const optionElements = [];

function setOptionElement(element, index) {
  if (element) optionElements[index] = element;
}

async function handleOptionKey(event, index) {
  if (!["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft"].includes(event.key)) return;
  event.preventDefault();
  const direction = event.key === "ArrowDown" || event.key === "ArrowRight" ? 1 : -1;
  const nextIndex = (index + direction + props.question.options.length) % props.question.options.length;
  emit("select", nextIndex);
  await nextTick();
  optionElements[nextIndex]?.focus();
}
</script>

<template>
  <section class="screen quiz-screen" :aria-labelledby="`question-title-${questionIndex}`">
    <div class="quiz-rail">
      <div class="progress-copy">
        <span>{{ String(questionIndex + 1).padStart(2, "0") }}</span>
        <span aria-hidden="true">/</span>
        <span>{{ String(total).padStart(2, "0") }}</span>
      </div>
      <div class="progress-ticks" aria-label="答题进度">
        <span
          v-for="index in total"
          :key="index"
          class="progress-tick"
          :class="{
            'is-complete': index - 1 < questionIndex,
            'is-current': index - 1 === questionIndex,
          }"
          :aria-label="`第 ${index} 题${index - 1 < questionIndex ? '，已完成' : index - 1 === questionIndex ? '，当前' : ''}`"
        ></span>
      </div>
      <p class="question-context">{{ question.context }}</p>
    </div>

    <div class="question-panel">
      <p class="question-kicker">{{ question.kicker }}</p>
      <h1 :id="`question-title-${questionIndex}`">{{ question.title }}</h1>
      <div class="options-grid" role="radiogroup">
        <button
          v-for="(answer, index) in question.options"
          :key="answer.title"
          :ref="(element) => setOptionElement(element, index)"
          type="button"
          class="option-button"
          role="radio"
          :aria-checked="selected === index"
          @click="emit('select', index)"
          @keydown="handleOptionKey($event, index)"
        >
          <span class="option-index" aria-hidden="true">{{ String.fromCharCode(65 + index) }}</span>
          <span>
            <span class="option-title">{{ answer.title }}</span>
            <span class="option-description">{{ answer.description }}</span>
          </span>
        </button>
      </div>

      <div class="quiz-actions">
        <button class="text-button" type="button" @click="emit('back')">
          <span aria-hidden="true">←</span>
          {{ questionIndex === 0 ? "首页" : "上一题" }}
        </button>
        <button class="primary-button" type="button" :disabled="selected === null" @click="emit('next')">
          {{ questionIndex === total - 1 ? "查看结果" : "继续" }}
          <span aria-hidden="true">→</span>
        </button>
      </div>
      <p class="selection-error" role="alert">{{ error }}</p>
    </div>
  </section>
</template>
