function responder() {
  var resposta = prompt(
    "Marque a resposta correta: \n\n 1- Abrir a porta e tentar a sorte \n 2- Esperar os espíritos violentos dormirem e sair com cautela"
  );
  while (true) {
    if (resposta == 1) {
      window.location.href = "game-over-3.html";
      break;
    } else if (resposta == 2) {
      window.location.href = "fantasma-vencedor.html";
      break;
    } else {
      alert("Você precisa digitar 1 ou 2");
      resposta = prompt(
        "Marque a resposta correta \n\n 1- Abrir a porta e tentar a sorte\n 2- Esperar os espíritos violentos dormirem e sair com cautela"
      );
    }
  }
}
