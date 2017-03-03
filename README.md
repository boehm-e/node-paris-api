# PARIS API node.js bindings (http://api.paris.fr)

## installation
```
npm i node-paris-api
```
## how to use
```javascript
let parisApi = require('node-paris-api');

let paris = new parisApi({
  token: "YOU_TOKEN"
});

categories = paris.equipement.getCategories();
categories.then((result) => {
  console.log(result);
})
```
## API Overview

### equipement


Retourne la liste des catégories (piscines, parcs et jardins, bibliothèques, etc...)

```javascript
await paris.equipement.getCategories()
```

Recupère l'ensemble des équipements d'une catégorie donnée.
```javascript
await paris.equipement.getEquipements({
  cid: 240,
  offset: 1,
  limit: 100
})

```

Recupère les informations sur un équipements donnée
```javascript
await paris.equipement.getEquipement({
  id: 6423
})
```

Recupère l'ensemble des équipements d'une catégorie donnée classé par distance d'un point donné.
```javascript
await paris.equipement.getGeoEquipements({
  cid: 240,
  offset: 1,
  limit: 100,
  lat: 48.864716,
  lon: 2.349014,
  radius: 50000
})

```

Retourne l'affluence d'un équipement.
```javascript
await paris.equipement.getCrowdLevel({
  id: 6423
})

```


### quefaire

Retourne la liste des rubriques (brocante, concert, expositions, etc...)
```javascript
await paris.quefaire.getCategories();
```


Retourne la liste des univers.
```javascript
await paris.quefaire.getUnivers();
```


Retourne la liste des disciplines d'une activité
```javascript
await paris.quefaire.getDisciplines();
```


Retourne la liste des tags
```javascript
await paris.quefaire.getTags();
```


Récupère les derniers évènements en fonction de certains crières.
```javascript
await paris.quefaire.getEvents({
  categories: "10",
  start: 1488557638,
  tags: "",
  end: 2488557738,
  offset: 1,
  limit: 100
})
```

Récupère les dernières activites et événements.
```javascript
await paris.quefaire.getActivities({
  disciplines: Array(25).fill().map((x,i) => (i+1).toString()),
  offset: 1,
  limit: 100
})
```

Récupère toutes les informations sur un événement donné.
```javascript
await paris.quefaire.getActivity({
 id: 530
})
```


Recherche les activites et événements en cours ou à venir par mot clef.
```javascript
await paris.quefaire.searchActivities({
  cid: "0",
  keyword: "brocante",
  offset:1,
  limit:100
})
```

Récupère les données complètes d'un programme
```javascript
await paris.quefaire.getProgramme({
  id: 1300
})
```

Récupère les fiches sur la base de leur identifiant.
```javascript
await paris.quefaire.getRecords({
  ids: Array(250).fill().map((x,i) => (i+1).toString())
})
```

Recherche les activites et événements en fonction d'un point (lat,lon) et d'un rayon.
```javascript
await paris.quefaire.getGeoActivities({
  cid: Array(250).fill().map((x,i) => (i+1).toString()),
  tag: "1,2,3,4",
  created: 0,
  start: 0,
  end: 0,
  lat: 48.856332,
  lon: 2.353453,
  radius: 5000,
  offset: 1,
  limit: 100
})
```
