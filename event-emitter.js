const EventEmiter = require("events");

const myEmitter = new EventEmiter();

// listener
myEmitter.on("birthday", () => {
  console.log(`Happy Birtday to you`);
});

myEmitter.on('birthday', (gift)=>{
    console.log(`I Will send a ${gift}`)
})

myEmitter.emit("birthday", "bike");
