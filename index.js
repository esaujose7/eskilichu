const {getLanguages , getContentForLanguages, getLanguagesName}=require("./leng");
const longestWord = require("./string");
let content; 

const frase = process.argv[2];

//------------------------
//2
console.log("your languages",getLanguages());

//3
const lang = process.argv[2];
 getContentForLanguages(lang);


//4
getLanguagesName(lang); // ESTO ME HACE EL RETURN UNDEFINED
console.log("CHEKEO",content);

//5
longestWord(content);



