<template>
  <div class="content">
    <h1>Hello, Nuxt3!</h1>
    <ul>
      <li v-for="article in data.contents" :key="article.id">
        <nuxt-link :to="`/${article.id}`">{{ article.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>



<script setup>
const { data } = await useFetch("/blog", {
  baseURL: "https://koneru-collection.microcms.io/api/v1",
  headers: {
    "X-MICROCMS-API-KEY": "a018dfee22ac488b98d4730036ada92571ee",
  },
});
</script>