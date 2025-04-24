const fs = require("fs");
const path = require("path");

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
        const content= fs.readFileSync(languaguesPath, "utf-8");
        console.log(content);
        return content
    }
    else{
        console.error("Error : Your language is not available");
    }
};

//4
const getLanguagesName = (languageCode) => {
    if(languageNames[languageCode]){
       return languageNames[languageCode];
    }
    else
        return null
};
module.exports = {getLanguages ,
    getContentForLanguages,
    getLanguagesName
};

