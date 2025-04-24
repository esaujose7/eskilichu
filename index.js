const {getLanguages , getContentForLanguages, getLanguagesName}=require("./leng");
const longestWord = require("./string");
const frase = process.argv[2];

//------------------------
//2
console.log("your languages",getLanguages());

//3
const lang = process.argv[2];

const content = getContentForLanguages(lang);

//4
getLanguagesName(lang); 



//5
if (content) {
    longestWord(content);
}


