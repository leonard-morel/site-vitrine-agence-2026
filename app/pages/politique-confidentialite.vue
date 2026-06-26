<script setup lang="ts">
import { agency } from '~/data/site'

useSeoMeta({
  title: 'Politique de confidentialité',
  description: `Politique de confidentialité du site ${agency.name}.`
})
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <p class="section-heading__eyebrow">Données personnelles</p>
        <h1 class="page-hero__title">Politique de confidentialité</h1>
        <p class="page-hero__lead">
          Cette politique de confidentialité décrit les données traitées via le formulaire de contact et la manière dont elles sont utilisées dans le cadre des échanges commerciaux.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container legal-layout">
        <article class="legal-card">
          <h2>Responsable du traitement</h2>
          <p>Le responsable du traitement est la structure éditrice du site Exemple. Les informations complètes d'identification devront être renseignées avant publication définitive.</p>
        </article>

        <article class="legal-card">
          <h2>Données collectées</h2>
          <p>Via le formulaire de contact, nous pouvons collecter les données suivantes : nom, entreprise, adresse email, numéro de téléphone, type de prestation recherchée et contenu libre de votre message.</p>
        </article>

        <article class="legal-card">
          <h2>Finalités</h2>
          <p>Ces données sont utilisées uniquement pour analyser votre demande, vous recontacter et préparer une réponse commerciale adaptée à votre besoin.</p>
        </article>

        <article class="legal-card">
          <h2>Base légale</h2>
          <p>Le traitement repose sur votre demande volontaire via le formulaire de contact ainsi que sur l'intérêt légitime de répondre à vos sollicitations professionnelles.</p>
        </article>

        <article class="legal-card">
          <h2>Durée de conservation</h2>
          <p>Les données liées à une demande de contact sont conservées pendant une durée maximale de 3 ans à compter du dernier échange sans suite commerciale, sauf obligation légale contraire ou relation contractuelle ultérieure.</p>
        </article>

        <article class="legal-card">
          <h2>Destinataires</h2>
          <p>Les données sont destinées uniquement à l'équipe chargée du traitement commercial et ne sont pas revendues à des tiers.</p>
        </article>

        <article class="legal-card">
          <h2>Vos droits</h2>
          <p>Conformément à la réglementation applicable, vous pouvez demander l'accès, la rectification, l'effacement ou la limitation du traitement de vos données, ainsi que vous opposer à leur traitement lorsque cela est justifié. Vous pouvez exercer ces droits à l'adresse contact@exemple.fr.</p>
        </article>

        <article class="legal-card">
          <h2>Réclamation</h2>
          <p>Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL.</p>
        </article>
      </div>
    </section>
  </div>
</template>
