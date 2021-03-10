# Note Raph
L'objectif de Note Raph ok-google est de connecter un compte pronote avec ok-google. A terme ce logiciel deviendra une suite qui aura pour objectifs d'améliorer pronote via différentes extensions :  
-Note Raph ok-google  
-Note Raph calendar (en cours de programation)  
Note Raph ok-google permet de récupérer tout ce que l'application pronote propose à la portée de votre voix.  
Par exemple, les devoirs, les moyennes, les notes l'emploi du temps etc...  
Si vous êtes bloqué durant la configuration envoyez moi un mail à note.raph.help@outlook.com avec le détail de votre souci et un screen de votre terminal de commande Visual Studio Code.  
Par ailleurs si vous n'avez jamais codé de votre vie suivez à la lettre chaque consigne pour éviter d'être bloqué.  


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

Allez dans le dossier C:\Users\(votre nom d'utilisateur)\note-raph-ok-google-cas (/home/(votrenomutilisateur)/note-raph-ok-google-cas pour linux) et faites clic droit ouvrir avec Code (si vous avez installé Visual Studio Code). Sinon allez dans le dossier json et ouvrez le fichier pronote-account.json en faisant clic droit ouvrir avec > Bloc-Notes. Si vous avez choisis d'utiliser visual studio code allez dans le dossier json et cliquez sur pronote-account.json.  
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
cd $HOME/note-raph-ok-google-cas  
```
pour windows  
``` shell  
cd %HOMEPATH%\note-raph-ok-google-cas 
```
Dans visual studio code ouvrez le terminal en bas à gauche.
Dans les deux cas exécutez la commande : 
``` shell  
npm init
```
Puis appuyez sur entrer jusqu'à ce que vous puissiez exécuter une nouvelle commande puis exécutez la commande :  
``` shell  
npm update
```
Attendez la fin de son exécution puis éxecutez la commande suivante :  
``` shell 
npm -i --save pronote-api actions-on-google body-parser express
```
Vous pouvez maintenant éxecuter le premier script qui s'appelle test.js

# Les scripts d'initialisation

Nous allons tout d'abord tester si les identifiants sont correct en éxecutant la commande :  
``` shell 
node test.js
```
Si dans le terminal vous avez le message "Mauvais identifiants" rendez-vous dans la partie précédente vous vous êtes trompé quelque part. Votre fichier pronote-account.json doit ressembler à celui-ci (remplacez les ? par vos identifiants) :  
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
Vous pouvez maintenant exécutez le second script nommé "init.js" qui configurera un maximum de chose à votre place
``` shell 
node init.js
```
Une fois celui-ci exécuté, rendez-vous dans le dossier json et éditez le fichier matière.json. Mettez un saut de ligne avant chaque "{" pour rendre le code plus lisible. Vous aurez un résulat semblable au mien : 
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
Changer les crochets du tout début du code et de la fin par des "{" en respectant le sens des crochet pour un résulat similaire au suivant :  
``` json
{
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
}
```
Enfin devant chaque "{" rajoutez les deux premières lettres de la matière selon le modèle suivant :  
``` json
    "an" : {"name": "ANGLAIS LV2", "id":0 },
    "te" : {"name": "TECHNOLOGIE", "id":0 },
    "ma" : {"name": "MATHEMATIQUES", "id":0 },
    "mu" : {"name": "MUSIQUE", "id":0 },
    "ph" : {"name": "PHYSIQUE-CHIMIE", "id":0 },
    "ap" : {"name": "ARTS PLASTIQUES", "id":0 },
    "fr" : {"name": "FRANCAIS", "id":0 },
    "ep" : {"name": "ED.PHYSIQUE & SPORT.", "id":0 },
    "hg" : {"name": "HISTOIRE-GEOGRAPHIE", "id":0 },
    "sv" : {"name": "SCIENCES VIE & TERRE", "id":0 },
    "al" : {"name": "ALLEMAND LV1", "id":0 },
    "la" : {"name": "LCA LATIN", "id":0 },
    "es" : {"name": "ESPAGNOL LV2", "id":0 },
    "ru" : {"name": "RUSSE LV1", "id":0 },
    "it" : {"name": "ITALIEN LV2", "id":0 },
    "gr" : {"name": "LCA GRECQUE", "id":0 }
```
Note : Les matières non-renseignées dans ce modèle ne sont pas supporté il faut donc supprimer la ligne correspondante de cette manière (ici on supprime VIE DE CLASSE) :
``` json
{  
"an" : {"name": "ANGLAIS LV2", "id":0 },   
"te" : {"name": "TECHNOLOGIE", "id":0 },   
"vi" : {"name": "VIE DE CLASSE", "id":0 },  
"la" : {"name": "LCA LATIN", "id":0 }  
}  
```
Après modification le code ressemble à ceci tout simplement :  
``` json
{  
"an" : {"name": "ANGLAIS LV2", "id":0 },   
"te" : {"name": "TECHNOLOGIE", "id":0 },   
"la" : {"name": "LCA LATIN", "id":0 }  
}  
```
Mon résultat après toutes les modifications ressemble à ceci (cela changera pour l'ordre et les options de votre côté) :
``` json
{
    "an":{"name":"ANGLAIS LV2","id":0},
    "te":{"name":"TECHNOLOGIE","id":1},
    "ma":{"name":"MATHEMATIQUES","id":3},
    "mu":{"name":"MUSIQUE","id":4},
    "ph":{"name":"PHYSIQUE-CHIMIE","id":5},
    "ap":{"name":"ARTS PLASTIQUES","id":6},
    "fr":{"name":"FRANCAIS","id":7},
    "ep":{"name":"ED.PHYSIQUE & SPORT.","id":8},
    "hg":{"name":"HISTOIRE-GEOGRAPHIE","id":9},
    "sv":{"name":"SCIENCES VIE & TERRE","id":10},
    "al":{"name":"ALLEMAND LV1","id":11},
    "la":{"name":"LCA LATIN","id":12}
}
```
Rendez-vous dans le fichier languages.json et remplacez les 0 par des 1 pour les langues que vous pratiquez. Vous obtiendrez un fichier similaire au mien :  
``` json
{
    "an": 1, //Anglais
    "al": 1, //Allemand
    "es": 0, //Espagnol
    "ru": 0, //Russe
    "it": 0, //Italien
    "la": 1, //Latin
    "gr": 0  //Grec
}
```
Une fois que vous avez fais ça vous avez fais le plus difficile le reste vous paraîtra étonnement simple.

# Création de l'application google
Rendez vous sur [le lien suivant](https://console.actions.google.com/)  
Cliquez sur "New project", donnez lui le nom que vous voulez (ici je vais l'appeler noteraph), sélectionnez "french" et "france", puis "create project".  
Choisissez "Custom", "Blank Project" et cliquez sur "Start Building".  
Dans "display name" mettez "Note Raph", puis cliquez sur "save". Maintenant cliquez sur les trois points en haut à gauche à ciôté de votre profil, puis sur "project settings".  
Copiez le "Project-id" (pour moi "noteraph-c633a").  
Résumé des étapes en image :  
![Capture d’écran 2021-03-10 235127](https://user-images.githubusercontent.com/43902216/110708826-90bcd180-81fb-11eb-90e9-06cb637a8d0d.png)  
![Capture d’écran 2021-03-10 234243](https://user-images.githubusercontent.com/43902216/110708360-dd53dd00-81fa-11eb-93e8-d924cdd37fdd.png)  
![Capture d’écran 2021-03-10 234311](https://user-images.githubusercontent.com/43902216/110708443-f9f01500-81fa-11eb-81bb-bb6cb3fae934.png)  
![Capture d’écran 2021-03-10 234325](https://user-images.githubusercontent.com/43902216/110708459-007e8c80-81fb-11eb-972f-515c8168a18f.png)  
![Capture d’écran 2021-03-10 234340](https://user-images.githubusercontent.com/43902216/110708473-05dbd700-81fb-11eb-9801-77dcef3d9ab6.png)  
![Capture d’écran 2021-03-10 234356](https://user-images.githubusercontent.com/43902216/110708485-096f5e00-81fb-11eb-802f-e7721455908c.png)  
![Capture d’écran 2021-03-10 234440](https://user-images.githubusercontent.com/43902216/110708495-0d9b7b80-81fb-11eb-89c9-a468d20b912a.png)  
![Capture d’écran 2021-03-10 234458](https://user-images.githubusercontent.com/43902216/110708649-489daf00-81fb-11eb-91e3-818f02e699e3.png)  
![Capture d’écran 2021-03-10 235018](https://user-images.githubusercontent.com/43902216/110708722-679c4100-81fb-11eb-9a8e-537b80947c84.png)  
![Capture d’écran 2021-03-10 234001](https://user-images.githubusercontent.com/43902216/110708739-6e2ab880-81fb-11eb-84fd-dadd30778019.png)  
![Capture d’écran 2021-03-10 233814](https://user-images.githubusercontent.com/43902216/110708760-74b93000-81fb-11eb-998c-93c533fd5bea.png)  


Revenez sur Visual Studio Code ecrivez dans le terminal.
Si vous êtes sous linux éxecutez d'abord :  
``` shell
sudo chmod +x gactions
```
Puis :  
``` shell
./gactions init
```  

Sous Windows faites tout simplement :  
``` shell
.\gactions.exe init
```
Cela créera un fichier action.json.  
Ouvrez ce fichier et remplacer le code présant dans le fichier par le suivant :  
``` json
{
  "actions": [
    {
      "description": "Connect pronote with okgoogle",
      "name": "MAIN",
      "fulfillment": {
        "conversationName": "pronote"
      },
      "intent": {
        "name": "actions.intent.MAIN",
        "trigger": {
          "queryPatterns": [
            "talk to pronote"
          ]
        }
      }
    }
  ],
  "conversations": {
    "pronote": {
      "name": "pronote",
      "url": "lien ngrok"
    }
  },
  "locale": "fr"
}

```
Une fois cela fait rendez vous sur [le site suivant](https://ngrok.com/) et créez vous un compte.
Une fois connecté à ce compte vous arrivez sur votre dash board qui ressemble à ceci : 
![image](https://user-images.githubusercontent.com/43902216/110550604-491f4280-8134-11eb-91ee-b75f4f98c1b2.png)
Copiez la valeur que j'ai surligné en rouge et rendez-vous dans le terminal de visual studio code pour écrire la commande suivante :  
Sous Windows :  
``` shell
.\ngrok.exe authtoken collezvotretokenici
```
Sous Linux :  
``` shell
sudo chmod +x ngrok && ./ngrok authtoken collezvotretokenici
```
Ouvrez un powershell sur windows. Pour cela restez enfoncé sur la touche Windows + R et tapez powershell. Sous linux ouvrez simplement un terminal.
Sous Windows :  
``` shell
.\note-raph-ok-google-cas\ngrok.exe http 3000
```
Sous Linux :  
``` shell
./note-raph-ok-google-cas/ngrok http 3000
```
Ne fermez pas cette fenêtre c'est elle qui permet à google de communiquer avec votre machine. Copiez le lien commençant par https et collez le dans votre fichier action.json à la place de "lien ngrok" (gardez bien les guillemets).
Maintenant réouvrez Visual Studio Code et exécutez la commande suivante en remplaçant par l'id de votre app ok google créée ci-dessus (PROJECT ID) :  
Sous Windows :  
``` shell
./gactions.exe update -action_package action.json -project (suivi du PROJECT ID)
```
Sous Linux :  
``` shell
./gactions update -action_package action.json -project (suivi du PROJECT ID)
```
Copiez le lien du terminal et ouvrez le dans chrome.  
Connectez vous à votre compte. Il vous renverra une clé à copier-coller dans le terminal de Visual Studio Code.  
Appuyez sur entrer. Le terminal affichera un lien restez enfoncé sur Ctrl et cliquez gauche sur ce lien vous arrivez dans un simulateur de google home.  
Ne fermez pas l'onglet et rendez-vous dans Visual Studio Code.  
Exé-cutez la commande suivant :  
``` shell
node index.js
```
Rendez vous dans l'onglet chrome où l'application test tourne et cliquez sur "Parler avec Note Raph".  
![Capture d’écran 2021-03-10 233923](https://user-images.githubusercontent.com/43902216/110709117-032db180-81fc-11eb-96d9-a400bac3a4d2.png)  
Si il vous réponds que l'application ne réponds pas retournez dans le fichier action.json et vérifiez le lien ngrok. Une fois les modification effectuées rendez-vous dans le terminal, faites Ctrl+C et éxecutez la commande suivante pour mettre à jour l'adresse :  
Sous Windows :  
``` shell
.\gactions.exe update -action_package action.json -project (suivi du PROJECT ID)
```
Sous Linux :  
``` shell
./gactions update -action_package action.json -project (suivi du PROJECT ID)
```
Puis relancez index.js :  
``` shell
node index.js
```
Retournez sur l'environement de test et rééssayez (si vous avez toujours un problème à vous connecter contactez moi sur mon mail (note.raph.help@outlook.com)).  
Si tout se passe bien google vous saluera amicalement avec votre nom prénom.  
Pour tester rapidement dans la bar en haut qui sert à parler à google écrivez :  
quelle est ma moyenne générale  
Si elle vous retourne votre moyenne général magnifique ok google marche !  
Quittez le programme dans le terminal en faisant Ctrl+C.
Sous windows :  
-Rendez-vous dans votre dossier personnnel en faisant Win+R puis %HOMEPATH% puis entrer.  
-Rendez-vous dans le dossier note-raph-ok-google-cas.  
-Double-cliquez sur le fichier start.bat et ça y est pronote marche sur tous les appareil ok google connecté à votre compte google :  

-Votre téléphone si il est sous android
-Votre google home
-Votre environement de test google home
-Votre télé connectée
-Votre montre connectée...

Sous linux :  
Ouvrez un terminal. Faites :  
``` shell
cd note-raph-ok-google-cas  
sudo chmod +x start.sh
sudo bash start.sh
```

A chaque arrêt de votre pc vous devez :  
Sous Windows :  
* Ouvrir un powershell et exécuter la commande :  
``` shell
.\note-raph-ok-google-cas\ngrok.exe http 3000
```
* Copier le lien commançant par https et le coller à la place de l'ancien dans le fichier action.json
* Ouvrir une deuxième fenêtre de powershell et éxecuter les commandes suivantes :  
``` shell
.\note-raph-ok-google\gactions.exe update -action_package action.json -project (PROJECT ID de votre app okgoogle(sans les parenthèses))
.\note-raph-ok-google\start.bat
```
Sous Linux :  
* Ouvrir un terminal et exécuter la commande :  
``` shell
./note-raph-ok-google-cas/ngrok http 3000
```
* Copier le lien commançant par https et le coller à la place de l'ancien dans le fichier action.json
* Ouvrir une deuxième fenêtre de powershell et éxecuter les commandes suivantes :  
``` shell
./note-raph-ok-google/gactions.exe update -action_package action.json -project (PROJECT ID de votre app okgoogle(sans les parenthèses))
sudo bash ./note-raph-ok-google/start.sh
```
