const pronote = require('pronote-api');
const fs = require('fs');

let file1 = fs.readFileSync('json/pronote-account.json');
let account = JSON.parse(file1);
let file2 = fs.readFileSync('json/matière.json');
let mat = JSON.parse(file2);
let file3 = fs.readFileSync('json/languages.json');
let lang = JSON.parse(file3);
// Exemple
const url = account.url;
const username = account.username;
const password = account.password;
const cas = account.cas;
async function main()
{
    var from = new Date();
    function addDays(date, days) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
      }
    var to = addDays(from, 1)
    from = addDays(from, -3)
    const session = await pronote.login(url, username, password, cas);
    const user = session.user;
    const classContents = await session.contents(from, to);
    var class_te = "0";
    var class_ma = "0";
    var class_mu = "0";
    var class_ph = "0";
    var class_ap = "0";
    var class_fr = "0";
    var class_ep = "0";
    var class_hg = "0";
    var class_sv = "0";
    var class_an = "0";
    var class_al = "0";
    var class_la = "0";
    var class_es = "0";
    var class_ru = "0";
    var class_it = "0";
    var class_gr = "0";
    var i = 0;
    while (i<classContents.length){
        if (classContents[i].subject == mat.te.name) {
            class_te = classContents[i].description
        }
        if (classContents[i].subject == mat.ma.name) {
            class_ma = classContents[i].description
        }
        if (classContents[i].subject == mat.mu.name) {
            class_mu = classContents[i].description
        }
        if (classContents[i].subject == mat.ph.name) {
            class_ph = classContents[i].description
        }
        if (classContents[i].subject == mat.ap.name) {
            class_ap = classContents[i].description
        }
        if (classContents[i].subject == mat.fr.name) {
            class_fr = classContents[i].description
        }
        if (classContents[i].subject == mat.ep.name) {
            class_ep = classContents[i].description
        }
        if (classContents[i].subject == mat.hg.name) {
            class_hg = classContents[i].description
        }
        if (classContents[i].subject == mat.sv.name) {
            class_sv = classContents[i].description
        }
        if(lang.an == 1) {if(classContents[i].subject == mat.an.name) {class_an = classContents[i].description}}
        if(lang.al == 1) {if(classContents[i].subject == mat.al.name) {class_al = classContents[i].description}}
        if(lang.la == 1) {if(classContents[i].subject == mat.la.name) {class_la = classContents[i].description}}
        if(lang.es == 1) {if(classContents[i].subject == mat.es.name) {class_es = classContents[i].description}}
        if(lang.ru == 1) {if(classContents[i].subject == mat.ru.name) {class_ru = classContents[i].description}}
        if(lang.it == 1) {if(classContents[i].subject == mat.it.name) {class_it = classContents[i].description}}
        if(lang.gr == 1) {if(classContents[i].subject == mat.gr.name) {class_gr = classContents[i].description}}
        
        i=i+1
    }
    console.log(class_sv)
    var insert = {
            "an": class_an,
            "te": class_te,
            "ma": class_ma,
            "mu": class_mu,
            "ph": class_ph,
            "ap": class_ap,
            "fr": class_fr,
            "hg": class_hg,
            "sv": class_sv,
            "al": class_al,
            "la": class_la,
            "es": class_es,
            "ru": class_ru,
            "it": class_it,
            "gr": class_gr
    }
    console.log(insert)
}
main().catch(err => {
    if (err.code === pronote.errors.WRONG_CREDENTIALS.code) {
        console.error('Mauvais identifiants');    
    } else {
        console.error(err);
    }
});