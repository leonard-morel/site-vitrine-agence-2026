<script setup lang="ts">
import { navigation } from '~/data/site'

const agency = useAgency()
</script>

<template>
  <footer class="site-footer">
    <div class="container site-footer__grid">
      <div>
        <BrandMark />
        <p class="site-footer__copy">
          {{ agency.description }}
        </p>
      </div>

      <div>
        <h2 class="site-footer__title">Navigation</h2>
        <ul class="site-footer__links">
          <li v-for="item in navigation" :key="item.to">
            <NuxtLink :to="item.to">{{ item.label }}</NuxtLink>
          </li>
        </ul>
      </div>

      <div>
        <h2 class="site-footer__title">Contact</h2>
        <ul class="site-footer__links">
          <li>
            <a :href="`tel:${agency.phone}`">{{ agency.phone }}</a>
          </li>
          <li>
            <a :href="`mailto:${agency.email}`">{{ agency.email }}</a>
          </li>
          <li>{{ agency.hours }}</li>
        </ul>
      </div>
    </div>

    <div class="container site-footer__bottom">
      <p>© 2026 {{ agency.name }}. Tous droits réservés.</p>
    </div>
  </footer>
</template>
