var JsonParser = function(data){
    this.data=data;
    this.js2xml=require("js2xmlparser");
}

JsonParser.prototype = {
    toXml: function(){
        return this.js2xml("person", this.data);
    }
}

exports.Parser = JsonParser;