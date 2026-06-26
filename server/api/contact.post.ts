export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (!body?.name || !body?.email || !body?.message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields'
    })
  }

  return {
    ok: true
  }
})
