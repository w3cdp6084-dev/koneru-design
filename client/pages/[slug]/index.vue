<script setup>
const route = useRoute();
const slug = route.params.slug;

const { data: article } = await useFetch(`/blog/${slug}`, {
  baseURL: "https://koneru-collection.microcms.io/api/v1",
  headers: {
    "X-MICROCMS-API-KEY": "a018dfee22ac488b98d4730036ada92571ee",
  },
});
</script>


<template>
  <main class="main">
    <h1 class="title">{{ article.title }}</h1>
    <p class="publishedAt">
      <time :datetime="article.publishedAt" v-text="article.publishedAt" />
    </p>
    <div class="post" v-html="article.body" />
  </main>
</template>

<style lang="scss" scoped>
.main {
  width: 960px;
  margin: 0 auto;
}

.title {
  margin-bottom: 20px;
}

.publishedAt {
  margin-bottom: 40px;
}

:deep(.post) {
  > h2 {
    font-size: 24px;
    font-weight: bold;
    margin: 40px 0 16px;
    border-bottom: 1px solid #ddd;
  }


  > p {
    line-height: 1.8;
    letter-spacing: 0.2px;
  }
}
</style>