
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useLocation } from 'wouter'
import { getMe } from '../../../lib/services/me'

import { signIn } from '../../../lib/services/signIn'
import { useAuthStore } from '../../../lib/store/Auth'
import { setLocalStorage } from '../../../lib/utils/localStorage'
import { rules } from './formRules'

export const FormSignIn = () => {
  const { setAuth } = useAuthStore()
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const [, setLocation] = useLocation()

  const onSubmit = async ({ email, password }) => {
    const { token, error } = await signIn(email, password)

    if (error) {
      console.error(error)
      return toast('Error de Credenciales', { type: 'warning' })
    }

    const user = await getMe(token)

    setLocalStorage('accessToken', token)
    setAuth({
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      cdi: user.cdi,
      phone: user.phone,
      dateBirth: user.dateBirth,
      gender: user.gender,
      country: user.country,
      state: user.state,
      municipality: user.municipality,
      email: user.email,
      email_verified_at: user.email_verified_at,
      created_at: user.created_at,
      updated_at: user.updated_at,
      accessToken: token
    })
    reset()
    toast('¡Sesion Iniciada!', { type: 'success' })
    setLocation('/')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-lg mt-2 text-left'>

      {errors.name && <p className='text-red-500 text-sm'>{errors.name.message}</p>}
        <input
        {...register('email', rules.email)}
        id='email'
        name='email'
        type='email'
        placeholder='Ingrese su Correo Electronico'	
        className='w-full px-3 py-1 my-2 text-base text-gray-700 bg-gray-100 border border-gray-300 rounded outline-none appearance-none bg-opacity-50 focus:border-brown-primary-500 focus:bg-white focus:ring-2 focus:ring-brown-primary-300 leading-8 transition-colors duration-200 ease-in-out'
      />

      {errors.password && <p className='text-red-500 text-sm'>{errors.password.message}</p>}
      <input
        {...register('password', rules.password)}
        id='password'
        name='password'
        type='password'
        placeholder='Ingrese Contraseña'
        className='w-full pl-3 pr-14 py-1 my-2 text-base text-gray-700 bg-gray-100 border border-gray-300 rounded outline-none appearance-none bg-opacity-50 focus:border-brown-primary-500 focus:bg-white focus:ring-2 focus:ring-brown-primary-300 leading-8 transition-colors duration-200 ease-in-out'
      />

      <button type='submit' className='bg-black text-white font-bold w-full px-4 py-2 rounded-md hover:opacity-80 mt-2'>
        Ingresar
      </button>
    </form>
  )
}