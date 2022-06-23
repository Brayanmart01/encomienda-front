import { config } from '../../config'
const { API_URL } = config

export const getMe = async (accessToken) => {
  const res = await fetch(`${API_URL}/api/auth/me`, {
    headers: { 'Authorization': `Bearer ${accessToken}` }
  })

  const data = await res.json()

  if (!res.ok) {
    return {
      data: null,
      error: 'Error de Token'
    }
  }

  return {
    data,
    error: null
  }
}