import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Collections } from './pages/Collections';
import { Bespoke } from './pages/Bespoke';
import { Upcycling } from './pages/Upcycling';
import { Contact } from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chi-siamo" element={<About />} />
          <Route path="/collezioni" element={<Collections />} />
          <Route path="/su-misura" element={<Bespoke />} />
          <Route path="/upcycling" element={<Upcycling />} />
          <Route path="/contatti" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;