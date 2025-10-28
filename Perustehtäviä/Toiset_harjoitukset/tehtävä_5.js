function kertotaulu() {
  const luku = parseInt(document.getElementById("luku").value);
  let lause = "";

  for (let i = 1; i <= 10; i++) {
    lause += `${luku} x ${i} = ${luku * i}\n`;
  }

  document.getElementById("vastaus").textContent = lause;
}