import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Info from './components/info/Info.jsx'
import About from './components/about/About.jsx'
import Interests from './components//interests/Interests.jsx'
import Footer from './components/footer/Footer.jsx'

export default function App() {
  return (
    <>
        <Info />
        <About />
        <Interests />
        <Footer />
    </>
  )
}