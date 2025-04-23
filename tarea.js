const palabraMasLarga = (frase) => {
    let palabra = '';
    let palabraLarga = '';
  
    for (let i = 0; i <= frase.length; i++) {
      const letra = frase[i];
  
      if (letra !== ' ' && i !== frase.length) {
        palabra += letra;
      } else {
        if (palabra.length >= palabraLarga.length) {
          palabraLarga = palabra;
        }
        palabra = '';
      }
    }
    console.log("la palabra mas larga es",palabraLarga,"con",palabraLarga.length,"caracteres");
}; 


const frase = process.argv[2];
palabraMasLarga(frase);