console.log("Hei maailma!");

function suurempi(a, b) {
    if (a > b) { console.log(`Suurempi luku on ${a}`);}
else if (b > a) { console.log(`Suurempi luku on ${b}`);}
else {console.log(`Luvut ovat yhtäsuuret`);}
}
suurempi(10, 11);
suurempi(11, 10);

function suurinKolmesta(a, b, c) {
    if (a > b && a > c) { console.log(`Suurin luku on ${a}`);}
    else if (b > c) { console.log(`Suurin luku on ${b}`);}
    else { console.log(`Suurin luku on ${c}`);}
}
suurinKolmesta(1, 2, 3);
suurinKolmesta(1, 3, 2);
suurinKolmesta(2, 1, 3);
suurinKolmesta(2, 3, 1);
suurinKolmesta(3, 1, 2);
suurinKolmesta(3, 1, 3);


function jaollinen(luku) {
    if (luku % 5 == 0 && luku % 11 == 0) {
        console.log(`Luku ${luku} on jaollinen sekä 5:llä, että 11:sta`);
    }
    else if (luku % 5 == 0 || luku % 11 == 0) 
        {
        console.log(`Luku ${luku} on jaollinen 5:llä tai 11:sta`); 
    }
        else {
            console.log(`Luku ${luku} ei ole jaollinen 5:llä tai 11:sta`);
        }
   }
jaollinen(55);
jaollinen(50);
jaollinen(44);
jaollinen(56);

function karkaus(vuosi) {
    if (vuosi % 4 == 0 && vuosi % 100 != 0) {
        console.log(`Vuosi ${vuosi} on karkausvuosi`);
    }
    else if (vuosi % 400 == 0) {
        console.log(`Vuosi ${vuosi} on karkausvuosi`);
    }
    else {
        console.log(`Vuosi ${vuosi} ei ole karkausvuosi`);
    }
}
karkaus(2004);
karkaus(2000);
karkaus(2025);
karkaus(1984);

function parillinenPariton(luku) {
    if (luku % 2 == 0) {
        console.log(`Luku ${luku} on parillinen`);
    }
    else {
        console.log(`Luku ${luku} on pariton`)
    }
}
parillinenPariton(3),
parillinenPariton(2);
parillinenPariton(0);

function kirjainko(merki) {
    if (merki.length == 1 && merki.match(/[a-öA-Ö]/i)) {
        console.log(`Annettu ${merki} on kirjain`);
    }
    else {
        console.log(`Annettu ${merki} ei ole kirjan`);
    }
}
kirjainko("t");
kirjainko(1);
kirjainko("!");
kirjainko("D");
kirjainko("Ä");
kirjainko("*");
kirjainko("ab");
kirjainko("a","b");

function vokaaliKonsonantti(merkki) {
    if (merkki.match(/[aeiouyäö]/i)) {
        console.log(`Annettu ${merkki} on vokaali`);
    }
    else if (merkki.match(/[bcdfghjklmnpqrstvwxz]/i)) {
        console.log(`Annettu ${merkki} on konsonantti`);
    }
    else {
        console.log(`Annettu ${merkki} ei ole kumpikaan`)
    }
}
vokaaliKonsonantti("f");
vokaaliKonsonantti("ö");
vokaaliKonsonantti("&");

function kiNuEm(merkki) {
    let kirjain = /[a-öA-Ö]/i;
                    let numero = /[0-9]/i;
                    if (merkki.length == 1 && merkki.match(kirjain))
    {
        console.log(`Merkki ${merkki} on kirjain`);
    }
    else if (merkki.match(numero)) {
        console.log(`Merkki ${merkki} on numero`);
    }
    else {
        console.log(`Merkki ${merkki} on erikoismerkki`);
    }
}
kiNuEm("F");
kiNuEm("9");
kiNuEm("=");

function isoPieni (merkki) {
    if (merkki.match(/[a-öA-Ö]/i) && merkki == merkki.toUpperCase()) {
       console.log(`Merkki ${merkki} on iso kirjain`);
    }
    else if (merkki.match(/[a-öA-Ö]/i) && merkki == merkki.toLowerCase()) {
      console.log(`Merkki ${merkki} on pieni kirjain`);
    }
    else {
        console.log(`Merkki ${merkki} ei ole kirjain`);
    }
 }
 isoPieni("w");
 isoPieni("L");
 isoPieni("&");
 isoPieni("1");

 function voittoTappio(myynti, osto) {
    myynti = parseInt(myynti);
    osto = parseInt(osto);
    if ((myynti - osto) >0) {
        console.log(`Sait voittoa ${(myynti - osto)}`);
    }
    else {
        console.log(`Tappiosi oli ${(myynti - osto)}`);
    }
 }
voittoTappio(40, 20);
voittoTappio(20, 40);
voittoTappio(20, 20);

