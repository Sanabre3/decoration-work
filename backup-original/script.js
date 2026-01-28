const convidados = [
    {responsavel: "ANDERSON", nome: "ANDERSON", tipo: "Adulto", contato: "(21) 97037-7417", data: "16/12/2025"},
    {responsavel: "ANDERSON", nome: "ELISANGELA", tipo: "Adulto", contato: "(21) 97037-7417", data: "16/12/2025"},
    {responsavel: "ANDERSON", nome: "INÊS", tipo: "Adulto", contato: "(21) 97037-7417", data: "16/12/2025"},
    {responsavel: "ANDERSON", nome: "LUISE", tipo: "Criança", contato: "(21) 97037-7417", data: "16/12/2025"},
    {responsavel: "ANDERSON", nome: "MILENA", tipo: "Adulto", contato: "(21) 97037-7417", data: "16/12/2025"},
    {responsavel: "ANDRÉIA", nome: "ANDRÉIA", tipo: "Adulto", contato: "(21) 98713-7026", data: "30/10/2025"},
    {responsavel: "ANDRÉIA", nome: "EDUARDA", tipo: "Criança", contato: "(21) 98713-7026", data: "30/10/2025"},
    {responsavel: "ANDRÉIA", nome: "SEVERINO", tipo: "Adulto", contato: "(21) 98713-7026", data: "30/10/2025"},
    {responsavel: "ANDREZA", nome: "ANDREZA", tipo: "Adulto", contato: "(21) 98260-5197", data: "30/10/2025"},
    {responsavel: "ANDREZA", nome: "ARTHUR", tipo: "Criança", contato: "(21) 98260-5197", data: "30/10/2025"},
    {responsavel: "ANDREZA", nome: "MANOELA", tipo: "Criança", contato: "(21) 98260-5197", data: "30/10/2025"},
    {responsavel: "ANDREZA", nome: "ROGERIO", tipo: "Adulto", contato: "(21) 98260-5197", data: "30/10/2025"},
    {responsavel: "CRIS", nome: "CRIS", tipo: "Adulto", contato: "(21) 98801-6569", data: "30/10/2025"},
    {responsavel: "CRIS", nome: "MARIA JULIA", tipo: "Criança", contato: "(21) 98801-6569", data: "30/10/2025"},
    {responsavel: "CRISTINE", nome: "CAIO", tipo: "Adulto", contato: "(21) 98827-9928", data: "30/10/2025"},
    {responsavel: "CRISTINE", nome: "CRISTIAN", tipo: "Adulto", contato: "(21) 98827-9928", data: "30/10/2025"},
    {responsavel: "CRISTINE", nome: "CRISTIANO", tipo: "Adulto", contato: "(21) 98827-9928", data: "30/10/2025"},
    {responsavel: "CRISTINE", nome: "CRISTINE", tipo: "Adulto", contato: "(21) 98827-9928", data: "30/10/2025"},
    {responsavel: "DENIRA", nome: "AYRES", tipo: "Adulto", contato: "(22) 99770-0458", data: "14/11/2025"},
    {responsavel: "DENIRA", nome: "DENIRA", tipo: "Adulto", contato: "(22) 99770-0458", data: "14/11/2025"},
    {responsavel: "DENIRA", nome: "EDMAR", tipo: "Adulto", contato: "(22) 99770-0458", data: "14/11/2025"},
    {responsavel: "DENIRA", nome: "ELOISA", tipo: "Criança", contato: "(22) 99770-0458", data: "14/11/2025"},
    {responsavel: "ELAINE", nome: "CHARLES", tipo: "Adulto", contato: "(21) 97010-7908", data: "-"},
    {responsavel: "ELAINE", nome: "CRISTIAN ESPÍNDOLA", tipo: "Adulto", contato: "(21) 97010-7908", data: "-"},
    {responsavel: "ELAINE", nome: "DOUGLAS ESPÍNDOLA", tipo: "Adulto", contato: "(21) 97010-7908", data: "-"},
    {responsavel: "ELAINE", nome: "ELAINE ESPÍNDOLA", tipo: "Adulto", contato: "(21) 97010-7908", data: "-"},
    {responsavel: "EVERTON", nome: "EVERTON", tipo: "Adulto", contato: "(21) 97263-2239", data: "31/10/2025"},
    {responsavel: "EVERTON", nome: "RAFA", tipo: "Adulto", contato: "(21) 97263-2239", data: "31/10/2025"},
    {responsavel: "ISA", nome: "ISA", tipo: "Adulto", contato: "(21) 98642-4618", data: "01/11/2025"},
    {responsavel: "ISA", nome: "RUAN", tipo: "Adulto", contato: "(21) 98642-4618", data: "01/11/2025"},
    {responsavel: "ISABELA", nome: "ISABELA", tipo: "Adulto", contato: "(21) 99200-6997", data: "30/10/2025"},
    {responsavel: "ISABELA", nome: "PABLO", tipo: "Adulto", contato: "(21) 99200-6997", data: "30/10/2025"},
    {responsavel: "LARI", nome: "LARI", tipo: "Adulto", contato: "(21) 99628-1816", data: "30/10/2025"},
    {responsavel: "LARI", nome: "LUDI", tipo: "Adulto", contato: "(21) 99628-1816", data: "30/10/2025"},
    {responsavel: "MARIA CRISTINA", nome: "MARIA CRISTINA", tipo: "Adulto", contato: "(21) 99635-8025", data: "04/11/2025"},
    {responsavel: "MARILDA", nome: "JASON", tipo: "Adulto", contato: "(22) 98153-3259", data: "-"},
    {responsavel: "MARILDA", nome: "JUNIOR", tipo: "Adulto", contato: "(22) 98153-3259", data: "-"},
    {responsavel: "MARILDA", nome: "MARILDA", tipo: "Adulto", contato: "(22) 98153-3259", data: "-"},
    {responsavel: "MARLI", nome: "ALESSANDRA", tipo: "Adulto", contato: "(21) 98710-2034", data: "-"},
    {responsavel: "MARLI", nome: "MARLI", tipo: "Adulto", contato: "(21) 98710-2034", data: "-"},
    {responsavel: "MAYARA", nome: "ÍTALO", tipo: "Criança", contato: "(21) 98210-8278", data: "30/10/2025"},
    {responsavel: "MAYARA", nome: "JUSSARA", tipo: "Adulto", contato: "(21) 98210-8278", data: "30/10/2025"},
    {responsavel: "MAYARA", nome: "MATHEUS", tipo: "Adulto", contato: "(21) 98210-8278", data: "30/10/2025"},
    {responsavel: "MAYARA", nome: "MAYARA", tipo: "Adulto", contato: "(21) 98210-8278", data: "30/10/2025"},
    {responsavel: "NATAN", nome: "NATAN", tipo: "Adulto", contato: "(21) 98805-6569", data: "-"},
    {responsavel: "NATAN", nome: "SUELEN", tipo: "Adulto", contato: "(21) 98805-6569", data: "-"},
    {responsavel: "NEIDE", nome: "NEIDE", tipo: "Adulto", contato: "(21) 98695-5794", data: "02/11/2025"},
    {responsavel: "PASTOR CLAUDIO", nome: "CLAUDIA", tipo: "Adulto", contato: "(21) 99734-4754", data: "-"},
    {responsavel: "PASTOR CLAUDIO", nome: "JULIA", tipo: "Adulto", contato: "(21) 99734-4754", data: "-"},
    {responsavel: "PASTOR CLAUDIO", nome: "PASTOR CLAUDIO", tipo: "Adulto", contato: "(21) 99734-4754", data: "-"},
    {responsavel: "PASTOR RENATO", nome: "PASTOR RENATO", tipo: "Adulto", contato: "(21) 99165-6665", data: "-"},
    {responsavel: "PASTOR RENATO", nome: "PASTORA ALINE", tipo: "Adulto", contato: "(21) 99165-6665", data: "-"},
    {responsavel: "PATRÍCIA", nome: "CAIO", tipo: "Adulto", contato: "(21) 96500-2393", data: "-"},
    {responsavel: "PATRÍCIA", nome: "DOUGLAS", tipo: "Adulto", contato: "(21) 96500-2393", data: "-"},
    {responsavel: "PATRÍCIA", nome: "JULIANA", tipo: "Adulto", contato: "(21) 96500-2393", data: "-"},
    {responsavel: "PATRÍCIA", nome: "PATRÍCIA", tipo: "Adulto", contato: "(21) 96500-2393", data: "-"},
    {responsavel: "PATRÍCIA", nome: "RAFAEL", tipo: "Adulto", contato: "(21) 96500-2393", data: "-"},
    {responsavel: "PAULINHO", nome: "PAULINHO", tipo: "Adulto", contato: "(21) 99641-8664", data: "30/10/2025"},
    {responsavel: "PAULINHO", nome: "PIETRO", tipo: "Adulto", contato: "(21) 99641-8664", data: "30/10/2025"},
    {responsavel: "PAULINHO", nome: "VALESCA", tipo: "Adulto", contato: "(21) 99641-8664", data: "30/10/2025"},
    {responsavel: "RODRIGO", nome: "RODRIGO", tipo: "Adulto", contato: "(21) 96408-1442", data: "-"},
    {responsavel: "RODRIGO", nome: "THAYNA", tipo: "Adulto", contato: "(21) 96408-1442", data: "-"},
    {responsavel: "RODRIGO ESPÍNDOLA", nome: "BRUNA", tipo: "Adulto", contato: "(21) 96466-9184", data: "01/11/2025"},
    {responsavel: "RODRIGO ESPÍNDOLA", nome: "CAROL", tipo: "Adulto", contato: "(21) 96466-9184", data: "01/11/2025"},
    {responsavel: "RODRIGO ESPÍNDOLA", nome: "RODRIGO ESPÍNDOLA", tipo: "Adulto", contato: "(21) 96466-9184", data: "01/11/2025"},
    {responsavel: "SIRENE", nome: "SIRENE", tipo: "Adulto", contato: "(22) 99858-4277", data: "14/11/2025"},
    {responsavel: "STEFFANO", nome: "FELIPE", tipo: "Adulto", contato: "(21) 99436-2300", data: "30/10/2025"},
    {responsavel: "STEFFANO", nome: "STEFFANO", tipo: "Adulto", contato: "(21) 99436-2300", data: "30/10/2025"},
    {responsavel: "THIAGO", nome: "BRUNA", tipo: "Adulto", contato: "(21) 96827-5527", data: "17/11/2025"},
    {responsavel: "THIAGO", nome: "THIAGO RONCONI", tipo: "Adulto", contato: "(21) 96827-5527", data: "17/11/2025"},
    {responsavel: "WAGNER", nome: "ALINE", tipo: "Adulto", contato: "(21) 97005-7220", data: "30/10/2025"},
    {responsavel: "WAGNER", nome: "THAIS", tipo: "Adulto", contato: "(21) 97005-7220", data: "30/10/2025"},
    {responsavel: "WAGNER", nome: "WAGNER", tipo: "Adulto", contato: "(21) 97005-7220", data: "30/10/2025"},
    {responsavel: "WALLACE", nome: "WALLACE", tipo: "Adulto", contato: "467603248", data: "31/10/2025"}
];

