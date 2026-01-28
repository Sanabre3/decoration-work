import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEventos } from '../context/EventosContext';
import './Eventos.css';

const Eventos = () => {
  const navigate = useNavigate();
  const { 
    nomeUsuario, 
    setNomeUsuario, 
    eventos, 
    criarEvento, 
    excluirEvento, 
    selecionarEvento
  } = useEventos();

  const [mostrarModalNome, setMostrarModalNome] = useState(!nomeUsuario);
  const [mostrarModalEvento, setMostrarModalEvento] = useState(false);
  const [nomeTemp, setNomeTemp] = useState('');
  const [nomeEvento, setNomeEvento] = useState('');

  const handleSalvarNome = () => {
    if (nomeTemp.trim()) {
      setNomeUsuario(nomeTemp.trim());
      setMostrarModalNome(false);
    }
  };

  const handleCriarEvento = () => {
    if (nomeEvento.trim()) {
      criarEvento(nomeEvento.trim());
      setNomeEvento('');
      setMostrarModalEvento(false);
    }
  };

  const handleSelecionarEvento = (id) => {
    selecionarEvento(id);
    navigate('/dashboard');
  };

  const handleExcluirEvento = (id, e) => {
    e.stopPropagation();
    if (window.confirm('Deseja realmente excluir este evento?')) {
      excluirEvento(id);
    }
  };

  const getStatsEvento = (eventoId) => {
    const dados = JSON.parse(localStorage.getItem(`evento_${eventoId}`) || '{}');
    return {
      convidados: dados.convidados?.length || 0,
      tarefas: dados.tarefas?.length || 0,
      mesas: dados.mesas?.length || 0
    };
  };

  return (
    <div className="eventos-container">
      <div className="eventos-header">
        <h1>🎉 Olá, {nomeUsuario}!</h1>
        <p>Selecione um evento ou crie um novo</p>
      </div>

      <button className="btn-primary" onClick={() => setMostrarModalEvento(true)}>
        ➕ Novo Evento
      </button>

      <div className="eventos-grid">
        {eventos.map(evento => {
          const stats = getStatsEvento(evento.id);
          return (
            <div key={evento.id} className="evento-card" onClick={() => handleSelecionarEvento(evento.id)}>
              <div className="evento-header">
                <h3>{evento.nome}</h3>
                <button 
                  className="btn-excluir" 
                  onClick={(e) => handleExcluirEvento(evento.id, e)}
                >
                  🗑️
                </button>
              </div>
              <div className="evento-stats">
                <div className="stat">
                  <span>👥</span>
                  <div>
                    <strong>{stats.convidados}</strong>
                    <small>Convidados</small>
                  </div>
                </div>
                <div className="stat">
                  <span>✓</span>
                  <div>
                    <strong>{stats.tarefas}</strong>
                    <small>Tarefas</small>
                  </div>
                </div>
                <div className="stat">
                  <span>🪑</span>
                  <div>
                    <strong>{stats.mesas}</strong>
                    <small>Mesas</small>
                  </div>
                </div>
              </div>
              <div className="evento-data">
                Criado em {new Date(evento.dataCriacao).toLocaleDateString('pt-BR')}
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal Nome */}
      {mostrarModalNome && (
        <div className="modal active">
          <div className="modal-content">
            <h2>Bem-vindo!</h2>
            <p>Digite seu nome para começar:</p>
            <input
              type="text"
              value={nomeTemp}
              onChange={(e) => setNomeTemp(e.target.value)}
              placeholder="Seu nome"
              onKeyPress={(e) => e.key === 'Enter' && handleSalvarNome()}
              autoFocus
            />
            <button className="btn btn-primary" onClick={handleSalvarNome}>
              Continuar
            </button>
          </div>
        </div>
      )}

      {/* Modal Novo Evento */}
      {mostrarModalEvento && (
        <div className="modal active" onClick={() => setMostrarModalEvento(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Novo Evento</h2>
              <button className="btn-fechar" onClick={() => setMostrarModalEvento(false)}>×</button>
            </div>
            <input
              type="text"
              value={nomeEvento}
              onChange={(e) => setNomeEvento(e.target.value)}
              placeholder="Nome do evento"
              onKeyPress={(e) => e.key === 'Enter' && handleCriarEvento()}
              autoFocus
            />
            <button className="btn btn-primary" onClick={handleCriarEvento}>
              Criar Evento
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Eventos;
