import createAtom from 'zustand'
import { removeLocalStorage } from '../utils/localStorage'

export const useAuthStore = createAtom(set => ({
  auth: null,

  setAuth: ({
    id,
    firstname,
    lastname,
    cdi,
    phone,
    dateBirth,
    gender,
    country,
    state,
    municipality,
    email,
    email_verified_at,
    created_at,
    updated_at
  }) => {
    set({
      auth: {
        id,
        firstname,
        lastname,
        cdi,
        phone,
        dateBirth,
        gender,
        country,
        state,
        municipality,
        email,
        email_verified_at,
        created_at,
        updated_at
      }
    })
  },

  removeAuth: () => {
    removeLocalStorage('accessToken')
    set({ auth: null })
  }
}))
