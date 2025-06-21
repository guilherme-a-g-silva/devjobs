import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import App from './App.jsx'
import { SubmittedProvider } from './context/SubmittedContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <SubmittedProvider>
       <App />
    </SubmittedProvider>
  </BrowserRouter>,
)

