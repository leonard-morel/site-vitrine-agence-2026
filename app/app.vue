<script setup lang="ts">
const agency = useAgency()

useHead({
  htmlAttrs: {
    lang: 'fr'
  },
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} | ${agency.value.name}`
      : `${agency.value.name} | Agence web en France`
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
