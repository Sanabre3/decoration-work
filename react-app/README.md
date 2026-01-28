# Sistema de Gerenciamento de Eventos - React

Sistema completo para gerenciamento de eventos desenvolvido em **React**, com funcionalidades de gestão de convidados, tarefas, organização de mesas e geração de relatórios em PDF.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces
- **React Router DOM** - Navegação entre páginas
- **React Beautiful DnD** - Drag and drop para organização de mesas
- **jsPDF** - Geração de documentos PDF
- **jsPDF-AutoTable** - Criação de tabelas em PDF
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
│   │   ├── Dashboard.css
│   │   └── Relatorio.js        # Página de relatório PDF
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
- **📤 Importação de Arquivos** - Upload de convidados via CSV, TXT, XLSX, XLS
  - Suporta múltiplos delimitadores (vírgula, ponto-e-vírgula, tabulação)
  - Detecção automática de cabeçalho
  - Importação em massa com confirmação
- 75 convidados pré-cadastrados

### 3. **Gestão de Tarefas e Cronograma**
- **📋 Aba Tarefas:**
  - Criar, concluir e excluir tarefas
  - Categorização (Decoração, Festa, Buffet, Outro)
  - Contadores de tarefas totais, concluídas e pendentes
  - Checkbox para marcar como concluída
- **📅 Aba Cronograma (NOVO):**
  - Adicionar atividades com horário específico
  - Campo para responsável pela atividade
  - Lista ordenada automaticamente por horário
  - Marcar atividades como concluídas
  - Modal separado para gerenciamento

### 4. **Organização de Mesas**
- Criar mesas com nome e capacidade personalizados
- **Drag and Drop** de convidados entre mesas
- Pool de pessoas sem mesa
- **🔍 Filtros de Ordenação (NOVO):**
  - Ordem Original
  - Alfabética (A-Z)
  - Por Idade (maior para menor)
  - Por Tipo (Adultos primeiro, depois Crianças)
- Contador de ocupação por mesa
- Visualização em tempo real

### 5. **Relatório PDF** ⭐ **NOVO**
- **Página dedicada para geração de relatórios**
- Seleção de qualquer evento cadastrado
- **Estatísticas visuais em tempo real:**
  - Total de convidados
  - Divisão Adultos/Crianças
  - Número de mesas
  - Total de atividades no cronograma
- **Conteúdo do PDF:**
  - Lista completa de convidados em ordem alfabética
  - Classificação por tipo (Adulto/Criança)
  - Cronograma do evento ordenado por horário
  - Arrumação das mesas com capacidade e ocupação
  - Lista de pessoas sem mesa definida
  - Estatísticas gerais do evento
- Download direto em formato PDF profissional

### 6. **Navegação**
- Sidebar com menu lateral
- Botão **"Relatório PDF"** (substituiu "Versão Original")
- Botão "Voltar aos Eventos"
- Botão "Voltar" na página de relatório
- Navegação entre páginas sem reload

## 💾 Persistência de Dados

Todos os dados são salvos automaticamente no **localStorage** do navegador:

- `nomeUsuario` - Nome do usuário
- `eventos` - Lista de eventos
- `eventoAtual` - ID do evento selecionado
- `evento_{id}` - Dados completos de cada evento:
  - `convidados` - Lista de convidados
  - `tarefas` - Lista de tarefas
  - `cronograma` - Lista de atividades do cronograma
  - `mesas` - Configuração das mesas e alocação

## 🎨 Características Visuais

