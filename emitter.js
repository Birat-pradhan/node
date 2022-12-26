const events = require('events');

const emitter1= new events.EventEmitter();
const emitter2 = new events.EventEmitter();

module.exports = {emitter1,emitter2};