function muunnaSalasanaksi() {
    const sana = document.getElementById("salasana").value;

    if (!sana) {
        document.getElementById("tulos").innerHTML = "Anna ensin salasana!"; return;
    }
    const merkit = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let uusi = "";

    for (let i = 0; i < sana.length; i++) {
        const satunnaisKirjain = merkit.charAt(Math.floor(Math.random() * merkit.length));
        uusi += sana[i]+satunnaisKirjain;
    }
    document.getElementById("tulos").innerHTML = "Uusi salasana: " + uusi;
}