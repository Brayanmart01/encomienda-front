export const getLocalStorage = (key) => {
  const item = localStorage.getItem(key)

  return !item ? null : JSON.parse(item)
}

export const setLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value))

export const removeLocalStorage = (key) => localStorage.removeItem(key)
