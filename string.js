const longestWord = (frase) => {
  
    let palabra = '';
    let palabraLarga = '';

    if(frase==undefined){
      return console.log("Error, You did not enter the phrase");
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
    console.log("the longest word is",palabraLarga,"with",palabraLarga.length,"characters");
}; 


module.exports =longestWord;