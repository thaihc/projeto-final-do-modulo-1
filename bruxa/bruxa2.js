function responder() {
  var resposta = prompt(
    "Marque a resposta correta: \n\n 1- 10 criaturas \n 2- 9 criaturas"
  );
  while (true) {
    if (resposta == 1) {
      window.location.href = "bruxa-fase-3.html";
      break;
    } else if (resposta == 2) {
      window.location.href = "game-over-2.html";
      break;
    } else {
      alert("Você precisa digitar 1 ou 2");
      resposta = prompt(
        "Marque a resposta correta \n\n 1- 10 criaturas \n 2- 9 criaturas"
      );
    }
  }
}
