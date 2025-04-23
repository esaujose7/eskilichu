const palabraMasLarga = (frase) => {
  
    let palabra = '';
    let palabraLarga = '';

    if(frase==undefined){
      return console.log("Error, No ingresaste la frase");
    };
  
    for (let i = 0; i <= frase.length; i++) {
      const letra = frase[i];
  
      if (letra !== ' ' && i !== frase.length) {
        palabra += letra;
      }
       else {
        if (palabra.length >= palabraLarga.length) {
          palabraLarga = palabra;
        }
        palabra = '';
      }
    }
    console.log("la palabra mas larga es",palabraLarga,"con",palabraLarga.length,"caracteres");
}; 

const oracion = process.argv[2];
palabraMasLarga(oracion);


module.exports = palabraMasLarga;