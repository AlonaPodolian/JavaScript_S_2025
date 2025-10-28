function etsiSuurinJaPienin() {
    const luvut = [
        parseFloat(document.getElementById("l1").value),
        parseFloat(document.getElementById("l2").value),
        parseFloat(document.getElementById("l3").value),
        parseFloat(document.getElementById("l4").value),
        parseFloat(document.getElementById("l5").value),
    ];

    if (luvut.some(isNaN)) {
        document.getElementById("tulos").innerHTML ="Täytä kaikki kentät!"; return;
    }

    const suurin = Math.max(...luvut);
    const pienin = Math.min(...luvut);

    document.getElementById("tulos").innerHTML =  `Suurin luku on ${suurin} ja pienin luku on ${pienin}.`;
}