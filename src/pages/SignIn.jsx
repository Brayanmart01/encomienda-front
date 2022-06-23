import { Link } from "wouter"
import { FormSignIn } from "../components/pages/signin/FormSignIn"

export const SignInPage = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center text-center px-4'>
      <img src='../src/assets/logo.png' className='w-24' />

      <h3 className='text-3xl font-black mt-4'>Iniciar Sesion</h3>

      <FormSignIn />

      <section className='flex items-center mt-4'>
        <span className='font-semibold'>¿No tienes cuenta?&nbsp;</span>
        <Link href='/signup'>
          <a className='text-red-500 hover:text-red-700'>Registrate</a>
        </Link>
      </section>
    </div>
  )
}
