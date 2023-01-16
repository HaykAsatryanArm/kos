import React from 'react';
import { Header, Home, Why, Start, Trial, Conducted, FAQ, Reviews, Investment, Bid, Footer } from './Components';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Why />
        <Start />
        <Trial />
        <Conducted />
        <FAQ />
        <Reviews />
        <Investment />
        <Bid />
      </main>
      <Footer />
    </>
  )
}

export default App;
