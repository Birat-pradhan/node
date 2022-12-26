
const emitter1 = require('./emitter').emitter1;
const emitter2 = require('./emitter').emitter2;

emitter1.on('firstEvent',(data)=>{
    console.log("Event triggered 1: "+ data);
});

emitter2.on('secondEvent',(data)=>{
    console.log("Event triggered 2: "+ data);
});

module.exports = {emitter1,emitter2};