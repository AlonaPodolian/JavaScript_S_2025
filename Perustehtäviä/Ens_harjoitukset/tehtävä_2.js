function etsiSuurin() {
    let taulu = [];
    let n1 = document.getElementById(`n1`).value;
    let n2 = document.getElementById(`n2`).value;
    let n3 = document.getElementById(`n3`).value;
    let n4 = document.getElementById(`n4`).value;
    let n5 = document.getElementById(`n5`).value;
    
    taulu.push(Number(n1), Number(n2), Number(n3), Number(n4), Number(n5));
    
    //taulu.sort((a,b) => (a-b));
    let vastaus = document.getElementById("t2v");
    vastaus.innerHTML = `Suurin numero on ${Math.max(...taulu)}`

}