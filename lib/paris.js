var Paris = function(auth){
  this.auth = auth;
  this.equipement = require('./methodes/equipement')(this.auth);
  this.quefaire = require('./methodes/quefaire')(this.auth);
};


module.exports = Paris;
