
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useLocation } from 'wouter'

import { handleOnlyNumbers } from '../../../lib/utils/handleOnlyNumbers'
import { useAuthStore } from '../../../lib/store/Auth'
import { signUp } from '../../../lib/services/signUp'
import { rules } from './formRules'

export const FormSignUp = () => {
  const { setAuth } = useAuthStore()
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const [, setLocation] = useLocation()

  const onSubmit = async (dataForm) => {
    const { data, error } = await signUp(dataForm)

    if (error) {
      console.error(error)
      return toast('Error de Registro', { type: 'warning' })
    }

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
    
    toast('¡Registro Exitoso!', { type: 'success' })
    reset()
    setLocation('/')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-lg mx-auto mt-6 text-left'>
      <div className='flex flex-col sm:flex-row justify-center items-end gap-x-4'>
        <div className='w-full'>
          <label htmlFor='firstname' className='font-semibold'>Nombre</label>
          {errors.firstname && <p className='text-red-500 text-sm'>{errors.firstname.message}</p>}
          <input
            {...register('firstname', rules.firstname)}
            id='firstname'
            name='firstname'
            type='text'
            placeholder='Ingrese su Nombre'
            className='w-full px-3 py-1 my-2 text-base text-gray-700 bg-gray-100 border border-gray-300 rounded outline-none appearance-none bg-opacity-50 focus:border-brown-primary-500 focus:bg-white focus:ring-2 focus:ring-brown-primary-300 leading-8 transition-colors duration-200 ease-in-out'
            />
        </div>

        <div className='w-full'>
          <label htmlFor='lastname' className='font-semibold'>Apellido</label>
          {errors.lastname && <p className='text-red-500 text-sm'>{errors.lastname.message}</p>}
          <input
            {...register('lastname', rules.lastname)}
            id='lastname'
            name='lastname'
            type='text'
            placeholder='Ingrese su Apellido'
            className='w-full px-3 py-1 my-2 text-base text-gray-700 bg-gray-100 border border-gray-300 rounded outline-none appearance-none bg-opacity-50 focus:border-brown-primary-500 focus:bg-white focus:ring-2 focus:ring-brown-primary-300 leading-8 transition-colors duration-200 ease-in-out'
          />
        </div>
      </div>

      <div className='flex flex-col sm:flex-row justify-center items-end gap-x-4'>
        <div className='w-full'>
          <label htmlFor='cdi' className='font-semibold'>Cédula</label>
          {errors.cdi && <p className='text-red-500 text-sm'>{errors.cdi.message}</p>}
          <input
            {...register('cdi', rules.cdi)}
            id='cdi'
            name='cdi'
            type='text'
            placeholder='Ingrese su Cédula'
            className='w-full px-3 py-1 my-2 text-base text-gray-700 bg-gray-100 border border-gray-300 rounded outline-none appearance-none bg-opacity-50 focus:border-brown-primary-500 focus:bg-white focus:ring-2 focus:ring-brown-primary-300 leading-8 transition-colors duration-200 ease-in-out'
            />
        </div>

        <div className='w-full'>
          <label htmlFor='email' className='font-semibold'>Correo Electronico</label>
          {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}
          <input
            {...register('email', rules.email)}
            id='email'
            name='email'
            type='email'
            placeholder='Ingrese su Correo Electronico'	
            className='w-full px-3 py-1 my-2 text-base text-gray-700 bg-gray-100 border border-gray-300 rounded outline-none appearance-none bg-opacity-50 focus:border-brown-primary-500 focus:bg-white focus:ring-2 focus:ring-brown-primary-300 leading-8 transition-colors duration-200 ease-in-out'
          />
        </div>
      </div>

      <div className='w-full flex-col sm:flex-row flex justify-center items-end gap-x-4'>
        <div className='w-full'> 
          <label htmlFor='phone' className='font-semibold'>Teléfono</label>
          {errors.phone && <p className='text-red-500 text-sm'>{errors.phone.message}</p>}
          <input
            {...register('phone', rules.phone)}
            id='phone'
            name='phone'
            type='tel'
            placeholder='Teléfono (04120000000)'
            onKeyPress={handleOnlyNumbers}
            autoComplete='off'
            className='w-full px-3 py-1 my-2 text-base text-gray-700 bg-gray-100 border border-gray-300 rounded outline-none appearance-none bg-opacity-50 focus:border-brown-primary-500 focus:bg-white focus:ring-2 focus:ring-brown-primary-300 leading-8 transition-colors duration-200 ease-in-out'
          />
        </div>

        <div className='w-full'>
          <label htmlFor='dateBirth' className='font-semibold'>Fecha de Cumpleaños</label>
          {errors.dateBirth && <p className='text-red-500 text-sm'>{errors.dateBirth.message}</p>}
          <input
            {...register('dateBirth', rules.dateBirth)}
            id='dateBirth'
            name='dateBirth'
            type='date'
            placeholder='Fecha de Nacimiento'
            className='w-full px-3 py-1 my-2 text-base text-gray-700 bg-gray-100 border border-gray-300 rounded outline-none appearance-none bg-opacity-50 focus:border-brown-primary-500 focus:bg-white focus:ring-2 focus:ring-brown-primary-300 leading-8 transition-colors duration-200 ease-in-out'
          />
        </div>
      </div>

      <div className='flex flex-col sm:flex-row justify-center items-end gap-x-4'>
        <div className='relative w-full'>
          <label htmlFor='password' className='font-semibold'>Contraseña</label>
          {errors.password && <p className='text-red-500 text-sm'>{errors.password.message}</p>}

          <input
            {...register('password', rules.password)}
            id='password'
            name='password'
            type='password'
            autoComplete='current-password'
            placeholder='Ingrese su Contraseña'
            className='w-full px-3 py-1 my-2 text-base text-gray-700 bg-gray-100 border border-gray-300 rounded outline-none appearance-none bg-opacity-50 focus:border-brown-primary-500 focus:bg-white focus:ring-2 focus:ring-brown-primary-300 leading-8 transition-colors duration-200 ease-in-out'
          />
        </div>

        <div className='relative w-full'>
          <label htmlFor='confirmPassword' className='font-semibold'>Confirmar Contraseña</label>
          {errors.confirmPassword && <p className='text-red-500 text-sm'>{errors.confirmPassword.message}</p>}

          <input
            {...register('confirmPassword', rules.confirmPassword)}
            id='confirmPassword'
            name='confirmPassword'
            type='password'
            autoComplete='current-password'
            placeholder='Ingrese su Contraseña'
            className='w-full px-3 py-1 my-2 text-base text-gray-700 bg-gray-100 border border-gray-300 rounded outline-none appearance-none bg-opacity-50 focus:border-brown-primary-500 focus:bg-white focus:ring-2 focus:ring-brown-primary-300 leading-8 transition-colors duration-200 ease-in-out'
          />
        </div>
      </div>


      <div className='w-full'>
        <label htmlFor='gender' className='font-semibold'>Sexo</label>
        {errors.gender && <p className='text-red-500 text-sm'>{errors.gender.message}</p>}

        <select
          {...register('gender', rules.gender)}
          id='gender'
          name='gender'
          className='w-full pl-4 pr-9 truncate py-1 my-2 text-base text-gray-700 bg-gray-100 border border-gray-300 rounded outline-none appearance-none bg-opacity-50 focus:border-brown-primary-500 focus:bg-white focus:ring-2 focus:ring-brown-primary-300 leading-8 transition-colors duration-200 ease-in-out'
        >
          <option value='' label='Seleccione el sexo' disabled>Seleccione el sexo</option>
          <option value='male'>Masculino</option>
          <option value='feminine'>Femenino</option>
        </select>
      </div>

      <div className='flex flex-col sm:flex-row justify-center items-end gap-x-4'>
        <div className='w-full'>
          <label htmlFor='country' className='font-semibold'>Pais</label>
          {errors.country && <p className='text-red-500 text-sm'>{errors.country.message}</p>}

          <select
            {...register('country', rules.country)}
            id='country'
            name='country'
            className='w-full pl-4 pr-9 truncate py-1 my-2 text-base text-gray-700 bg-gray-100 border border-gray-300 rounded outline-none appearance-none bg-opacity-50 focus:border-brown-primary-500 focus:bg-white focus:ring-2 focus:ring-brown-primary-300 leading-8 transition-colors duration-200 ease-in-out'
            >
            <option value='' label='Seleccione el pais' disabled>Seleccione el pais</option>
            <option value='Venezuela'>Venezuela</option>
            <option value='Colombia'>Colombia</option>
          </select>
        </div>

        <div className='w-full'>
          <label htmlFor='state' className='font-semibold'>Estado</label>
          {errors.state && <p className='text-red-500 text-sm'>{errors.state.message}</p>}

          <select
            {...register('state', rules.state)}
            id='state'
            name='state'
            className='w-full pl-4 pr-9 truncate py-1 my-2 text-base text-gray-700 bg-gray-100 border border-gray-300 rounded outline-none appearance-none bg-opacity-50 focus:border-brown-primary-500 focus:bg-white focus:ring-2 focus:ring-brown-primary-300 leading-8 transition-colors duration-200 ease-in-out'
          >
            <option value='' label='Seleccione el estado' disabled>Seleccione el estado</option>
            <option value='Caracas'>Caracas</option>
            <option value='Miranda'>Miranda</option>
            <option value='Barranquilla'>Barranquilla</option>
            <option value='Bogota'>Bogota</option>
          </select>
        </div>

        <div className='w-full'>
          <label htmlFor='municipality' className='font-semibold'>Municipio</label>
          <select
            {...register('municipality', rules.municipality)}
            id='municipality'
            name='municipality'
            className='w-full pl-4 pr-9 truncate py-1 my-2 text-base text-gray-700 bg-gray-100 border border-gray-300 rounded outline-none appearance-none bg-opacity-50 focus:border-brown-primary-500 focus:bg-white focus:ring-2 focus:ring-brown-primary-300 leading-8 transition-colors duration-200 ease-in-out'
          >
            <option value='' label='Seleccione el municipio' disabled>Seleccione el municipio</option>
            <option value='Sucre'>Sucre</option>
            <option value='Libertador'>Libertador</option>
            <option value='Antioquia'>Antioquia</option>
            <option value='Cali'>Cali</option>
          </select>
        </div>
      </div>

      <button type='submit' className='bg-black text-white font-bold w-full px-4 py-2 rounded-md hover:opacity-80 mt-2'>
        Registrar Cuenta
      </button>
    </form>
  )
}