import React from 'react'
import Navbar from './components/Navbar';
import { GlobalStyle } from './components/img/GlobalStyle';
import Ikkinchi from './Ikkinchi/Ikkinchi';
import Uchinchi from './Uchinchi/Uchinchi';
import Turtinchi from './Turtinchi/Turtinchi';
import Beshinchi from './Beshinchi/Beshinchi';
import Oltinchi from './Oltinchi/Oltinchi';
import Yetinchi from './Yetinchi/Yetinchi';
import Sakizinchi from './Sakizinchi/Sakizinchi';
import Tuqizinchi from './Tuqizinchi/Tuqizinchi';
import Uninchi from './Uninchi/Uninchi';
import Footer from './Footer/Footer';

 function App() {
  return (
    <div>
      <GlobalStyle/>
      <Navbar/>
      <Ikkinchi/>
      <Uchinchi/>
      <Turtinchi/>
      <Beshinchi/>
      <Oltinchi/>
      <Yetinchi/>
      <Sakizinchi/>
      <Tuqizinchi/>
      <Uninchi/>
      <Footer/>
    </div>
  )
}
export default App;