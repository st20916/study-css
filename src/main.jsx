import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles/reset.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
	<BrowserRouter basename={`${import.meta.env.VITE_PUBLIC_URL}`}>
		<App />
	</BrowserRouter>
)