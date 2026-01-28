// ========== DADOS ==========
// Sistema de eventos
let eventoAtual = localStorage.getItem('eventoAtual');
let eventos = JSON.parse(localStorage.getItem('eventos')) || [];

// Se não há evento selecionado, redirecionar para eventos.html
if (!eventoAtual) {
    window.location.href = 'eventos.html';
}

// Carregar dados do evento atual
let dadosEvento = JSON.parse(localStorage.getItem(`evento_${eventoAtual}`)) || {
    convidados: [],
    tarefas: [],
    mesas: []
};

let convidados = dadosEvento.convidados.length > 0 ? dadosEvento.convidados : [
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

let tarefas = dadosEvento.tarefas.length > 0 ? dadosEvento.tarefas : [
    {id: 1, titulo: "Confirmar buffet", descricao: "Ligar para confirmar o cardápio e horário", categoria: "Decoração", concluida: false},
    {id: 2, titulo: "Comprar flores", descricao: "Arranjos para as mesas principais", categoria: "Decoração", concluida: false},
    {id: 3, titulo: "Preparar centro de mesa", descricao: "10 centros de mesa com flores", categoria: "Decoração", concluida: true},
    {id: 4, titulo: "Confirmar DJ", descricao: "Verificar equipamento de som", categoria: "Festa", concluida: false},
    {id: 5, titulo: "Enviar convites", descricao: "Confirmar endereço de todos os convidados", categoria: "Festa", concluida: true}
];

let mesas = dadosEvento.mesas.length > 0 ? dadosEvento.mesas : [
    {id: 1, nome: "Mesa 1", capacidade: 8, pessoas: []},
    {id: 2, nome: "Mesa 2", capacidade: 8, pessoas: []},
    {id: 3, nome: "Mesa 3", capacidade: 8, pessoas: []},
    {id: 4, nome: "Mesa 4", capacidade: 8, pessoas: []},
    {id: 5, nome: "Mesa 5", capacidade: 8, pessoas: []}
];

// Função para salvar dados
function salvarDados() {
    dadosEvento = {
        convidados,
        tarefas,
        mesas
    };
    localStorage.setItem(`evento_${eventoAtual}`, JSON.stringify(dadosEvento));
    
    // Atualizar contadores no evento
    const eventoIndex = eventos.findIndex(e => e.id == eventoAtual);
    if (eventoIndex !== -1) {
        eventos[eventoIndex].convidados = convidados.length;
        eventos[eventoIndex].tarefas = tarefas.length;
        eventos[eventoIndex].mesas = mesas.length;
        localStorage.setItem('eventos', JSON.stringify(eventos));
    }
}

// ========== NAVEGAÇÃO ==========
const menuItems = document.querySelectorAll('.menu-item');
const pages = document.querySelectorAll('.page');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        const targetPage = item.dataset.page;
        
        menuItems.forEach(m => m.classList.remove('active'));
        item.classList.add('active');
        
        pages.forEach(p => p.classList.remove('active'));
        document.getElementById(targetPage).classList.add('active');
        
        if (targetPage === 'convidados') {
            atualizarConvidados();
        } else if (targetPage === 'tarefas') {
            renderTarefas();
        } else if (targetPage === 'mesas') {
            renderMesas();
        } else if (targetPage === 'original') {
            // Redireciona para index.html original
            window.location.href = 'index.html';
        } else if (targetPage === 'eventos') {
            // Voltar para lista de eventos
            console.log('Navegando para eventos.html');
            window.location.href = 'eventos.html';
        }
    });
});

// ========== PÁGINA CONVIDADOS ==========
let filtroAtual = 'todos';
let buscaAtual = '';
let modoVisualizacao = 'cards'; // 'cards' ou 'lista'
let convidadoEditando = null;

function atualizarStats() {
    const total = convidados.length;
    const adultos = convidados.filter(c => c.tipo === 'Adulto').length;
    const criancas = convidados.filter(c => c.tipo === 'Criança').length;
    
    document.getElementById('stat-total').textContent = total;
    document.getElementById('stat-adultos').textContent = adultos;
    document.getElementById('stat-criancas').textContent = criancas;
}

