export const agency = {
  name: 'Exemple',
  tagline: 'Des sites clairs. Du SEO utile. Des demandes qui tombent.',
  description:
    "Agence web française spécialisée dans la création de sites internet professionnels et le référencement naturel pour les entreprises qui veulent gagner en visibilité et transformer leurs visites en demandes concrètes.",
  phone: '+33 (0)1 89 71 24 60',
  email: 'contact@exemple.fr',
  address: '12 rue des Entrepreneurs, 75010 Paris',
  hours: 'Du lundi au vendredi, de 9h00 à 18h30'
}

export const navigation = [
  { label: 'Accueil', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Contact', to: '/contact' }
]

export const services = [
  {
    title: 'Création de site web',
    slug: 'creation-site-web',
    intro:
      'Un site vitrine ou un site de présentation conçu pour inspirer confiance, expliquer clairement votre offre et déclencher des prises de contact.',
    bullets: [
      'Architecture de pages orientée conversion',
      'Design responsive et professionnel',
      'Rédaction web claire et rassurante',
      'Performances, accessibilité et bases SEO intégrées'
    ]
  },
  {
    title: 'Référencement web',
    slug: 'referencement-web',
    intro:
      'Une stratégie SEO pragmatique pour mieux vous positionner sur Google, capter des recherches utiles et faire grandir votre trafic qualifié.',
    bullets: [
      'Audit SEO technique et éditorial',
      'Optimisation des pages et des balises',
      'Structuration des contenus et maillage interne',
      'Suivi des priorités de visibilité locale ou nationale'
    ]
  }
]

export const processSteps = [
  {
    title: 'Cadrage',
    description:
      'Nous clarifions vos objectifs, vos cibles et vos messages pour poser des bases nettes dès le départ.'
  },
  {
    title: 'Production',
    description:
      'Nous concevons un site ou un plan SEO concret, lisible et aligné sur votre activité réelle.'
  },
  {
    title: 'Optimisation',
    description:
      'Nous ajustons les contenus, les parcours et les détails techniques pour maximiser la prise de contact.'
  },
  {
    title: 'Mise en ligne',
    description:
      'Vous repartez avec une base solide, rapide à reprendre et prête à soutenir votre développement.'
  }
]

export const faqItems = [
  {
    question: 'Travaillez-vous avec tous les secteurs ?',
    answer:
      "Oui. Nous intervenons surtout sur des activités de services, du commerce, des professions libérales et des PME, avec une approche adaptée à chaque marché."
  },
  {
    question: 'Peut-on vous confier uniquement le SEO ?',
    answer:
      "Oui. Nous pouvons intervenir sur un site existant pour auditer, corriger, structurer et faire progresser sa visibilité sans refaire tout l'écosystème."
  },
  {
    question: 'Proposez-vous aussi la rédaction des textes ?',
    answer:
      'Oui. Nous pouvons préparer la structure, les messages clés et les textes de pages pour garder un discours commercial cohérent.'
  },
  {
    question: 'Quel est le délai pour recevoir une réponse ?',
    answer:
      'Nous nous engageons à revenir vers vous sous 48 heures ouvrées après réception du formulaire.'
  }
]
