import React, { useState } from 'react';
import { useEventos } from '../context/EventosContext';
import './Tarefas.css';

const Tarefas = () => {
  const { dadosEvento, atualizarDadosEvento } = useEventos();
  const [abaAtiva, setAbaAtiva] = useState('tarefas');
  const [mostrarModal, setMostrarModal] = useState(false);
  const [novaTarefa, setNovaTarefa] = useState({
    titulo: '',
    descricao: '',
    categoria: 'Decoração'
  });
  const [novoCronograma, setNovoCronograma] = useState({
    horario: '',
    atividade: '',
    responsavel: ''
  });

  const tarefas = dadosEvento.tarefas || [];
  const cronograma = dadosEvento.cronograma || [];

  const stats = {
    total: tarefas.length,
    concluidas: tarefas.filter(t => t.concluida).length,
    pendentes: tarefas.filter(t => !t.concluida).length
  };

  const handleToggleConcluida = (id) => {
    const novasTarefas = tarefas.map(t =>
      t.id === id ? { ...t, concluida: !t.concluida } : t
    );
    atualizarDadosEvento({ ...dadosEvento, tarefas: novasTarefas });
  };

  const handleExcluir = (id) => {
    if (window.confirm('Deseja realmente excluir esta tarefa?')) {
      const novasTarefas = tarefas.filter(t => t.id !== id);
      atualizarDadosEvento({ ...dadosEvento, tarefas: novasTarefas });
    }
  };

  const handleAdicionar = () => {
    if (novaTarefa.titulo.trim()) {
      const novasTarefas = [
        ...tarefas,
        {
          id: Math.max(...tarefas.map(t => t.id), 0) + 1,
          ...novaTarefa,
          concluida: false
        }
      ];
      atualizarDadosEvento({ ...dadosEvento, tarefas: novasTarefas });
      setNovaTarefa({ titulo: '', descricao: '', categoria: 'Decoração' });
      setMostrarModal(false);
    }
  };

  const handleAdicionarCronograma = () => {
    if (novoCronograma.horario && novoCronograma.atividade) {
      const novosCronogramas = [
        ...(cronograma || []),
        {
          id: Date.now(),
          ...novoCronograma,
          concluido: false
        }
      ];
      atualizarDadosEvento({ ...dadosEvento, cronograma: novosCronogramas });
      setNovoCronograma({ horario: '', atividade: '', responsavel: '' });
      setMostrarModal(false);
    }
  };

  const handleToggleCronograma = (id) => {
    const novosCronogramas = cronograma.map(c =>
      c.id === id ? { ...c, concluido: !c.concluido } : c
    );
    atualizarDadosEvento({ ...dadosEvento, cronograma: novosCronogramas });
  };

  const handleExcluirCronograma = (id) => {
    if (window.confirm('Deseja realmente excluir este item do cronograma?')) {
      const novosCronogramas = cronograma.filter(c => c.id !== id);
      atualizarDadosEvento({ ...dadosEvento, cronograma: novosCronogramas });
    }
  };

  return (
    <div className="page">
      <header className="page-header">
        <h1>Gerenciamento de Tarefas</h1>
        <button className="btn-primary" onClick={() => setMostrarModal(true)}>
          ➕ Nova {abaAtiva === 'tarefas' ? 'Tarefa' : 'Atividade'}
        </button>
      </header>

      <div className="tabs">
        <button 
          className={`tab ${abaAtiva === 'tarefas' ? 'active' : ''}`}
          onClick={() => setAbaAtiva('tarefas')}
        >
          ✓ Tarefas
        </button>
        <button 
          className={`tab ${abaAtiva === 'cronograma' ? 'active' : ''}`}
          onClick={() => setAbaAtiva('cronograma')}
        >
          📅 Cronograma
        </button>
      </div>

      {abaAtiva === 'tarefas' && (
        <>
          <div className="stats-container">
            <div className="stat-card">
              <div className="stat-numero">{stats.total}</div>
              <div className="stat-label">Total</div>
            </div>
            <div className="stat-card">
              <div className="stat-numero">{stats.concluidas}</div>
              <div className="stat-label">Concluídas</div>
            </div>
            <div className="stat-card">
              <div className="stat-numero">{stats.pendentes}</div>
              <div className="stat-label">Pendentes</div>
            </div>
          </div>

          <div className="tarefas-lista">
            {tarefas.length === 0 ? (
              <p style={{ textAlign: 'center', color: '#999', padding: '40px' }}>
                Nenhuma tarefa cadastrada
              </p>
            ) : (
              tarefas.map(tarefa => (
                <div key={tarefa.id} className={`tarefa-item ${tarefa.concluida ? 'concluida' : ''}`}>
                  <div className="tarefa-checkbox">
                    <input
                      type="checkbox"
                      checked={tarefa.concluida}
                      onChange={() => handleToggleConcluida(tarefa.id)}
                    />
                  </div>
                  <div className="tarefa-conteudo">
                    <div className="tarefa-header">
                      <h3>{tarefa.titulo}</h3>
                      <span className="badge">{tarefa.categoria}</span>
                    </div>
                    <p>{tarefa.descricao}</p>
                  </div>
                  <button className="btn-excluir-tarefa" onClick={() => handleExcluir(tarefa.id)}>
                    🗑️
                  </button>
                </div>
              ))
            )}
          </div>
        </>
      )}

      {abaAtiva === 'cronograma' && (
        <div className="cronograma-lista">
          {(cronograma || []).length === 0 ? (
            <p style={{ textAlign: 'center', color: '#999', padding: '40px' }}>
              Nenhuma atividade cadastrada no cronograma
            </p>
          ) : (
            (cronograma || []).sort((a, b) => a.horario.localeCompare(b.horario)).map(item => (
              <div key={item.id} className={`tarefa-item ${item.concluido ? 'concluida' : ''}`}>
                <div className="tarefa-checkbox">
                  <input
                    type="checkbox"
                    checked={item.concluido}
                    onChange={() => handleToggleCronograma(item.id)}
                  />
                </div>
                <div className="tarefa-conteudo">
                  <div className="tarefa-header">
                    <h3>{item.horario} - {item.atividade}</h3>
                  </div>
                  {item.responsavel && <p>Responsável: {item.responsavel}</p>}
                </div>
                <button className="btn-excluir-tarefa" onClick={() => handleExcluirCronograma(item.id)}>
                  🗑️
                </button>
              </div>
            ))
          )}
        </div>
      )}

      {/* Modal */}
      {mostrarModal && abaAtiva === 'tarefas' && (
        <div className="modal active" onClick={() => setMostrarModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Nova Tarefa</h2>
              <button className="btn-fechar" onClick={() => setMostrarModal(false)}>×</button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Título *</label>
                <input
                  type="text"
                  value={novaTarefa.titulo}
                  onChange={(e) => setNovaTarefa({ ...novaTarefa, titulo: e.target.value })}
                  placeholder="Título da tarefa"
                />
              </div>
              <div className="form-group">
                <label>Descrição</label>
                <textarea
                  value={novaTarefa.descricao}
                  onChange={(e) => setNovaTarefa({ ...novaTarefa, descricao: e.target.value })}
                  placeholder="Descrição detalhada"
                  rows="3"
                />
              </div>
              <div className="form-group">
                <label>Categoria</label>
                <select
                  value={novaTarefa.categoria}
                  onChange={(e) => setNovaTarefa({ ...novaTarefa, categoria: e.target.value })}
                >
                  <option value="Decoração">Decoração</option>
                  <option value="Festa">Festa</option>
                  <option value="Buffet">Buffet</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setMostrarModal(false)}>
                Cancelar
              </button>
              <button className="btn btn-primary" onClick={handleAdicionar}>
                Adicionar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Cronograma */}
      {mostrarModal && abaAtiva === 'cronograma' && (
        <div className="modal active" onClick={() => setMostrarModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Nova Atividade do Cronograma</h2>
              <button className="btn-fechar" onClick={() => setMostrarModal(false)}>×</button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Horário *</label>
                <input
                  type="time"
                  value={novoCronograma.horario}
                  onChange={(e) => setNovoCronograma({ ...novoCronograma, horario: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Atividade *</label>
                <input
                  type="text"
                  value={novoCronograma.atividade}
                  onChange={(e) => setNovoCronograma({ ...novoCronograma, atividade: e.target.value })}
                  placeholder="Nome da atividade"
                />
              </div>
              <div className="form-group">
                <label>Responsável</label>
                <input
                  type="text"
                  value={novoCronograma.responsavel}
                  onChange={(e) => setNovoCronograma({ ...novoCronograma, responsavel: e.target.value })}
                  placeholder="Nome do responsável (opcional)"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setMostrarModal(false)}>
                Cancelar
              </button>
              <button className="btn btn-primary" onClick={handleAdicionarCronograma}>
                Adicionar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tarefas;