function toggleVisualizacao() {
    modoVisualizacao = modoVisualizacao === 'cards' ? 'lista' : 'cards';
    const container = document.getElementById('convidados-container');
    const btnToggle = document.getElementById('btn-toggle-view');
    
    if (modoVisualizacao === 'lista') {
        container.classList.add('modo-lista');
        btnToggle.innerHTML = '📋 Modo Cards';
    } else {
        container.classList.remove('modo-lista');
        btnToggle.innerHTML = '📋 Modo Lista';
    }
    
    atualizarConvidados();
}

function filtrarConvidados(tipo) {
    filtroAtual = tipo;
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    const tabs = document.querySelectorAll('.tab');
    if (tipo === 'todos') tabs[0].classList.add('active');
    else if (tipo === 'adultos') tabs[1].classList.add('active');
    else if (tipo === 'criancas') tabs[2].classList.add('active');
    atualizarConvidados();
}

function buscarConvidados(termo) {
    buscaAtual = termo.toLowerCase();
    atualizarConvidados();
}

function atualizarConvidados() {
    let dados = [...convidados];
    
    // Aplicar filtro de tipo
    if (filtroAtual === 'adultos') {
        dados = dados.filter(c => c.tipo === 'Adulto');
    } else if (filtroAtual === 'criancas') {
        dados = dados.filter(c => c.tipo === 'Criança');
    }
    
    // Aplicar busca
    if (buscaAtual) {
        dados = dados.filter(c => 
            c.nome.toLowerCase().includes(buscaAtual) ||
            c.responsavel.toLowerCase().includes(buscaAtual)
        );
    }
    
    renderConvidados(dados);
}

function renderConvidados(dados) {
    const container = document.getElementById('convidados-container');
    
    if (dados.length === 0) {
        container.innerHTML = '<p style="text-align:center;color:#999;padding:40px;">Nenhum convidado encontrado</p>';
        return;
    }
    
    const classeModelo = modoVisualizacao === 'lista' ? 'modo-lista' : '';
    
    container.innerHTML = dados.map((c) => {
        const indexOriginal = convidados.findIndex(conv => conv.nome === c.nome && conv.responsavel === c.responsavel && conv.contato === c.contato);
        return `
        <div class="convidado-card ${classeModelo}" data-index="${indexOriginal}">
            <button class="btn-editar" onclick="event.stopPropagation(); iniciarEdicao(${indexOriginal})">✏️</button>
            <div class="convidado-header">
                <div class="convidado-nome">
                    <span class="campo-editavel" data-campo="nome">${c.nome}</span>
                </div>
                <span class="badge badge-${c.tipo.toLowerCase()}">${c.tipo}</span>
            </div>
            <div class="convidado-info">🎂 Idade: <span class="campo-editavel" data-campo="idade">${c.idade || 'N/A'}</span> anos</div>
            <div class="convidado-info">👤 Responsável: <span class="campo-editavel" data-campo="responsavel">${c.responsavel}</span></div>
            ${c.contato ? `<div class="convidado-info">📞 <span class="campo-editavel" data-campo="contato">${c.contato}</span></div>` : '<div class="convidado-info">📞 <span class="campo-editavel" data-campo="contato">Sem contato</span></div>'}
            <div class="convidado-info">📅 ${formatarData(c.data)}</div>
            <div class="acoes-edicao">
                <button class="btn btn-primary" onclick="event.stopPropagation(); salvarEdicao(${indexOriginal})">💾 Salvar</button>
                <button class="btn btn-secondary" onclick="event.stopPropagation(); cancelarEdicao()">❌ Cancelar</button>
                <button class="btn btn-secondary" onclick="event.stopPropagation(); excluirConvidado(${indexOriginal})" style="background: #dc3545; color: white; border: none;">🗑️ Excluir</button>
            </div>
        </div>
    `}).join('');
}

