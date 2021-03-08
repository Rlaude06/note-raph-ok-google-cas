'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

let file1 = fs.readFileSync('json/devoirs.json');
let devoirs = JSON.parse(file1);
let file2 = fs.readFileSync('json/moy.json');
let moy = JSON.parse(file2);
let file3 = fs.readFileSync('json/infos.json');
let infos = JSON.parse(file3);
let file4 = fs.readFileSync('json/edt.json');
let edt = JSON.parse(file4);

var a = 0;
var dev_te = "Vous n'avez pas de devoirs en technologie"; 
var dev_ma = "Vous n'avez pas de devoirs en mathématiques"; 
var dev_mu = "Vous n'avez pas de devoirs en musique"; 
var dev_ph = "Vous n'avez pas de devoirs en physique-chimie"; 
var dev_ap = "Vous n'avez pas de devoirs en arts plastiques"; 
var dev_fr = "Vous n'avez pas de devoirs en français"; 
var dev_hg = "Vous n'avez pas de devoirs en histoire-géo"; 
var dev_sv = "Vous n'avez pas de devoirs en SVT"; 
var dev_al = "Vous n'avez pas de devoirs en allemand"; 
var dev_la = "Vous n'avez pas de devoirs en latin"; 
var dev_es = "Vous n'avez pas de devoirs en espagnol"; 
var dev_ru = "Vous n'avez pas de devoirs en russe"; 
var dev_it = "Vous n'avez pas de devoirs en italien"; 
var dev_gr = "Vous n'avez pas de devoirs en grec"; 
var dev_an = "Vous n'avez pas de devoirs en anglais"; 
var dev_result = "en: ";
if (devoirs.te.dev != "0"){ dev_te = "Vous devez :\n"+devoirs.te.dev; dev_result = dev_result + "\n-" + devoirs.te.subject}
if (devoirs.ma.dev != "0"){ dev_ma = "Vous devez :\n"+devoirs.ma.dev; dev_result = dev_result + "\n-" + devoirs.ma.subject}
if (devoirs.mu.dev != "0"){ dev_mu = "Vous devez :\n"+devoirs.mu.dev; dev_result = dev_result + "\n-" + devoirs.mu.subject}
if (devoirs.ph.dev != "0"){ dev_ph = "Vous devez :\n"+devoirs.ph.dev; dev_result = dev_result + "\n-" + devoirs.ph.subject}
if (devoirs.ap.dev != "0"){ dev_ap = "Vous devez :\n"+devoirs.ap.dev; dev_result = dev_result + "\n-" + devoirs.ap.subject}
if (devoirs.fr.dev != "0"){ dev_fr = "Vous devez :\n"+devoirs.fr.dev; dev_result = dev_result + "\n-" + devoirs.fr.subject}
if (devoirs.hg.dev != "0"){ dev_hg = "Vous devez :\n"+devoirs.hg.dev; dev_result = dev_result + "\n-" + devoirs.hg.subject}
if (devoirs.sv.dev != "0"){ dev_sv = "Vous devez :\n"+devoirs.sv.dev; dev_result = dev_result + "\n-" + devoirs.sv.subject}
if (devoirs.al.dev != "0"){ dev_al = "Vous devez :\n"+devoirs.al.dev; dev_result = dev_result + "\n-" + devoirs.al.subject}
if (devoirs.la.dev != "0"){ dev_la = "Vous devez :\n"+devoirs.la.dev; dev_result = dev_result + "\n-" + devoirs.la.subject}
if (devoirs.es.dev != "0"){ dev_es = "Vous devez :\n"+devoirs.es.dev; dev_result = dev_result + "\n-" + devoirs.es.subject}
if (devoirs.ru.dev != "0"){ dev_ru = "Vous devez :\n"+devoirs.ru.dev; dev_result = dev_result + "\n-" + devoirs.ru.subject}
if (devoirs.it.dev != "0"){ dev_it = "Vous devez :\n"+devoirs.it.dev; dev_result = dev_result + "\n-" + devoirs.it.subject}
if (devoirs.gr.dev != "0"){ dev_gr = "Vous devez :\n"+devoirs.gr.dev; dev_result = dev_result + "\n-" + devoirs.gr.subject}
if (devoirs.an.dev != "0"){ dev_an = "Vous devez :\n"+devoirs.an.dev; dev_result = dev_result + "\n-" + devoirs.an.subject}

