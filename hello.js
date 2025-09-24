// Alla oleva tulostaa konsoliin viestin "Hello world"
console.log("Hei maailma!");
console.log("Pieni possu sanoi, "+"\"Olen iloinen\"" );
var luku1 = 3;
var luku2 = 4;
console.log(luku1 + luku2);
console.log(luku1 - luku2);
console.log(luku1 * luku2);
console.log(luku1/luku2);

var cel = 0;
var fah = cel * 1.8 +32;
console.log(`${cel} Celsiusastetta on ${fah} Fahrenheit astetta`);

fah = 212;
cel = (fah - 32)/1.8;
console.log(`${fah} Fahrenheit astetta on ${cel} Celsiusastetta`); 


var mailit = 100;
var kilometrit = mailit * 1.609;
console.log(`${mailit} mailia on  ${kilometrit.toFixed(2)} kilometriä`);

var kilometrit =100;
var mailit = kilometrit/1.609;
console.log(`${kilometrit} kilometriä on  ${mailit.toFixed(2)} mailia`);

var tuumat = 100;
var sentit = tuumat * 2.54;
console.log(`${tuumat} tuumaa on ${sentit.toFixed(2)} senttiä`);

var sentit = 100;
var tuumat = sentit/2.54;
console.log(`${sentit} senttiä on ${tuumat.toFixed(2)} tuumaa`);

var yardit = 100;
var metrit = yardit * 0.9144;
console.log(`${yardit} yardit on ${metrit.toFixed(2)} matriä`);

var metrit = 100;
var yardit = yardit/0.9144;
console.log(`${metrit} metriä on ${yardit.toFixed(2)} yardia`);



function summafunktio(a, b) {
    console.log("Lukujen " +a + " ja " +b + " summa on " + (a+b));
}
summafunktio(10, 2);

function erotusfunktio(a,b) {
    console.log(`Lukujen ${a} ja ${b} erotus on ${a-b}`);
}
erotusfunktio(10,2);

function tulofunktio(a, b) {
    console.log(`Lukujen ${a} ja ${b} tulo on ${a*b}`);
}
tulofunktio(10, 2);

function osamaarafunktio(a, b) {
    console.log(`Lukujen ${a} ja ${b} osamaara on ${a/b}`);
}
osamaarafunktio(10, 2);

var pii = 3.1415;
function ympyranAla(sade) {
    console.log(`Ympyrän pinta-ala on ${sade*sade*pii.toFixed(2)} kun sade on ${sade}`);
}
ympyranAla(5);

function nelionAla(sivu) {
    console.log(`Neliön ala on ${sivu*sivu} kun sivu on ${sivu}`);
}
nelionAla(5);

function suorakulmionAla(pituus, leveys) {
    console.log(`Kun pituus on ${pituus} ja leveys on ${leveys} suorakulmion ala on ${pituus*leveys}`);
}
suorakulmionAla(10, 2);

function muunnaVuosiksi(paivat) {
                    let vuodet = parseInt(paivat / 365);
                    let kuukaudet = parseInt((paivat % 365) / (365 / 12));
                    let pvt = parseInt((paivat % 365) - kuukaudet * (365 / 12));
                    console.log(paivat + " päivää on " + vuodet + " vuotta " + kuukaudet + " kuukautta ja " + pvt + " päivää.")
                }
muunnaVuosiksi(400);              






