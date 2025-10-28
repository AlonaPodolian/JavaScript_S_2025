function tulostanHipHeijaa() {
    const tulosId = document.getElementById("tulos");
    let tulos = "";

    for (let i = 1; i <=100; i++) {
        if (i % 3 === 0 && i % 5 ===0) {
            tulos += "hipheijaa ";
        } else  if (i % 3 === 0) {
            tulos += "hip ";
        } else {
            tulos += i + " ";
        }
    }

    tulosId.innerHTML = tulos;
}