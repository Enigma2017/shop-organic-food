import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './shared/header'
import { Footer } from './shared/footer'
import { Newsletter } from './shared/newsletter'

import { Landing } from './pages/landing/landing-main'
import './styles/main.scss'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Landing />
    <Newsletter />
    <Footer />
  </React.StrictMode>,
)
