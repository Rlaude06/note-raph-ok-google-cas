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
et cas par votre cas parmis la liste suivante :  
<details>
  <summary>CAS list</summary>
  
    - Académie d'Orleans-Tours (CAS : ac-orleans-tours, URL : "ent.netocentre.fr")
    - Académie de Besançon (CAS : ac-besancon, URL : "cas.eclat-bfc.fr")
    - Académie de Bordeaux (CAS : ac-bordeaux, URL : "mon.lyceeconnecte.fr")
    - Académie de Bordeaux 2 (CAS : ac-bordeaux2, URL : "ent2d.ac-bordeaux.fr")
    - Académie de Caen (CAS : ac-caen, URL : "fip.itslearning.com")
    - Académie de Clermont-Ferrand (CAS : ac-clermont, URL : "cas.ent.auvergnerhonealpes.fr")
    - Académie de Dijon (CAS : ac-dijon, URL : "cas.eclat-bfc.fr")
    - Académie de Grenoble (CAS : ac-grenoble, URL : "cas.ent.auvergnerhonealpes.fr")
    - Académie de la Loire (CAS : cybercolleges42, URL : "cas.cybercolleges42.fr")
    - Académie de Lille (CAS : ac-lille, URL : "cas.savoirsnumeriques62.fr")
    - Académie de Lille (CAS : ac-lille2, URL : "teleservices.ac-lille.fr")
    - Académie de Limoges (CAS : ac-limoges, URL : "mon.lyceeconnecte.fr")
    - Académie de Lyon (CAS : ac-lyon, URL : "cas.ent.auvergnerhonealpes.fr)
    - Académie de Marseille (CAS : atrium-sud, URL : "atrium-sud.fr")
    - Académie de Montpellier (CAS : ac-montpellier, URL : "cas.mon-ent-occitanie.fr")
    - Académie de Nancy-Metz (CAS : ac-nancy-metz, URL : "cas.monbureaunumerique.fr")
    - Académie de Nantes (CAS : ac-nantes, URL : "cas3.e-lyco.fr")
    - Académie de Poitiers (CAS : ac-poitiers, URL : "mon.lyceeconnecte.fr")
    - Académie de Reims (CAS : ac-reims, URL : "cas.monbureaunumerique.fr")
    - Académie de Rouen (Arsene76) (CAS : arsene76, URL : "cas.arsene76.fr")
    - Académie de Rouen (CAS : ac-rouen, URL : "nero.l-educdenormandie.fr")
    - Académie de Strasbourg (CAS : ac-strasbourg, URL : "cas.monbureaunumerique.fr")
    - Académie de Toulouse (CAS : ac-toulouse, URL : "cas.mon-ent-occitanie.fr")
    - Académie du Val-d'Oise (CAS : ac-valdoise, URL : "cas.moncollege.valdoise.fr")
    - ENT "Agora 06" (Nice) (CAS : agora06, URL : "cas.agora06.fr")
    - ENT "Haute-Garonne" (CAS : haute-garonne, URL : "cas.ecollege.haute-garonne.fr")
    - ENT "Hauts-de-France" (CAS : hdf, URL : "enthdf.fr")
    - ENT "La Classe" (Lyon) (CAS : laclasse, URL : "www.laclasse.com")
    - ENT "Lycee Connecte" (Nouvelle-Aquitaine) (CAS : lyceeconnecte, URL : "mon.lyceeconnecte.fr")
    - ENT "Seine-et-Marne" (CAS : seine-et-marne, URL : "ent77.seine-et-marne.fr")
    - ENT "Somme" (CAS : somme, URL : "college.entsomme.fr")
    - ENT "Portail Famille" (Orleans Tours) (CAS : portail-famille, URL : "seshat.ac-orleans-tours.fr:8443")
    - ENT "Toutatice" (Rennes) (CAS : toutatice, URL : "www.toutatice.fr")
    - ENT "Île de France" (CAS : iledefrance, URL : "ent.iledefrance.fr")
    - ENT "Mon collège Essonne" (CAS : moncollege-essonne, URL : "www.moncollege-ent.essonne.fr")
    - ENT "Paris Classe Numerique" (CAS : parisclassenumerique, URL : "ent.parisclassenumerique.fr")
    - ENT "Lycee Jean Renoir Munich" (CAS : ljr-munich, URL : "cas.kosmoseducation.com")
    - ENT "L'Eure en Normandie" (CAS : eure-normandie, URL : "cas.ent27.fr")  
</details>