let filteredData = [...convidados];

function gerarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'mm', 'a4');
    
    // ========== CONFIGURAÇÕES ==========
    const corPrimaria = [102, 126, 234];
    const corSecundaria = [118, 75, 162];
    const corFundo = [248, 249, 250];
    
    // ========== FUNDO GRADIENTE COMPACTO ==========
    for (let i = 0; i < 35; i++) {
        const ratio = i / 35;
        const r = 102 + (118 - 102) * ratio;
        const g = 126 + (75 - 126) * ratio;
        const b = 234 + (162 - 234) * ratio;
        doc.setFillColor(r, g, b);
        doc.rect(0, i, 210, 1, 'F');
    }
    
    // ========== CABEÇALHO ==========
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    doc.setTextColor(255, 255, 255);
    doc.text('Lista de Convidados', 105, 14, { align: 'center' });
    
    // ========== ESTATÍSTICAS COMPACTAS ==========
    const totalAdultos = filteredData.filter(c => c.tipo === 'Adulto').length;
    const totalCriancas = filteredData.filter(c => c.tipo === 'Criança').length;
    
    const boxWidth = 46;
    const boxHeight = 14;
    const boxY = 21;
    const espacamento = 6;
    const totalWidth = (boxWidth * 3) + (espacamento * 2);
    const startX = (210 - totalWidth) / 2;
    
    // Box 1: Total
    doc.setFillColor(255, 255, 255, 0.3);
    doc.roundedRect(startX, boxY, boxWidth, boxHeight, 2, 2, 'F');
    doc.setDrawColor(255, 255, 255);
    doc.setLineWidth(0.3);
    doc.roundedRect(startX, boxY, boxWidth, boxHeight, 2, 2, 'S');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text(filteredData.length.toString(), startX + boxWidth/2, boxY + 7, { align: 'center' });
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.text('Total', startX + boxWidth/2, boxY + 11, { align: 'center' });
    
    // Box 2: Adultos
    doc.setFillColor(255, 255, 255, 0.3);
    doc.roundedRect(startX + boxWidth + espacamento, boxY, boxWidth, boxHeight, 2, 2, 'F');
    doc.setDrawColor(255, 255, 255);
    doc.roundedRect(startX + boxWidth + espacamento, boxY, boxWidth, boxHeight, 2, 2, 'S');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text(totalAdultos.toString(), startX + boxWidth + espacamento + boxWidth/2, boxY + 7, { align: 'center' });
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.text('Adultos', startX + boxWidth + espacamento + boxWidth/2, boxY + 11, { align: 'center' });
    
    // Box 3: Crianças
    doc.setFillColor(255, 255, 255, 0.3);
    doc.roundedRect(startX + (boxWidth + espacamento) * 2, boxY, boxWidth, boxHeight, 2, 2, 'F');
    doc.setDrawColor(255, 255, 255);
    doc.roundedRect(startX + (boxWidth + espacamento) * 2, boxY, boxWidth, boxHeight, 2, 2, 'S');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text(totalCriancas.toString(), startX + (boxWidth + espacamento) * 2 + boxWidth/2, boxY + 7, { align: 'center' });
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.text('Criancas', startX + (boxWidth + espacamento) * 2 + boxWidth/2, boxY + 11, { align: 'center' });
    
    // ========== ÁREA BRANCA PRINCIPAL ==========
    doc.setFillColor(255, 255, 255);
    doc.roundedRect(8, 40, 194, 247, 3, 3, 'F');
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.2);
    doc.roundedRect(8, 40, 194, 247, 3, 3, 'S');
    
    // ========== BARRA DE CONTROLES ==========
    doc.setFillColor(248, 249, 250);
    doc.rect(8, 40, 194, 10, 'F');
    doc.setDrawColor(233, 236, 239);
    doc.setLineWidth(0.3);
    doc.line(8, 50, 202, 50);
    
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(102, 126, 234);
    doc.text('PDF Gerado', 12, 46.5);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(120, 120, 120);
    doc.text('| Ordenado A-Z', 37, 46.5);
    
    // ========== ORDENAR DADOS ==========
    const dadosOrdenados = [...filteredData].sort((a, b) => {
        return a.nome.localeCompare(b.nome, 'pt-BR');
    });
    
    // ========== PREPARAR DADOS DA TABELA ==========
    const tableData = dadosOrdenados.map(convidado => [
        convidado.nome || '-',
        convidado.tipo || '-',
        convidado.contato || '-',
        convidado.data || '-'
    ]);
    
    // ========== TABELA OTIMIZADA ==========
    doc.autoTable({
        startY: 54,
        head: [['Nome', 'Tipo', 'Contato', 'Data']],
        body: tableData,
        theme: 'striped',
        
        headStyles: {
            fillColor: corPrimaria,
            textColor: [255, 255, 255],
            fontStyle: 'bold',
            fontSize: 10,
            halign: 'left',
            cellPadding: { top: 4, right: 4, bottom: 4, left: 4 }
        },
        
        bodyStyles: {
            fontSize: 9,
            cellPadding: { top: 3, right: 4, bottom: 3, left: 4 },
            textColor: [50, 50, 50],
            lineColor: [233, 236, 239],
            lineWidth: 0.1
        },
        
        alternateRowStyles: {
            fillColor: [248, 249, 250]
        },
        
        columnStyles: {
            0: { 
                cellWidth: 72,
                fontStyle: 'bold',
                textColor: [102, 126, 234]
            },
            1: { 
                cellWidth: 32,
                halign: 'center',
                fontStyle: 'bold'
            },
            2: { 
                cellWidth: 50
            },
            3: { 
                cellWidth: 28,
                halign: 'center'
            }
        },
        
        didParseCell: function(data) {
            if (data.column.index === 1 && data.section === 'body') {
                const tipo = data.cell.text[0];
                if (tipo === 'Adulto') {
                    data.cell.styles.fillColor = [209, 236, 241];
                    data.cell.styles.textColor = [12, 84, 96];
                } else if (tipo === 'Criança' || tipo === 'Crianca') {
                    data.cell.styles.fillColor = [255, 243, 205];
                    data.cell.styles.textColor = [133, 100, 4];
                }
            }
        },
        
        margin: { top: 54, left: 12, right: 12, bottom: 18 },
        tableWidth: 'auto'
    });
    
    // ========== RODAPÉ ==========
    const totalPaginas = doc.internal.getNumberOfPages();
    
    for (let i = 1; i <= totalPaginas; i++) {
        doc.setPage(i);
        
        doc.setDrawColor(200, 200, 200);
        doc.setLineWidth(0.3);
        doc.line(20, doc.internal.pageSize.height - 12, 190, doc.internal.pageSize.height - 12);
        
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(120, 120, 120);
        doc.text(
            `Pag. ${i}/${totalPaginas}`,
            105,
            doc.internal.pageSize.height - 8,
            { align: 'center' }
        );
        
        if (i === 1) {
            doc.setFontSize(7);
            doc.setTextColor(102, 126, 234);
            doc.text('A-Z', 15, doc.internal.pageSize.height - 8);
        }
    }
    
    // ========== SALVAR ==========
    const dataArquivo = new Date().toLocaleDateString('pt-BR').replace(/\//g, '-');
    const nomeArquivo = `lista-convidados-${dataArquivo}.pdf`;
    doc.save(nomeArquivo);
    
    mostrarNotificacao('PDF gerado com sucesso!');
}

