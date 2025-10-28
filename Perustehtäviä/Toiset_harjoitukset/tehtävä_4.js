function laske() {
  const syote = document.getElementById("luvut").value;
  const luvut = syote.split(",").map(luku => parseFloat(luku.trim()));

  if (luvut.length !== 5 || luvut.some(isNaN)) {
    document.getElementById("vastaus").innerHTML = "Anna täsmälleen 5 numeroa, pilkulla erotettuna.";
    return;
  }

  const summa = luvut.reduce((a, b) => a + b, 0);
  const keskiarvo = summa / luvut.length;

  document.getElementById("vastaus").innerHTML = 
    `Lukujen summa on: ${summa}, ja keskiarvo on: ${keskiarvo.toFixed(2)}`;
}

