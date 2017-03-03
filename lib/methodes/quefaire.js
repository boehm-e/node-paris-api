let request = require('request');
let http = require('http');

module.exports = function(params) {
  module.exports.params = params;

  module.getCategories = getCategories;
  module.getUnivers = getUnivers;
  module.getDisciplines = getDisciplines;
  module.getTags = getTags;
  module.getEvents = getEvents;
  module.getActivities = getActivities;
  module.getActivity = getActivity;
  module.searchActivities = searchActivities;
  module.getProgramme = getProgramme;
  module.getRecords = getRecords;
  module.getGeoActivities = getGeoActivities;
  return module;
}

let getCategories = async function() {
  let token = module.exports.params.token
  return new Promise(function(resolve, reject) {
    request({
      url: `https://api.paris.fr/api/data/2.1/QueFaire/get_categories/?token=${token}`
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

let getUnivers = async function() {
  let token = module.exports.params.token
  return new Promise(function(resolve, reject) {
    request({
      url: `https://api.paris.fr/api/data/2.0/QueFaire/get_univers/?token=${token}`
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

let getDisciplines = async function() {
  let token = module.exports.params.token
  return new Promise(function(resolve, reject) {
    request({
      url: `https://api.paris.fr/api/data/2.1/QueFaire/get_disciplines/?token=${token}`
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

let getTags = async function() {
  let token = module.exports.params.token
  return new Promise(function(resolve, reject) {
    request({
      url: `https://api.paris.fr/api/data/2.1/QueFaire/get_tags/?token=${token}`
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

let getEvents = async function(parameters) {
  let token = module.exports.params.token
  return new Promise(function(resolve, reject) {
    request({
      url: `https://api.paris.fr/api/data/2.2/QueFaire/get_events/?token=${token}`,
      form: parameters
    }, function (error, response, body) {
      form: parameters
      let data = JSON.parse(body);
      if (!error && response.statusCode == 200) {
        if (data.status == 'success')
        return resolve(data.data);
      }
      return reject(data.message);
    });
  })
}

let getActivities = async function(parameters) {
  let token = module.exports.params.token
  return new Promise(function(resolve, reject) {
    request({
      url: `https://api.paris.fr/api/data/2.1/QueFaire/get_activities/?token=${token}`,
      form: parameters
    }, function (error, response, body) {
      form: parameters
      let data = JSON.parse(body);
      if (!error && response.statusCode == 200) {
        if (data.status == 'success')
        return resolve(data.data);
      }
      return reject(data.message);
    });
  })
}

let getActivity = async function(parameters) {
  let token = module.exports.params.token
  return new Promise(function(resolve, reject) {
    request({
      url: `https://api.paris.fr/api/data/2.0/QueFaire/get_activity/?token=${token}`,
      form: parameters
    }, function (error, response, body) {
      form: parameters
      let data = JSON.parse(body);
      if (!error && response.statusCode == 200) {
        if (data.status == 'success')
        return resolve(data.data);
      }
      return reject(data.message);
    });
  })
}

let searchActivities = async function(parameters) {
  let token = module.exports.params.token
  return new Promise(function(resolve, reject) {
    request({
      url: `https://api.paris.fr/api/data/2.0/QueFaire/search_activities/?token=${token}`,
      form: parameters
    }, function (error, response, body) {
      form: parameters
      let data = JSON.parse(body);
      if (!error && response.statusCode == 200) {
        if (data.status == 'success')
        return resolve(data.data);
      }
      return reject(data.message);
    });
  })
}

let getProgramme = async function(parameters) {
  let token = module.exports.params.token
  return new Promise(function(resolve, reject) {
    request({
      url: `https://api.paris.fr/api/data/1.5/QueFaire/get_programme/?token=${token}`,
      form: parameters
    }, function (error, response, body) {
      form: parameters
      let data = JSON.parse(body);
      if (!error && response.statusCode == 200) {
        if (data.status == 'success')
        return resolve(data.data);
      }
      return reject(data.message);
    });
  })
}

let getRecords = async function(parameters) {
  let token = module.exports.params.token
  return new Promise(function(resolve, reject) {
    request({
      url: `https://api.paris.fr/api/data/2.1/QueFaire/get_records/?token=${token}`,
      form: parameters
    }, function (error, response, body) {
      form: parameters
      let data = JSON.parse(body);
      if (!error && response.statusCode == 200) {
        if (data.status == 'success')
        return resolve(data.data);
      }
      return reject(data.message);
    });
  })
}

let getGeoActivities = async function(parameters) {
  let token = module.exports.params.token
  return new Promise(function(resolve, reject) {
    request({
      url: `https://api.paris.fr/api/data/1.4/QueFaire/get_geo_activities/?token=${token}`,
      form: parameters
    }, function (error, response, body) {
      form: parameters
      let data = JSON.parse(body);
      if (!error && response.statusCode == 200) {
        if (data.status == 'success')
        return resolve(data.data);
      }
      return reject(data.message);
    });
  })
}
