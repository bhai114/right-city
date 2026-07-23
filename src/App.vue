<script setup>
import { computed, nextTick, onBeforeUnmount, ref } from "vue";
import IntroScreen from "./components/IntroScreen.vue";
import LoadingScreen from "./components/LoadingScreen.vue";
import QuizScreen from "./components/QuizScreen.vue";
import ResultScreen from "./components/ResultScreen.vue";
import { cities, cityIds, questions, traitLabels } from "./data";

const screen = ref("intro");
const questionIndex = ref(0);
const answers = ref(Array(questions.length).fill(null));
const result = ref(null);
const selectionError = ref("");
const toast = ref("");
let loadingTimer;
let toastTimer;

const currentQuestion = computed(() => questions[questionIndex.value]);
const selectedAnswer = computed(() => answers.value[questionIndex.value]);
const screenKey = computed(() => (screen.value === "quiz" ? `quiz-${questionIndex.value}` : screen.value));
const winner = computed(() => (result.value ? cities[result.value.ranked[0].id] : null));
const headerNote = computed(() => {
  if (screen.value === "quiz") return `第 ${questionIndex.value + 1} 题，共 ${questions.length} 题`;
  if (screen.value === "loading") return "正在生成城市画像";
  if (screen.value === "result") return `匹配结果：${winner.value.name}`;
  return `${questions.length} 道生活方式选择题`;
});

function scrollToTop(behavior = "auto") {
  window.scrollTo({ top: 0, behavior });
}

function startQuiz() {
  window.clearTimeout(loadingTimer);
  screen.value = "quiz";
  questionIndex.value = 0;
  answers.value = Array(questions.length).fill(null);
  result.value = null;
  selectionError.value = "";
  scrollToTop();
}

function resetToIntro() {
  window.clearTimeout(loadingTimer);
  screen.value = "intro";
  questionIndex.value = 0;
  answers.value = Array(questions.length).fill(null);
  result.value = null;
  selectionError.value = "";
  scrollToTop();
}

function handleBrandClick() {
  if (screen.value === "intro") return;
  if (window.confirm("返回首页会清空当前选择，确认返回吗？")) resetToIntro();
}

function selectAnswer(index) {
  answers.value[questionIndex.value] = index;
  selectionError.value = "";
}

function goBack() {
  selectionError.value = "";
  if (questionIndex.value === 0) {
    resetToIntro();
    return;
  }
  questionIndex.value -= 1;
  scrollToTop();
}

function goNext() {
  if (selectedAnswer.value === null) {
    selectionError.value = "请先选择一个更接近你的答案。";
    return;
  }

  if (questionIndex.value < questions.length - 1) {
    questionIndex.value += 1;
    selectionError.value = "";
    scrollToTop("smooth");
    return;
  }

  screen.value = "loading";
  loadingTimer = window.setTimeout(async () => {
    result.value = calculateResult();
    screen.value = "result";
    await nextTick();
    scrollToTop("smooth");
  }, 950);
}

function calculateResult() {
  const scores = Object.fromEntries(cityIds.map((id) => [id, 0]));
  const traits = {};

  answers.value.forEach((answerIndex, index) => {
    const answer = questions[index].options[answerIndex];
    Object.entries(answer.weights).forEach(([city, weight]) => {
      if (scores[city] !== undefined) scores[city] += weight;
    });
    answer.traits.forEach((trait) => {
      traits[trait] = (traits[trait] || 0) + 1;
    });
  });

  const ranked = cityIds
    .map((id) => ({ id, score: scores[id] }))
    .sort((a, b) => b.score - a.score || cityIds.indexOf(a.id) - cityIds.indexOf(b.id));
  const topTraits = Object.entries(traits)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4)
    .map(([trait]) => traitLabels[trait] || trait);

  return {
    ranked,
    topTraits,
    match: Math.round((ranked[0].score / (questions.length * 3)) * 100),
  };
}

async function shareResult() {
  const text = `我的城市适配结果是${winner.value.name}，生活方式重合度 ${result.value.match}%。${winner.value.subtitle}`;

  try {
    if (navigator.share) {
      await navigator.share({ title: "城市适配测试", text });
      return;
    }
    await navigator.clipboard.writeText(text);
    showToast("结果已复制，可以发给朋友了。 ");
  } catch (error) {
    if (error?.name !== "AbortError") showToast("未能自动分享，请稍后再试。 ");
  }
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.value = message.trim();
  toastTimer = window.setTimeout(() => {
    toast.value = "";
  }, 2400);
}

onBeforeUnmount(() => {
  window.clearTimeout(loadingTimer);
  window.clearTimeout(toastTimer);
});
</script>

<template>
  <div class="app-root">
    <div class="page-noise" aria-hidden="true"></div>

    <header class="site-header">
      <button class="brand" type="button" aria-label="返回首页" @click="handleBrandClick">
        <span class="brand-mark" aria-hidden="true"></span>
        <span>城市适配测试</span>
      </button>
      <p class="header-note">{{ headerNote }}</p>
    </header>

    <main aria-live="polite">
      <Transition name="screen" mode="out-in">
        <IntroScreen v-if="screen === 'intro'" :key="screenKey" @start="startQuiz" />
        <QuizScreen
          v-else-if="screen === 'quiz'"
          :key="screenKey"
          :question="currentQuestion"
          :question-index="questionIndex"
          :total="questions.length"
          :selected="selectedAnswer"
          :error="selectionError"
          @select="selectAnswer"
          @back="goBack"
          @next="goNext"
        />
        <LoadingScreen v-else-if="screen === 'loading'" :key="screenKey" />
        <ResultScreen
          v-else
          :key="screenKey"
          :result="result"
          :cities="cities"
          :questions-count="questions.length"
          @restart="startQuiz"
          @share="shareResult"
        />
      </Transition>
    </main>

    <div class="toast" :class="{ 'is-visible': toast }" role="status" aria-live="polite">
      {{ toast }}
    </div>
  </div>
</template>
