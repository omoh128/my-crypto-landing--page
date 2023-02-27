import React from 'react';
import './App.css';
import Header from './component/Header';
import Hero from './component/Hero';
import Main from './component/Main';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
