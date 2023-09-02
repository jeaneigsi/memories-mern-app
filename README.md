# LES ETAPES DU PROJETS

http code : https://www.restapitutorial.com/httpstatuscodes.html

pour les problème de pendance utiliser 'npm install @material-ui/core --legacy-peer-deps' ou "npm install @material-ui/core --force
"

## Intallation des dépendances
1. npx create react app
2. install npm : nodemon,cors, body-parser,express, mongoose
3. mettre script start: "nodemon index.js" et preciser le type: "module"


### server side
1. import ,express, cors, body-parser,mongoose
2. connection à mongo (db,cluster)
3. chemin use('/') et post component
4. controller pour exporter les middleware, router pour definir les chemin
5. creer les modeles pour mongo
6. faire des appels api sur la route du localhost

## comment implementer redux
1. installer redux et @reduxjs/toolkit
2. crer le dossier action+ implementer les actions
3. creer le dossier reducer, combinereducer pour les exports
4. configurestore en index de l'application
5. configer les actions a dispatch
6. envelopper App component avce le provider de redux
7. extraire les données du store avec useSelector dans les composants
8. declencher les actions avec dispatch dans les composants
9. pour gerer des actions action utilise le middleware redux-thunk
10. tests des composants


### client side
1. import react,reactdom,express, cors et REACTDOM.render()
2. créer composant App avec "rafce"
3. creer chaque composant avec son fichier style dans le src
4. combinereducer en index pour exporter les reducer
5. 

### configuration du modele mongo
1. cluster et bloc de connection 

# 41:10