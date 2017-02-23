var ObjectID = require('bson').ObjectID;

module.exports = function(RED) {
  function ObjectIdNode(config) {
    RED.nodes.createNode(this, config);

    this.name = config.name;
    this.property = config.property || 'payload';

    this.on('input', (msg)=> {
      var value;

      try {
        value = RED.util.getMessageProperty(msg, this.property);
      }
      catch (e) {}

      value = new ObjectID(value);

      RED.util.setMessageProperty(msg, this.property, value, true);

      this.send(msg);
    });
  }

  RED.nodes.registerType('objectid', ObjectIdNode);
}
