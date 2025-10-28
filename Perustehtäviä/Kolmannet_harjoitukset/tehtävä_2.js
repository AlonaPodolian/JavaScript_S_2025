function muunnaSalasanaksi() {
      const sana = document.getElementById("sana").value;
      const tulosDiv = document.getElementById("tulos");

      if (sana.trim() === "") {
        tulosDiv.innerHTML = "Anna jokin sana!";
        return;
      }

      let salasana = "";
      for (let i = 0; i < sana.length; i++) {
        salasana += sana[i] + "Ö";
      }

      tulosDiv.innerHTML = `Salasana: ${salasana}`;
    }