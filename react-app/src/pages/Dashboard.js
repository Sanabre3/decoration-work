import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEventos } from '../context/EventosContext';
import Convidados from '../components/Convidados';
import Tarefas from '../components/Tarefas';
import Mesas from '../components/Mesas';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const { eventoAtual, eventos, desselecionarEvento } = useEventos();
  const [paginaAtiva, setPaginaAtiva] = useState('convidados');

  const evento = eventos.find(e => e.id === eventoAtual);

  useEffect(() => {
    if (!eventoAtual) {
      navigate('/', { replace: true });
    }
  }, [eventoAtual, navigate]);

  const handleNavigate = (pagina) => {
    console.log('Navegando para:', pagina);
    if (pagina === 'eventos') {
      console.log('Redirecionando para página de eventos...');
      desselecionarEvento();
      navigate('/');
    } else if (pagina === 'relatorio') {
      navigate('/relatorio');
    } else {
      setPaginaAtiva(pagina);
    }
  };

  return (
    <div className="dashboard-container">
      <nav className="sidebar">
        <div className="logo">
          <h2>🎉 {evento?.nome || 'Evento Dashboard'}</h2>
        </div>
        <ul className="menu">
          <li 
            className={`menu-item ${paginaAtiva === 'convidados' ? 'active' : ''}`}
            onClick={() => handleNavigate('convidados')}
          >
            <span className="icon">👥</span>
            <span>Convidados</span>
          </li>
          <li 
            className={`menu-item ${paginaAtiva === 'tarefas' ? 'active' : ''}`}
            onClick={() => handleNavigate('tarefas')}
          >
            <span className="icon">✓</span>
            <span>Tarefas</span>
          </li>
          <li 
            className={`menu-item ${paginaAtiva === 'mesas' ? 'active' : ''}`}
            onClick={() => handleNavigate('mesas')}
          >
            <span className="icon">🪑</span>
            <span>Mesas</span>
          </li>
          <li 
            className="menu-item"
            onClick={() => handleNavigate('relatorio')}
          >
            <span className="icon">📥</span>
            <span>Relatório PDF</span>
          </li>
          <li 
            className="menu-item eventos-btn"
            onClick={() => handleNavigate('eventos')}
          >
            <span className="icon">◀️</span>
            <span>Voltar aos Eventos</span>
          </li>
        </ul>
      </nav>

      <main className="main-content">
        {paginaAtiva === 'convidados' && <Convidados />}
        {paginaAtiva === 'tarefas' && <Tarefas />}
        {paginaAtiva === 'mesas' && <Mesas />}
      </main>
    </div>
  );
};

export default Dashboard;
