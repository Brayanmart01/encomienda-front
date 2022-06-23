import { useEffect } from 'react'
import { Route, Switch, Redirect, useLocation } from 'wouter'
import { ToastContainer, toast } from 'react-toastify'

import { useAuthStore } from './lib/store/Auth'
import { routes } from './routes'

import { PageNotFound } from './pages/404'
import { getMe } from './lib/services/me'
import { getLocalStorage, setLocalStorage } from './lib/utils/localStorage'

export const App = () => {
  const [location, setLocation] = useLocation()
  const { auth, setAuth } = useAuthStore()

  useEffect(() => {
    (async () => {
      if (auth) return null

      const localToken = getLocalStorage('accessToken')

      if (!localToken) {
        setLocation('/signin')
        return
      }

      const { data, error } = await getMe(localToken)

      if (error) {
        handleFetchError(error.status, error.message)
        setLocation('/signin')
        return
      }

      toast('Sesion Recuperada', { type: 'success' })
      setAuth({
        id: data.id,
        firstname: data.firstname,
        lastname: data.lastname,
        cdi: data.cdi,
        phone: data.phone,
        dateBirth: data.dateBirth,
        gender: data.gender,
        country: data.country,
        state: data.state,
        municipality: data.municipality,
        email: data.email,
        email_verified_at: data.email_verified_at,
        created_at: data.created_at,
        updated_at: data.updated_at
      })
    })()
  }, [auth])

  useEffect(() => {
    if (location === '/signin' || location === '/signup' && auth) {
      console.log('redirect to home')
      return setLocation('/')
    }
  }, [auth])

  return (
    <>
      <Switch>
        {
          routes.map(({ to, component, isPrivate }) => {
            if (isPrivate && !auth) return (
              <Route
              key={to}
              path={to}
              component={() => <Redirect to='/signin' />}
              />
              )
              
              return (
                <Route
                key={to}
                path={to}
                >
                {component}
              </Route>
            )
          })
        }

        <Route component={PageNotFound} />
      </Switch>

      <ToastContainer
        position='bottom-left'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        closeOnClick
        pauseOnHover
      />
    </>
  )
}
