import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useLocation } from 'wouter'

import { calculatedRate, calculatedTime } from '../../../../lib/utils/calculate'
import { createOrder } from '../../../../lib/services/createOrder'
import { useAuthStore } from '../../../../lib/store/Auth'

export const FormSaveOrder = ({ orderPreview, setOrderPrewiew }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const { auth } = useAuthStore()
  const [, setLocation] = useLocation()

  const onSubmit = async () => {
    const dataToSend = {
      userEmail: auth.email,
      package: orderPreview.package,
      direction: orderPreview.direction,
      rateDistance: calculatedRate(orderPreview.distance),
      timeDistance: calculatedTime(orderPreview.distance)
    }

    const { data, error } = await createOrder(dataToSend)

    console.log('FormSaveOrder', data)
    console.log('FormSaveOrder', error)

    if (!data) {
      console.error(error)
      return toast('Error al registrar el pedido', { type: 'error' })
    }
    
    toast('¡Pedido Registrado!', { type: 'success' })
    reset()
    console.log(dataToSend)
    setLocation('/pedidos')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-lg mt-2 text-left'>
      <section className='text-center'>
        <h4 className='text-3xl font-black'>Guardar Pedido</h4>
      </section>
      <br />

      <label htmlFor='package' className='font-semibold'>Paquete</label>
      <input
        {...register('package')}
        id='package'
        name='package'
        disabled
        type='text'
        className='w-full pl-3 pr-14 py-1 my-2 text-base text-gray-700 bg-gray-100 border border-gray-300 rounded outline-none appearance-none bg-opacity-50 focus:border-brown-primary-500 focus:bg-white focus:ring-2 focus:ring-brown-primary-300 leading-8 transition-colors duration-200 ease-in-out'
        value={orderPreview.package}
      />

      <label htmlFor='direction' className='font-semibold'>Dirección del Paquete</label>
      <input
        {...register('direction')}
        id='direction'
        name='direction'
        disabled
        type='text'
        placeholder='Ingrese Dirección'
        value={orderPreview.direction}
        className='w-full pl-3 pr-14 py-1 my-2 text-base text-gray-700 bg-gray-100 border border-gray-300 rounded outline-none appearance-none bg-opacity-50 focus:border-brown-primary-500 focus:bg-white focus:ring-2 focus:ring-brown-primary-300 leading-8 transition-colors duration-200 ease-in-out'
      />

      <label htmlFor='distance' className='font-semibold'>Recorrido</label>
      <input
        {...register('distance')}
        id='distance'
        name='distance'
        type='text'
        placeholder='Ingrese Distancia'
        disabled
        value={`(km) ${orderPreview.distance}`}
        className='w-full pl-3 pr-14 py-1 my-2 text-base text-gray-700 bg-gray-100 border border-gray-300 rounded outline-none appearance-none bg-opacity-50 focus:border-brown-primary-500 focus:bg-white focus:ring-2 focus:ring-brown-primary-300 leading-8 transition-colors duration-200 ease-in-out'
      /> 

      <label htmlFor='rateCalculated' className='font-semibold'>
        Tarifa del paquete por distancia <br />
        <span className='text-sm font-normal text-red-500'>
          Tarifa de envio a 2$
        </span>
      </label>
      <input
        {...register('rateCalculated')}
        id='rateCalculated'
        name='rateCalculated'
        type='text'
        disabled
        value={`$ ${calculatedRate(orderPreview.distance)}`}
        className='w-full pl-3 pr-14 py-1 my-2 text-base text-gray-700 bg-gray-100 border border-gray-300 rounded outline-none appearance-none bg-opacity-50 focus:border-brown-primary-500 focus:bg-white focus:ring-2 focus:ring-brown-primary-300 leading-8 transition-colors duration-200 ease-in-out'
      />

      <label htmlFor='timeCalculated' className='font-semibold'>
        Estimacion del tiempo de llegada <br />
        <span className='text-sm font-normal text-red-500'>
          Se calcula 3 min por km
        </span>
      </label>
      <input
        {...register('timeCalculated')}
        id='timeCalculated'
        name='timeCalculated'
        type='text'
        disabled
        value={`(min) ${calculatedTime(orderPreview.distance)}`}
        className='w-full pl-3 pr-14 py-1 my-2 text-base text-gray-700 bg-gray-100 border border-gray-300 rounded outline-none appearance-none bg-opacity-50 focus:border-brown-primary-500 focus:bg-white focus:ring-2 focus:ring-brown-primary-300 leading-8 transition-colors duration-200 ease-in-out'
      />

      <section className='flex justify-center items-start gap-x-4'>
        <button
          type='button'
          onClick={() => setOrderPrewiew(null)}
          className='bg-black text-white font-bold w-full px-4 py-2 rounded-md hover:opacity-80 mt-2'
        >
          Cancelar
        </button>

        <button type='submit' className='bg-black text-white font-bold w-full px-4 py-2 rounded-md hover:opacity-80 mt-2'>
          Guardar Pedido
        </button>
      </section>
    </form>
  )
}