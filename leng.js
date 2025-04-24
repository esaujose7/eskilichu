const fs = require("fs");
const path = require("path");
const palabraMasLarga = require("./string");

const languageNames = {
    en: "Inglés",
    es: "Español",
    pt: "Portugués",
    uk: "Ucraniano",
    vi: "Vietnamita"
};

//2
const languagesDir = path.join(__dirname,"languages");

const getLanguagues = () => {
   return fs.readdirSync(languagesDir)
};

//3
const getContentForLanguages = (languague) => {
    const languaguesPath = path.join(languagesDir, languague);

    if(fs.existsSync(languaguesPath)){
        const content=fs.readFileSync(languaguesPath, "utf-8");
        console.log("your lenguague is available");
        console.log(content);
        palabraMasLarga(content);
    }
    else{
        console.log("Standar Error : Your language is not available ")
    }

};

//4
const getLanguaguesName = (languagueCode) => {
    if(languageNames[languagueCode]){
        return languageNames[languagueCode]
    }
};

//2
console.log("lenguajes disponibles",getLanguagues());

//3
const lang = process.argv[2];
getContentForLanguages(lang);

//4
console.log("tu idioma seleccionado es",getLanguaguesName(lang));
