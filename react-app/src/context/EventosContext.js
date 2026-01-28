import React, { createContext, useContext, useState, useEffect } from 'react';

const EventosContext = createContext();

// Dados iniciais dos convidados (os 75 convidados originais)
const CONVIDADOS_INICIAIS = [
  {responsavel: "ANDERSON", nome: "ANDERSON", tipo: "Adulto", contato: "(21) 97037-7417", data: "16/12/2025", idade: 35},
  {responsavel: "ANDERSON", nome: "ELISANGELA", tipo: "Adulto", contato: "(21) 97037-7417", data: "16/12/2025", idade: 33},
  {responsavel: "ANDERSON", nome: "INÊS", tipo: "Adulto", contato: "(21) 97037-7417", data: "16/12/2025", idade: 30},
  {responsavel: "ANDERSON", nome: "LUISE", tipo: "Criança", contato: "(21) 97037-7417", data: "16/12/2025", idade: 8},
  {responsavel: "ANDERSON", nome: "MILENA", tipo: "Adulto", contato: "(21) 97037-7417", data: "16/12/2025", idade: 28},
  {responsavel: "ANDRÉIA", nome: "ANDRÉIA", tipo: "Adulto", contato: "(21) 98713-7026", data: "30/10/2025", idade: 35},
  {responsavel: "ANDRÉIA", nome: "EDUARDA", tipo: "Criança", contato: "(21) 98713-7026", data: "30/10/2025", idade: 10},
  {responsavel: "ANDRÉIA", nome: "SEVERINO", tipo: "Adulto", contato: "(21) 98713-7026", data: "30/10/2025", idade: 38},
  {responsavel: "ANDREZA", nome: "ANDREZA", tipo: "Adulto", contato: "(21) 98260-5197", data: "30/10/2025", idade: 32},
  {responsavel: "ANDREZA", nome: "ARTHUR", tipo: "Criança", contato: "(21) 98260-5197", data: "30/10/2025", idade: 7},
  {responsavel: "ANDREZA", nome: "MANOELA", tipo: "Criança", contato: "(21) 98260-5197", data: "30/10/2025", idade: 5},
  {responsavel: "ANDREZA", nome: "ROGERIO", tipo: "Adulto", contato: "(21) 98260-5197", data: "30/10/2025", idade: 35},
  {responsavel: "CRIS", nome: "CRIS", tipo: "Adulto", contato: "(21) 98801-6569", data: "30/10/2025", idade: 29},
  {responsavel: "CRIS", nome: "MARIA JULIA", tipo: "Criança", contato: "(21) 98801-6569", data: "30/10/2025", idade: 6},
  {responsavel: "CRISTINE", nome: "CAIO", tipo: "Adulto", contato: "(21) 98827-9928", data: "30/10/2025", idade: 26},
  {responsavel: "CRISTINE", nome: "CRISTIAN", tipo: "Adulto", contato: "(21) 98827-9928", data: "30/10/2025", idade: 28},
  {responsavel: "CRISTINE", nome: "CRISTIANO", tipo: "Adulto", contato: "(21) 98827-9928", data: "30/10/2025", idade: 30},
  {responsavel: "CRISTINE", nome: "CRISTINE", tipo: "Adulto", contato: "(21) 98827-9928", data: "30/10/2025", idade: 32},
  {responsavel: "DENIRA", nome: "AYRES", tipo: "Adulto", contato: "(22) 99770-0458", data: "14/11/2025", idade: 45},
  {responsavel: "DENIRA", nome: "DENIRA", tipo: "Adulto", contato: "(22) 99770-0458", data: "14/11/2025", idade: 42},
  {responsavel: "DENIRA", nome: "EDMAR", tipo: "Adulto", contato: "(22) 99770-0458", data: "14/11/2025", idade: 48},
  {responsavel: "DENIRA", nome: "ELOISA", tipo: "Criança", contato: "(22) 99770-0458", data: "14/11/2025", idade: 9},
  {responsavel: "ELAINE", nome: "CHARLES", tipo: "Adulto", contato: "(21) 97010-7908", data: "-", idade: 35},
  {responsavel: "ELAINE", nome: "CRISTIAN ESPÍNDOLA", tipo: "Adulto", contato: "(21) 97010-7908", data: "-", idade: 28},
  {responsavel: "ELAINE", nome: "DOUGLAS ESPÍNDOLA", tipo: "Adulto", contato: "(21) 97010-7908", data: "-", idade: 32},
  {responsavel: "ELAINE", nome: "ELAINE ESPÍNDOLA", tipo: "Adulto", contato: "(21) 97010-7908", data: "-", idade: 38},
  {responsavel: "EVERTON", nome: "EVERTON", tipo: "Adulto", contato: "(21) 97263-2239", data: "31/10/2025", idade: 30},
  {responsavel: "EVERTON", nome: "RAFA", tipo: "Adulto", contato: "(21) 97263-2239", data: "31/10/2025", idade: 29},
  {responsavel: "ISA", nome: "ISA", tipo: "Adulto", contato: "(21) 98642-4618", data: "01/11/2025", idade: 27},
  {responsavel: "ISA", nome: "RUAN", tipo: "Adulto", contato: "(21) 98642-4618", data: "01/11/2025", idade: 28},
  {responsavel: "ISABELA", nome: "ISABELA", tipo: "Adulto", contato: "(21) 99200-6997", data: "30/10/2025", idade: 25},
  {responsavel: "ISABELA", nome: "PABLO", tipo: "Adulto", contato: "(21) 99200-6997", data: "30/10/2025", idade: 27},
  {responsavel: "LARI", nome: "LARI", tipo: "Adulto", contato: "(21) 99628-1816", data: "30/10/2025", idade: 26},
  {responsavel: "LARI", nome: "LUDI", tipo: "Adulto", contato: "(21) 99628-1816", data: "30/10/2025", idade: 28},
  {responsavel: "MARIA CRISTINA", nome: "MARIA CRISTINA", tipo: "Adulto", contato: "(21) 99635-8025", data: "04/11/2025", idade: 55},
  {responsavel: "MARILDA", nome: "JASON", tipo: "Adulto", contato: "(22) 98153-3259", data: "-", idade: 32},
  {responsavel: "MARILDA", nome: "JUNIOR", tipo: "Adulto", contato: "(22) 98153-3259", data: "-", idade: 28},
  {responsavel: "MARILDA", nome: "MARILDA", tipo: "Adulto", contato: "(22) 98153-3259", data: "-", idade: 50},
  {responsavel: "MARLI", nome: "ALESSANDRA", tipo: "Adulto", contato: "(21) 98710-2034", data: "-", idade: 35},
  {responsavel: "MARLI", nome: "MARLI", tipo: "Adulto", contato: "(21) 98710-2034", data: "-", idade: 58},
  {responsavel: "MAYARA", nome: "ÍTALO", tipo: "Criança", contato: "(21) 98210-8278", data: "30/10/2025", idade: 8},
  {responsavel: "MAYARA", nome: "JUSSARA", tipo: "Adulto", contato: "(21) 98210-8278", data: "30/10/2025", idade: 52},
  {responsavel: "MAYARA", nome: "MATHEUS", tipo: "Adulto", contato: "(21) 98210-8278", data: "30/10/2025", idade: 30},
  {responsavel: "MAYARA", nome: "MAYARA", tipo: "Adulto", contato: "(21) 98210-8278", data: "30/10/2025", idade: 28},
  {responsavel: "NATAN", nome: "NATAN", tipo: "Adulto", contato: "(21) 98805-6569", data: "-", idade: 32},
  {responsavel: "NATAN", nome: "SUELEN", tipo: "Adulto", contato: "(21) 98805-6569", data: "-", idade: 30},
  {responsavel: "NEIDE", nome: "NEIDE", tipo: "Adulto", contato: "(21) 98695-5794", data: "02/11/2025", idade: 60},
  {responsavel: "PASTOR CLAUDIO", nome: "CLAUDIA", tipo: "Adulto", contato: "(21) 99734-4754", data: "-", idade: 48},
  {responsavel: "PASTOR CLAUDIO", nome: "JULIA", tipo: "Adulto", contato: "(21) 99734-4754", data: "-", idade: 22},
  {responsavel: "PASTOR CLAUDIO", nome: "PASTOR CLAUDIO", tipo: "Adulto", contato: "(21) 99734-4754", data: "-", idade: 50},
  {responsavel: "PASTOR RENATO", nome: "PASTOR RENATO", tipo: "Adulto", contato: "(21) 99165-6665", data: "-", idade: 45},
  {responsavel: "PASTOR RENATO", nome: "PASTORA ALINE", tipo: "Adulto", contato: "(21) 99165-6665", data: "-", idade: 42},
  {responsavel: "PATRÍCIA", nome: "CAIO", tipo: "Adulto", contato: "(21) 96500-2393", data: "-", idade: 25},
  {responsavel: "PATRÍCIA", nome: "DOUGLAS", tipo: "Adulto", contato: "(21) 96500-2393", data: "-", idade: 32},
  {responsavel: "PATRÍCIA", nome: "JULIANA", tipo: "Adulto", contato: "(21) 96500-2393", data: "-", idade: 28},
  {responsavel: "PATRÍCIA", nome: "PATRÍCIA", tipo: "Adulto", contato: "(21) 96500-2393", data: "-", idade: 45},
  {responsavel: "PATRÍCIA", nome: "RAFAEL", tipo: "Adulto", contato: "(21) 96500-2393", data: "-", idade: 30},
  {responsavel: "PAULINHO", nome: "PAULINHO", tipo: "Adulto", contato: "(21) 99641-8664", data: "30/10/2025", idade: 35},
  {responsavel: "PAULINHO", nome: "PIETRO", tipo: "Adulto", contato: "(21) 99641-8664", data: "30/10/2025", idade: 22},
  {responsavel: "PAULINHO", nome: "VALESCA", tipo: "Adulto", contato: "(21) 99641-8664", data: "30/10/2025", idade: 33},
  {responsavel: "RODRIGO", nome: "RODRIGO", tipo: "Adulto", contato: "(21) 96408-1442", data: "-", idade: 28},
  {responsavel: "RODRIGO", nome: "THAYNA", tipo: "Adulto", contato: "(21) 96408-1442", data: "-", idade: 26},
  {responsavel: "RODRIGO ESPÍNDOLA", nome: "BRUNA", tipo: "Adulto", contato: "(21) 96466-9184", data: "01/11/2025", idade: 25},
  {responsavel: "RODRIGO ESPÍNDOLA", nome: "CAROL", tipo: "Adulto", contato: "(21) 96466-9184", data: "01/11/2025", idade: 28},
  {responsavel: "RODRIGO ESPÍNDOLA", nome: "RODRIGO ESPÍNDOLA", tipo: "Adulto", contato: "(21) 96466-9184", data: "01/11/2025", idade: 30},
  {responsavel: "SIRENE", nome: "SIRENE", tipo: "Adulto", contato: "(22) 99858-4277", data: "14/11/2025", idade: 48},
  {responsavel: "STEFFANO", nome: "FELIPE", tipo: "Adulto", contato: "(21) 99436-2300", data: "30/10/2025", idade: 27},
  {responsavel: "STEFFANO", nome: "STEFFANO", tipo: "Adulto", contato: "(21) 99436-2300", data: "30/10/2025", idade: 26},
  {responsavel: "THIAGO", nome: "BRUNA", tipo: "Adulto", contato: "(21) 96827-5527", data: "17/11/2025", idade: 28},
  {responsavel: "THIAGO", nome: "THIAGO RONCONI", tipo: "Adulto", contato: "(21) 96827-5527", data: "17/11/2025", idade: 30},
  {responsavel: "WAGNER", nome: "ALINE", tipo: "Adulto", contato: "(21) 97005-7220", data: "30/10/2025", idade: 32},
  {responsavel: "WAGNER", nome: "THAIS", tipo: "Adulto", contato: "(21) 97005-7220", data: "30/10/2025", idade: 28},
  {responsavel: "WAGNER", nome: "WAGNER", tipo: "Adulto", contato: "(21) 97005-7220", data: "30/10/2025", idade: 35},
  {responsavel: "WALLACE", nome: "WALLACE", tipo: "Adulto", contato: "467603248", data: "31/10/2025", idade: 29}
];

