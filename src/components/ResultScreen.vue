<script setup>
import { computed } from "vue";

const props = defineProps({
  result: { type: Object, required: true },
  cities: { type: Object, required: true },
  questionsCount: { type: Number, required: true },
});

defineEmits(["restart", "share"]);

const city = computed(() => props.cities[props.result.ranked[0].id]);
const resultIntro = computed(
  () =>
    `你的选择反复指向“${props.result.topTraits[0]}”和“${props.result.topTraits[1]}”。${city.value.fit}`,
);
const alternatives = computed(() =>
  props.result.ranked.slice(1, 3).map((item) => ({
    ...props.cities[item.id],
    id: item.id,
    match: Math.round((item.score / (props.questionsCount * 3)) * 100),
  })),
);
const credits = computed(() => Object.values(props.cities));
</script>

<template>
  <section class="result-screen" aria-labelledby="resultTitle">
    <div class="result-hero">
      <figure class="result-image reveal-item">
        <img :src="city.image" :alt="city.imageAlt" />
      </figure>

      <div class="result-summary reveal-item">
        <p class="result-label">你的城市答案</p>
        <h1 id="resultTitle">{{ city.name }}</h1>
        <p class="result-subtitle">{{ city.subtitle }}</p>
        <div class="match-score">
          <strong>{{ result.match }}%</strong>
          <span>生活方式重合度</span>
        </div>
        <div class="trait-list" aria-label="你的生活倾向">
          <span v-for="trait in result.topTraits" :key="trait" class="trait">{{ trait }}</span>
        </div>
      </div>
    </div>

    <div class="result-body">
      <section class="result-explanation" aria-labelledby="whyTitle">
        <h2 id="whyTitle">为什么是这里</h2>
        <p class="result-intro">{{ resultIntro }}</p>
        <div class="reason-grid">
          <article v-for="reason in city.reasons" :key="reason[0]" class="reason-item">
            <h3>{{ reason[0] }}</h3>
            <p>{{ reason[1] }}</p>
          </article>
        </div>
      </section>

      <aside class="city-note" aria-labelledby="noteTitle">
        <h2 id="noteTitle">适合你的日常</h2>
        <p>{{ city.idealDay }}</p>
        <div class="reality-check">
          <h3>也要留意</h3>
          <p>{{ city.tradeoff }}</p>
        </div>
      </aside>

      <section class="alternatives" aria-labelledby="alternativesTitle">
        <h2 id="alternativesTitle">另外两座，也值得你看看</h2>
        <div class="alternatives-list">
          <article v-for="alternative in alternatives" :key="alternative.id" class="alternative-item">
            <img :src="alternative.image" :alt="alternative.imageAlt" />
            <div class="alternative-copy">
              <div class="alternative-heading">
                <h3>{{ alternative.name }}</h3>
                <strong>{{ alternative.match }}%</strong>
              </div>
              <p>{{ alternative.altCopy }}</p>
            </div>
          </article>
        </div>
      </section>

      <div class="result-actions">
        <button class="primary-button" type="button" @click="$emit('restart')">
          重新测试
          <span aria-hidden="true">↻</span>
        </button>
        <button class="secondary-button" type="button" @click="$emit('share')">分享结果</button>
      </div>

      <p class="disclaimer">这是一份生活方式探索，不替代真实的就业、住房与迁居调研。</p>

      <details class="photo-credits">
        <summary>摄影素材来源</summary>
        <div>
          <a
            v-for="credit in credits"
            :key="credit.creditUrl"
            :href="credit.creditUrl"
            target="_blank"
            rel="noreferrer"
          >
            {{ credit.creditName }}，Wikimedia Commons
          </a>
        </div>
      </details>
    </div>
  </section>
</template>
