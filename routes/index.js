var express = require('express');
var router = express.Router();
var Busboy = require('busboy');

/* GET home page. */

router.get('/', function(req, response) {
  response.render('index', { title: 'Upload images to azure blob' });
});

router.post("/upload", function (request, response) {                                               
    var busboy = new Busboy({ headers: request.headers });
    busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
      console.log('File [' + fieldname + ']: filename: ' + filename);
      file.on('data', function(data) {
        console.log('File [' + fieldname + '] got ' + data.length + ' bytes');
      });
      file.on('end', function() {
        console.log('File [' + fieldname + '] Finished');
      });
    });
    busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated) {
      console.log('Field [' + fieldname + ']: value: ' + inspect(val));
    });
    busboy.on('finish', function() {
      console.log('Done parsing form!');
      response.writeHead(303, { Connection: 'close', Location: '/' });
      response.end();
    });
    request.pipe(busboy);                                                                                                  
});  
module.exports = router;
