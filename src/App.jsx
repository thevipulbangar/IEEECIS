import { useState } from 'react';
import { EVENTS } from './data.js';
import { splitEvents } from './utils.js';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import PastEvents from './components/PastEvents.jsx';
import UpcomingEvents from './components/UpcomingEvents.jsx';
import Team from './components/Team.jsx';
import Register from './components/Register.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

const { past, upcoming } = splitEvents(EVENTS);

export default function App() {
  // Event chosen via a "Register" button; preselects it in the form.
  const [selectedEvent, setSelectedEvent] = useState('');

  return (
    <>
      <Header />
      <main id="top">
        <Hero next={upcoming[0]} onRegister={setSelectedEvent} />
        <About />
        <PastEvents events={past} />
        <UpcomingEvents events={upcoming} onRegister={setSelectedEvent} />
        <Team />
        <Register events={upcoming} selected={selectedEvent} onSelect={setSelectedEvent} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
