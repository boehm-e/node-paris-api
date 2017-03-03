(async function() {
  parisApi = module.exports = require('./lib/paris');

  let paris = new parisApi({
    token: "f25f95d62ea10db59949183f5caf94f7dada53d3778a5bc52b266c4fd20b6258"
  });

  try {
    // a = await paris.equipement.getCategories()

    a = await paris.quefaire.getGeoActivities({
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
    console.log(a);
  } catch (e) {
    console.log("ERROR CALLING : ", e);
  }
})();
