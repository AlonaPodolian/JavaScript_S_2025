//*Silmukkaharjoituksia*//
function  laskeLaina () {
    let laina = 5000;
    let korkoprosentti = 0.02; // Vuotuinen korko (2%)
    let vuodet = 2;            // Laina-aika vuosina
    let maksettava = laina;   // Aluksi lainasumma
for (let i = 1; i <= vuodet; i++) {
    maksettava *= (1 + korkoprosentti);
    }
   let korkoYhteensa = maksettava - laina;
     console.log(`Lainasit ${laina} € ${vuodet} vuodeksi ${korkoprosentti * 100}% korolla.`);
  console.log(`Sinun täytyy maksaa takaisin yhteensä ${maksettava.toFixed(2)} €`);
  console.log(`Korkoa yhteensä: ${korkoYhteensa.toFixed(2)} €`);
}
laskeLaina();

function laskeKertoma(luku) {
  let kertoma = 1;  // Aloitusarvo

  for (let i = 1; i <= luku; i++) {
    kertoma *= i;
  }

  console.log(`Luvun ${luku} kertoma on ${kertoma}`);
}

// Esimerkkejä:
laskeKertoma(5);  // → 120
laskeKertoma(3);  // → 6
