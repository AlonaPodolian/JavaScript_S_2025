function tarkistaKarkausvuosi() {
  let vuosi = parseInt(document.getElementById("vuosi").value);
  let vastaus = "";

  if ((vuosi % 4 === 0 && vuosi % 100 !== 0) || (vuosi % 400 === 0)) {
    vastaus = "Vuosi on karkausvuosi";
  } else {
    vastaus = "Vuosi ei ole karkausvuosi";
  }

  document.getElementById("vastaus").innerHTML = vastaus;
}