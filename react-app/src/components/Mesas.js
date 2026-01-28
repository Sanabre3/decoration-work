import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useEventos } from '../context/EventosContext';

const Mesas = () => {
  const { dadosEvento, atualizarDadosEvento } = useEventos();
  const [novaMesaNome, setNovaMesaNome] = useState('');
  const [novaMesaCapacidade, setNovaMesaCapacidade] = useState(8);

  const convidados = dadosEvento.convidados || [];
  const mesas = dadosEvento.mesas || [];

  const pessoasComMesa = mesas.flatMap(m => m.pessoas);
  const pessoasSemMesa = convidados.filter(c => !pessoasComMesa.includes(c.nome));

  const handleAdicionarMesa = () => {
    const nome = novaMesaNome.trim() || `Mesa ${mesas.length + 1}`;
    const novasMesas = [
      ...mesas,
      {
        id: Math.max(...mesas.map(m => m.id), 0) + 1,
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
    const { source, destination } = result;

    if (!destination) return;

    const sourceId = source.droppableId;
    const destId = destination.droppableId;

    if (sourceId === destId && source.index === destination.index) return;

    // Criar cópia das mesas
    const novasMesas = mesas.map(m => ({ ...m, pessoas: [...m.pessoas] }));

    let itemMovido;

    // Remover do source
    if (sourceId === 'pool') {
      itemMovido = pessoasSemMesa[source.index].nome;
    } else {
      const mesaSource = novasMesas.find(m => m.id === parseInt(sourceId));
      itemMovido = mesaSource.pessoas.splice(source.index, 1)[0];
    }

    // Adicionar ao destino
    if (destId !== 'pool') {
      const mesaDest = novasMesas.find(m => m.id === parseInt(destId));
      mesaDest.pessoas.splice(destination.index, 0, itemMovido);
    }

    atualizarDadosEvento({ ...dadosEvento, mesas: novasMesas });
  };

  const getConvidado = (nome) => convidados.find(c => c.nome === nome);

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
          <h2>Pessoas sem Mesa ({pessoasSemMesa.length})</h2>
          <Droppable droppableId="pool" direction="horizontal">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={`pessoas-pool ${snapshot.isDraggingOver ? 'dragging-over' : ''}`}
              >
                {pessoasSemMesa.map((pessoa, index) => (
                  <Draggable key={pessoa.nome} draggableId={pessoa.nome} index={index}>
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
                    {mesa.pessoas.length}/{mesa.capacidade} pessoas
                  </div>
                </div>
                <button className="btn-remove-mesa" onClick={() => handleRemoverMesa(mesa.id)}>
                  🗑️
                </button>
              </div>
              <Droppable droppableId={mesa.id.toString()} direction="horizontal">
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={`mesa-pessoas ${snapshot.isDraggingOver ? 'dragging-over' : ''}`}
                  >
                    {mesa.pessoas.map((nomePessoa, index) => {
                      const pessoa = getConvidado(nomePessoa);
                      if (!pessoa) return null;
                      return (
                        <Draggable key={nomePessoa} draggableId={`${mesa.id}-${nomePessoa}`} index={index}>
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
