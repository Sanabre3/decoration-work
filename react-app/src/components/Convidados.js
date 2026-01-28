import React, { useState } from 'react';
import { useEventos } from '../context/EventosContext';

const Convidados = () => {
  const { dadosEvento, atualizarDadosEvento } = useEventos();
  const [filtro, setFiltro] = useState('todos');
  const [busca, setBusca] = useState('');
  const [modoVisualizacao, setModoVisualizacao] = useState('cards');
  const [editando, setEditando] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [novoConvidado, setNovoConvidado] = useState({
    responsavel: '',
    nome: '',
    tipo: 'Adulto',
    contato: '',
    data: '',
    idade: ''
  });

  const convidados = dadosEvento.convidados || [];

  const convidadosFiltrados = convidados.filter(c => {
    const passaFiltro = filtro === 'todos' || 
                        (filtro === 'adultos' && c.tipo === 'Adulto') ||
                        (filtro === 'criancas' && c.tipo === 'Criança');
    
    const passaBusca = !busca || 
                       c.nome.toLowerCase().includes(busca.toLowerCase()) ||
                       c.responsavel.toLowerCase().includes(busca.toLowerCase());
    
    return passaFiltro && passaBusca;
  });

  const stats = {
    total: convidados.length,
    adultos: convidados.filter(c => c.tipo === 'Adulto').length,
    criancas: convidados.filter(c => c.tipo === 'Criança').length
  };

  const handleEditar = (index, campo, valor) => {
    const novosConvidados = [...convidados];
    novosConvidados[index][campo] = campo === 'idade' ? parseInt(valor) || 0 : valor;
    atualizarDadosEvento({ ...dadosEvento, convidados: novosConvidados });
  };

  const handleExcluir = (index) => {
    if (window.confirm('Deseja realmente excluir este convidado?')) {
      const novosConvidados = convidados.filter((_, i) => i !== index);
      atualizarDadosEvento({ ...dadosEvento, convidados: novosConvidados });
    }
  };

  const handleAdicionar = () => {
    if (novoConvidado.nome && novoConvidado.responsavel) {
      const novosConvidados = [...convidados, { ...novoConvidado, idade: parseInt(novoConvidado.idade) || 0 }];
      atualizarDadosEvento({ ...dadosEvento, convidados: novosConvidados });
      setNovoConvidado({
        responsavel: '',
        nome: '',
        tipo: 'Adulto',
        contato: '',
        data: '',
        idade: ''
      });
      setMostrarModal(false);
    }
  };

  const formatarData = (data) => {
    if (!data || data === '-') return 'Não informada';
    return data;
  };

  return (
    <div className="page">
      <header className="page-header">
        <h1>Lista de Convidados</h1>
        <div className="header-buttons">
          <button className="btn-secondary" onClick={() => setModoVisualizacao(m => m === 'cards' ? 'lista' : 'cards')}>
            📋 Modo {modoVisualizacao === 'cards' ? 'Lista' : 'Cards'}
          </button>
          <button className="btn-primary" onClick={() => setMostrarModal(true)}>
            ➕ Adicionar Convidado
          </button>
        </div>
      </header>

      <div className="stats-container">
        <div className="stat-card">
          <div className="stat-numero">{stats.total}</div>
          <div className="stat-label">Total</div>
        </div>
        <div className="stat-card">
          <div className="stat-numero">{stats.adultos}</div>
          <div className="stat-label">Adultos</div>
        </div>
        <div className="stat-card">
          <div className="stat-numero">{stats.criancas}</div>
          <div className="stat-label">Crianças</div>
        </div>
      </div>

      <div className="filtros-container">
        <div className="tabs">
          <button className={`tab ${filtro === 'todos' ? 'active' : ''}`} onClick={() => setFiltro('todos')}>
            Todos
          </button>
          <button className={`tab ${filtro === 'adultos' ? 'active' : ''}`} onClick={() => setFiltro('adultos')}>
            Adultos
          </button>
          <button className={`tab ${filtro === 'criancas' ? 'active' : ''}`} onClick={() => setFiltro('criancas')}>
            Crianças
          </button>
        </div>
        <input
          type="text"
          className="search-input"
          placeholder="🔍 Buscar convidado..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>

      <div className={`convidados-grid ${modoVisualizacao === 'lista' ? 'modo-lista' : ''}`}>
        {convidadosFiltrados.map((c, index) => {
          const indexOriginal = convidados.findIndex(conv => 
            conv.nome === c.nome && conv.responsavel === c.responsavel && conv.contato === c.contato
          );
          const emEdicao = editando === indexOriginal;

          return (
            <div key={indexOriginal} className={`convidado-card ${modoVisualizacao === 'lista' ? 'modo-lista' : ''} ${emEdicao ? 'editando' : ''}`}>
              <button className="btn-editar" onClick={() => setEditando(emEdicao ? null : indexOriginal)}>
                {emEdicao ? '💾' : '✏️'}
              </button>
              <div className="convidado-header">
                <div className="convidado-nome">
                  {emEdicao ? (
                    <input
                      type="text"
                      value={c.nome}
                      onChange={(e) => handleEditar(indexOriginal, 'nome', e.target.value)}
                      className="campo-editavel"
                    />
                  ) : (
                    <span>{c.nome}</span>
                  )}
                </div>
                <span className={`badge badge-${c.tipo.toLowerCase()}`}>{c.tipo}</span>
              </div>
              <div className="convidado-info">
                🎂 Idade: {emEdicao ? (
                  <input
                    type="number"
                    value={c.idade}
                    onChange={(e) => handleEditar(indexOriginal, 'idade', e.target.value)}
                    className="campo-editavel-pequeno"
                  />
                ) : (
                  <span>{c.idade || 'N/A'}</span>
                )} anos
              </div>
              <div className="convidado-info">
                👤 Responsável: {emEdicao ? (
                  <input
                    type="text"
                    value={c.responsavel}
                    onChange={(e) => handleEditar(indexOriginal, 'responsavel', e.target.value)}
                    className="campo-editavel"
                  />
                ) : (
                  <span>{c.responsavel}</span>
                )}
              </div>
              <div className="convidado-info">
                📞 {emEdicao ? (
                  <input
                    type="text"
                    value={c.contato}
                    onChange={(e) => handleEditar(indexOriginal, 'contato', e.target.value)}
                    className="campo-editavel"
                  />
                ) : (
                  <span>{c.contato || 'Sem contato'}</span>
                )}
              </div>
              <div className="convidado-info">
                📅 {formatarData(c.data)}
              </div>
              {emEdicao && (
                <div className="acoes-edicao">
                  <button className="btn btn-primary" onClick={() => setEditando(null)}>
                    💾 Salvar
                  </button>
                  <button className="btn btn-secondary" onClick={() => {
                    setEditando(null);
                    // Recarregar dados originais (simplificado)
                  }}>
                    ❌ Cancelar
                  </button>
                  <button className="btn btn-danger" onClick={() => handleExcluir(indexOriginal)}>
                    🗑️ Excluir
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Modal Adicionar */}
      {mostrarModal && (
        <div className="modal active" onClick={() => setMostrarModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Adicionar Convidado</h2>
              <button className="btn-fechar" onClick={() => setMostrarModal(false)}>×</button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Nome *</label>
                <input
                  type="text"
                  value={novoConvidado.nome}
                  onChange={(e) => setNovoConvidado({...novoConvidado, nome: e.target.value})}
                  placeholder="Nome completo"
                />
              </div>
              <div className="form-group">
                <label>Responsável *</label>
                <input
                  type="text"
                  value={novoConvidado.responsavel}
                  onChange={(e) => setNovoConvidado({...novoConvidado, responsavel: e.target.value})}
                  placeholder="Nome do responsável"
                />
              </div>
              <div className="form-group">
                <label>Tipo</label>
                <select
                  value={novoConvidado.tipo}
                  onChange={(e) => setNovoConvidado({...novoConvidado, tipo: e.target.value})}
                >
                  <option value="Adulto">Adulto</option>
                  <option value="Criança">Criança</option>
                </select>
              </div>
              <div className="form-group">
                <label>Contato</label>
                <input
                  type="text"
                  value={novoConvidado.contato}
                  onChange={(e) => setNovoConvidado({...novoConvidado, contato: e.target.value})}
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div className="form-group">
                <label>Data de Confirmação</label>
                <input
                  type="text"
                  value={novoConvidado.data}
                  onChange={(e) => setNovoConvidado({...novoConvidado, data: e.target.value})}
                  placeholder="dd/mm/yyyy"
                />
              </div>
              <div className="form-group">
                <label>Idade</label>
                <input
                  type="number"
                  value={novoConvidado.idade}
                  onChange={(e) => setNovoConvidado({...novoConvidado, idade: e.target.value})}
                  placeholder="Idade"
                />
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
    </div>
  );
};

export default Convidados;
