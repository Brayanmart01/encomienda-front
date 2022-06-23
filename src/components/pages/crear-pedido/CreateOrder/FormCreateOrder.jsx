import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { FormSaveOrder } from './FormSaveOrder'
import { handleOnlyNumbers } from '../../../../lib/utils/handleOnlyNumbers'
import { rulesCreateOrder } from './rulesCreateOrder'

export const FormCreateOrder = () => {
  const [orderPreview, setOrderPrewiew] = useState(null)
  const {
    register: registerPreview,
    handleSubmit: handleSubmitPreview,
    formState: { errors },
    reset: resetPreview
  } = useForm()

  const onSubmitPreview = async (dataForm) => {
    resetPreview()
    setOrderPrewiew({ ...dataForm })
  }

  if (orderPreview) return <FormSaveOrder orderPreview={orderPreview} setOrderPrewiew={setOrderPrewiew} />

  return (
    <form onSubmit={handleSubmitPreview(onSubmitPreview)} className='w-full max-w-lg mx-auto text-left'>
      <section className='flex flex-col justify-center items-center text-center'>
        <img src='../src/assets/package.png' className='w-24' />
        <h4 className='text-3xl font-black'>Crear Pedido</h4>
      </section>
      <br />

      <label htmlFor='package'>Paquete a enviar</label>
      {errors.package && <p className='text-red-500 text-sm'>{errors.package.message}</p>}
      <input
        {...registerPreview('package', rulesCreateOrder.package)}
        id='package'
        name='package'
        type='text'
        placeholder='Ingrese Paquete'
        className='w-full pl-3 pr-14 py-1 my-2 text-base text-gray-700 bg-gray-100 border border-gray-300 rounded outline-none appearance-none bg-opacity-50 focus:border-brown-primary-500 focus:bg-white focus:ring-2 focus:ring-brown-primary-300 leading-8 transition-colors duration-200 ease-in-out'
      />

      <label htmlFor='distance'>Distancia del Destino (km)</label>
      {errors.distance && <p className='text-red-500 text-sm'>{errors.distance.message}</p>}
      <input
        {...registerPreview('distance', rulesCreateOrder.distance)}
        id='distance'
        name='distance'
        type='text'
        placeholder='Ingrese Kilometros'
        onKeyPress={handleOnlyNumbers}
        className='w-full pl-3 pr-14 py-1 my-2 text-base text-gray-700 bg-gray-100 border border-gray-300 rounded outline-none appearance-none bg-opacity-50 focus:border-brown-primary-500 focus:bg-white focus:ring-2 focus:ring-brown-primary-300 leading-8 transition-colors duration-200 ease-in-out'
      />

      <label htmlFor='direction'>Dirección del Destino</label>
      {errors.direction && <p className='text-red-500 text-sm'>{errors.direction.message}</p>}
      <input
        {...registerPreview('direction', rulesCreateOrder.direction)}
        id='direction'
        name='direction'
        type='text'
        placeholder='Ingrese Dirección'
        className='w-full pl-3 pr-14 py-1 my-2 text-base text-gray-700 bg-gray-100 border border-gray-300 rounded outline-none appearance-none bg-opacity-50 focus:border-brown-primary-500 focus:bg-white focus:ring-2 focus:ring-brown-primary-300 leading-8 transition-colors duration-200 ease-in-out'
      />

      <button type='submit' className='bg-black text-white font-bold w-full px-4 py-2 rounded-md hover:opacity-80 mt-2'>
        Crear
      </button>
    </form>
  )
}