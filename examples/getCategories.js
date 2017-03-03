parisApi =  require('../lib/paris');

let paris = new parisApi({
  token: "f25f95d62ea10db59949183f5caf94f7dada53d3778a5bc52b266c4fd20b6258"
});

categories = paris.equipement.getCategories();
categories.then(function(result){
  console.log(result);
})
