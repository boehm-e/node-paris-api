let request = require('request');
let http = require('http');

module.exports = function(params) {
  module.exports.params = params;

  module.getCategories = getCategories;
  module.getEquipements = getEquipements;
  module.getEquipement = getEquipement;
  module.getGeoEquipements = getGeoEquipements;
  module.getCrowdLevel = getCrowdLevel;
  return module;
}

let getCategories = async function() {
  let token = module.exports.params.token
  return new Promise(function(resolve, reject) {
    request(`https://api.paris.fr/api/data/1.0/Equipements/get_categories/?token=${token}`, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        let data = JSON.parse(body);
        if (data.status == 'success')
        return resolve(data.data);
      }
      return reject(error);
    });
  })
}

let getEquipements = async function(parameters) {
  let token = module.exports.params.token
  return new Promise(function(resolve, reject) {
    request({
      url: `https://api.paris.fr/api/data/1.1/Equipements/get_equipements/?token=${token}`,
      form: parameters
    }, function (error, response, body) {
      let data = JSON.parse(body);
      if (!error && response.statusCode == 200) {
        if (data.status == 'success')
        return resolve(data.data);
      }
      return reject(data.message);
    });
  })
}

let getEquipement = async function(parameters) {
  let token = module.exports.params.token
  return new Promise(function(resolve, reject) {
    request({
      url: `https://api.paris.fr/api/data/1.0/Equipements/get_equipement/?token=${token}`,
      form: parameters
    }, function (error, response, body) {
      let data = JSON.parse(body);
      if (!error && response.statusCode == 200) {
        if (data.status == 'success')
        return resolve(data.data);
      }
      return reject(data.message);
    });
  })
}

let getGeoEquipements = async function(parameters) {
  let token = module.exports.params.token
  return new Promise(function(resolve, reject) {
    request({
      url: `https://api.paris.fr/api/data/1.1/Equipements/get_geo_equipements/?token=${token}`,
      form: parameters
    }, function (error, response, body) {
      let data = JSON.parse(body);
      if (!error && response.statusCode == 200) {
        if (data.status == 'success')
        return resolve(data.data);
      }
      return reject(data.message);
    });
  })
}

let getCrowdLevel = async function(parameters) {
  let token = module.exports.params.token
  return new Promise(function(resolve, reject) {
    request({
      url: `https://api.paris.fr/api/data/1.0/Equipements/get_crowd_level/?token=${token}`,
      form: parameters
    }, function (error, response, body) {
      let data = JSON.parse(body);
      if (!error && response.statusCode == 200) {
        if (data.status == 'success')
        return resolve(data.data);
      }
      return reject(data.message);
    });
  })
}
