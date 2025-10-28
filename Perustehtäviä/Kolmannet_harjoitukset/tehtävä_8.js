function laskePotenssi() {
    const luku = parseFloat(document.getElementById("luku").value);
    const potenssi = parseInt(document.getElementById("potenssi").value);
    const tulosElementti = document.getElementById("tulos");

if(isNaN(luku) || isNaN(potenssi)) {
    tulosElementti.innerHTML = "Anna molemmat luvut!"; return
}

 const tulos = Math.pow(luku, potenssi);
  tulosElementti.innerText = tulos;
}