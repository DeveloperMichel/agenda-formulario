// Função para construir a mensagem do WhatsApp com base nos campos do formulário
function construirMensagem() {
  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const dataConsulta = document.getElementById("data-consulta").value;
  const horarioConsulta = document.getElementById("horario-consulta").value;

  // Construir a mensagem com os dados do formulário
  const mensagem = `Olá, quero agendar uma consulta.\n\nNome: ${nome}\nTelefone: ${telefone}\nData da Consulta: ${dataConsulta}\nHorário da Consulta: ${horarioConsulta}`;

  // Codificar a mensagem para que funcione em uma URL
  const mensagemCodificada = encodeURIComponent(mensagem);

  // Montar a URL do WhatsApp com a mensagem
  const urlWhatsApp = `https://api.whatsapp.com/send?phone=16997593583&text=${mensagemCodificada}`;

  return urlWhatsApp;
}

// Função para redirecionar para o WhatsApp com a mensagem
function redirecionarParaWhatsApp() {
  const urlWhatsApp = construirMensagem();

  // Abrir o WhatsApp em uma nova aba
  window.open(urlWhatsApp, "_blank");
}

// Evento de clique no botão "Agendar via WhatsApp"
document
  .getElementById("botao-whatsapp")
  .addEventListener("click", function (event) {
    event.preventDefault();
    redirecionarParaWhatsApp();
  });
