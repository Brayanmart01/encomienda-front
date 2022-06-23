import { useState } from "react"
import { useLocation } from "wouter"
import { Link } from "wouter"
import { ProfileIcon } from "../components/common/icon"
import { useAuthStore } from "../lib/store/Auth"

export const AuthLayout = ({ children }) => {
  const [showAuthOptions, setShowAuthOptions] = useState(false)
  const { auth, removeAuth } = useAuthStore()
  const [location, setLocation] = useLocation()

  const logout = () => {
    removeAuth()
    setLocation('/signin')
  }

  return (
    <div className='relative'>
      <header className='w-full bg-red-600'>
        <div className='w-full max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 py-4 sm:py-2'>
          <section
            className='flex justify-start items-center gap-x-2 cursor-pointer relative'
            onClick={() => setShowAuthOptions(prevState => !prevState)}
          >
            <div className='p-2 bg-white bg-opacity-20 rounded-full'>
              <ProfileIcon />
            </div>

            <span className='text-white'>{auth.firstname}</span>

            {
              showAuthOptions && (
                <button
                  onClick={logout}
                  className='absolute -bottom-8 left-2 bg-white rounded-sm border border-gray-200 py-2 px-2 text-sm w-28 hover:bg-gray-100'
                >
                  Cerrar Session
                </button>
              )
            }
          </section>

          <ul className='flex justify-end items-center gap-x-5 text-white mt-4 sm:mt-0'>
            <li>
              <Link to='/'>
                <a className={`${location === '/' && 'underline decoration-white decoration-2 underline-offset-2'}`}>Inicio</a>
              </Link>
            </li>

            <li>
              <Link to='/pedidos'>
                <a className={`${location === '/pedidos' && 'underline decoration-white decoration-2 underline-offset-2'}`}>Pedidos</a>
              </Link>
            </li>

            <li>
              <Link to='/crear-pedido'>
                <a className={`${location === '/crear-pedido' && 'underline decoration-white decoration-2 underline-offset-2'}`}>Crear Pedido</a>
              </Link>
            </li>
          </ul>
        </div>
      </header>

      <main className='p-4 max-w-5xl mx-auto mt-5'>
        {children}
      </main>
    </div>
  )
}