function iniciarEdicao(index) {
    if (convidadoEditando !== null) {
        cancelarEdicao();
    }
    
    convidadoEditando = index;
    const card = document.querySelector(`[data-index="${index}"]`);
    card.classList.add('editando');
    
    // Tornar campos editáveis
    card.querySelectorAll('.campo-editavel').forEach(campo => {
        campo.contentEditable = true;
        campo.style.cursor = 'text';
    });
}

function salvarEdicao(index) {
    const card = document.querySelector(`[data-index="${index}"]`);
    const campos = card.querySelectorAll('.campo-editavel');
    
    campos.forEach(campo => {
        const nomeCampo = campo.dataset.campo;
        const novoValor = campo.textContent.trim();
        
        if (nomeCampo === 'idade') {
            convidados[index][nomeCampo] = parseInt(novoValor) || 0;
        } else {
            convidados[index][nomeCampo] = novoValor;
        }
    });
    
    cancelarEdicao();
    salvarDados();
    atualizarStats();
    atualizarConvidados();
    alert('Alterações salvas com sucesso!');
}

function cancelarEdicao() {
    if (convidadoEditando !== null) {
        const card = document.querySelector(`[data-index="${convidadoEditando}"]`);
        if (card) {
            card.classList.remove('editando');
            card.querySelectorAll('.campo-editavel').forEach(campo => {
                campo.contentEditable = false;
                campo.style.cursor = 'default';
            });
        }
        convidadoEditando = null;
    }
}

function excluirConvidado(index) {
    if (confirm('Deseja realmente excluir este convidado?')) {
        convidados.splice(index, 1);
        salvarDados();
        atualizarStats();
        atualizarConvidados();
        convidadoEditando = null;
        alert('Convidado excluído com sucesso!');
    }
}

function formatarData(data) {
    if (!data || data === '-') return 'Não informada';
    // Se já está no formato dd/mm/yyyy, retorna direto
    if (data.includes('/')) return data;
    // Se está no formato yyyy-mm-dd, converte
    const [ano, mes, dia] = data.split('-');
    return `${dia}/${mes}/${ano}`;
}

// ========== MODAIS ==========
function abrirModalConvidado() {
    document.getElementById('modal-convidado').classList.add('active');
}

function abrirModalImportar() {
    document.getElementById('modal-importar').classList.add('active');
}

function fecharModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
    
    // Limpar preview se for modal de importação
    if (modalId === 'modal-importar') {
        document.getElementById('input-arquivo').value = '';
        document.getElementById('preview-importacao').style.display = 'none';
        document.getElementById('btn-confirmar-importacao').style.display = 'none';
        dadosImportacao = [];
    }
}

function salvarConvidado() {
    const nome = document.getElementById('input-nome').value.trim();
    const idade = document.getElementById('input-idade').value;
    const tipo = document.getElementById('input-tipo').value;
    const contato = document.getElementById('input-contato').value.trim();
    const responsavel = document.getElementById('input-responsavel').value.trim();
    const data = new Date().toISOString().split('T')[0];
    
    if (!nome) {
        alert('Por favor, preencha o nome do convidado');
        return;
    }
    
    if (!idade || idade < 0) {
        alert('Por favor, informe uma idade válida');
        return;
    }
    
    if (tipo === 'Criança' && !responsavel) {
        alert('Por favor, informe o responsável pela criança');
        return;
    }
    
    const novoConvidado = {
        nome,
        idade: parseInt(idade),
        tipo,
        contato,
        responsavel: tipo === 'Criança' ? responsavel : nome.split(' ')[0],
        data
    };
    
    convidados.push(novoConvidado);
    
    // Salvar dados
    salvarDados();
    
    // Limpar campos
    document.getElementById('input-nome').value = '';
    document.getElementById('input-idade').value = '';
    document.getElementById('input-contato').value = '';
    document.getElementById('input-responsavel').value = '';
    document.getElementById('input-tipo').value = 'Adulto';
    document.getElementById('grupo-responsavel').style.display = 'none';
    
    fecharModal('modal-convidado');
    atualizarStats();
    atualizarConvidados();
    alert('Convidado adicionado com sucesso!');
}

