# 📋 Documentação do Projeto - Lista de Convidados

## 📖 Índice
1. [Visão Geral](#visão-geral)
2. [Estrutura do Projeto](#estrutura-do-projeto)
3. [Funcionalidades](#funcionalidades)
4. [Arquivos do Projeto](#arquivos-do-projeto)
5. [Como Modificar Dados](#como-modificar-dados)
6. [Personalização Visual](#personalização-visual)
7. [Geração de PDF](#geração-de-pdf)
8. [Tecnologias Utilizadas](#tecnologias-utilizadas)
9. [Como Usar](#como-usar)

---

## 🎯 Visão Geral

Este é um sistema web para gerenciamento e visualização de lista de convidados para eventos. O projeto permite:
- Visualizar todos os convidados em uma tabela organizada
- Buscar convidados por nome ou responsável
- Filtrar por tipo (Adulto/Criança)
- Gerar PDF profissional da lista completa
- Visualização responsiva para mobile

---

## 📁 Estrutura do Projeto

```
convidados/
│
├── index.html              # Página principal da aplicação
├── style.css              # Estilos e design responsivo
├── script.js              # Lógica JavaScript e funcionalidades
├── baixar-codigo.html     # Utilitário para baixar código em PDF
├── gerar-codigo-pdf.html  # Alternativa para gerar PDF do código
└── DOCUMENTACAO.md        # Este arquivo
```

---

## ⚙️ Funcionalidades

### 1. **Visualização de Convidados**
- Tabela organizada com todos os convidados
- Estatísticas em tempo real (Total, Adultos, Crianças)
- Badges coloridos para identificação visual

### 2. **Sistema de Busca**
- Campo de busca que filtra por nome ou responsável
- Busca em tempo real (enquanto digita)
- Atualiza estatísticas automaticamente

### 3. **Filtros**
- Filtrar apenas Adultos
- Filtrar apenas Crianças
- Ver todos os convidados

### 4. **Geração de PDF**
- PDF com design profissional
- Ordenação alfabética automática
- Visual similar ao site
- Estatísticas incluídas
- Numeração de páginas

### 5. **Responsividade Mobile**
- Layout otimizado para celular
- Scroll horizontal suave
- Primeira coluna fixa ao rolar
- Botões e campos de fácil toque

---

## 📄 Arquivos do Projeto

### **index.html** - Estrutura Principal

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Convidados</title>
    <link rel="stylesheet" href="style.css">
    <!-- Bibliotecas para PDF -->
    <script src="jspdf.umd.min.js"></script>
    <script src="jspdf.plugin.autotable.min.js"></script>
</head>
<body>
    <!-- Container principal -->
    <div class="container">
        <!-- Cabeçalho com estatísticas -->
        <!-- Controles (botão, busca, filtro) -->
        <!-- Tabela de convidados -->
    </div>
    <script src="script.js"></script>
</body>
</html>
```

**Componentes principais:**
- `.header` - Cabeçalho com título e estatísticas
- `.controls` - Área de controles (botão PDF, busca, filtro)
- `.table-container` - Container da tabela de convidados

---

### **style.css** - Estilos e Design

#### **Estrutura de Cores**
```css
/* Cores principais do projeto */
Gradiente roxo: #667eea → #764ba2
Cor primária: #667eea (102, 126, 234)
Fundo alternado: #f8f9fa (248, 249, 250)
Borda: #e9ecef (233, 236, 239)
```

#### **Seções do CSS**

1. **Reset e Body** (linhas 1-11)
   - Reset de margens e padding
   - Fundo gradiente
   - Fonte padrão

2. **Container Principal** (linhas 13-20)
   - Largura máxima: 1200px
   - Fundo branco
   - Bordas arredondadas
   - Sombra

3. **Cabeçalho** (linhas 22-61)
   - Fundo gradiente
   - Estatísticas com boxes
   - Layout flexível

4. **Controles** (linhas 63-122)
   - Botão de download
   - Campo de busca
   - Select de filtro

5. **Tabela** (linhas 124-171)
   - Cabeçalho fixo
   - Linhas hover
   - Badges coloridos

6. **Responsividade Mobile** (linhas 193-280)
   - Adaptações para tela pequena
   - Primeira coluna fixa
   - Scroll otimizado

---

### **script.js** - Lógica da Aplicação

#### **1. Array de Convidados** (linhas 1-75)

```javascript
const convidados = [
    {
        responsavel: "ANDERSON",
        nome: "ANDERSON",
        tipo: "Adulto",
        contato: "(21) 97037-7417",
        data: "16/12/2025"
    },
    // ... mais convidados
];
```

**Estrutura de cada convidado:**
- `responsavel`: Nome do responsável pelo grupo
- `nome`: Nome do convidado
- `tipo`: "Adulto" ou "Criança"
- `contato`: Telefone de contato
- `data`: Data de confirmação (ou "-" se não confirmado)

#### **2. Funções Principais**

**a) `gerarPDF()` (linhas 79-226)**
- Cria documento PDF usando jsPDF
- Adiciona cabeçalho com gradiente
- Cria boxes de estatísticas
- Gera tabela com dados ordenados
- Adiciona rodapé com paginação

**b) `renderTable(data)` (linhas 228-243)**
- Renderiza a tabela na página
- Cria linhas HTML para cada convidado
- Aplica badges coloridos
- Atualiza estatísticas

**c) `updateStats(data)` (linhas 245-252)**
- Calcula total de adultos e crianças
- Atualiza números nas estatísticas
- Chamada após filtros/busca

**d) `filterData()` (linhas 254-265)**
- Filtra convidados por busca e tipo
- Combina filtro de texto e select
- Re-renderiza tabela com dados filtrados

**e) `mostrarNotificacao(mensagem)` (linhas 271-281)**
- Exibe notificação temporária
- Animação de entrada e saída
- Remove elemento após 2.5s

#### **3. Event Listeners** (linhas 267-269)
- Busca em tempo real
- Mudança de filtro
- Inicialização da tabela

---

## 🔧 Como Modificar Dados

### **Adicionar Novos Convidados**

**Localização:** `script.js` - linhas 1-75

**Passo a passo:**

1. Abra o arquivo `script.js`
2. Localize o array `convidados`
3. Adicione um novo objeto ao final:

```javascript
const convidados = [
    // ... convidados existentes
    {
        responsavel: "NOME DO RESPONSAVEL",
        nome: "NOME DO CONVIDADO",
        tipo: "Adulto",  // ou "Criança"
        contato: "(XX) XXXXX-XXXX",
        data: "DD/MM/YYYY"  // ou "-" se não confirmado
    }
];
```

**Exemplo prático:**
```javascript
{
    responsavel: "MARIA",
    nome: "MARIA SILVA",
    tipo: "Adulto",
    contato: "(21) 99999-9999",
    data: "24/01/2026"
}
```

### **Editar Convidados Existentes**

1. Localize o convidado no array pelo nome
2. Modifique os campos desejados
3. Salve o arquivo

**Exemplo:**
```javascript
// ANTES
{responsavel: "ANDERSON", nome: "ANDERSON", tipo: "Adulto", ...}

// DEPOIS
{responsavel: "ANDERSON SILVA", nome: "ANDERSON SILVA", tipo: "Adulto", ...}
```

### **Remover Convidados**

1. Localize a linha do convidado
2. Delete a linha completa (incluindo as vírgulas)
3. Salve o arquivo

---

## 🎨 Personalização Visual

### **Alterar Cores do Tema**

**Localização:** `style.css` e `script.js`

#### **No CSS:**

```css
/* ALTERAR GRADIENTE DE FUNDO */
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    /* Substitua #667eea e #764ba2 pelas cores desejadas */
}

/* ALTERAR COR DO CABEÇALHO */
.header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* ALTERAR COR DOS BADGES */
.badge-adulto {
    background: #d1ecf1;  /* Fundo azul claro */
    color: #0c5460;       /* Texto azul escuro */
}

.badge-crianca {
    background: #fff3cd;  /* Fundo amarelo claro */
    color: #856404;       /* Texto marrom */
}

/* ALTERAR COR DO BOTÃO */
.btn-download {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

#### **No JavaScript (PDF):**

```javascript
// Localizar linha 83 em script.js
const corPrimaria = [102, 126, 234];  // RGB da cor principal
const corSecundaria = [118, 75, 162]; // RGB da cor secundária
```

**Converter cores HEX para RGB:**
- Use sites como: https://www.rapidtables.com/convert/color/hex-to-rgb.html

### **Alterar Fontes**

```css
/* No style.css, linha 7 */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    /* Substitua por: 'Arial', 'Roboto', 'Open Sans', etc. */
}
```

### **Alterar Tamanho do Título**

```css
/* No style.css, linha 28 */
h1 {
    font-size: 2em;  /* Aumente ou diminua conforme necessário */
}
```

---

## 📄 Geração de PDF

### **Como Funciona**

1. **Usuário clica** no botão "📄 Baixar PDF"
2. **JavaScript captura** os dados filtrados atuais
3. **Ordena alfabeticamente** por nome
4. **Cria documento** usando biblioteca jsPDF
5. **Adiciona elementos visuais:**
   - Gradiente no topo
   - Boxes de estatísticas
   - Container branco
   - Barra de controles
   - Tabela formatada
6. **Gera rodapé** com numeração
7. **Salva arquivo** com nome personalizado

### **Personalizar PDF**

**Alterar nome do arquivo:**
```javascript
// Linha 221 em script.js
const nomeArquivo = `lista-convidados-${dataArquivo}.pdf`;
// Modifique para:
const nomeArquivo = `meu-evento-${dataArquivo}.pdf`;
```

**Alterar título do PDF:**
```javascript
// Linha 95 em script.js
doc.text('Lista de Convidados', 105, 14, { align: 'center' });
// Modifique para:
doc.text('Meu Evento 2026', 105, 14, { align: 'center' });
```

**Alterar tamanhos de fonte:**
```javascript
// Linhas 93-100 em script.js
doc.setFontSize(22);  // Título
doc.setFontSize(16);  // Números das estatísticas
doc.setFontSize(10);  // Cabeçalho da tabela
doc.setFontSize(9);   // Corpo da tabela
```

---

## 💻 Tecnologias Utilizadas

### **Front-end**
- **HTML5**: Estrutura semântica
- **CSS3**: Estilização e responsividade
  - Flexbox para layouts
  - Media queries para mobile
  - Gradientes e sombras
- **JavaScript (ES6+)**: Lógica da aplicação
  - Arrow functions
  - Template literals
  - Array methods (map, filter, sort)
  - Event listeners

### **Bibliotecas Externas**
- **jsPDF 2.5.1**: Geração de documentos PDF
  - CDN: cdnjs.cloudflare.com
- **jsPDF-AutoTable 3.5.31**: Tabelas em PDF
  - Plugin do jsPDF

### **Recursos**
- **Google Fonts**: Não usado (fontes do sistema)
- **CDN**: Cloudflare para bibliotecas
- **Armazenamento**: Dados em memória (array JavaScript)

---

## 🚀 Como Usar

### **Instalação**

1. **Baixe todos os arquivos** para uma pasta
2. **Não precisa instalar** nada - funciona no navegador
3. **Abra** `index.html` em qualquer navegador moderno

### **Uso Diário**

1. **Visualizar lista:**
   - Abra `index.html`
   - Veja todos os convidados na tabela

2. **Buscar convidado:**
   - Digite no campo "🔍 Buscar..."
   - A lista filtra automaticamente

3. **Filtrar por tipo:**
   - Use o select "Todos/Adultos/Crianças"
   - Combine com a busca

4. **Gerar PDF:**
   - Clique em "📄 Baixar PDF"
   - O PDF inclui os dados filtrados atuais
   - Arquivo salvo com data no nome

### **Manutenção**

**Atualizar lista:**
1. Abra `script.js`
2. Modifique o array `convidados`
3. Salve e atualize a página (F5)

**Mudar visual:**
1. Abra `style.css`
2. Altere cores, fontes, tamanhos
3. Salve e atualize a página

---

## 📱 Responsividade

### **Desktop (> 768px)**
- Layout em 1200px max-width
- Tabela completa visível
- Todos os controles em uma linha

### **Mobile (≤ 768px)**
- Padding reduzido
- Botão e campos em largura total
- Primeira coluna (Responsável) fixa
- Scroll horizontal suave
- Fonte de 16px (previne zoom no iOS)
- Títulos e estatísticas menores

---

## 🔍 Estrutura de Código

### **HTML - Hierarquia**
```
body
└── div.container
    ├── div.header
    │   ├── h1
    │   └── div.stats
    │       └── div.stat-box (x3)
    ├── div.controls
    │   ├── button.btn-download
    │   ├── input#searchInput
    │   └── select#filterTipo
    └── div.table-container
        └── table
            ├── thead
            └── tbody#tableBody
```

### **CSS - Seletores Importantes**
- `.container`: Container principal
- `.header`: Cabeçalho roxo
- `.stat-box`: Boxes de estatísticas
- `.btn-download`: Botão de PDF
- `.badge`: Badges Adulto/Criança
- `.responsavel`: Estilo do nome do responsável

### **JavaScript - Fluxo**
```
1. Carregamento
   ├── Define array de convidados
   └── Inicializa variável filteredData

2. Renderização inicial
   └── renderTable(convidados)

3. Interação do usuário
   ├── Digite na busca → filterData()
   ├── Mude o filtro → filterData()
   └── Clique em PDF → gerarPDF()

4. Atualização
   ├── filterData() → filteredData
   └── renderTable(filteredData)
```

---

## 🛠️ Solução de Problemas

### **PDF não gera**
- Verifique se as bibliotecas jsPDF estão carregando
- Abra Console do navegador (F12) e veja erros
- Confirme conexão com internet (CDN)

### **Busca não funciona**
- Verifique se o ID do input é `searchInput`
- Confirme que o evento está sendo adicionado

### **Tabela não aparece**
- Verifique se há dados no array `convidados`
- Abra Console e procure por erros
- Confirme que tbody tem ID `tableBody`

### **Responsividade com problemas**
- Limpe cache do navegador
- Teste em modo anônimo
- Verifique viewport meta tag no HTML

---

## 📊 Estatísticas do Projeto

- **Linhas de código:**
  - HTML: ~80 linhas
  - CSS: ~280 linhas
  - JavaScript: ~306 linhas
  
- **Peso dos arquivos:**
  - HTML: ~3KB
  - CSS: ~6KB
  - JavaScript: ~13KB
  - Total: ~22KB (sem bibliotecas)

- **Compatibilidade:**
  - Chrome 90+
  - Firefox 88+
  - Safari 14+
  - Edge 90+
  - Mobile browsers (iOS/Android)

---

## 📝 Notas Finais

### **Boas Práticas Implementadas**
✅ Código comentado e organizado
✅ Nomes descritivos de variáveis
✅ Separação de HTML, CSS e JS
✅ Responsividade mobile-first
✅ Acessibilidade básica
✅ Performance otimizada

### **Possíveis Melhorias Futuras**
- Adicionar backend para persistência
- Implementar edição inline
- Exportar para Excel
- Sistema de confirmação de presença
- Envio de convites por email
- Autenticação de usuários

---

**Desenvolvido em:** Janeiro de 2026
**Versão:** 1.0
**Licença:** Uso livre

Para dúvidas ou suporte, consulte esta documentação.
