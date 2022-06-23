// distance = kilometros
// rate = tarifa

export const calculatedRate = (distance) => {
  const price = 2 
  const rate = distance * price

  return rate
}

export const calculatedTime = (distance) => {
  const ventaja = 4 
  const minutoPorKm = 3 
  const tiempo = distance * minutoPorKm + ventaja

  return tiempo
}