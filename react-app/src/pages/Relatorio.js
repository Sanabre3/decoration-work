import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEventos } from '../context/EventosContext';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import './Dashboard.css';

const Relatorio = () => {
  const navigate = useNavigate();
  const { eventos, eventoAtual, selecionarEvento } = useEventos();
  const [eventoSelecionado, setEventoSelecionado] = useState(eventoAtual || null);
  const [dadosEvento, setDadosEvento] = useState({ nome: '', convidados: [], cronograma: [], mesas: [] });

  useEffect(() => {
    if (eventoSelecionado) {
      const saved = localStorage.getItem(`evento_${eventoSelecionado}`);
      if (saved) {
        const dados = JSON.parse(saved);
        const evento = eventos.find(e => e.id === eventoSelecionado);
        setDadosEvento({ ...dados, nome: evento?.nome, data: evento?.data });
      }
    }
  }, [eventoSelecionado, eventos]);

  const handleSelecionarEvento = (eventoId) => {
    const id = parseInt(eventoId);
    setEventoSelecionado(id);
  };

  const handleVoltar = () => {
    if (eventoAtual) {
      navigate('/dashboard');
    } else {
      navigate('/');
    }
  };

  const calcularEstatisticas = () => {
    const convidados = dadosEvento.convidados || [];
    const cronograma = dadosEvento.cronograma || [];
    const mesas = dadosEvento.mesas || [];
    
    return {
      totalConvidados: convidados.length,
      adultos: convidados.filter(c => c.tipo === 'Adulto').length,
      criancas: convidados.filter(c => c.tipo === 'Criança').length,
      totalCronograma: cronograma.length,
      cronogramaConcluido: cronograma.filter(c => c.concluido).length,
      totalMesas: mesas.length,
      lugaresOcupados: mesas.reduce((acc, m) => acc + (m.pessoas?.length || 0), 0),
      lugaresTotais: mesas.reduce((acc, m) => acc + (m.capacidade || 0), 0)
    };
  };

  const stats = eventoSelecionado ? calcularEstatisticas() : null;

  const gerarPDF = () => {
    if (!eventoSelecionado || !dadosEvento.nome) {
      alert('Selecione um evento primeiro!');
      return;
    }

    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    let yPos = 20;

    // Título
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text(`Relatório: ${dadosEvento.nome}`, pageWidth / 2, yPos, { align: 'center' });
    yPos += 10;

    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text(`Data: ${dadosEvento.data || 'Não definida'}`, pageWidth / 2, yPos, { align: 'center' });
    yPos += 15;

    // === SEÇÃO 1: LISTA DE CONVIDADOS ===
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Lista de Convidados', 14, yPos);
    yPos += 8;

    const convidados = (dadosEvento.convidados || []).sort((a, b) => 
      a.nome.localeCompare(b.nome)
    );

    if (convidados.length === 0) {
      doc.setFontSize(11);
      doc.setFont('helvetica', 'normal');
      doc.text('Nenhum convidado cadastrado', 14, yPos);
      yPos += 15;
    } else {
      const convidadosData = convidados.map(c => [
        c.nome,
        c.responsavel,
        c.tipo,
        c.idade || '-',
        c.contato || '-'
      ]);

      doc.autoTable({
        startY: yPos,
        head: [['Nome', 'Responsável', 'Tipo', 'Idade', 'Contato']],
        body: convidadosData,
        theme: 'grid',
        headStyles: { fillColor: [99, 102, 241], fontSize: 10 },
        styles: { fontSize: 9 },
        columnStyles: {
          0: { cellWidth: 40 },
          1: { cellWidth: 35 },
          2: { cellWidth: 25 },
          3: { cellWidth: 15 },
          4: { cellWidth: 35 }
        }
      });

      yPos = doc.lastAutoTable.finalY + 10;

      // Estatísticas de convidados
      const adultos = convidados.filter(c => c.tipo === 'Adulto').length;
      const criancas = convidados.filter(c => c.tipo === 'Criança').length;

      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.text(`Total de convidados: ${convidados.length}`, 14, yPos);
      yPos += 6;
      doc.text(`Adultos: ${adultos} | Crianças: ${criancas}`, 14, yPos);
      yPos += 15;
    }

    // === SEÇÃO 2: CRONOGRAMA DO EVENTO ===
    // Adiciona nova página se necessário
    if (yPos > 250) {
      doc.addPage();
      yPos = 20;
    }

    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Cronograma do Evento', 14, yPos);
    yPos += 8;

    const cronograma = (dadosEvento.cronograma || []).sort((a, b) => 
      a.horario.localeCompare(b.horario)
    );

    if (cronograma.length === 0) {
      doc.setFontSize(11);
      doc.setFont('helvetica', 'normal');
      doc.text('Nenhuma atividade cadastrada', 14, yPos);
      yPos += 15;
    } else {
      const cronogramaData = cronograma.map(c => [
        c.horario,
        c.atividade,
        c.responsavel || '-',
        c.concluido ? 'Sim' : 'Não'
      ]);

      doc.autoTable({
        startY: yPos,
        head: [['Horário', 'Atividade', 'Responsável', 'Concluído']],
        body: cronogramaData,
        theme: 'grid',
        headStyles: { fillColor: [99, 102, 241], fontSize: 10 },
        styles: { fontSize: 9 },
        columnStyles: {
          0: { cellWidth: 25 },
          1: { cellWidth: 70 },
          2: { cellWidth: 45 },
          3: { cellWidth: 25 }
        }
      });

      yPos = doc.lastAutoTable.finalY + 15;
    }

    // === SEÇÃO 3: ARRUMAÇÃO DAS MESAS ===
    // Adiciona nova página se necessário
    if (yPos > 250) {
      doc.addPage();
      yPos = 20;
    }

    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Arrumação das Mesas', 14, yPos);
    yPos += 8;

    const mesas = dadosEvento.mesas || [];
    const pessoasSemMesa = convidados.filter(c => 
      !mesas.some(m => m.pessoas?.some(p => p.nome === c.nome))
    );

    if (mesas.length === 0) {
      doc.setFontSize(11);
      doc.setFont('helvetica', 'normal');
      doc.text('Nenhuma mesa cadastrada', 14, yPos);
      yPos += 10;
    } else {
      mesas.forEach((mesa, index) => {
        // Adiciona nova página se necessário
        if (yPos > 270) {
          doc.addPage();
          yPos = 20;
        }

        doc.setFontSize(13);
        doc.setFont('helvetica', 'bold');
        doc.text(`${mesa.nome}`, 14, yPos);
        yPos += 5;

        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.text(`Capacidade: ${mesa.pessoas?.length || 0}/${mesa.capacidade} lugares`, 14, yPos);
        yPos += 6;

        if (mesa.pessoas && mesa.pessoas.length > 0) {
          doc.setFontSize(9);
          doc.setFont('helvetica', 'normal');
          
          mesa.pessoas.forEach((pessoa, idx) => {
            if (yPos > 280) {
              doc.addPage();
              yPos = 20;
            }
            doc.text(`  • ${pessoa.responsavel} - ${pessoa.nome} (${pessoa.tipo})`, 14, yPos);
            yPos += 5;
          });
        } else {
          doc.setFontSize(9);
          doc.setFont('helvetica', 'italic');
          doc.text('  Mesa vazia', 14, yPos);
          yPos += 5;
        }

        yPos += 5;
      });
    }

    // Pessoas sem mesa
    if (pessoasSemMesa.length > 0) {
      if (yPos > 250) {
        doc.addPage();
        yPos = 20;
      }

      doc.setFontSize(13);
      doc.setFont('helvetica', 'bold');
      doc.text('Pessoas sem Mesa', 14, yPos);
      yPos += 6;

      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      pessoasSemMesa.forEach(pessoa => {
        if (yPos > 280) {
          doc.addPage();
          yPos = 20;
        }
        doc.text(`  • ${pessoa.responsavel} - ${pessoa.nome} (${pessoa.tipo})`, 14, yPos);
        yPos += 5;
      });
    }

    // Salvar PDF
    doc.save(`Relatorio_${dadosEvento.nome.replace(/\s+/g, '_')}.pdf`);
  };

  return (
    <div className="page">
      <header className="page-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <button 
            onClick={handleVoltar}
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.6)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
            }}
          >
            ◀️ Voltar
          </button>
          <h1 style={{ margin: 0 }}>📥 Relatório em PDF</h1>
        </div>
      </header>

      <div style={{ 
        maxWidth: '800px', 
        margin: '30px auto', 
        padding: '0 20px'
      }}>
        {/* Card Principal */}
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '16px',
          padding: '40px',
          marginBottom: '30px',
          color: 'white',
          boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '72px', marginBottom: '15px' }}>📊</div>
          <h2 style={{ marginBottom: '10px', fontSize: '28px', fontWeight: 'bold' }}>
            Relatório Completo do Evento
          </h2>
          <p style={{ fontSize: '16px', opacity: 0.95, lineHeight: '1.6' }}>
            Gere um PDF profissional com todas as informações organizadas
          </p>
        </div>

        {/* Seletor de Evento */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '30px',
          marginBottom: '25px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
        }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '12px', 
            color: '#333',
            fontWeight: 'bold',
            fontSize: '16px'
          }}>
            🎯 Selecione o Evento:
          </label>
          <select 
            value={eventoSelecionado || ''} 
            onChange={(e) => handleSelecionarEvento(e.target.value)}
            style={{
              width: '100%',
              padding: '14px',
              fontSize: '16px',
              borderRadius: '10px',
              border: '2px solid #e0e0e0',
              backgroundColor: '#f8f9fa',
              cursor: 'pointer',
              outline: 'none',
              transition: 'all 0.3s',
              fontWeight: '500'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#667eea';
              e.target.style.backgroundColor = 'white';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#e0e0e0';
              e.target.style.backgroundColor = '#f8f9fa';
            }}
          >
            <option value="">-- Escolha um evento --</option>
            {eventos.map(evento => (
              <option key={evento.id} value={evento.id}>
                {evento.nome} {evento.data ? `(${evento.data})` : ''}
              </option>
            ))}
          </select>
        </div>

        {/* Estatísticas do Evento */}
        {eventoSelecionado && stats && (
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '30px',
            marginBottom: '25px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }}>
            <h3 style={{ margin: '0 0 20px 0', color: '#333', fontSize: '20px' }}>
              📈 Resumo do Evento
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '15px'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                padding: '20px',
                borderRadius: '12px',
                color: 'white',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '5px' }}>
                  {stats.totalConvidados}
                </div>
                <div style={{ fontSize: '13px', opacity: 0.9 }}>Convidados</div>
              </div>
              <div style={{
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                padding: '20px',
                borderRadius: '12px',
                color: 'white',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '5px' }}>
                  {stats.adultos}/{stats.criancas}
                </div>
                <div style={{ fontSize: '13px', opacity: 0.9 }}>Adultos/Crianças</div>
              </div>
              <div style={{
                background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                padding: '20px',
                borderRadius: '12px',
                color: 'white',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '5px' }}>
                  {stats.totalMesas}
                </div>
                <div style={{ fontSize: '13px', opacity: 0.9 }}>Mesas</div>
              </div>
              <div style={{
                background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                padding: '20px',
                borderRadius: '12px',
                color: 'white',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '5px' }}>
                  {stats.totalCronograma}
                </div>
                <div style={{ fontSize: '13px', opacity: 0.9 }}>Atividades</div>
              </div>
            </div>
          </div>
        )}

        {/* Conteúdo do PDF */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '30px',
          marginBottom: '25px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
        }}>
          <h3 style={{ margin: '0 0 20px 0', color: '#333', fontSize: '20px' }}>
            📄 O que está incluído no PDF:
          </h3>
          <div style={{
            display: 'grid',
            gap: '12px'
          }}>
            {[
              { icon: '👥', text: 'Lista completa de convidados em ordem alfabética' },
              { icon: '🎯', text: 'Classificação por tipo (Adulto/Criança)' },
              { icon: '📅', text: 'Cronograma do evento com horários' },
              { icon: '🪑', text: 'Arrumação das mesas com capacidade' },
              { icon: '📋', text: 'Lista de pessoas sem mesa definida' },
              { icon: '📊', text: 'Estatísticas e totais do evento' }
            ].map((item, idx) => (
              <div key={idx} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px',
                background: '#f8f9fa',
                borderRadius: '10px',
                transition: 'transform 0.2s',
                cursor: 'default'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateX(5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
                <span style={{ fontSize: '24px' }}>{item.icon}</span>
                <span style={{ color: '#555', fontSize: '15px' }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Status e Botão */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '30px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          textAlign: 'center'
        }}>
          {eventoSelecionado && dadosEvento.nome ? (
            <div style={{
              padding: '18px',
              background: 'linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)',
              border: '2px solid #28a745',
              borderRadius: '12px',
              color: '#155724',
              marginBottom: '25px',
              fontSize: '16px',
              fontWeight: '500'
            }}>
              ✓ Evento selecionado: <strong>{dadosEvento.nome}</strong>
            </div>
          ) : (
            <div style={{
              padding: '18px',
              background: 'linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%)',
              border: '2px solid #ffc107',
              borderRadius: '12px',
              color: '#856404',
              marginBottom: '25px',
              fontSize: '16px',
              fontWeight: '500'
            }}>
              ⚠️ Selecione um evento para gerar o relatório
            </div>
          )}

          <button 
            className="btn-primary" 
            onClick={gerarPDF}
            style={{
              padding: '18px 50px',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: (eventoSelecionado && dadosEvento.nome) ? 'pointer' : 'not-allowed',
              opacity: (eventoSelecionado && dadosEvento.nome) ? 1 : 0.5,
              background: (eventoSelecionado && dadosEvento.nome) 
                ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                : '#ccc',
              border: 'none',
              borderRadius: '12px',
              color: 'white',
              transition: 'all 0.3s',
              boxShadow: (eventoSelecionado && dadosEvento.nome) 
                ? '0 6px 25px rgba(102, 126, 234, 0.4)'
                : 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px'
            }}
            disabled={!eventoSelecionado || !dadosEvento.nome}
            onMouseOver={(e) => {
              if (eventoSelecionado && dadosEvento.nome) {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(102, 126, 234, 0.6)';
              }
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 25px rgba(102, 126, 234, 0.4)';
            }}
          >
            📥 Baixar Relatório PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default Relatorio;
