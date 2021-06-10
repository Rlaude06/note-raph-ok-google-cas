// © rlaude06 ©
const pronote = require('pronote-api');
const fs = require('fs');

let file1 = fs.readFileSync('json/pronote-account.json');
let account = JSON.parse(file1);
let file2 = fs.readFileSync('json/matière.json');
let mat = JSON.parse(file2);
let file3 = fs.readFileSync('json/languages.json');
let lang = JSON.parse(file3);
let file4 = fs.readFileSync('json/edt.json');
let edt = JSON.parse(file4);

//SET SESSION Values
const url = account.url;
const username = account.username;
const password = account.password;
const cas = account.cas;

 

async function main()
{
    function addDays(date, days) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
      }
      function addHours(date, hours) {
        var result = new Date(date);
        result.setHours(result.getHours() + hours);
        return result;
      }
    var from = new Date;
    from = addDays(from, 1)
    var to = addDays(from, 4);
    var ok;
    var a;

    var session = await pronote.login(url, username, password, cas);
    var marks = await session.marks();
    var contents = await session.contents();
    var evaluations = await session.evaluations();
    var absences = await session.absences();
    var homeworks = await session.homeworks(from, to);
    var infos = await session.infos();
    var user = await session.user;
    var params = await session.params;
    var files = await session.files();

    //SET Infos = "0"
    var nom = "0";
    var moy_ge_classe = "0";
    var moy_ge = "0";
    var classe = "0";
    var url_avatar = "0";
    var id_eleve = "0";
    var etablissement = "0";
    var emp_etablissement = "0";
    var codep_etablissement = "0";
    var adresse_etablissement = "0";
    var nb_h_manquee = "0";
    var nb_h_injustifiee = "0";
    var title_last_info = "0";
    var htmlcontent_last_info = "0";
    var content_last_info = "0";
    var title_last_file = "0";
    var url_last_file = "0";

    //SET MOYENNE = "0"
    var moy_te = "0";  var moy_te_classe = "0";
    var moy_ma = "0";  var moy_ma_classe = "0";
    var moy_mu = "0";  var moy_mu_classe = "0";
    var moy_ph = "0";  var moy_ph_classe = "0";
    var moy_ap = "0";  var moy_ap_classe = "0"; 
    var moy_fr = "0";  var moy_fr_classe = "0";
    var moy_ep = "0";  var moy_ep_classe = "0";
    var moy_hg = "0";  var moy_hg_classe = "0";     
    var moy_sv = "0";  var moy_sv_classe = "0";
    var moy_an = "0";  var moy_an_classe = "0";
    var moy_al = "0";  var moy_al_classe = "0";
    var moy_la = "0";  var moy_la_classe = "0";
    var moy_es = "0";  var moy_es_classe = "0";
    var moy_ru = "0";  var moy_ru_classe = "0";
    var moy_it = "0";  var moy_it_classe = "0";
    var moy_gr = "0";  var moy_gr_classe = "0";
    
    //SET Devoirs = "0"
    var an = "0";
    var te = "0";
    var ma = "0";
    var mu = "0";
    var ph = "0";
    var ap = "0";
    var fr = "0";
    var hg = "0";
    var sv = "0";
    var al = "0";
    var la = "0";
    var es = "0";
    var ru = "0";
    var it = "0";
    var gr = "0";
    //SET Infos Values
    nom = user.name;
    moy_ge_classe = marks.averages.studentClass;
    moy_ge = marks.averages.student;
    classe = user.studentClass.name.replace(/"/g, "'");
    url_avatar = user.avatar.replace(/"/g, "'");
    id_eleve = user.id.replace(/"/g, "'");
    etablissement = user.establishment.name.replace(/"/g, "'");
    emp_etablissement = user.establishmentsInfo[0].city.replace(/"/g, "'");
    codep_etablissement = user.establishmentsInfo[0].postalCode.replace(/"/g, "'");
    adresse_etablissement = user.establishmentsInfo[0].address[0].replace(/"/g, "'");
    a = 0;
    var nb_h_manquée = 0;
    while (a != absences.absences.length) {
        nb_h_manquée = nb_h_manquée + absences.absences[a].hours;
        a=a+1;
    }

    a = 0;
    var nb_h_injustifiée = 0;
    while (a != absences.absences.length) {
        if(!absences.absences[1].justified) {
            nb_h_injustifiée = nb_h_injustifiée + absences.absences[a].hours;
        }
        a = a+1;
    }
    nb_h_manquee = nb_h_manquée;
    nb_h_injustifiee = nb_h_injustifiée;
    title_last_info = infos[infos.length-1].title.replace(/"/g, "'");
    htmlcontent_last_info = infos[infos.length-1].htmlContent.replace(/"/g, "'");
    content_last_info = infos[infos.length-1].content.replace(/"/g, "'");
    title_last_file = files[0].name.replace(/"/g, "'");
    url_last_file = files[0].url.replace(/"/g, "'");
    nb_devoirs = homeworks.length; 

    //SET MOYENNE Values
    moy_te = marks.subjects[mat.te.id].averages.student;  moy_te_classe = marks.subjects[mat.te.id].averages.studentClass;
    moy_ma = marks.subjects[mat.ma.id].averages.student;  moy_ma_classe = marks.subjects[mat.ma.id].averages.studentClass;
    moy_mu = marks.subjects[mat.mu.id].averages.student;  moy_mu_classe = marks.subjects[mat.mu.id].averages.studentClass;
    moy_ph = marks.subjects[mat.ph.id].averages.student;  moy_ph_classe = marks.subjects[mat.ph.id].averages.studentClass;
    moy_ap = marks.subjects[mat.ap.id].averages.student;  moy_ap_classe = marks.subjects[mat.ap.id].averages.studentClass; 
    moy_fr = marks.subjects[mat.fr.id].averages.student;  moy_fr_classe = marks.subjects[mat.fr.id].averages.studentClass;
    moy_ep = marks.subjects[mat.ep.id].averages.student;  moy_ep_classe = marks.subjects[mat.ep.id].averages.studentClass;
    moy_hg = marks.subjects[mat.hg.id].averages.student;  moy_hg_classe = marks.subjects[mat.hg.id].averages.studentClass;     
    moy_sv = marks.subjects[mat.sv.id].averages.student;  moy_sv_classe = marks.subjects[mat.sv.id].averages.studentClass;
    
    if(lang.an == 1){moy_an = marks.subjects[mat.an.id].averages.student;  moy_an_classe = marks.subjects[mat.an.id].averages.studentClass;}
    if(lang.al == 1){moy_al = marks.subjects[mat.al.id].averages.student;  moy_al_classe = marks.subjects[mat.al.id].averages.studentClass;}
    if(lang.la == 1){moy_la = marks.subjects[mat.la.id].averages.student;  moy_la_classe = marks.subjects[mat.la.id].averages.studentClass;}
    if(lang.es == 1){moy_es = marks.subjects[mat.es.id].averages.student;  moy_es_classe = marks.subjects[mat.es.id].averages.studentClass;}
    if(lang.ru == 1){moy_ru = marks.subjects[mat.ru.id].averages.student;  moy_ru_classe = marks.subjects[mat.ru.id].averages.studentClass;}
    if(lang.it == 1){moy_it = marks.subjects[mat.it.id].averages.student;  moy_it_classe = marks.subjects[mat.it.id].averages.studentClass;}
    if(lang.gr == 1){moy_gr = marks.subjects[mat.gr.id].averages.student;  moy_gr_classe = marks.subjects[mat.gr.id].averages.studentClass;}


    to = 0;
    var homeworks = await session.homeworks(from, to);
    while (ok != 1) {
        if (homeworks[0] == null) {
            to = addDays(from, a);
            homeworks = await session.homeworks(from, to);
        }else{
            homeworks = await session.homeworks(from, to);
            ok=1;
        }
    }
    //SET Devoirs Values
    a=0;
    while (a<homeworks.length){
        if (!homeworks[a].done) {
            
        
        
        if(homeworks[a].subject == mat.te.name){
            if (te != "0") {
                te = te+'\n-'+homeworks[a].description;
            }else{
                te = "-"+homeworks[a].description;
            }
        }
        if(homeworks[a].subject == mat.ma.name){
            if (ma != "0") {
                ma = ma+'\n-'+homeworks[a].description;
            }else{
                ma = "-"+homeworks[a].description;
            }
        }
        if(homeworks[a].subject == mat.mu.name){
            if (mu != "0") {
                mu = mu+'\n-'+homeworks[a].description;
            }else{
                mu = "-"+homeworks[a].description;
            }
        }
        if(homeworks[a].subject == mat.ph.name){
            if (ph != "0") {
                ph = ph+'\n-'+homeworks[a].description;
            }else{
                ph = "-"+homeworks[a].description;
            }
        }
        if(homeworks[a].subject == mat.ap.name){
            if (ap != "0") {
                ap = ap+'\n-'+homeworks[a].description;
            }else{
                ap = "-"+homeworks[a].description;
            }
        }
        if(homeworks[a].subject == mat.fr.name){
            if (fr != "0") {
                fr = fr+'\n-'+homeworks[a].description;
            }else{
                fr = "-"+homeworks[a].description;
            }
        }
        if(homeworks[a].subject == mat.hg.name){
            if (hg != "0") {
                hg = hg+'\n-'+homeworks[a].description;
            }else{
                hg = "-"+homeworks[a].description;
            }
        }
        if(homeworks[a].subject == mat.sv.name){
            if (sv != "0") {
                sv = sv+'\n-'+homeworks[a].description;
            }else{
                sv = "-"+homeworks[a].description;
            }
        }
        if(lang.an == 1){if(homeworks[a].subject == mat.an.name){if (an != "0") {an = an+'\n-'+homeworks[a].description;}else{an = "-"+homeworks[a].description;}};}
        if(lang.al == 1){if(homeworks[a].subject == mat.al.name){if (al != "0") {al = al+'\n-'+homeworks[a].description;}else{al = "-"+homeworks[a].description;}};}        
        if(lang.la == 1){if(homeworks[a].subject == mat.la.name){if (la != "0") {la = la+'\n-'+homeworks[a].description;}else{la = "-"+homeworks[a].description;}};}
        if(lang.es == 1){if(homeworks[a].subject == mat.es.name){if (es != "0") {es = es+'\n-'+homeworks[a].description;}else{es = "-"+homeworks[a].description;}};}
        if(lang.ru == 1){if(homeworks[a].subject == mat.ru.name){if (ru != "0") {ru = ru+'\n-'+homeworks[a].description;}else{ru = "-"+homeworks[a].description;}};}
        if(lang.it == 1){if(homeworks[a].subject == mat.it.name){if (it != "0") {it = it+'\n-'+homeworks[a].description;}else{it = "-"+homeworks[a].description;}};}
        if(lang.gr == 1){if(homeworks[a].subject == mat.gr.name){if (gr != "0") {gr = gr+'\n-'+homeworks[a].description;}else{gr = "-"+homeworks[a].description;}};}
        }; 
        
        a=a+1;
    }

    //Remplacer tous les " par '
    an = an.replace(/"/g, "'");
    te = te.replace(/"/g, "'");
    ma = ma.replace(/"/g, "'");
    mu = mu.replace(/"/g, "'");
    ph = ph.replace(/"/g, "'");
    ap = ap.replace(/"/g, "'");
    fr = fr.replace(/"/g, "'");
    hg = hg.replace(/"/g, "'");
    sv = sv.replace(/"/g, "'");
    al = al.replace(/"/g, "'");
    la = la.replace(/"/g, "'");
    es = es.replace(/"/g, "'");
    ru = ru.replace(/"/g, "'");
    it = it.replace(/"/g, "'");
    gr = gr.replace(/"/g, "'");

let informations = {
    "nom": nom,
    "classe": classe,
    "url_avatar": url_avatar,
    "id_eleve": id_eleve,
    "etablissement": etablissement,
    "emp_etablissement": emp_etablissement,
    "codep_etablissement": codep_etablissement,
    "adresse_etablissement": adresse_etablissement,
    "content_last_info": content_last_info,
    "title_last_info": title_last_info
}
informations = JSON.stringify(informations);
fs.writeFileSync('json/infos.json', informations);

let devoirs = {
    "nb_devoirs": nb_devoirs,
    "an": {"dev":an, "subject": "anglais"},
    "te": {"dev":te, "subject": "technologie"},
    "ma": {"dev":ma, "subject": "mathématiques"},
    "mu": {"dev":mu, "subject": "musique"},
    "ph": {"dev":ph, "subject": "physique-chimie"},
    "ap": {"dev":ap, "subject": "arts plastiques"},
    "fr": {"dev":fr, "subject": "français"},
    "hg": {"dev":hg, "subject": "histoire-géo"},
    "sv": {"dev":sv, "subject": "SVT"},
    "al": {"dev":al, "subject": "allemand"},
    "la": {"dev":la, "subject": "latin"},
    "es": {"dev":es, "subject": "espagnol"},
    "ru": {"dev":ru, "subject": "russe"},
    "it": {"dev":it, "subject": "italien"},
    "gr": {"dev":gr, "subject": "grec"}
}
devoirs = JSON.stringify(devoirs);
fs.writeFileSync('json/devoirs.json', devoirs);
   // © rlaude06 ©

let moy = {
    "student":{
        "ge": moy_ge,
        "an": moy_an,
        "te": moy_te,
        "ma": moy_ma,
        "mu": moy_mu,
        "ph": moy_ph,
        "ap": moy_ap,
        "fr": moy_fr,
        "hg": moy_hg,
        "sv": moy_sv,
        "al": moy_al,
        "la": moy_la,
        "es": moy_es,
        "ru": moy_ru,
        "it": moy_it,
        "gr": moy_gr
    },
    "studentClass":{
        "ge": moy_ge_classe,
        "an": moy_an_classe,
        "te": moy_te_classe,
        "ma": moy_ma_classe,
        "mu": moy_mu_classe,
        "ph": moy_ph_classe,
        "ap": moy_ap_classe,
        "fr": moy_fr_classe,
        "hg": moy_hg_classe,
        "sv": moy_sv_classe,
        "al": moy_al_classe,
        "la": moy_la_classe,
        "es": moy_es_classe,
        "ru": moy_ru_classe,
        "it": moy_it_classe,
        "gr": moy_gr      
    }
}
moy = JSON.stringify(moy);
fs.writeFileSync('json/moy.json', moy);

a = 0;
to = 0;
ok = 0;
var timetable = await session.timetable(from, to);
while (ok != 1) {
if (timetable[0] == null) {
    to = addDays(from, a);
    timetable = await session.timetable(from, to);
}else{
    timetable = await session.timetable(from, to);
    ok=1;
}
a=a+1;
}
var month = timetable[0].to.getMonth()+1
var smonth;
if (month == 1) smonth = "janvier";if (month == 2) smonth = "février";if (month == 3) smonth = "mars";if (month == 4) smonth = "avril";if (month == 5) smonth = "mai";if (month == 6) smonth = "juin";if (month == 7) smonth = "juillet";if (month == 8) smonth = "août";if (month == 9) smonth = "septembre";if (month == 10) smonth = "octobre";if (month == 11) smonth = "novembre";if (month == 12) smonth = "décembre";
var day = timetable[0].to.getDay()+1;
var sday;
if (day == 1) sday = "lundi";if (day == 2) sday = "mardi";if (day == 3) sday = "mercredi";if (day == 4) sday = "jeudi";if (day == 5) sday = "vendredi";if (day == 6) sday = "samedi";if (day == 7) sday = "dimanche";


a=0;
var room;
let edt = {"day":sday+" "+timetable[0].to.getDate()+" "+smonth+" "+timetable[0].to.getFullYear(),'classes':[]};
var subject;
while (a<timetable.length) {
    if (timetable[a].subject == mat.fr.name) subject = " de français"; 
    if (timetable[a].subject == mat.te.name) subject = " de technologie"; 
    if (timetable[a].subject == mat.ma.name) subject = " de mathématiques"; 
    if (timetable[a].subject == mat.mu.name) subject = " de musique"; 
    if (timetable[a].subject == mat.ph.name) subject = " de physique-chimie"; 
    if (timetable[a].subject == mat.ap.name) subject = " d'arts plastiques"; 
    if (timetable[a].subject == mat.ep.name) subject = " d'EPS"; 
    if (timetable[a].subject == mat.hg.name) subject = " d'histoire-géo"; 
    if (timetable[a].subject == mat.sv.name) subject = " de SVT";
    if(lang.an == 1){if(timetable[a].subject == mat.an.name){subject = " d'anglais" }};
    if(lang.al == 1){if(timetable[a].subject == mat.al.name){subject = " d'allemand" }};        
    if(lang.la == 1){if(timetable[a].subject == mat.la.name){subject = " de latin" }};
    if(lang.es == 1){if(timetable[a].subject == mat.es.name){subject = " d'espagnol" }};
    if(lang.ru == 1){if(timetable[a].subject == mat.ru.name){subject = " de russe" }};
    if(lang.it == 1){if(timetable[a].subject == mat.it.name){subject = " d'italien" }};
    if(lang.gr == 1){if(timetable[a].subject == mat.gr.name){subject = " de grec" }};
    room = timetable[a].room      
    /*if(timetable[a].room.indexOf(' ') == -1){
        room = timetable[a].room   
    }else{
        room = timetable[a].room.slice(0, timetable[a].room.indexOf(' '))
    }*/
    edt.classes.push({
    "subject":subject,
    "from":timetable[a].from.getHours()+"h"+timetable[a].from.getMinutes(),
    "to":timetable[a].to.getHours()+"h"+(timetable[a].from.getMinutes()-5),
    "iscancelled":timetable[a].isCancelled,
    "room":room
    });
    a=a+1;
}
edt = JSON.stringify(edt);
fs.writeFileSync('json/edt.json', edt);
return;
}

main().catch(err => {
    if (err.code === pronote.errors.WRONG_CREDENTIALS.code) {
        console.error('Mauvais identifiants');    
    } else {
        console.error(err);
    }
});
// © rlaude06 ©