function tarkistaO() {
    const sana = document.getElementById("sana").value;
    const tulos = document.getElementById("tulos");

    if (sana.trim() === "") {
        tulos.innerHTML = "Anna jokin sana!";
        return;
    }

    if (sana.includes("ö") || sana.includes("Ö")) {
        tulos.innerHTML ="on";
    } else {
        tulos.innerHTML = "ei ole";
    }
}