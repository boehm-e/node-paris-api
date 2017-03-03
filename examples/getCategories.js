parisApi =  require('../lib/paris');

let paris = new parisApi({
  token: "YOUR_TOKEN"
});

categories = paris.equipement.getCategories();
categories.then((result) => {
  console.log(result);
})
