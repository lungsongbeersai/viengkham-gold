import { useState } from 'react';
import AppContainer from './Router';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import MobileMenu from './Layout/MobileMenu';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <>
     <main>
    <Header/>
    <AppContainer/>
    <MobileMenu/>
    <Footer/>
    <ToastContainer/>
    </main>
    </>
  )
}

export default App
