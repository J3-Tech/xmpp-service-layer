/*var Service=require('node-linux').Service;

var svc=new Service({
    name:'jsl',
    description: 'test service hello',
    script: 'node app.js -h > /tmp/test.log'
});

svc.on('install', function(){
    svc.start();
});

svc.install();*/

"use strict"

function Service(){
    var platform=require('./environment').platform();
    var service=require(platform).Service;
    this.service=new Service({
        name:'jsl',
        description: 'test service hello',
        script: 'node app.js -h > /tmp/test.log'
    });
}

Service.prototype={
    constructor: Service,
    install: function(){
        var that=this;
        this.service.on('install', function(){
            that.service.start();
        });

        //this.service.uninstall();
    },
}

exports.Service=new Service();