// Função para mostrar/ocultar campo responsável
function toggleResponsavel() {
    const tipo = document.getElementById('input-tipo').value;
    const grupoResponsavel = document.getElementById('grupo-responsavel');
    
    if (tipo === 'Criança') {
        grupoResponsavel.style.display = 'block';
    } else {
        grupoResponsavel.style.display = 'none';
        document.getElementById('input-responsavel').value = '';
    }
}

// ========== PÁGINA TAREFAS ==========
function renderTarefas() {
    const container = document.getElementById('tarefas-lista');
    
    container.innerHTML = tarefas.map(t => `
        <div class="tarefa-item ${t.concluida ? 'concluida' : ''}" data-id="${t.id}">
            <div class="tarefa-header">
                <input type="checkbox" class="tarefa-checkbox" ${t.concluida ? 'checked' : ''} 
                    onchange="toggleTarefa(${t.id})">
                <div class="tarefa-content">
                    <div class="tarefa-titulo">${t.titulo}</div>
                    <div class="tarefa-descricao">${t.descricao}</div>
                    <span class="tarefa-categoria">${t.categoria}</span>
                </div>
                <div class="tarefa-actions">
                    <button class="btn-icon" onclick="editarTarefa(${t.id})">✏️</button>
                    <button class="btn-icon" onclick="deletarTarefa(${t.id})">🗑️</button>
                </div>
            </div>
        </div>
    `).join('');
}

function toggleTarefa(id) {
    const tarefa = tarefas.find(t => t.id === id);
    if (tarefa) {
        tarefa.concluida = !tarefa.concluida;
        salvarDados();
        renderTarefas();
        atualizarStatsTarefas();
    }
}

function deletarTarefa(id) {
    if (confirm('Deseja realmente excluir esta tarefa?')) {
        tarefas = tarefas.filter(t => t.id !== id);
        salvarDados();
        renderTarefas();
        atualizarStatsTarefas();
    }
}

function editarTarefa(id) {
    const tarefa = tarefas.find(t => t.id === id);
    if (tarefa) {
        const novoTitulo = prompt('Novo título:', tarefa.titulo);
        if (novoTitulo) {
            tarefa.titulo = novoTitulo;
            salvarDados();
            renderTarefas();
        }
    }
}

function abrirModalTarefa() {
    document.getElementById('modal-tarefa').classList.add('active');
}

function abrirModalTarefa() {
    document.getElementById('modal-tarefa').classList.add('active');
}

function salvarTarefa() {
    const titulo = document.getElementById('input-tarefa-titulo').value;
    const descricao = document.getElementById('input-tarefa-desc').value;
    const categoria = document.getElementById('input-tarefa-categoria').value;
    
    if (!titulo) {
        alert('Preencha o título da tarefa');
        return;
    }
    
    const novaId = Math.max(...tarefas.map(t => t.id), 0) + 1;
    tarefas.push({
        id: novaId,
        titulo,
        descricao,
        categoria,
        concluida: false
    });
    
    document.getElementById('input-tarefa-titulo').value = '';
    document.getElementById('input-tarefa-desc').value = '';
    
    // Salvar dados
    salvarDados();
    
    fecharModal('modal-tarefa');
    renderTarefas();
    atualizarStatsTarefas();
    alert('Tarefa adicionada com sucesso!');
}

function atualizarStatsTarefas() {
    const total = tarefas.length;
    const concluidas = tarefas.filter(t => t.concluida).length;
    const pendentes = total - concluidas;
    
    document.getElementById('totalTarefas').textContent = total;
    document.getElementById('tarefasConcluidas').textContent = concluidas;
    document.getElementById('tarefasPendentes').textContent = pendentes;
}

// ========== PÁGINA MESAS ==========
let sortables = [];

