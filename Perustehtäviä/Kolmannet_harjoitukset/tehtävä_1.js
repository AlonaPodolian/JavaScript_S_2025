function tulostaParilliset() {
      const syote = parseInt(document.getElementById("luku").value);
      const tulosDiv = document.getElementById("tulos");
      tulosDiv.innerHTML = "";

      if (isNaN(syote)) {
        tulosDiv.innerHTML = "<p>Anna jokin luku!</p>";
        return;
      }

      if (syote % 2 !== 0) {
        tulosDiv.innerHTML = "<p>Luku ei ole parillinen!</p>";
        return;
      }

      let html = "<table><tr>";
      for (let i = 2; i <= syote; i += 2) {
        html += `<td>${i}</td>`;
      }
      html += "</tr></table>";

      tulosDiv.innerHTML = html;
    }