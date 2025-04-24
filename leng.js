const fs = require("fs");
const path = require("path");
let content; 



const languageNames = {
    en: "Inglés",
    es: "Español",
    pt: "Portugués",
    uk: "Ucraniano",
    vi: "Vietnamita"
}; 

//2
 const languagesDir = path.join(__dirname,"languages"); 

const getLanguages = () => {
   return fs.readdirSync(languagesDir);
};

//3
const getContentForLanguages = (language) => {
    const languaguesPath = path.join(languagesDir, language);

    if (fs.existsSync(languaguesPath)){
        console.log("your lenguage is available");
        content= fs.readFileSync(languaguesPath, "utf-8");
        console.log(content);
        return content
    }
    else{
        console.log("Standard Error : Your language is not available ");
    }

};

//4
const getLanguagesName = (languageCode) => {
    if(languageNames[languageCode]){
       console.log("your selected language is",languageNames[languageCode]);
    }
    else
        console.log("We do not have the requested language")
};

/* //2
console.log("your languages",getLanguages());

//3
const lang = process.argv[2];
 getContentForLanguages(lang);


//4
getLanguagesName(lang);

//5
longestWord(content); */
 

module.exports = {getLanguages ,
    getContentForLanguages,
    getLanguagesName
};