const TAREFAS_INICIAIS = [
  {id: 1, titulo: "Confirmar buffet", descricao: "Ligar para confirmar o cardápio e horário", categoria: "Decoração", concluida: false},
  {id: 2, titulo: "Comprar flores", descricao: "Arranjos para as mesas principais", categoria: "Decoração", concluida: false},
  {id: 3, titulo: "Preparar centro de mesa", descricao: "10 centros de mesa com flores", categoria: "Decoração", concluida: true},
  {id: 4, titulo: "Confirmar DJ", descricao: "Verificar equipamento de som", categoria: "Festa", concluida: false},
  {id: 5, titulo: "Enviar convites", descricao: "Confirmar endereço de todos os convidados", categoria: "Festa", concluida: true}
];

export const EventosProvider = ({ children }) => {
  const [nomeUsuario, setNomeUsuario] = useState(() => {
    return localStorage.getItem('nomeUsuario') || '';
  });

  const [eventos, setEventos] = useState(() => {
    const saved = localStorage.getItem('eventos');
    return saved ? JSON.parse(saved) : [];
  });

  const [eventoAtual, setEventoAtual] = useState(() => {
    return localStorage.getItem('eventoAtual') || null;
  });

  const [dadosEvento, setDadosEvento] = useState(() => {
    if (eventoAtual) {
      const saved = localStorage.getItem(`evento_${eventoAtual}`);
      if (saved) return JSON.parse(saved);
    }
    return {
      convidados: CONVIDADOS_INICIAIS,
      tarefas: TAREFAS_INICIAIS,
      mesas: []
    };
  });

  // Salvar no localStorage quando houver mudanças
  useEffect(() => {
    if (nomeUsuario) {
      localStorage.setItem('nomeUsuario', nomeUsuario);
    }
  }, [nomeUsuario]);

  useEffect(() => {
    localStorage.setItem('eventos', JSON.stringify(eventos));
  }, [eventos]);

  useEffect(() => {
    if (eventoAtual) {
      localStorage.setItem('eventoAtual', eventoAtual);
    }
  }, [eventoAtual]);

  useEffect(() => {
    if (eventoAtual) {
      localStorage.setItem(`evento_${eventoAtual}`, JSON.stringify(dadosEvento));
    }
  }, [dadosEvento, eventoAtual]);

  const criarEvento = (nome) => {
    const novoEvento = {
      id: Date.now(),
      nome,
      dataCriacao: new Date().toISOString()
    };
    setEventos([...eventos, novoEvento]);
    return novoEvento;
  };

  const excluirEvento = (id) => {
    setEventos(eventos.filter(e => e.id !== id));
    localStorage.removeItem(`evento_${id}`);
    if (eventoAtual === id) {
      setEventoAtual(null);
    }
  };

  const selecionarEvento = (id) => {
    setEventoAtual(id);
    const saved = localStorage.getItem(`evento_${id}`);
    if (saved) {
      setDadosEvento(JSON.parse(saved));
    } else {
      setDadosEvento({
        convidados: CONVIDADOS_INICIAIS,
        tarefas: TAREFAS_INICIAIS,
        mesas: []
      });
    }
  };

  const atualizarDadosEvento = (novosDados) => {
    setDadosEvento(novosDados);
  };

  return (
    <EventosContext.Provider value={{
      nomeUsuario,
      setNomeUsuario,
      eventos,
      eventoAtual,
      dadosEvento,
      criarEvento,
      excluirEvento,
      selecionarEvento,
      atualizarDadosEvento
    }}>
      {children}
    </EventosContext.Provider>
  );
};

export const useEventos = () => {
  const context = useContext(EventosContext);
  if (!context) {
    throw new Error('useEventos deve ser usado dentro de EventosProvider');
  }
  return context;
};
