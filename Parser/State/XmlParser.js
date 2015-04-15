var XmlParser = function(data){
    this.data=data;
    this.parser = require('xml2json');
}

XmlParser.prototype = {
    toJson: function(){
        return this.parser.toJson(this.data);
    }
}

exports.Parser = XmlParser;