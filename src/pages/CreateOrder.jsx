import { FormCreateOrder } from "../components/pages/crear-pedido/CreateOrder/FormCreateOrder"
import { AuthLayout } from "../layouts/Auth"

export const CreateOrderPage = () => {
  return (
    <AuthLayout>
      <div className='w-full min-h-[85vh] flex flex-col justify-center items-center'>
        <FormCreateOrder />
      </div>
    </AuthLayout>
  )
}