var Listener=function(){
    this.host='127.0.0.1';
}

Listener.prototype = {
    constructor : Listener,

    setPort: function(port){
        this.port=port;

        return this;
    },

    listen: function(){
        var net = require('net');
        net.createServer(function(sock) {
            console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);

            sock.on('data', function(data) {
                console.log('DATA ' + sock.remoteAddress + ': ' + data);
                sock.write('You said "' + data + '"');
                var Parser = require('./../Parser/State/JsonParser.js').Parser;
                console.log(new Parser(data).toXml());
            });
            
            sock.on('close', function(data) {
                console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
            });

        }).listen(this.port, this.host);
    }
}

exports.Listener = Listener;