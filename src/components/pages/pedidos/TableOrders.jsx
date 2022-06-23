export const TableOrders = ({ orders }) => {
  if (orders.length === 0) return <div className='text-center text-xl font-black'>No hay pedidos</div>

  return (
    <table className='rounded-t-lg mt-6 w-full bg-gray-200 text-gray-800'>
      <thead>
        <tr className='text-left'>
          <th className='p-2'>Email de Usuario</th>
          <th className='p-2'>Paquete</th>
          <th className='p-2'>Direccion</th>
          <th className='p-2'>Tiempo (Estimado en Minutos)</th>
          <th className='p-2'>Tarifa (Estimada en Dolares)</th>
        </tr>
      </thead>
      
      <tbody>
        {
          orders.map(order => (
            <tr key={order.id} className='bg-gray-100 border-b border-gray-200'>
              <td className='px-4 py-3'>{order.userEmail}</td>
              <td className='px-4 py-3'>{order.package}</td>
              <td className='px-4 py-3'>{order.direction}</td>
              <td className='px-4 py-3'>{order.timeDistance} (min)</td>
              <td className='px-4 py-3'>
                <span className='text-green-600 font-semibold'>$</span> {order.rateDistance}
              </td>
            </tr> 
          ))
        }
      </tbody>
    </table>
  )
}