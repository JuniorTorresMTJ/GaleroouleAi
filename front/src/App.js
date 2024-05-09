import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About'; 
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import Tecnologies from './components/Tecnologies';
import Favicon from 'react-favicon';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Favicon url="./favicon.ico"/>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Tecnologies />
      <Team />
      <Contact />
      <div className='h-max'></div>
    </div>
  );
};

export default App;
