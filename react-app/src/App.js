import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { EventosProvider } from './context/EventosContext';
import Eventos from './pages/Eventos';
import Dashboard from './pages/Dashboard';
import Relatorio from './pages/Relatorio';
import './App.css';

function App() {
  return (
    <EventosProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Eventos />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/relatorio" element={<Relatorio />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </EventosProvider>
  );
}

export default App;
