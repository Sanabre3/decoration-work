import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useEventos } from '../context/EventosContext';
import './Tarefas.css';

const Mesas = () => {
  const { dadosEvento, atualizarDadosEvento } = useEventos();
  const [novaMesaNome, setNovaMesaNome] = useState('');
  const [novaMesaCapacidade, setNovaMesaCapacidade] = useState(8);
  const [ordenacao, setOrdenacao] = useState('original');

  const convidados = dadosEvento.convidados || [];
  const mesas = dadosEvento.mesas || [];

  // Criar um mapa de pessoas já alocadas
  const pessoasAlocadas = new Set();
  mesas.forEach(mesa => {
    if (mesa.pessoas) {
      mesa.pessoas.forEach(p => pessoasAlocadas.add(p));
    }
  });

  // Filtrar pessoas sem mesa
  let pessoasSemMesa = convidados.filter(c => !pessoasAlocadas.has(c.nome));

  // Aplicar ordenação
  if (ordenacao === 'alfabetica') {
    pessoasSemMesa = [...pessoasSemMesa].sort((a, b) => a.nome.localeCompare(b.nome));
  } else if (ordenacao === 'idade') {
    pessoasSemMesa = [...pessoasSemMesa].sort((a, b) => (b.idade || 0) - (a.idade || 0));
  } else if (ordenacao === 'tipo') {
    pessoasSemMesa = [...pessoasSemMesa].sort((a, b) => {
      if (a.tipo === b.tipo) return a.nome.localeCompare(b.nome);
      return a.tipo === 'Adulto' ? -1 : 1;
    });
  }

  const handleAdicionarMesa = () => {
    const nome = novaMesaNome.trim() || `Mesa ${mesas.length + 1}`;
    const novasMesas = [
      ...mesas,
      {
        id: Date.now(),
        nome,
        capacidade: novaMesaCapacidade,
        pessoas: []
      }
    ];
    atualizarDadosEvento({ ...dadosEvento, mesas: novasMesas });
    setNovaMesaNome('');
    setNovaMesaCapacidade(8);
  };

  const handleRemoverMesa = (id) => {
    if (window.confirm('Deseja realmente remover esta mesa?')) {
      const novasMesas = mesas.filter(m => m.id !== id);
      atualizarDadosEvento({ ...dadosEvento, mesas: novasMesas });
    }
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;
    
    // Se moveu para a mesma posição, não faz nada
    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    const novasMesas = [...mesas];
    let pessoaNome;

    // Encontrar e remover pessoa da origem
    if (source.droppableId === 'pool') {
      pessoaNome = pessoasSemMesa[source.index].nome;
    } else {
      const mesaOrigem = novasMesas.find(m => m.id.toString() === source.droppableId);
      pessoaNome = mesaOrigem.pessoas[source.index];
      mesaOrigem.pessoas = mesaOrigem.pessoas.filter((_, idx) => idx !== source.index);
    }

    // Adicionar pessoa ao destino
    if (destination.droppableId !== 'pool') {
      const mesaDestino = novasMesas.find(m => m.id.toString() === destination.droppableId);
      mesaDestino.pessoas = [...mesaDestino.pessoas];
      mesaDestino.pessoas.splice(destination.index, 0, pessoaNome);
    }

    atualizarDadosEvento({ ...dadosEvento, mesas: novasMesas });
  };

  return (
    <div className="page">
      <header className="page-header">
        <h1>Organização das Mesas</h1>
      </header>

      <div className="mesas-add">
        <input
          type="text"
          placeholder="Nome da mesa"
          value={novaMesaNome}
          onChange={(e) => setNovaMesaNome(e.target.value)}
        />
        <input
          type="number"
          placeholder="Capacidade"
          value={novaMesaCapacidade}
          onChange={(e) => setNovaMesaCapacidade(parseInt(e.target.value) || 8)}
          min="1"
          max="20"
        />
        <button className="btn-primary" onClick={handleAdicionarMesa}>
          ➕ Adicionar Mesa
        </button>
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="mesas-section">
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
            <h2>Pessoas sem Mesa ({pessoasSemMesa.length})</h2>
            <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
              <label style={{fontSize: '0.9em', color: '#666'}}>Ordenar por:</label>
              <select 
                value={ordenacao}
                onChange={(e) => setOrdenacao(e.target.value)}
                style={{padding: '8px 12px', borderRadius: '6px', border: '2px solid var(--border)'}}
              >
                <option value="original">Original</option>
                <option value="alfabetica">Ordem Alfabética</option>
                <option value="idade">Idade</option>
                <option value="tipo">Tipo (Adulto/Criança)</option>
              </select>
            </div>
          </div>
          <Droppable droppableId="pool">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={`pessoas-pool ${snapshot.isDraggingOver ? 'dragging-over' : ''}`}
              >
                {pessoasSemMesa.map((pessoa, index) => (
                  <Draggable 
                    key={`pool-${pessoa.responsavel}-${pessoa.nome}`} 
                    draggableId={`pool-${pessoa.responsavel}-${pessoa.nome}`} 
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`pessoa-tag ${snapshot.isDragging ? 'dragging' : ''}`}
                      >
                        {pessoa.nome}
                        <span className={`badge badge-${pessoa.tipo.toLowerCase()}`}>
                          {pessoa.tipo}
                        </span>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>

        <div className="mesas-container">
          {mesas.map(mesa => (
            <div key={mesa.id} className="mesa-card">
              <div className="mesa-header">
                <div>
                  <div className="mesa-titulo">{mesa.nome}</div>
                  <div className="mesa-capacidade">
                    {mesa.pessoas?.length || 0}/{mesa.capacidade} pessoas
                  </div>
                </div>
                <button className="btn-remove-mesa" onClick={() => handleRemoverMesa(mesa.id)}>
                  🗑️
                </button>
              </div>
              <Droppable droppableId={mesa.id.toString()}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={`mesa-pessoas ${snapshot.isDraggingOver ? 'dragging-over' : ''}`}
                  >
                    {(mesa.pessoas || []).map((nomePessoa, index) => {
                      const pessoa = convidados.find(c => c.nome === nomePessoa);
                      if (!pessoa) return null;
                      return (
                        <Draggable 
                          key={`mesa-${mesa.id}-${pessoa.responsavel}-${pessoa.nome}`} 
                          draggableId={`mesa-${mesa.id}-${pessoa.responsavel}-${pessoa.nome}`} 
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className={`pessoa-tag ${snapshot.isDragging ? 'dragging' : ''}`}
                            >
                              {pessoa.nome}
                              <span className={`badge badge-${pessoa.tipo.toLowerCase()}`}>
                                {pessoa.tipo}
                              </span>
                            </div>
                          )}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default Mesas;