function renderTable(data) {
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = '';
    
    data.forEach(convidado => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="responsavel">${convidado.responsavel}</td>
            <td>${convidado.nome}</td>
            <td><span class="badge badge-${convidado.tipo.toLowerCase()}">${convidado.tipo}</span></td>
            <td>${convidado.contato}</td>
            <td>${convidado.data || '-'}</td>
        `;
        tbody.appendChild(row);
    });
    
    updateStats(data);
}

function updateStats(data) {
    const totalAdultos = data.filter(c => c.tipo === 'Adulto').length;
    const totalCriancas = data.filter(c => c.tipo === 'Criança').length;
    
    document.getElementById('totalConvidados').textContent = data.length;
    document.getElementById('totalAdultos').textContent = totalAdultos;
    document.getElementById('totalCriancas').textContent = totalCriancas;
}

function filterData() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const tipoFilter = document.getElementById('filterTipo').value;
    
    filteredData = convidados.filter(convidado => {
        const matchSearch = convidado.nome.toLowerCase().includes(searchTerm) || 
                          convidado.responsavel.toLowerCase().includes(searchTerm);
        const matchTipo = tipoFilter === 'todos' || convidado.tipo === tipoFilter;
        return matchSearch && matchTipo;
    });
    
    renderTable(filteredData);
}

// Event listeners
document.getElementById('searchInput').addEventListener('input', filterData);
document.getElementById('filterTipo').addEventListener('change', filterData);

// Função para mostrar notificação
function mostrarNotificacao(mensagem) {
    const notif = document.createElement('div');
    notif.className = 'notificacao';
    notif.textContent = mensagem;
    document.body.appendChild(notif);
    
    setTimeout(() => notif.classList.add('show'), 100);
    setTimeout(() => {
        notif.classList.remove('show');
        setTimeout(() => notif.remove(), 300);
    }, 2500);
}

// Prevenir zoom no iOS em inputs
if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.fontSize = '16px';
        });
    });
}

// Inicializar
renderTable(convidados);
