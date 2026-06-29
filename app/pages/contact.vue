<script setup lang="ts">
const agency = useAgency()

useSeoMeta({
  title: 'Contact',
  description: `Contactez ${agency.value.name} pour demander un devis en création de site web ou référencement web.`
})

const form = reactive({
  name: '',
  company: '',
  email: '',
  phone: '',
  service: 'Création de site web',
  message: ''
})

const sending = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

async function handleSubmit() {
  successMessage.value = ''
  errorMessage.value = ''
  sending.value = true

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: form
    })

    successMessage.value =
      'Merci, votre demande a bien été envoyée. Nous revenons vers vous sous 48 heures ouvrées.'

    form.name = ''
    form.company = ''
    form.email = ''
    form.phone = ''
    form.service = 'Création de site web'
    form.message = ''
  } catch {
    errorMessage.value =
      "Une erreur est survenue lors de l'envoi. Vous pouvez réessayer ou nous écrire directement par email."
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <p class="section-heading__eyebrow">Contact</p>
        <h1 class="page-hero__title">Parlons de votre projet web.</h1>
        <p class="page-hero__lead">
          Donnez-nous un peu de contexte et nous vous répondrons avec une proposition claire, adaptée à votre besoin et à votre niveau de maturité.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container contact-grid">
        <div class="contact-panel">
          <SectionHeading
            eyebrow="Demande de devis"
            title="Un premier échange simple et utile"
            description="Indiquez le type de prestation, votre contexte et ce que vous cherchez à obtenir. Nous revenons vers vous rapidement."
          />

          <ul class="contact-details">
            <li>
              <strong>Téléphone</strong>
              <a :href="`tel:${agency.phone}`">{{ agency.phone }}</a>
            </li>
            <li>
              <strong>Email</strong>
              <a :href="`mailto:${agency.email}`">{{ agency.email }}</a>
            </li>
            <li>
              <strong>Disponibilités</strong>
              <span>{{ agency.hours }}</span>
            </li>
          </ul>
        </div>

        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-grid">
            <label class="form-field">
              <span>Nom</span>
              <input v-model="form.name" type="text" name="name" autocomplete="name" required>
            </label>

            <label class="form-field">
              <span>Entreprise</span>
              <input v-model="form.company" type="text" name="company" autocomplete="organization">
            </label>

            <label class="form-field">
              <span>Email</span>
              <input v-model="form.email" type="email" name="email" autocomplete="email" required>
            </label>

            <label class="form-field">
              <span>Téléphone</span>
              <input v-model="form.phone" type="tel" name="phone" autocomplete="tel">
            </label>

            <label class="form-field form-field--full">
              <span>Prestation</span>
              <select v-model="form.service" name="service">
                <option>Création de site web</option>
                <option>Référencement web</option>
                <option>Les deux</option>
              </select>
            </label>

            <label class="form-field form-field--full">
              <span>Votre besoin</span>
              <textarea
                v-model="form.message"
                name="message"
                rows="7"
                placeholder="Expliquez votre activité, votre contexte et ce que vous attendez du projet."
                required
              />
            </label>
          </div>

          <p class="form-note">
            En envoyant ce formulaire, vous acceptez que vos données soient utilisées pour traiter votre demande de contact.
          </p>

          <div class="form-actions">
            <button class="button button--primary" type="submit" :disabled="sending">
              {{ sending ? 'Envoi en cours...' : 'Envoyer la demande' }}
            </button>
            <p v-if="successMessage" class="form-message form-message--success">{{ successMessage }}</p>
            <p v-else-if="errorMessage" class="form-message form-message--error">{{ errorMessage }}</p>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>