function renderMesas() {
    // Pessoas sem mesa
    const pessoasComMesa = [];
    mesas.forEach(m => {
        pessoasComMesa.push(...m.pessoas);
    });
    
    const pessoasSemMesa = convidados.filter(c => 
        !pessoasComMesa.includes(c.nome)
    );
    
    const poolContainer = document.getElementById('pessoas-pool');
    if (poolContainer) {
        poolContainer.innerHTML = pessoasSemMesa.map(p => `
            <div class="pessoa-tag" data-nome="${p.nome}">
                ${p.nome} <span class="badge badge-${p.tipo.toLowerCase()}">${p.tipo}</span>
            </div>
        `).join('');
    }
    
    // Mesas
    const container = document.getElementById('mesas-container');
    if (container) {
        container.innerHTML = mesas.map(m => `
            <div class="mesa-card">
                <div class="mesa-header">
                    <div>
                        <div class="mesa-titulo">${m.nome}</div>
                        <div class="mesa-capacidade">${m.pessoas.length}/${m.capacidade} pessoas</div>
                    </div>
                    <button class="btn-remove-mesa" onclick="removerMesa(${m.id})">🗑️</button>
                </div>
                <div class="mesa-pessoas" data-mesa-id="${m.id}">
                    ${m.pessoas.map(p => {
                        const convidado = convidados.find(c => c.nome === p);
                        if (!convidado) return '';
                        return `<div class="pessoa-tag" data-nome="${p}">
                            ${p} <span class="badge badge-${convidado.tipo.toLowerCase()}">${convidado.tipo}</span>
                        </div>`;
                    }).join('')}
                </div>
            </div>
        `).join('');
    }
    
    // Destruir sortables antigos
    sortables.forEach(s => {
        try { s.destroy(); } catch(e) {}
    });
    sortables = [];
    
    // Inicializar Sortable.js
    const pessoasPoolEl = document.getElementById('pessoas-pool');
    if (pessoasPoolEl && typeof Sortable !== 'undefined') {
        sortables.push(new Sortable(pessoasPoolEl, {
            group: 'pessoas',
            animation: 150,
            onEnd: salvarMudancas
        }));
        
        document.querySelectorAll('.mesa-pessoas').forEach(mesaEl => {
            sortables.push(new Sortable(mesaEl, {
                group: 'pessoas',
                animation: 150,
                onEnd: salvarMudancas
            }));
        });
    }
}

function salvarMudancas() {
    // Atualizar arrays de pessoas nas mesas
    mesas.forEach(mesa => {
        const mesaEl = document.querySelector(`[data-mesa-id="${mesa.id}"]`);
        if (mesaEl) {
            const pessoasTags = mesaEl.querySelectorAll('.pessoa-tag');
            mesa.pessoas = Array.from(pessoasTags).map(tag => tag.dataset.nome);
        }
    });
    
    // Salvar dados e re-renderizar
    salvarDados();
    renderMesas();
}

function adicionarMesa() {
    const novoId = Math.max(...mesas.map(m => m.id), 0) + 1;
    const novoNome = prompt('Nome da mesa:', `Mesa ${novoId}`);
    
    if (!novoNome) return;
    
    const capacidade = parseInt(prompt('Capacidade da mesa:', '8'));
    
    if (capacidade > 0) {
        mesas.push({
            id: novoId,
            nome: novoNome,
            capacidade: capacidade,
            pessoas: []
        });
        salvarDados();
        renderMesas();
    }
}

function removerMesa(id) {
    if (confirm('Deseja realmente remover esta mesa? As pessoas serão movidas de volta para o pool.')) {
        mesas = mesas.filter(m => m.id !== id);
        salvarDados();
        renderMesas();
    }
}

// ========== INICIALIZAÇÃO ==========
window.addEventListener('DOMContentLoaded', () => {
    // Mostrar nome do evento no título
    const evento = eventos.find(e => e.id == eventoAtual);
    if (evento) {
        document.querySelector('.sidebar .logo h2').innerHTML = `🎉 ${evento.nome}`;
    }
    
    atualizarStats();
    atualizarConvidados();
    atualizarStatsTarefas();
});

// Fechar modal ao clicar fora
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
    }
});

// ========== IMPORTAÇÃO DE ARQUIVOS ==========
let dadosImportacao = [];

