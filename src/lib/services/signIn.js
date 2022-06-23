import { config } from '../../config'
const { API_URL } = config

export const signIn = async (email, password) => {
  const res = await fetch(`${API_URL}/api/auth/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })

  const data = await res.json()

  if (!res.ok) {
    return {
      data: null,
      error: 'Error de Credenciales'
    }
  }

  return {
    token: data.access_token,
    error: null
  }
}