import { createRoot } from 'react-dom/client'

import { App } from './App'
import './styles/index.css'
import 'react-toastify/dist/ReactToastify.min.css'

const container = document.getElementById('root')
const root = createRoot(container)

root.render( <App tab='home' /> )
