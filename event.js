const event = require('events');

const firstEmittter = new event.EventEmitter();

firstEmittter.on('firstEvent',(data)=>{
        console.log("Event triggered : "+ data);
});
firstEmittter.on('firstEvent',(data)=>{
    console.log("Event triggered 1: "+ data);
});
firstEmittter.on('firstEvent',(data)=>{
    console.log("Event triggered 2: "+ data);
});
// to trigger event
firstEmittter.emit('firstEvent','data');