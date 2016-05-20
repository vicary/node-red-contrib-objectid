module.exports = function(RED) {
    function ObjectidNode(config) {
        RED.nodes.createNode(this,config);
		
        var node = this;
		//var ObjectID = require('mongodb').ObjectID;
		var ObjectID = require('bson').ObjectID;
		
		this.on("input",function(msg) {
			
			var _idString = msg._id;
			var _id;
			if(_idString!=null){
				node.log("if: "+_idString);
				_id = new ObjectID(""+_idString);
			}else{
				node.log("else");
				_id = new ObjectID();
			}
			msg.payload = {"_id": _id};
			
			node.send(msg);
        });
    }
    RED.nodes.registerType("objectid",ObjectidNode);
}