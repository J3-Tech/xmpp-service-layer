var mmm  = require('mmmagic');
var Magic = mmm.Magic;
 
  var magic = new Magic('', mmm.MAGIC_MIME_TYPE),
        buf = new Buffer('<?xml version="1.0" encoding="UTF-8"?><person><firstName>John</firstName><lastName>Smith</lastName></person>');
  
  magic.detect(buf, function(err, result) {
      if (err) throw err;
      console.log(result);
      // output: Python script, ASCII text executable 
  });