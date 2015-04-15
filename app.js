var program = require('commander');

program
  .version('0.0.1')

program
  .command('listen [port]')
  .description('listen for incoming request or response')
  .action(function(port, options){
    port = port || 7070;
    var Listener = require('./modules/listener.js').Listener;
    new Listener().setPort(port).listen();
  });

program
  .command('install-service')
  .description('install as service')
  .option("-s, --mode <mode>", "Which setup mode to use")
  .action(function(cmd, options){
    console.log(options);
  }).on('--help', function() {
    console.log('install as service');
  });

program.parse(process.argv);

if (!program.args.length) program.help();