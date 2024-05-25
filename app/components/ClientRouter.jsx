import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactPage from "./ContactPage";
import HomePage from './HomePage';

const ClientRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default ClientRouter;