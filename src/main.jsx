import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { StarWarsProvider } from './Context/StarWarsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
    <StarWarsProvider>
        <App />
    </StarWarsProvider>
    </BrowserRouter>
  </>
)
