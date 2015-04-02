var Service=require('node-linux').Service;

var svc=new Service({
    name:'jsl',
    description: 'test service hello',
    script: 'node app.js -h > /tmp/test.log'
});

svc.on('install', function(){
    svc.start();
});

svc.install();