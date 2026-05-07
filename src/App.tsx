import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Hours from './components/Hours';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-medical-bg">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Process />
        <Hours />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
