<script setup lang="ts">
import { agency, faqItems, processSteps, services } from '~/data/site'

useSeoMeta({
  title: 'Agence web en France',
  description: agency.description,
  ogTitle: 'Exemple | Création de site web et référencement web',
  ogDescription: agency.description
})
</script>

<template>
  <div>
    <section class="hero">
      <div class="container hero__grid">
        <div class="hero__content">
          <p class="section-heading__eyebrow">Une agence web pour les entreprises francophones.</p>
          <h1 class="hero__title">
            Faites de votre site web un (vrai) levier de croissance !
          </h1>
          <p class="hero__lead">
            {{ agency.name }} accompagne les entreprises et indépendants vers un objectif simple : faire de leur site web un investissement rentable, grâce à la génération de trafic qualifié, de prospects et de nouveaux clients.
          </p>
          <div class="hero__actions">
            <NuxtLink to="/contact" class="button button--primary">Demander un devis</NuxtLink>
            <NuxtLink to="/services" class="button button--secondary">Découvrir les services</NuxtLink>
          </div>
          <ul class="hero__highlights">
            <li>Réponse sous 48h ouvrées</li>
            <li>Site pensé pour la conversion</li>
            <li>Fondations SEO intégrées</li>
          </ul>
        </div>

        <aside class="hero-panel">
          <p class="hero-panel__label">Notre angle</p>
          <h2>Simple, propre et surtout utile.</h2>
          <p>
            Chacune de vos pages web doit aider vos visiteurs à comprendre votre offre, la comparer et vous contacter.
          </p>
          <div class="hero-panel__metrics">
            <div>
              <strong>2</strong>
              <span>expertises centrales</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>francophonie</span>
            </div>
            <div>
              <strong>48h</strong>
              <span>pour une première réponse</span>
            </div>
          </div>
        </aside>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <SectionHeading
          eyebrow="Prestations"
          title="Deux expertises pour renforcer votre présence en ligne"
          description="Nous concentrons notre travail sur ce qui rend vraiment utile un site web d'entreprise : une présentation claire de votre offre et une visibilité durable sur Google."
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

    <section class="section section--muted">
      <div class="container">
        <SectionHeading
          eyebrow="Méthode"
          title="Un cadre de travail lisible du premier brief à la mise en ligne"
          description="Notre accompagnement est structuré pour que vous sachiez toujours où va le projet, ce qui est prioritaire et ce qui apportera un impact concret."
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
      <div class="container split-section">
        <div>
          <SectionHeading
            eyebrow="Pourquoi nous choisir"
            title="Une agence qui pense autant au fond qu'à la forme"
            description="Le rendu visuel compte, mais il ne suffit pas. Nous travaillons aussi la clarté du message, la logique des pages et la qualité des points de contact."
          />
        </div>

        <div class="feature-stack">
          <article class="feature-card">
            <h3>Un discours compréhensible</h3>
            <p>Nous écrivons pour vos prospects, pas pour impressionner les initiés du web.</p>
          </article>
          <article class="feature-card">
            <h3>Une base technique saine</h3>
            <p>Temps de chargement, structure HTML, responsive et fondations SEO sont traités dès le départ.</p>
          </article>
          <article class="feature-card">
            <h3>Un objectif commercial clair</h3>
            <p>Le site est organisé pour faire avancer le visiteur vers un passage à l'achat ou une prise de contact, sans friction inutile.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--muted">
      <div class="container">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions fréquentes"
          description="Voici les points que les entreprises nous demandent le plus souvent avant de lancer leur projet."
        />

        <div class="faq-list">
          <details v-for="item in faqItems" :key="item.question" class="faq-item">
            <summary>{{ item.question }}</summary>
            <p>{{ item.answer }}</p>
          </details>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <CtaPanel />
      </div>
    </section>
  </div>
</template>
