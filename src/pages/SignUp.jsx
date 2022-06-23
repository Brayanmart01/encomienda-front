import { Link } from 'wouter'

import { FormSignUp } from '../components/pages/signup/FormSignUp'

export const SignUpPage = () => {
  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center px-4 py-10'>
      <img src='../src/assets/logo.png' className='w-24' />

      <h3 className='text-3xl font-black mt-4'>Crear Cuenta</h3>

      <FormSignUp />

      <section className='flex items-center mt-4'>
        <span className='font-semibold'>¿Ya tienes una cuenta?&nbsp;</span>
        <Link href='/signin'>
          <a className='text-red-500 hover:text-red-700'>Inicia Sesion</a>
        </Link>
      </section>
    </div>
  )
}