- **Tema:** Gradiente roxo (#667eea → #764ba2)
- **Design Responsivo:** Adaptável para mobile e desktop
- **Animações:** Transições suaves e efeitos hover
- **Modal System:** Modais para criação e edição
- **Badges:** Identificação visual de tipos (Adulto/Criança)
- **Cards Estatísticos:** Gradientes coloridos com informações em tempo real
- **Efeitos Interativos:** Transformações e sombras ao passar o mouse

## 📊 Formatos de Importação Suportados

### Upload de Convidados
O sistema aceita os seguintes formatos de arquivo:

- **.csv** - Comma Separated Values
- **.txt** - Texto com delimitadores
- **.xlsx** - Excel moderno
- **.xls** - Excel legado

**Formato esperado:**
```
Responsável,Nome,Tipo,Contato,Data,Idade
JOÃO,MARIA,Adulto,(21) 99999-9999,01/01/2026,30
JOÃO,PEDRO,Criança,(21) 99999-9999,01/01/2026,8
```

**Delimitadores aceitos:**
- Vírgula (`,`)
- Ponto-e-vírgula (`;`)
- Tabulação (`\t`)

## 📥 Como Usar o Relatório PDF

1. Acesse o menu lateral e clique em **"Relatório PDF"**
2. Selecione o evento desejado no dropdown
3. Visualize as estatísticas em tempo real
4. Clique em **"Baixar Relatório PDF"**
5. O PDF será gerado e baixado automaticamente com o nome `Relatorio_[Nome_do_Evento].pdf`

## 📝 Scripts Disponíveis

```bash
npm start       # Inicia servidor de desenvolvimento
npm run build   # Cria build de produção
npm test        # Executa testes
```

## 🔄 Migração da Versão HTML

Esta versão React mantém **100% das funcionalidades** da versão HTML original e adiciona novos recursos:

✅ Todos os 75 convidados importados  
✅ Todas as tarefas iniciais mantidas  
✅ Sistema de filtros preservado  
✅ Edição inline de convidados  
✅ Drag and drop de mesas  
✅ Múltiplos eventos  
✅ Persistência com localStorage  
⭐ **Upload de arquivos CSV/TXT/Excel** (NOVO)  
⭐ **Cronograma do evento** (NOVO)  
⭐ **Filtros avançados de ordenação** (NOVO)  
⭐ **Geração de relatórios em PDF** (NOVO)  

## 🆕 Novidades da Versão Atual

### Versão 2.0 - Janeiro 2026

**🎯 Principais Adições:**

1. **Sistema de Importação**
   - Upload em massa de convidados
   - Suporte para múltiplos formatos
   - Parsing inteligente com detecção de delimitadores

2. **Módulo de Cronograma**
   - Aba dedicada para timeline do evento
   - Horários organizados automaticamente
   - Acompanhamento de conclusão

3. **Filtros Inteligentes**
   - Ordenação alfabética
   - Ordenação por idade
   - Ordenação por tipo
   - Melhor organização visual

4. **Relatórios Profissionais**
   - Interface moderna com estatísticas
   - PDF formatado com tabelas
   - Visualização completa do evento
   - Download instantâneo

## 🐛 Problemas Conhecidos

Nenhum problema conhecido no momento. Se encontrar algum bug, por favor reporte.

## 🎓 Requisitos do Sistema

- **Node.js** 14.0 ou superior
- **npm** 6.0 ou superior
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- JavaScript habilitado
- LocalStorage habilitado

## 🔧 Dependências Principais

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.20.0",
  "react-beautiful-dnd": "^13.1.1",
  "jspdf": "^2.5.2",
  "jspdf-autotable": "^3.8.3"
}
```

## 📱 Funcionalidades Mobile

- Layout responsivo em todas as páginas
- Touch support para drag and drop
- Menus adaptáveis
- Formulários otimizados para mobile

## 🎯 Roadmap Futuro

- [ ] Exportar convidados para Excel
- [ ] Compartilhamento de eventos entre usuários
- [ ] Notificações e lembretes
- [ ] Integração com calendário
- [ ] Temas personalizáveis
- [ ] Modo escuro

## 📄 Licença

Projeto pessoal para gerenciamento de eventos.

---

**Desenvolvido com React ⚛️ | Versão 2.0 - Janeiro 2026**
