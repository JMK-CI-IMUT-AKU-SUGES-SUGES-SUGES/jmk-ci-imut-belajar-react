import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Home Route (Organization Profile & Member List) */}
          <Route path="/" element={<Home />} />
          
          {/* Dynamic Route for Member Profiles */}
          <Route path="/:slug" element={<Profile />} />
          
          {/* 404 Not Found Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
