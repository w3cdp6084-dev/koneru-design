<template>
  <div>
    <h1>Hello, Nuxt3!</h1>
    <ul>
      <li v-for="article in data.contents" :key="article.id">
        <NuxtLink :to="`/${article.id}`">{{ article.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>





<script setup>
const { data } = await useFetch("/blog", {
  baseURL: "https://w3cdp.microcms.io/api/v1",
  headers: {
    "X-MICROCMS-API-KEY": "f9486b96-e72f-4724-99fe-c0a79b91619d",
  },
});
</script>