import { agency as agencyDefaults } from '~/data/site'

export function useAgency() {
  const config = useRuntimeConfig()

  const name = computed(() => config.public.agencyName || agencyDefaults.name)
  const logo = computed(() => config.public.agencyLogo || '')
  const email = computed(() => config.public.agencyEmail || agencyDefaults.email)
  const phone = computed(() => config.public.agencyPhone || agencyDefaults.phone)
  const initial = computed(() => name.value.trim().charAt(0).toUpperCase() || 'A')

  return computed(() => ({
    ...agencyDefaults,
    name: name.value,
    logo: logo.value,
    email: email.value,
    phone: phone.value,
    initial: initial.value
  }))
}
