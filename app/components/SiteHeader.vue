<script setup lang="ts">
import { navigation } from '~/data/site'

const route = useRoute()
</script>

<template>
  <header class="site-header">
    <div class="container site-header__inner">
      <BrandMark />
      <nav class="site-nav" aria-label="Navigation principale">
        <NuxtLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          class="site-nav__link"
          :class="{ 'is-active': route.path === item.to }"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>
      <NuxtLink to="/contact" class="button button--primary site-header__cta">
        Demander un devis
      </NuxtLink>
    </div>
  </header>
</template>
