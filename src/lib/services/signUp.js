import { config } from '../../config'
const { API_URL } = config

export const signUp = async (dataForm) => {
  const res = await fetch(`${API_URL}/api/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...dataForm })
  })

  const data = await res.json()

  if (!res.ok) {
    return {
      data: null,
      error: 'Error de Registro'
    }
  }

  return {
    data: data.user,
    error: null
  }
}