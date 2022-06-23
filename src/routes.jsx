import { Home } from './pages/Home'
import { OrdersPage } from './pages/Orders'
import { SignInPage } from './pages/SignIn'
import { SignUpPage } from './pages/SignUp'
import { CreateOrderPage } from './pages/CreateOrder'

export const routes = [
  {
    to: '/',
    component: <Home />,
    isPrivate: true
  },
  {
    to: '/signin',
    component: <SignInPage />,
    isPrivate: false
  },
  {
    to: '/signup',
    component: <SignUpPage />,
    isPrivate: false
  },
  {
    to: '/pedidos',
    component: <OrdersPage />,
    isPrivate: true
  },
  {
    to: '/crear-pedido',
    component: <CreateOrderPage />,
    isPrivate: true
  },
]
