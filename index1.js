const firstEmittter = require('./event1').emitter1;
const secondEmitter = require('./event1').emitter2;

firstEmittter.emit('firstEvent','data');
secondEmitter.emit('secondEvent','data');