function koePisteet(Ma, KeFy, Ai, Ru, En) {
     var taulukko = [["Matematiikka", Ma], ["KemiaFysiikka", KeFy], ["Aidinkieli", Ai], ["Ruotsi", Ru], ["Englanti", En]];
    for (var i = 0; i < taulukko.length; i++) {
        if (taulukko[i][1] >= 90) {
         console.log(taulukko[i][0] + ": K5");
        }
         else if (taulukko[i][1] >= 80) {
            console.log(taulukko[i][0] + ": H4");
        }
         else if (taulukko[i][1] >= 70) {
            console.log(taulukko[i][0] + ": H3");
        }
         else if (taulukko[i][1] >= 60) {
            console.log(taulukko[i][0] + ": T2");
        }
         else if (taulukko[i][1] >= 50) {
            console.log(taulukko[i][0] + ": T1");
         }
         else {
             console.log(taulukko[i][0] + ": Hylätty");
        }
    }
}
koePisteet(55, 78, 63, 88, 94); 
koePisteet(99, 45, 70, 80, 60);

 function viikonpaiva(nro) {
    nro = parseInt(nro);
    console.log(nro);
    switch (nro) {
case 1:
    console.log("Maanantai");
    break;
case 2:
    console.log("Tiistai");
    break;
case 3:
    console.log("Keskiviikko");
    break;
case 4:
    console.log("Torstai");
    break;
case 5:
    console.log("Perjantai");
    break;
case 6:
    console.log("Lauantai");
    break;
case 7:
    console.log("Sunnuntai");
    break;
default:
    console.log("Anna numero välillä 1-7");
break;
    }
}
viikonpaiva(4);
viikonpaiva(0);
viikonpaiva(8);

function tarkastaKokonaisluvut(a, b) {
    try {
    // Yritetään muuntaa annetut arvot kokonaisluvuiksi.
    const lukuA = parseInt(a);
    const lukuB = parseInt(b);

    // Tarkistetaan, ovatko luvut NaN-arvoja, mikä osoittaa virheellisen muunnoksen.
    if (isNaN(lukuA) || isNaN(lukuB)) {
    throw new Error("Et antanut kokonaislukuja");
    }

    // Vertaillaan, ovatko luvut samat.
    if (lukuA === lukuB) {
    return "Antamasi luvut ovat samat.";
    } else {
        return "Antamasi luvut eivät ole samat.";
    }
    } catch (error) {
    // Jos tapahtuu virhe (esim. muunnos ei onnistu), palautetaan virheviesti.
    return error.message;
    }
}

  console.log(tarkastaKokonaisluvut(5, 5)); // Tulostaa "Antamasi luvut ovat samat."
  console.log(tarkastaKokonaisluvut(5, "kymmenen")); // Tulostaa "Et antanut kokonaislukuja"
  console.log(tarkastaKokonaisluvut("3", 3)); // Tulostaa "Antamasi luvut ovat samat."
  console.log(tarkastaKokonaisluvut(10, "kymmenen"));

 function aanestys(ika) {
    ika = parseInt(ika);
    if (ika >= 18) {
         console.log("Voit äänestää");
    }
    else if (isNaN(ika)) {
        console.log("Et antanut numeroa");
    }
    else {
        console.log("Et voi äänestää");
    }
}
aanestys(19);
aanestys(5);
aanestys("viisi");

 function kuukaudenPaivat(kknro) {
    kknro = parseInt(kknro);
    switch (kknro) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
console.log("Kuukaudessa on 31 päivää");
break;
        case 4:
        case 6:
        case 9:
        case 11:
console.log("Kuukaudessa on 30 päivää");
break;
         case 2:
console.log("Kuukaudessa on 27/28 päivää");
    }
}
kuukaudenPaivat(2);
kuukaudenPaivat(6);
kuukaudenPaivat(7);

function seteleiksi(amount) {
    var note1 = 0, note2 = 0, note5 = 0, note10 = 0, note20 = 0, note50 = 0, note100 = 0, note500 = 0;
    if (amount >= 500) {
        note500 = Math.floor(amount / 500);
        amount -= note500 * 500;
    }
    if (amount >= 100) {
        note100 = Math.floor(amount / 100);
        amount -= note100 * 100;
    }
    if (amount >= 50) {
        note50 = Math.floor(amount / 50);
        amount -= note50 * 50;
    }
    if (amount >= 20) {
        note20 = Math.floor(amount / 20);
        amount -= note20 * 20;
    }
    if (amount >= 10) {
        note10 = Math.floor(amount / 10);
        amount -= note10 * 10;
    }
    if (amount >= 5) {
        note5 = Math.floor(amount / 5);
        amount -= note5 * 5;
    }
    if (amount >= 2) {
        note2 = Math.floor(amount / 2);
        amount -= note2 * 2;
    }
    if(amount >= 1) {
       note1 = amount;
    }
console.log("Total number of notes = \n");
console.log("500 = " + note500);
console.log("100 = " + note100);
console.log("50 = " + note50);
console.log("20 = " + note20);
console.log("10 = " + note10);
console.log("5 = " + note5);
console.log("2 = " + note2);
console.log("1 = " + note1);
}
seteleiksi(1295);
seteleiksi(1383);
seteleiksi(200);

 function kolmio(a, b, c) {
    if (a + b + c == 180) {
console.log("Kolmio on mahdollinen");
    }
    else {
console.log("Kolmio ei ole mahdollinen");
    }
}
kolmio(60, 60, 60);
kolmio(61, 61, 61);



