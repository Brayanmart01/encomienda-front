import { useEffect, useState } from 'react'
import { Spinner } from '../components/common/Spinner'
import { TableOrders } from '../components/pages/pedidos/TableOrders'
import { AuthLayout } from '../layouts/Auth'
import { getAllOrders } from '../lib/services/getAllOrders'

export const OrdersPage = () => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      const { data, error } = await getAllOrders()

      if (error) {
        console.error(error)
        setLoading(false)
        return toast('Error de Credenciales', { type: 'warning' })
      }
      
      setOrders(data)
      setLoading(false)
    })()
  }, [])

  return (
    <AuthLayout>
      <div className='flex flex-col justify-center items-center'>
        <img src='../src/assets/packages.png' className='w-32' />
        <h3 className='text-3xl font-black'>Pedidos</h3>
      </div>

    {
      loading
        ? (
          <div className='w-full flex justify-center items-center mt-10'>
            <Spinner />
          </div>
        )
        : (<TableOrders orders={orders} />)
    }
    </AuthLayout>
  )
}
