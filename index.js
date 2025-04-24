const {getLanguages , getContentForLanguages, getLanguagesName}=require("./leng");
const longestWord = require("./string");
const lang = process.argv[2];

//------------------------
//2
console.log("your languages",getLanguages());

//3
const content = getContentForLanguages(lang);

//4
console.log("your selected language is",getLanguagesName(lang)); 

//5
if (content) {
    longestWord(content);
}


