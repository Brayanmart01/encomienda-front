import { Link } from 'wouter'
import { AuthLayout } from '../layouts/Auth'

export const Home = () => {
  return (
    <AuthLayout>
      <div className='w-full min-h-[85vh] flex flex-col justify-center items-center'>
        <h2
          style={{ lineHeight: '80px' }} 
          className='text-center font-extrabold text-transparent text-5xl md:text-8xl bg-clip-text bg-gradient-to-r from-red-400 to-pink-600 tracking-tight'
        >
          Encomienda <br />
          Tus Paquetes
        </h2>

        <ul className='flex flex-col gap-y-6 sm:flex-row justify-center items-center gap-x-10 mt-6'>
          <li>
            <Link href='/pedidos'>
              <a className='flex flex-col justify-center items-center bg-red-400 bg-opacity-10 border-red-200 rounded-md w-60 h-60 border-2 hover:border-red-300 cursor-pointer p-4'>
                <img src='../src/assets/packages.png' className='w-96' />
              </a>
            </Link>

            <Link href='/pedidos'>
              <a type='button' className='bg-black text-white font-bold w-full px-4 py-2 rounded-md hover:opacity-80 mt-2 text-center'>
                Ver Pedidos
              </a>
            </Link>
          </li>

          <li>
            <Link href='/crear-pedido'>
              <a className='flex flex-col justify-center items-center bg-pink-400 bg-opacity-10 border-pink-200 rounded-md w-60 h-60 border-2 hover:border-pink-300 cursor-pointer p-4'>
                <img src='../src/assets/package-add.png' className='w-36' />
              </a>
            </Link>

            <Link href='/crear-pedido'>
              <a type='button' className='bg-black text-white font-bold w-full px-4 py-2 rounded-md hover:opacity-80 mt-2 text-center'>
                Crear Pedido
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </AuthLayout>
  )
}
