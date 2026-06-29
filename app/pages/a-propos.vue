<script setup lang="ts">
import { processSteps } from '~/data/site'

const agency = useAgency()

useSeoMeta({
  title: 'À propos',
  description: `La méthode de ${agency.value.name}, agence web en France pour la création de site et le SEO.`
})
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <p class="section-heading__eyebrow">À propos</p>
        <h1 class="page-hero__title">Une agence pour 3 principes : clareté, rigueur et efficacité.</h1>
        <p class="page-hero__lead">
          {{ agency.name }} a été pensée pour les structures qui veulent avancer avec un interlocuteur fiable, sans jargon superflu et sans empiler des prestations peu lisibles.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container split-section">
        <div>
          <SectionHeading
            eyebrow="Positionnement"
            title="Moderne dans la forme, accessible dans la relation"
            description="Nous défendons un web propre, compréhensible et utile commercialement. Nos recommandations doivent toujours pouvoir se traduire en actions concrètes."
          />
        </div>

        <div class="feature-stack">
          <article class="feature-card">
            <h3>Clarté</h3>
            <p>Chaque choix de structure, de texte ou de SEO doit avoir une utilité explicable.</p>
          </article>
          <article class="feature-card">
            <h3>Rigueur</h3>
            <p>Le rendu visuel, la lisibilité mobile et la qualité de l'intégration ne sont pas laissés au hasard.</p>
          </article>
          <article class="feature-card">
            <h3>Efficacité</h3>
            <p>Nous cherchons des résultats concrets : mieux se présenter, mieux se positionner, mieux convertir.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--muted">
      <div class="container">
        <SectionHeading
          eyebrow="Organisation"
          title="Notre façon de travailler"
          description="Nous aimons les projets bien cadrés, avec des décisions visibles, des arbitrages assumés et un niveau de finition propre."
        />

        <div class="process-grid">
          <article v-for="(step, index) in processSteps" :key="step.title" class="process-card">
            <span class="process-card__index">{{ index + 1 }}</span>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <CtaPanel
          title="Un projet bien posé part toujours mieux"
          body="Si vous avez besoin d'un cadre simple pour démarrer, nous pouvons structurer le sujet avec vous et proposer une feuille de route claire."
        />
      </div>
    </section>
  </div>
</template>
