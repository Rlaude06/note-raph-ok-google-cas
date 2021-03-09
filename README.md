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
Connectez vous à votre session pronote via un ent ou le site de votre collège et copié l'url qui devrait ressembler à celui-ci :  
https://0750669v.index-education.net/pronote/
