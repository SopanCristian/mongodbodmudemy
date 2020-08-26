const mongoose = require('mongoose');
//const connectionString = 'mongodb://localhost:27017/mystore?readPreference=primary&ssl=false';
//const connectionString = "mongodb://localhost:27017/mystore";
const { MONGO_URI } = require("./config");

mongoose.connect(MONGO_URI,{useNewUrlParser: true})

const Cat = mongoose.model("Cat",{name: String});

const kitty = new Cat({name: "Garfield"});
kitty.save().then(()=>console.log("Cat has been saved"));

Cat.find().then(console.log);
console.log("ok");