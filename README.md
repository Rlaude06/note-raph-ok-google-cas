# Note Raph
L'objectif de Note Raph ok-google est de connecter un compte pronote avec ok-google. A terme ce logiciel deviendra une suite qui aura pour objectifs d'améliorer pronote via différentes extensions :  
-Note Raph ok-google  
-Note Raph calendar (en cours de programation)  
Note Raph ok-google permet de récupérer tout ce que l'application pronote propose à la portée de votre voix.  
Par exemple, les devoirs, les moyennes, les notes l'emploi du temps etc...


# Pré-requis
Vous devez disposer :  
-de [Node js](https://nodejs.org/)  
-d'un ordinateur sous windows ou linux capable de tourner h24 (sinon tournez vous vers des options de vps (payantes))

### Installation node js
Sous windows : cliquer sur [ce lien](https://nodejs.org/) et installez le .exe qui termine par LTS   
Sous linux :
``` shell 
sudo apt update
```
``` shell 
sudo apt upgrade
```
``` shell 
sudo apt install node
```
``` shell 
sudo apt install npm
```

### Configuration de l'ordinateur
Je conseille d'utiliser un ordinateur portable qui ne sert plus à la maison et de le brancher sur secteur pour pouvoir le laisser tourner constament.
Pour cela il faut désactiver la mise en veille à la fermeture du capot (vous pouvez suivre : [ce tuto](https://forums.cnetfrance.fr/tutoriels-windows-10/665543-windows-10-comment-desactiver-la-mise-en-veille-a-la-fermeture-du-capot-d-un-pc-portable)).
Une fois fais pour simplifer la configuration je vous conseille d'installer [visual studio code](https://code.visualstudio.com/) (pas obligatoire simple conseil)
Après tout cela on peut passer à la configuration des script.

# Configuration des scripts
Si vous devez passer par un ent ou le site de votre collège pour vous authentifier vous êtes lur le bon code, sinon, si vous devez vous identifier directement via un site pronote, rendez vous sur [ce lien](https://github.com/Rlaude06/note-raph-ok-google/).
Téléchargez le fichier zip depuis le github et dézippez le dans le dossier Utilisateurs/(votre nom d'utilisateur windows) ou sur /home/(votre nom d'utilisateur) si vous êtes sur linux.  
Connectez vous à votre session pronote via un ent ou le site de votre collège et copié l'url (sans : "eleve.html?identifiant=......") qui devrait ressembler à celui-ci :  
https://????????.index-education.net/pronote/  

Allez dans le dossier Utilisateurs/(votre nom d'utilisateur)/note-raph-ok-google-cas et faites clic droit ouvrir avec Code (si vous avez installé Visual Studio Code). Sinon allez dans le dossier json et ouvrez le fichier pronote-account.json en faisant clic droit ouvrir avec > Bloc-Notes. Si vous avez choisis d'utiliser code allez dans le dossier json et cliquez sur pronote-account.json.  
Remplacez la valeur "url": "https://demo.index-education.net/pronote/" par "url": "le lien que vous avez copié (remssemblant à https://????????.index-education.net/pronote/  )" (faites attention à bien garder les guillemets.  
Faites pareil en remplaçant "demonstration" par "votre nom d'utilisteur ent",   
"pronotevs" par "votre mot de passe" 
et "cas" par "votre cas" parmis la liste suivante :  
<details>
  <summary>CAS list</summary>
  
    - Académie d'Orleans-Tours (CAS : "ac-orleans-tours")
    - Académie de Besançon (CAS : "ac-besancon")
    - Académie de Bordeaux (CAS : "ac-bordeaux")
    - Académie de Bordeaux 2 (CAS : "ac-bordeaux2")
    - Académie de Caen (CAS : "ac-caen")
    - Académie de Clermont-Ferrand (CAS : "ac-clermont")
    - Académie de Dijon (CAS : "ac-dijon")
    - Académie de Grenoble (CAS : "ac-grenoble")
    - Académie de la Loire (CAS : "cybercolleges42")
    - Académie de Lille (CAS : "ac-lille")
    - Académie de Lille (CAS : "ac-lille2")
    - Académie de Limoges (CAS : "ac-limoges")
    - Académie de Lyon (CAS : "ac-lyon")
    - Académie de Marseille (CAS : "atrium-sud")
    - Académie de Montpellier (CAS : "ac-montpellier")
    - Académie de Nancy-Metz (CAS : "ac-nancy-metz")
    - Académie de Nantes (CAS : "ac-nantes")
    - Académie de Poitiers (CAS : "ac-poitiers")
    - Académie de Reims (CAS : "ac-reims")
    - Académie de Rouen (Arsene76) (CAS : "arsene76")
    - Académie de Rouen (CAS : "ac-rouen")
    - Académie de Strasbourg (CAS : "ac-strasbourg")
    - Académie de Toulouse (CAS : "ac-toulouse")
    - Académie du Val-d'Oise (CAS : "ac-valdoise")
    - ENT "Agora 06" (Nice) (CAS : "agora06")
    - ENT "Haute-Garonne" (CAS : "haute-garonne")
    - ENT "Hauts-de-France" (CAS : "hdf")
    - ENT "La Classe" (Lyon) (CAS : "laclasse")
    - ENT "Lycee Connecte" (Nouvelle-Aquitaine) (CAS : "lyceeconnecte")
    - ENT "Seine-et-Marne" (CAS : "seine-et-marne")
    - ENT "Somme" (CAS : somme)
    - ENT "Portail Famille" (Orleans Tours) (CAS : "portail-famille")
    - ENT "Toutatice" (Rennes) (CAS : "toutatice")
    - ENT "Île de France" (CAS : "iledefrance")
    - ENT "Mon collège Essonne" (CAS : "moncollege-essonne")
    - ENT "Paris Classe Numerique" (CAS : "parisclassenumerique")
    - ENT "Lycee Jean Renoir Munich" (CAS : "ljr-munich")
    - ENT "L'Eure en Normandie" (CAS : "eure-normandie")  
</details>

Une fois tous les changements effectués sauvegardez le fichier.
Si vous êtes sous linux et que vous ne savez pas vraiment vous servir du terminale de même pour windows il est toujours temps d'installer Visual Studio Code.
Si vous tenez quand même à ne pas installer visual studio code ouvrez un terminal ou un powershell si vous êtes sous windows et rendez vous dans le dossier note-raph-ok-google  
pour linux :  
``` shell  
cd /home/(nom d'utilisateur)/note-raph-ok-google-cas  
```
pour windows  
``` shell  
cd C:/Utilisateurs/(nom d'utilisateur)/note-raph-ok-google-cas 
```
Dans visual studio code ouvrez le terminal en bas à gauche.
Dans les deux cas exécutez la commande : 
``` shell  
npm init
```
Puis appuyer sur entrer jusqu'à ce que vous puissiez exécuter une nouvelle commande puis exécuter la commande :  
``` shell  
npm update
```
Attendez la fin de son éxecution puis éxecutez la commande suivante :  
``` shell 
npm -i --save pronote-api actions-on-google body-parser express
```
Vous pouvez maintenant éxecuter le premier script qui s'appelle test.js

# Les scripts d'initialisation

Nous allons tout d'abord tester si les identifiants sont correct en éxecutant la commande :  
``` shell 
node test.js
```
Si dans le terminal vous avez le message Mauvais identifiants rendez vous dans la partie précédente vous vous êtes trompé quelque par votre fichier pronote-account.json doit ressembler à celui-ci (remplacer les ? par vos identifiants) :  
```json
{
    "url": "https://??????.index-education.net/pronote/",

    "username": "?????.??????",

    "password": "????????????",

    "cas": "??????"
}
```
Si le script ne marche toujours pas alors rendez vous sur [ce lien](https://github.com/Rlaude06/note-raph-ok-google/) et suivez les instructions.
Si le script marche bravo vous avez passé une grande partie des difficultées.
Vous pouvez maintenant éxecuter le second script nommé "init.js" qui configurera un maximum de chose à votre place
``` shell 
node init.js
```
Une fois celui-ci éxecuter rendez vous dans le dossier json et éditez le fichier matière.json. Mettez un saut de ligne avant chaque "{" pour rendre le code plus lisible. Vous aurez un résulat semblable au miens : 
```json
[
    {"name":"ANGLAIS LV2","id":0},
    {"name":"TECHNOLOGIE","id":1},
    {"name":"VIE DE CLASSE","id":2},
    {"name":"MATHEMATIQUES","id":3},
    {"name":"MUSIQUE","id":4},
    {"name":"PHYSIQUE-CHIMIE","id":5},
    {"name":"ARTS PLASTIQUES","id":6},
    {"name":"FRANCAIS","id":7},
    {"name":"ED.PHYSIQUE & SPORT.","id":8},
    {"name":"HISTOIRE-GEOGRAPHIE","id":9},
    {"name":"SCIENCES VIE & TERRE","id":10},
    {"name":"ALLEMAND LV1","id":11},
    {"name":"LCA LATIN","id":12},
    {"name":"suppr","id":0},
    {"name":"suppr","id":0},
    {"name":"suppr","id":0},
    {"name":"suppr","id":0}
]
```
Supprimez tous ceux qui ont pour valeur name "suppr" Vous obtiendrez quelque chose de semblable à ce code (avec un ordre diffèrent potentiellement ce qui n'est pas un problème) (n'oubliez pas de retirer la dernière virgule) :
``` json
[
    {"name":"ANGLAIS LV2","id":0},
    {"name":"TECHNOLOGIE","id":1},
    {"name":"VIE DE CLASSE","id":2},
    {"name":"MATHEMATIQUES","id":3},
    {"name":"MUSIQUE","id":4},
    {"name":"PHYSIQUE-CHIMIE","id":5},
    {"name":"ARTS PLASTIQUES","id":6},
    {"name":"FRANCAIS","id":7},
    {"name":"ED.PHYSIQUE & SPORT.","id":8},
    {"name":"HISTOIRE-GEOGRAPHIE","id":9},
    {"name":"SCIENCES VIE & TERRE","id":10},
    {"name":"ALLEMAND LV1","id":11},
    {"name":"LCA LATIN","id":12}
]
```