var moy_ge = moy.student.ge;  
var moy_ge_classe = moy.studentClass.ge;  
var moy_te = moy.student.te;  
var moy_te_classe = moy.studentClass.te;  
var moy_ma = moy.student.ma;  
var moy_ma_classe = moy.studentClass.ma;
var moy_mu = moy.student.mu;  
var moy_mu_classe = moy.studentClass.mu;
var moy_ap = moy.student.ap;  
var moy_ap_classe = moy.studentClass.ap;
var moy_ph = moy.student.ph;  
var moy_ph_classe = moy.studentClass.ph;
var moy_fr = moy.student.fr;  
var moy_fr_classe = moy.studentClass.fr;
var moy_ep = moy.student.ep;  
var moy_ep_classe = moy.studentClass.ep;
var moy_hg = moy.student.hg;  
var moy_hg_classe = moy.studentClass.hg;
var moy_sv = moy.student.sv;  
var moy_sv_classe = moy.studentClass.sv;

a=0;
var edtresult;
var cancelledClasses;
var cancelledClassesResult;
var date = edt.day;
while (a<edt.classes.length) {
    if (!edt.classes[a].iscancelled){
    if (edtresult == null) {
        edtresult = "\n-"+edt.classes[a].subject+" de "+edt.classes[a].from+" à "+edt.classes[a].to+" en "+edt.classes[a].room+",";
    } else if (a == edt.classes.length-1){
        edtresult = edtresult+"\n-"+edt.classes[a].subject+" de "+edt.classes[a].from+" à "+edt.classes[a].to+" en "+edt.classes[a].room+".";
    } else {
        edtresult = edtresult+"\n-"+edt.classes[a].subject+" de "+edt.classes[a].from+" à "+edt.classes[a].to+" en "+edt.classes[a].room+",";
    }
    } else {
        cancelledClasses = cancelledClasses+"\n-"+edt.classes[a].subject
    }
    a=a+1;
}
if(cancelledClasses != null){
    cancelledClassesResult = "Les cours suivants sont annulés :"+cancelledClasses;
}
var moy_an = moy.student.an;  
var moy_an_classe = moy.studentClass.an;  
var moy_ru = moy.student.ru;  
var moy_ru_classe = moy.studentClass.ru;  
var moy_es = moy.student.es;  
var moy_es_classe = moy.studentClass.es;  
var moy_it = moy.student.it;  
var moy_it_classe = moy.studentClass.it;  
var moy_gr = moy.student.gr;  
var moy_gr_classe = moy.studentClass.gr;
var moy_la = moy.student.la;  
var moy_la_classe = moy.studentClass.la;
var moy_al = moy.student.al;  
var moy_al_classe = moy.studentClass.al;



var nom = infos.nom;
var url_avatar = infos.url_avatar;
var classe = infos.classe;
var emp_etablissement = infos.emp_etablissement;  
var adresse_etablissement = infos.adresse_etablissement;  
var etablissement = infos.etablissement;
var codep_etablissement = infos.codep_etablissement;
var title_last_info = infos.title_last_info;
var content_last_info = infos.content_last_info;
        
        
// © rlaude06 ©

const {actionssdk, Image} = require('actions-on-google');
const app = actionssdk({debug: true});
app.intent('actions.intent.MAIN', (conv) => {
    conv.ask('Salut '+nom+'!');
    conv.ask(new Image({
        url: url_avatar}));
});
app.intent('actions.intent.TEXT', handleTextIntent);

