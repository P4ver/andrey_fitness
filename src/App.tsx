import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ContactPopup from './components/ContactPopup';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');

  const handleGetStarted = (service?: string) => {
    setSelectedService(service || '');
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedService('');
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Hero onGetStarted={handleGetStarted} />
      <About />
      <Services onGetStarted={handleGetStarted} />
      <Testimonials />
      <Contact />
      <Footer />
      <ContactPopup 
        isOpen={isPopupOpen} 
        onClose={handleClosePopup} 
        selectedService={selectedService} 
      />
    </div>
  );
}

export default App;