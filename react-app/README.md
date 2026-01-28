# Sistema de Gerenciamento de Eventos - React

Sistema completo para gerenciamento de eventos desenvolvido em **React**, com funcionalidades de gestão de convidados, tarefas e organização de mesas.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces
- **React Router DOM** - Navegação entre páginas
- **React Beautiful DnD** - Drag and drop para organização de mesas
- **Context API** - Gerenciamento de estado global
- **LocalStorage** - Persistência de dados local

## 📦 Instalação

1. **Instalar dependências:**
```bash
cd react-app
npm install
```

2. **Iniciar o servidor de desenvolvimento:**
```bash
npm start
```

O aplicativo abrirá automaticamente em `http://localhost:3000`

## 🏗️ Estrutura do Projeto

```
react-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Convidados.js      # Gestão de convidados
│   │   ├── Tarefas.js          # Gestão de tarefas
│   │   ├── Tarefas.css
│   │   └── Mesas.js            # Organização de mesas
│   ├── context/
│   │   └── EventosContext.js   # Context API para estado global
│   ├── pages/
│   │   ├── Eventos.js          # Tela de seleção de eventos
│   │   ├── Eventos.css
│   │   ├── Dashboard.js        # Dashboard principal
│   │   └── Dashboard.css
│   ├── App.js                  # Componente principal
│   ├── App.css
│   ├── index.js                # Entry point
│   └── index.css
├── package.json
└── README.md
```

## ✨ Funcionalidades

### 1. **Tela de Eventos**
- Boas-vindas personalizadas
- Criação de múltiplos eventos
- Visualização de estatísticas (convidados, tarefas, mesas)
- Exclusão de eventos

### 2. **Gestão de Convidados**
- Adicionar, editar e excluir convidados
- Filtros: Todos / Adultos / Crianças
- Busca por nome ou responsável
- Visualização em cards ou lista
- **Edição inline** - Clique no botão ✏️ para editar
- 75 convidados pré-cadastrados

### 3. **Gestão de Tarefas**
- Criar, concluir e excluir tarefas
- Categorização (Decoração, Festa, Buffet, Outro)
- Contadores de tarefas totais, concluídas e pendentes
- Checkbox para marcar como concluída

### 4. **Organização de Mesas**
- Criar mesas com nome e capacidade personalizados
- **Drag and Drop** de convidados entre mesas
- Pool de pessoas sem mesa
- Contador de ocupação por mesa
- Visualização em tempo real

### 5. **Navegação**
- Sidebar com menu lateral
- Botão "Voltar aos Eventos"
- Navegação entre páginas sem reload

## 💾 Persistência de Dados

Todos os dados são salvos automaticamente no **localStorage** do navegador:

- `nomeUsuario` - Nome do usuário
- `eventos` - Lista de eventos
- `eventoAtual` - ID do evento selecionado
- `evento_{id}` - Dados completos de cada evento (convidados, tarefas, mesas)

## 🎨 Características Visuais

- **Tema:** Gradiente roxo (#667eea → #764ba2)
- **Design Responsivo:** Adaptável para mobile e desktop
- **Animações:** Transições suaves e efeitos hover
- **Modal System:** Modais para criação e edição
- **Badges:** Identificação visual de tipos (Adulto/Criança)

## 📝 Scripts Disponíveis

```bash
npm start       # Inicia servidor de desenvolvimento
npm run build   # Cria build de produção
npm test        # Executa testes
```

## 🔄 Migração da Versão HTML

Esta versão React mantém **100% das funcionalidades** da versão HTML original:

✅ Todos os 75 convidados importados
✅ Todas as tarefas iniciais mantidas
✅ Sistema de filtros preservado
✅ Edição inline de convidados
✅ Drag and drop de mesas
✅ Múltiplos eventos
✅ Persistência com localStorage

## 🐛 Problemas Conhecidos

Nenhum problema conhecido no momento. Se encontrar algum bug, por favor reporte.

## 📄 Licença

Projeto pessoal para gerenciamento de eventos.

---

**Desenvolvido com React ⚛️**
