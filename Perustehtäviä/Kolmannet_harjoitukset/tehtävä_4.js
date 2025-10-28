function laskeKertoma() {
  const syote = parseInt(document.getElementById("luku").value);
      const tulos = document.getElementById("tulos");

      if (isNaN(syote) || syote < 0) {
        tulos.innerHTML = "Anna positiivinen kokonaisluku!";
        return;
      }

      let kertoma = 1;
      let lasku = "";

      for (let i = syote; i >= 1; i--) {
        kertoma *= i;
        lasku += (i === 1) ? i : i + " * ";
      }

      tulos.innerHTML = `${lasku} = ${kertoma}`;
    }
