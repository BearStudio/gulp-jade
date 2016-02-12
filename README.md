# Configuration de Gulp pour Jade
## Par le BearStudio pour le NormandyJUG

### jade-compiler
Cette configuration gulp est le strict minimum afin de pouvoir compiler vos fichiers .jade.

### jade-data
Cette configuration gulp est le strict minimum afin de pouvoir compiler vos fichiers .jade avec un fichier de données .json.

### jade-dev
Cette configuration gulp est une version allégée avec laquelle vous pouvez développer et essayer jade avec plus de confort.

## Requirements
Vous devez avoir un système avec **npm** d'installé.

Pour commencer, dans le dossier du projet choisi ( jade-compiler, jade-data, jade-dev ), taper la commande suivante :

     npm install && bower install

## Utiliser la plateforme
### Pour toutes les plateformes
Afin de compiler jade :

     gulp jade

### Pour jade-dev seulement
Nettoyer les fichiers générés :

    gulp clean

Démarrer gulp en "watch" :
*( Auto-compilation sur changement des fichiers jade )*

     gulp watch

---
Réalisé par **Thibault Barske**
&copy;** BearStudio 2016**
