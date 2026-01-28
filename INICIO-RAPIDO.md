# 🎯 Guia Rápido - Sistema de Gerenciamento de Eventos

## 🚀 Iniciar a Aplicação

### Versão React (Recomendada)
```bash
cd react-app
npm start
```
**Acesse:** http://localhost:3000 ✅ **JÁ ESTÁ RODANDO!**

### Versão HTML
Abra o arquivo: `versao-html/eventos.html` no navegador

---

## 📁 Onde Estão os Arquivos?

| Pasta | Conteúdo | Uso |
|-------|----------|-----|
| **react-app/** | Aplicação React moderna | 👍 **Use esta versão** |
| **versao-html/** | Código HTML/CSS/JS original | 📄 Referência |
| **backup-original/** | Backup histórico | 💾 Arquivamento |

---

## ✨ O Que Fazer Agora?

1. **Abrir navegador** em http://localhost:3000
2. **Digite seu nome** na primeira tela
3. **Criar evento** clicando em "➕ Novo Evento"
4. **Gerenciar:**
   - 👥 **Convidados** - Adicionar, editar (clique em ✏️), filtrar
   - ✓ **Tarefas** - Criar e marcar como concluída
   - 🪑 **Mesas** - Arrastar pessoas entre mesas
   - ◀️ **Voltar aos Eventos** - Retornar à lista de eventos

---

## 🐛 Problemas Resolvidos

✅ **Campos de convidados não editáveis** → Corrigido
✅ **Botão "Voltar aos Eventos" não funcionava** → Corrigido com useEffect
✅ **Organização dos arquivos** → Movidos para `versao-html/`

---

## 🔧 Comandos Úteis

```bash
# Iniciar aplicação
cd react-app
npm start

# Criar build de produção
npm run build

# Instalar dependências (se necessário)
npm install
```

---

## 📞 Funcionalidades Principais

### 👥 Convidados (75 pré-cadastrados)
- Filtros: Todos / Adultos / Crianças
- Busca por nome
- Edição inline (clique no ✏️)
- Toggle cards/lista
- Estatísticas em tempo real

### ✓ Tarefas
- Criar com título, descrição e categoria
- Marcar como concluída (checkbox)
- Excluir tarefas
- Contadores automáticos

### 🪑 Mesas
- Criar mesas com capacidade
- Arrastar pessoas entre mesas
- Pool de pessoas sem mesa
- Contagem automática

### 🎉 Multi-Eventos
- Criar quantos eventos quiser
- Dados independentes por evento
- Persistência automática (localStorage)

---

## 📊 Status Atual

| Item | Status |
|------|--------|
| Servidor React | ✅ Rodando em http://localhost:3000 |
| Arquivos organizados | ✅ Pasta `versao-html/` criada |
| Navegação "Voltar aos Eventos" | ✅ Corrigida |
| Edição de convidados | ✅ Funcional |
| Drag & drop de mesas | ✅ Funcional |

---

**Sistema pronto para uso! 🎉**

*Abra http://localhost:3000 e comece a usar!*