function handleTextIntent(conv, input) {
    if (input.includes("générale") && input.includes("moyenne") && !input.includes("classe")) {
        moy = JSON.parse(file2);
        file3 = fs.readFileSync('json/infos.json');
        moy_ge = moy.student.ge;
        conv.ask('Ta moyenne générale est de '+moy_ge);
        
    }else if (input.includes("générale") && input.includes("moyenne") && input.includes("classe")) {
        
        conv.ask('La moyenne générale de classe est de '+moy_ge_classe);
        
    }else if (input === 'quelle est ma classe'||input === 'en quelle classe suis-je'||input === 'en quelle classe est-ce que je suis') {
        
        conv.ask('Votre classe est la '+classe);
        
    }else if (input.includes("anglais") && input.includes("moyenne") && !input.includes("classe")) {
        
        conv.ask('Votre moyenne en anglais est de '+moy_an);
        
    }else if (input.includes("anglais") && input.includes("moyenne") && input.includes("classe")) {
        
        conv.ask('La moyenne de classe en anglais est de '+moy_an_classe);
        
    }else if ((input.includes("techno")||input.includes("technologie")) && input.includes("moyenne") && !input.includes("classe")) {
        
        conv.ask('Votre moyenne en technologie est de '+moy_te);
        
    }else if ((input.includes("techno")||input.includes("technologie")) && input.includes("moyenne") && input.includes("classe")) {
        
        conv.ask('La moyenne de classe en technologie est de '+moy_te_classe);
        
    }else if ((input.includes("maths")||input.includes("mathématiques")) && input.includes("moyenne") && !input.includes("classe")) {
        
        conv.ask('Votre moyenne en mathématiques est de '+moy_ma);
        
    }else if ((input.includes("maths")||input.includes("mathématiques")) && input.includes("moyenne") && input.includes("classe")) {
        
        conv.ask('La moyenne de classe en mathématiques est de '+moy_ma_classe);
        
    }else if (input.includes("musique") && input.includes("moyenne") && !input.includes("classe")) {
        
        conv.ask('Votre moyenne en musique est de '+moy_mu);
        
    }else if (input.includes("musique") && input.includes("moyenne") && input.includes("classe")) {
        
        conv.ask('La moyenne de classe en musique est de '+moy_mu_classe);
        
    }else if (input.includes("physique") && input.includes("moyenne") && !input.includes("classe")) {
        
        conv.ask('Votre moyenne en physique-chimie est de '+moy_ph);
        
    }else if (input.includes("physique") && input.includes("moyenne") && input.includes("classe")) {
        
        conv.ask('La moyenne de classe en physique-chimie est de '+moy_ph_classe);
    
    }else if (input.includes("arts plastiques") && input.includes("moyenne") && !input.includes("classe")) {
        
        conv.ask('Votre moyenne en arts plastiques est de '+moy_ap);
        
    }else if (input.includes("arts plastiques") && input.includes("moyenne") && input.includes("classe")) {
        
        conv.ask('La moyenne de classe en arts plastiques est de '+moy_ap_classe);
        
    }else if (input.includes("français") && input.includes("moyenne") && !input.includes("classe")) {
        
        conv.ask('Votre moyenne en français est de '+moy_fr);
        
    }else if (input.includes("français") && input.includes("moyenne") && input.includes("classe")) {
        
        conv.ask('La moyenne de classe en français est de '+moy_fr_classe);
        
    }else if ((input.includes("sport")||input.includes("EPS")) && input.includes("moyenne") && !input.includes("classe")) {
        
        conv.ask('Votre moyenne en EPS est de '+moy_ep);
        
    }else if ((input.includes("sport")||input.includes("EPS")) && input.includes("moyenne") && input.includes("classe")) {
        
        conv.ask('La moyenne de classe en EPS est de '+moy_ep_classe);
    
    }else if ((input.includes("histoire")||input.includes("géo")) && input.includes("moyenne") && !input.includes("classe")) {
        
        conv.ask('Votre moyenne en histoire-géo est de '+moy_hg);
        
    }else if ((input.includes("histoire")||input.includes("géo")) && input.includes("moyenne") && input.includes("classe")) {
        
        conv.ask('La moyenne de classe en histoire-géo est de '+moy_hg_classe);
        
    }else if (input.includes("SVT") && input.includes("moyenne") && !input.includes("classe")) {
        
        conv.ask('Votre moyenne en SVT est de '+moy_sv);
        
    }else if (input.includes("SVT") && input.includes("moyenne") && input.includes("classe")) {
        
        conv.ask('La moyenne de classe en SVT est de '+moy_sv_classe);
        
    }else if (input.includes("allemand") && input.includes("moyenne") && !input.includes("classe")) {
        
        conv.ask('Votre moyenne en allemand est de '+moy_al);
        
    }else if (input.includes("allemand") && input.includes("moyenne") && input.includes("classe")) {
        
        conv.ask('La moyenne de classe en allemand est de '+moy_al_classe);
    
    }else if (input.includes("latin") && input.includes("moyenne") && !input.includes("classe")) {
        
        conv.ask('Votre moyenne en latin est de '+moy_la);
        
    }else if (input.includes("latin") && input.includes("moyenne") && input.includes("classe")) {
        
        conv.ask('La moyenne de classe en latin est de '+moy_la_classe);
        
    }else if (input.includes("russe") && input.includes("moyenne") && !input.includes("classe")) {
        
        conv.ask('Votre moyenne en russe est de '+moy_ru);
        
    }else if (input.includes("russe") && input.includes("moyenne") && input.includes("classe")) {
        
        conv.ask('La moyenne de classe en russe est de '+moy_ru_classe);
        
    }else if (input.includes("espagnol") && input.includes("moyenne") && !input.includes("classe")) {
        
        conv.ask('Votre moyenne en espagnol est de '+moy_es);
        
    }else if (input.includes("espagnol") && input.includes("moyenne") && input.includes("classe")) {
        
        conv.ask('La moyenne de classe en espagnol est de '+moy_es_classe);
        
    }else if (input.includes("italien") && input.includes("moyenne") && !input.includes("classe")) {
        
        conv.ask('Votre moyenne en italien est de '+moy_it);
        
    }else if (input.includes("italien") && input.includes("moyenne") && input.includes("classe")) {
        
        conv.ask('La moyenne de classe en italien est de '+moy_it_classe);
        
    }else if (input.includes("grec") && input.includes("moyenne") && !input.includes("classe")) {
        
        conv.ask('Votre moyenne en grec est de '+moy_gr);
        
    }else if (input.includes("grec") && input.includes("moyenne") && input.includes("classe")) {
        
        conv.ask('La moyenne de classe en grec est de '+moy_gr_classe);
        
    }else if (input.includes("devoirs")&&!input.includes("techno")&&!input.includes("math")&&!input.includes("musique")&&!input.includes("physique")&&!input.includes("arts")&&!input.includes("français")&&!input.includes("histoire")&&!input.includes("SVT")&&!input.includes("allemand")&&!input.includes("latin")&&!input.includes("espagnol")&&!input.includes("russe")&&!input.includes("italien")&&!input.includes("grec")&&!input.includes("anglais")) {
        
        conv.ask('Vous avez des devoirs '+dev_result);
        
    }else if (input.includes("devoirs") && input.includes("techno")) {
        
        conv.ask(dev_te);
        
    }else if (input.includes("devoirs") && input.includes("math")) {
        
        conv.ask(dev_ma);
        
    }else if (input.includes("devoirs") && input.includes("musique")) {
        
        conv.ask(dev_mu);
        
    }else if (input.includes("devoirs") && input.includes("physique")) {
        
        conv.ask(dev_ph);
        
    }else if (input.includes("devoirs") && input.includes("arts")) {
        
        conv.ask(dev_ap);
        
    }else if (input.includes("devoirs") && input.includes("français")) {
        
        conv.ask(dev_fr);
        
    }else if (input.includes("devoirs") && input.includes("histoire")) {
        
        conv.ask(dev_hg);
        
    }else if (input.includes("devoirs") && input.includes("SVT")) {
        
        conv.ask(dev_sv);
        
    }else if (input.includes("devoirs") && input.includes("allemand")) {
        
        conv.ask(dev_al);
        
    }else if (input.includes("devoirs") && input.includes("latin")) {
        
        conv.ask(dev_la);
        
    }else if (input.includes("devoirs") && input.includes("espagnol")) {
        
        conv.ask(dev_es);
        
    }else if (input.includes("devoirs") && input.includes("russe")) {
        
        conv.ask(dev_ru);
        
    }else if (input.includes("devoirs") && input.includes("italien")) {
        
        conv.ask(dev_it);
        
    }else if (input.includes("devoirs") && input.includes("grec")) {
        
        conv.ask(dev_gr);
        
    }else if (input.includes("devoirs") && input.includes("anglais")) {
        
        conv.ask(dev_an);
        
    }else if (input.includes("au revoir")||input.includes('à plus')){
        conv.ask("A la prochaine "+nom+" ! ;)");
        function function2(){
            return process.exit(1);
        }
        setTimeout(function2, 10000);        
    }else if (input.includes("test")){
        conv.ask("Le "+date+", vous avez cours:"+edtresult);       
    }



    else if (input.includes("adresse") && (input.includes("collège")||input.includes("établissement")||input.includes("lycée"))) {
        
        conv.ask('Le '+etablissement+'est situé au '+adresse_etablissement+', '+emp_etablissement+', '+codep_etablissement);
        
    }else if ((input.includes("heures")&&(input.includes("classe")||input.includes("classe")))||input.includes("absences")) {
        
        conv.ask('Tu as raté '+nb_h_manquee+' heure(s) de cours ce trimestre dont '+nb_h_injustifiee+' injustfiée(s)');
        
    }else if (input.includes("info")) {
        conv.ask(title_last_info);
        conv.ask(content_last_info);
    } else {
        conv.ask('Désolé mais je n\'ai pas compris. Essaie de reformuler ta demande');
    }
}
express().use(bodyParser.json(), app).listen(3000);
function function1(){
    return process.exit(1);
}
setTimeout(function1, 3600000);   
   // © rlaude06 ©
