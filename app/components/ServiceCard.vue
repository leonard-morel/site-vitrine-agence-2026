<script setup lang="ts">
defineProps<{
  title: string
  intro: string
  bullets: string[]
}>()
</script>

<template>
  <article class="service-card">
    <h3>{{ title }}</h3>
    <p>{{ intro }}</p>
    <ul class="service-card__list">
      <li v-for="bullet in bullets" :key="bullet">{{ bullet }}</li>
    </ul>
  </article>
</template>
