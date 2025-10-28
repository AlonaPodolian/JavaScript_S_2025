function jarjesta() {
    let taulu=[];
    let n1 = document.getElementById(`n1`).value;
    let n2 = document.getElementById(`n2`).value;
    let n3 = document.getElementById(`n3`).value;
    let vastaus = document.getElementById("tIv");
    let teksti = "";
    taulu.push(n1, n2, n3);
    teksti = `Annoit luvut ${n1}, ${n2}, ${n3}<br>`;
    let uusitaulu = taulu.sort((a, b) => a - b);
    teksti+= `Luvut järjestyksessä ovat ${uusitaulu}`;
    document.write(teksti);
}
