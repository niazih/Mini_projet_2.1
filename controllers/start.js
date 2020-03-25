
// importer le fichier connection.js
var file = require('./connection');
file.start();


exports.index_html = function(req, res){
  connection.query("SELECT * FROM items", function(error, results, fields) {
    if (error) {
      return console.error(error.message);
  }
  //console.log(results);
  res.render('start.html', { title: 'Confiseries ', rows: results});
  });
}


//console.log(this.index());
