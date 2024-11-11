const herois = ["Jett", "Omen", "Brimstone", "Chamber"];

const xp = [5500, 9800, 2480, 11000];

let nome, nivel, elo;

herois.forEach((heroi, index) => {
  nome = heroi;
  nivel = xp[index];

  if (nivel <= 1000) {
    elo = "Ferro";
  } else if (nivel >= 1001 && nivel <= 2000) {
    elo = "Bronze";
  } else if (nivel >= 2001 && nivel <= 5000) {
    elo = "Prata";
  } else if (nivel >= 5001 && nivel <= 7000) {
    elo = "Ouro";
  } else if (nivel >= 7001 && nivel <= 8000) {
    elo = "Platina";
  } else if (nivel >= 8001 && nivel <= 9000) {
    elo = "Ascendente";
  } else if (nivel >= 9001 && nivel <= 10000) {
    elo = "Imortal";
  } else if (nivel >= 10001) {
    elo = "Radiante";
  }
  document.write(
    "O Herói de nome " + nome + " está no nível de " + elo + "</br></br>"
  );
});
