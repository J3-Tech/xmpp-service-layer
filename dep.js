console.log('This platform is ' + process.platform);

var npm = require('npm');

var dep=null;
switch(process.platform){
    case 'win32':
        dep='win';
        break;
    case 'linux':
    case 'mac':
        dep=process.platform;
}

npm.commands.install(null, dep);