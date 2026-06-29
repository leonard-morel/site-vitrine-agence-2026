<script setup lang="ts">
const agency = useAgency()
</script>

<template>
  <NuxtLink to="/" class="brand-mark" :aria-label="`${agency.name} - retour à l'accueil`">
    <img
      v-if="agency.logo"
      :src="agency.logo"
      :alt="agency.name"
      class="brand-mark__logo"
    >
    <span v-else class="brand-mark__badge">{{ agency.initial }}</span>
    <span class="brand-mark__text">
      <strong>{{ agency.name }}</strong>
      <small>Agence web</small>
    </span>
  </NuxtLink>
</template>
