# PARIS API node.js bindings (http://api.paris.fr)

## installation

    npm i node-paris-api


## how to use

    parisApi =  require('node-paris-api');

    let paris = new parisApi({
      token: "YOU_TOKEN"
    });

    categories = paris.equipement.getCategories();
    categories.then((result) => {
      console.log(result);
    })
