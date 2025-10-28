function laskeSumma() {
    let summa = 0;
    for (let i = 1; i <= 10; i++) {
        summa += i;
    }
    document.getElementById("tulos").innerHTML = summa;
}