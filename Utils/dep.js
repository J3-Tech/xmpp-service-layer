var npm = require("npm");
var colors=require('colors');
var environment=require('../modules/environment');

var dep=environment.platform();

console.log(('Installing ' + dep).green);

npm.load({}, function (er) {
    if (er){
        return handlError(er)
    }
    npm.commands.install([ dep ], function (er, data) {
        if (er) return commandFailed(er)
    });
})
