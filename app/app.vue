<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'fr'
  },
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Exemple` : 'Exemple | Agence web en France'
  },
  meta: [
    {
      name: 'theme-color',
      content: '#0f9d7a'
    }
  ],
  link: [
    {
      rel: 'icon',
      href: '/favicon.ico'
    }
  ]
})
</script>

<template>
  <div>
    <NuxtLoadingIndicator color="#0f9d7a" />
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
