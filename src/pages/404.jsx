import { Link } from "wouter"

export const PageNotFound = () => {
  return  (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <img src='https://static.platzi.com/static/images/error/img404.png' className='w-96' />
      <br/>
      <h2 className='font-black text-3xl'>Pagina No Encontrada</h2>

      <Link to='/'>
        <a className='text-red-500 underline underline-offset-2 decoration-red-500 decoration-2'>Regresar al inico</a>
      </Link>
    </div>
  )
}