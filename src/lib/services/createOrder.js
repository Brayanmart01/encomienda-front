import { config } from '../../config'
const { API_URL } = config

export const createOrder = async (dataForm) => {
  console.log('createOrder', dataForm)

  const res = await fetch(`${API_URL}/api/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...dataForm })
  })

  if (!res.ok) {
    return {
      data: null,
      error: 'Error de Registro'
    }
  }

  return {
    data: true,
    error: null
  }
}