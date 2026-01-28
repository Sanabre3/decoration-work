# 🎉 Sistema de Gerenciamento de Eventos

Sistema completo para planejamento e gestão de eventos, com controle de convidados, tarefas e organização de mesas.

## 🚀 Como Usar

### 1️⃣ Primeira Vez - Tela de Boas-Vindas

1. Abra o arquivo **`eventos.html`** no navegador
2. Digite seu nome na tela de boas-vindas
3. Clique em **"Entrar"**

### 2️⃣ Criar um Novo Evento

1. Clique no botão **"➕ Criar Novo Evento"**
2. Preencha:
   - **Nome do Evento** (obrigatório)
   - **Data do Evento** (obrigatório)
   - **Local** (opcional)
   - **Descrição** (opcional)
3. Clique em **"Criar Evento"**

### 3️⃣ Gerenciar um Evento

Ao clicar em um evento, você terá acesso a 4 seções:

#### 👥 **Convidados**
- **Visualizar**: Cards com nome, idade, tipo, responsável e contato
- **Filtrar**: Por todos/adultos/crianças
- **Buscar**: Por nome ou responsável
- **Adicionar**: 
  - Clique em "➕ Adicionar Convidado"
  - Preencha: Nome, Idade, Tipo, Contato
  - Para crianças, o campo "Responsável" aparece automaticamente
- **Importar**: 
  - Clique em "📁 Importar Arquivo"
  - Formatos aceitos: CSV, TXT
  - Formato: `Responsável,Nome,Tipo,Contato,Data,Idade`

#### ✓ **Tarefas**
- **Adicionar**: Clique em "➕ Nova Tarefa"
- **Concluir**: Marque o checkbox
- **Editar**: Clique no ícone ✏️
- **Excluir**: Clique no ícone 🗑️
- **Estatísticas**: Total, Concluídas e Pendentes

#### 🪑 **Mesas**
- **Criar Mesa**: Clique em "➕ Nova Mesa"
- **Organizar**: Arraste convidados entre o pool e as mesas
- **Capacidade**: Visualize quantas pessoas cada mesa comporta
- **Drag & Drop**: Interface intuitiva com arrastar e soltar

#### 📄 **Versão Original**
- Acesso à lista simples de convidados com geração de PDF

---

## 📂 Estrutura de Arquivos

```
📁 convidados/
├── 📄 eventos.html          → Tela inicial (boas-vindas + lista de eventos)
├── 📄 dashboard.html        → Dashboard principal do evento
├── 📄 dashboard.css         → Estilos do dashboard
├── 📄 dashboard.js          → Lógica do dashboard
├── 📄 index.html           → Versão original (lista simples)
├── 📄 style.css            → Estilos da versão original
├── 📄 script.js            → Scripts da versão original
├── 📄 DOCUMENTACAO.md      → Documentação técnica
└── 📁 backup-original/     → Backup dos arquivos originais
```

---

## 💾 Armazenamento

Os dados são salvos automaticamente no **localStorage** do navegador:
- **Nome do usuário**: Permanece entre sessões
- **Eventos criados**: Lista completa de eventos
- **Dados de cada evento**: Convidados, tarefas e mesas separados por evento

### ⚠️ Importante
- Os dados ficam salvos no navegador
- Para fazer backup, exporte os dados periodicamente
- Limpar cache do navegador remove todos os dados

---

## 🎨 Recursos

✅ **Interface Moderna**: Design responsivo com gradientes roxos  
✅ **Multi-Eventos**: Gerencie vários eventos simultaneamente  
✅ **Drag & Drop**: Organize mesas arrastando convidados  
✅ **Importação em Massa**: CSV e TXT suportados  
✅ **Geração de PDF**: Exporte lista de convidados  
✅ **Filtros e Busca**: Encontre informações rapidamente  
✅ **Estatísticas em Tempo Real**: Acompanhe números importantes  
✅ **Mobile Friendly**: Funciona perfeitamente em celulares  

---

## 🔄 Navegação

### De Eventos para Dashboard
- Clique no card de qualquer evento

### De Dashboard para Eventos
- Clique em "◀️ Voltar aos Eventos" no menu lateral

### De Dashboard para Versão Original
- Clique em "📄 Versão Original" no menu lateral

### De Versão Original para Dashboard
- Clique em "🎉 Abrir Dashboard" no topo

---

## 🛠️ Tecnologias

- **HTML5**: Estrutura semântica
- **CSS3**: Gradientes, flexbox, grid, animações
- **JavaScript ES6+**: Módulos, localStorage, drag & drop
- **jsPDF**: Geração de PDFs
- **Sortable.js**: Drag and drop nas mesas

---

## 📞 Suporte

Para dúvidas ou problemas:
1. Consulte a **DOCUMENTACAO.md** para detalhes técnicos
2. Verifique se está usando um navegador moderno (Chrome, Firefox, Edge)
3. Certifique-se de que o JavaScript está habilitado

---

## 🎯 Fluxo Recomendado

1. **Abra eventos.html** → Digite seu nome
2. **Crie um evento** → Defina nome, data e local
3. **Adicione convidados** → Manualmente ou via importação
4. **Crie tarefas** → Liste tudo que precisa fazer
5. **Organize mesas** → Arraste convidados para as mesas
6. **Acompanhe progresso** → Marque tarefas conforme conclui
7. **Gere PDF** → Exporte lista final de convidados

---

**Desenvolvido para facilitar o planejamento de eventos** 🎉
