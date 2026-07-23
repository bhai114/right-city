<script setup>
defineEmits(["start"]);
</script>

<template>
  <section class="screen intro-screen" aria-labelledby="introTitle">
    <div class="intro-copy reveal-item">
      <p class="eyebrow">一次关于生活方式的小测验</p>
      <h1 id="introTitle">哪座城市，<br />会接住你的生活？</h1>
      <p class="intro-lead">不问你喜欢哪里，只看你怎样工作、休息、相处与生活。</p>
      <button class="primary-button" type="button" @click="$emit('start')">
        开始测试
        <span aria-hidden="true">→</span>
      </button>
    </div>

    <div class="city-collage reveal-item" aria-label="城市生活影像">
      <figure class="city-photo city-photo-main">
        <img src="/assets/hangzhou.jpg" alt="杭州西湖与群山" />
      </figure>
      <figure class="city-photo city-photo-top">
        <img src="/assets/shanghai.jpg" alt="上海夜景与城市天际线" />
      </figure>
      <figure class="city-photo city-photo-bottom">
        <img src="/assets/dali.jpg" alt="大理洱海与远山" />
      </figure>
      <div class="collage-caption" aria-hidden="true">
        <span>向外生长</span>
        <span>向内安顿</span>
      </div>
    </div>
  </section>
</template>
