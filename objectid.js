var ObjectID = require('bson').ObjectID;

module.exports = function(RED) {
  function ObjectIdNode(config) {
    RED.nodes.createNode(this, config);

    this.on('input', (msg)=> {
      if (!msg._id && typeof msg.payload == 'object' && msg.payload._id) {
        msg.payload._id = new ObjectID(msg.payload._id);
      }
      else {
        msg._id = new ObjectID(msg._id || null);
      }

      this.send(msg);
    });
  }

  RED.nodes.registerType('objectid', ObjectIdNode);
}
