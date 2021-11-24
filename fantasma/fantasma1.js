function responder() {
  var resposta = prompt(
    "Marque a resposta correta: \n\n 1- Entrar no momento da refeição \n 2- Entrar no momento do sono"
  );
  while (true) {
    if (resposta == 1) {
      window.location.href = "fantasma-fase-2.html";
      break;
    } else if (resposta == 2) {
      window.location.href = "game-over-1.html";
      break;
    } else {
      alert("Você precisa digitar 1 ou 2");
      resposta = prompt(
        "Marque a resposta correta \n\n 1- Entrar no momento da refeição \n 2- Entrar no momento do sono"
      );
    }
  }
}
