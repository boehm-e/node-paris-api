// EQUIPEMENT
await paris.equipement.getCategories()

await paris.equipement.getEquipements({
  cid: 240,
  offset: 1,
  limit: 100
})

await paris.equipement.getEquipement({
  id: 6423
})

await paris.equipement.getGeoEquipements({
  cid: 240,
  offset: 1,
  limit: 100,
  lat: 48.864716,
  lon: 2.349014,
  radius: 50000
})

await paris.equipement.getCrowdLevel({
  id: 6423
})



// QUE FAIRE
await paris.quefaire.getCategories();

await paris.quefaire.getUnivers();

await paris.quefaire.getDisciplines();

await paris.quefaire.getTags();

await paris.quefaire.getEvents({
  categories: "10",
  start: 1488557638,
  tags: "",
  end: 2488557738,
  offset: 1,
  limit: 100
})

await paris.quefaire.getActivities({
  disciplines: Array(25).fill().map((x,i) => (i+1).toString()),
  offset: 1,
  limit: 100
})

await paris.quefaire.getActivity({
 id: 530
})

await paris.quefaire.searchActivities({
  cid: "0",
  keyword: "brocante",
  offset:1,
  limit:100
})

await paris.quefaire.getProgramme({
  id: 1300
})

await paris.quefaire.getRecords({
  ids: Array(250).fill().map((x,i) => (i+1).toString())
})

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