function processarArquivo() {
    const input = document.getElementById('input-arquivo');
    const arquivo = input.files[0];
    
    if (!arquivo) return;
    
    const nomeArquivo = arquivo.name.toLowerCase();
    
    if (nomeArquivo.endsWith('.zip')) {
        alert('Para arquivos ZIP, primeiro extraia o conteúdo e importe o arquivo CSV ou TXT.');
        input.value = '';
        return;
    }
    
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const conteudo = e.target.result;
        dadosImportacao = parsearArquivo(conteudo);
        
        if (dadosImportacao.length > 0) {
            mostrarPreview(dadosImportacao);
            document.getElementById('btn-confirmar-importacao').style.display = 'block';
        } else {
            alert('Não foi possível processar o arquivo. Verifique o formato.');
            input.value = '';
        }
    };
    
    reader.readAsText(arquivo);
}

function parsearArquivo(conteudo) {
    const linhas = conteudo.split('\n').filter(l => l.trim());
    const dados = [];
    
    // Tentar detectar se tem cabeçalho
    const primeiraLinha = linhas[0].toLowerCase();
    const temCabecalho = primeiraLinha.includes('responsavel') || 
                         primeiraLinha.includes('nome') || 
                         primeiraLinha.includes('tipo');
    
    const inicio = temCabecalho ? 1 : 0;
    
    for (let i = inicio; i < linhas.length; i++) {
        const linha = linhas[i].trim();
        if (!linha) continue;
        
        // Separar por vírgula, ponto-e-vírgula ou tabulação
        let partes = linha.includes('\t') ? linha.split('\t') : 
                     linha.includes(';') ? linha.split(';') : 
                     linha.split(',');
        
        partes = partes.map(p => p.trim().replace(/^["']|["']$/g, ''));
        
        if (partes.length >= 3) {
            const convidado = {
                responsavel: partes[0] || 'Não informado',
                nome: partes[1] || 'Sem nome',
                tipo: partes[2] || 'Adulto',
                contato: partes[3] || '',
                data: partes[4] || new Date().toISOString().split('T')[0],
                idade: partes[5] ? parseInt(partes[5]) : null
            };
            
            // Normalizar tipo
            if (convidado.tipo.toLowerCase().includes('crian')) {
                convidado.tipo = 'Criança';
            } else {
                convidado.tipo = 'Adulto';
            }
            
            dados.push(convidado);
        }
    }
    
    return dados;
}

function mostrarPreview(dados) {
    const preview = document.getElementById('preview-importacao');
    const conteudo = document.getElementById('preview-conteudo');
    
    const html = `
        <p style="margin-bottom: 10px;"><strong>${dados.length} convidado(s) encontrado(s)</strong></p>
        <table style="width: 100%; border-collapse: collapse; font-size: 0.9em;">
            <thead>
                <tr style="background: #667eea; color: white;">
                    <th style="padding: 8px; text-align: left;">Responsável</th>
                    <th style="padding: 8px; text-align: left;">Nome</th>
                    <th style="padding: 8px; text-align: left;">Tipo</th>
                    <th style="padding: 8px; text-align: left;">Contato</th>
                </tr>
            </thead>
            <tbody>
                ${dados.slice(0, 10).map(d => `
                    <tr style="border-bottom: 1px solid #dee2e6;">
                        <td style="padding: 8px;">${d.responsavel}</td>
                        <td style="padding: 8px;">${d.nome}</td>
                        <td style="padding: 8px;">${d.tipo}</td>
                        <td style="padding: 8px;">${d.contato || '-'}</td>
                    </tr>
                `).join('')}
                ${dados.length > 10 ? `<tr><td colspan="4" style="padding: 8px; text-align: center; color: #999;">... e mais ${dados.length - 10} convidado(s)</td></tr>` : ''}
            </tbody>
        </table>
    `;
    
    conteudo.innerHTML = html;
    preview.style.display = 'block';
}

function confirmarImportacao() {
    if (dadosImportacao.length === 0) {
        alert('Nenhum dado para importar');
        return;
    }
    
    // Adicionar todos os convidados
    convidados.push(...dadosImportacao);
    
    // Salvar dados
    salvarDados();
    
    fecharModal('modal-importar');
    atualizarStats();
    atualizarConvidados();
    
    alert(`${dadosImportacao.length} convidado(s) importado(s) com sucesso!`);
    dadosImportacao = [];
}
