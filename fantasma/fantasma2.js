function responder() {
  var resposta = prompt(
    "Marque a resposta correta: \n\n 1- Jogar uma pedra do outro lado da masmorra para distrair os espíritos, pegar a chave e se esconder \n 2- Esperar o próximo cochilo dos espíritos para não correr riscos"
  );
  while (true) {
    if (resposta == 1) {
      window.location.href = "fantasma-fase-3.html";
      break;
    } else if (resposta == 2) {
      window.location.href = "game-over-2.html";
      break;
    } else {
      alert("Você precisa digitar 1 ou 2");
      resposta = prompt(
        "Marque a resposta correta \n\n 1- Jogar uma pedra do outro lado da masmorra para distrair os espíritos, pegar a chave e se esconder\n 2- Esperar o próximo cochilo dos espíritos para não correr riscos"
      );
    }
  }
}
