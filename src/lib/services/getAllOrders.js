import { config } from '../../config'
const { API_URL } = config

export const getAllOrders = async () => {
  const res = await fetch(`${API_URL}/api/orders`)

  const data = await res.json()

  if (!res.ok) {
    return {
      data: null,
      error: 'Error en la petición'
    }
  }

  return {
    data,
    error: null
  }
}