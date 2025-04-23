const palabraMasLarga = () => {
  const frase = process.argv[2];
    let palabra = '';
    let palabraLarga = '';

    if(frase==undefined){
      return console.log("error, frase mal ingresada");
    };
  
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

palabraMasLarga();

module.exports = palabraMasLarga;