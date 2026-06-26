<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
    body?: string
  }>(),
  {
    title: 'Un projet de site ou de SEO à lancer ?',
    body: 'Expliquez-nous votre contexte, vos objectifs et vos contraintes. Nous revenons vers vous avec une proposition claire et exploitable.'
  }
)
</script>

<template>
  <section class="cta-panel">
    <div class="cta-panel__content">
      <div>
        <p class="section-heading__eyebrow">Demande de devis</p>
        <h2 class="cta-panel__title">{{ title }}</h2>
        <p class="cta-panel__body">{{ body }}</p>
      </div>
      <div class="cta-panel__actions">
        <NuxtLink to="/contact" class="button button--primary">Parler de votre projet</NuxtLink>
        <NuxtLink to="/services" class="button button--secondary">Voir les prestations</NuxtLink>
      </div>
    </div>
  </section>
</template>
