var npm = require("npm");
var colors=require('colors');

var dep=null;

switch(process.platform){
    case 'win32':
        dep='win';
        break;
    case 'linux':
    case 'mac':
        dep=process.platform;
}

dep = 'node-' + dep;

console.log(('Installing ' + dep).green);

npm.load({}, function (er) {
  if (er) return handlError(er)
  npm.commands.install([ dep ], function (er, data) {
    if (er) return commandFailed(er)
    // command succeeded, and data might have some info
  });
})
