var express = require('express');
var router = express.Router();

var Busboy = require('busboy'),
inspect = require('util').inspect,
azureBlobService = require('../services/blobstorage');

/* GET home page. */

router.get('/', function(req, response) {
  response.render('index', { title: 'Upload images to azure blob' });
});

router.post("/upload", function (request, response) {                                               
    var busboy = new Busboy({ headers: request.headers });
    busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
      azureBlobService.saveToBlob(filename,file, function ( err, result) {
          if(err){
            response.send(500,err)
          } else {
            response.redirect('/show?name=' + encodeURI(filename));
          }
      });
    });
    request.pipe(busboy);                                                                                                  
});  
router.get('/show', function(req, res) {
  res.render('show', {
    name: req.query.name,
    url: azureBlobService.getUrl(req.query.name)
  })
})
module.exports = router;
