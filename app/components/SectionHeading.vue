<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  description?: string
}>()
</script>

<template>
  <div class="section-heading">
    <p v-if="eyebrow" class="section-heading__eyebrow">{{ eyebrow }}</p>
    <h2 class="section-heading__title">{{ title }}</h2>
    <p v-if="description" class="section-heading__description">{{ description }}</p>
  </div>
</template>
