<script setup lang="ts">
import { agency } from '~/data/site'

useSeoMeta({
  title: 'Mentions légales',
  description: `Mentions légales du site ${agency.name}.`
})
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <p class="section-heading__eyebrow">Informations légales</p>
        <h1 class="page-hero__title">Mentions légales</h1>
        <p class="page-hero__lead">
          Cette page constitue une base de publication. Les informations d'identification ci-dessous doivent être vérifiées et complétées avant mise en ligne définitive.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container legal-layout">
        <article class="legal-card">
          <h2>Éditeur du site</h2>
          <p><strong>Raison sociale :</strong> Exemple</p>
          <p><strong>Forme juridique :</strong> À compléter</p>
          <p><strong>Capital social :</strong> À compléter</p>
          <p><strong>Siège social :</strong> 12 rue des Entrepreneurs, 75010 Paris</p>
          <p><strong>SIREN / SIRET :</strong> À compléter</p>
          <p><strong>Numéro de TVA intracommunautaire :</strong> À compléter</p>
          <p><strong>Email :</strong> contact@exemple.fr</p>
          <p><strong>Téléphone :</strong> +33 (0)1 89 71 24 60</p>
        </article>

        <article class="legal-card">
          <h2>Direction de la publication</h2>
          <p><strong>Directeur de la publication :</strong> À compléter</p>
          <p><strong>Responsable de la rédaction :</strong> À compléter</p>
        </article>

        <article class="legal-card">
          <h2>Hébergement</h2>
          <p><strong>Hébergeur :</strong> À compléter selon votre solution d'hébergement</p>
          <p><strong>Adresse :</strong> À compléter</p>
          <p><strong>Téléphone :</strong> À compléter</p>
        </article>

        <article class="legal-card">
          <h2>Propriété intellectuelle</h2>
          <p>
            L'ensemble des contenus présents sur ce site, sauf mention contraire, est protégé par le droit de la propriété intellectuelle. Toute reproduction, représentation, adaptation ou exploitation, totale ou partielle, sans autorisation préalable écrite, est interdite.
          </p>
        </article>

        <article class="legal-card">
          <h2>Responsabilité</h2>
          <p>
            L'éditeur s'efforce de fournir des informations exactes et à jour, sans pouvoir garantir l'absence totale d'erreurs ou d'omissions. Les informations publiées le sont à titre informatif et peuvent être modifiées à tout moment.
          </p>
        </article>
      </div>
    </section>
  </div>
</template>
