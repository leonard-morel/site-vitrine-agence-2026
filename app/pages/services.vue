<script setup lang="ts">
import { services } from '~/data/site'

const agency = useAgency()

useSeoMeta({
  title: 'Services',
  description: `Les prestations de ${agency.value.name} : création de site web et référencement web pour les entreprises en France.`
})
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <p class="section-heading__eyebrow">Services</p>
        <h1 class="page-hero__title">Deux expertises pour renforcer votre présence en ligne.</h1>
        <p class="page-hero__lead">
          Notre agence se concentre sur deux uniques leviers complémentaires, qui doivent constituer le socle de toute présence en ligne. D'une part, un site web qui convertit et de l'autre, un référencement web (SEO) axé sur des requêtes génératrices de trafic qualifié pour votre entreprise.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container services-detail">
        <article class="service-detail">
          <div class="service-detail__intro">
            <p class="section-heading__eyebrow">Création de site web</p>
            <h2>Un site vitrine professionnel, rapide et orienté conversion</h2>
            <p>
              Nous concevons des sites web qui donnent confiance, clarifient votre positionnement et rendent la prise de contact naturelle.
            </p>
          </div>
          <div class="service-detail__content">
            <div>
              <h3>Ce que nous prenons en charge</h3>
              <ul class="check-list">
                <li>Arborescence des pages et parcours visiteur</li>
                <li>Webdesign adapté à votre image</li>
                <li>Intégration responsive desktop, tablette et mobile</li>
                <li>Structuration des contenus et appels à l'action</li>
                <li>Optimisations techniques de base et SEO on-page</li>
              </ul>
            </div>
            <div class="service-detail__box service-detail__box--accent">
              <p class="service-detail__kicker">Exemples de livrables</p>
              <h3>Formats courants</h3>
              <ul class="service-detail__tags">
                <li>Site vitrine</li>
                <li>Page de vente</li>
                <li>Refonte d'un site existant</li>
                <li>Page contact optimisée</li>
                <li>Mini-site de lancement</li>
              </ul>
            </div>
          </div>
        </article>

        <article class="service-detail">
          <div class="service-detail__intro">
            <p class="section-heading__eyebrow">Référencement web</p>
            <h2>Un SEO utile pour faire progresser votre visibilité dans la durée</h2>
            <p>
              Nous travaillons les fondations qui aident un site à mieux se positionner : structure, contenus, pages clés et priorités de recherche.
            </p>
          </div>
          <div class="service-detail__content">
            <div>
              <h3>Ce que nous prenons en charge</h3>
              <ul class="check-list">
                <li>Audit SEO initial et priorisation des actions</li>
                <li>Optimisation des titres, métas et contenus</li>
                <li>Amélioration du maillage interne et des pages stratégiques</li>
                <li>Travail sur le SEO local ou national selon vos objectifs</li>
                <li>Recommandations éditoriales pour renforcer votre présence</li>
              </ul>
            </div>
            <div class="service-detail__box service-detail__box--accent">
              <p class="service-detail__kicker">Objectifs typiques</p>
              <h3>Cas d'usage fréquents</h3>
              <ul class="service-detail__tags">
                <li>Augmenter les demandes entrantes</li>
                <li>Renforcer une activité locale</li>
                <li>Corriger un site mal structuré</li>
                <li>Préparer une refonte sur de meilleures bases</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="section section--muted">
      <div class="container">
        <SectionHeading
          eyebrow="Synthèse"
          title="Une offre simple à lire, plus facile à acheter"
          description="Vous n'avez pas besoin d'une liste de prestations illisible. Vous avez besoin des bons leviers, au bon moment, avec une méthode sérieuse."
        />

        <div class="cards-grid">
          <ServiceCard
            v-for="service in services"
            :key="service.slug"
            :title="service.title"
            :intro="service.intro"
            :bullets="service.bullets"
          />
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <CtaPanel
          title="Vous voulez clarifier ce qu'il faut faire en premier ?"
          body="Nous vous aidons à faire le tri entre ce qui est prioritaire, ce qui peut attendre et ce qui générera le plus de retombées pour votre activité."
        />
      </div>
    </section>
  </div>
</template>
