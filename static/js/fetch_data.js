var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/PoliceStations', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));

// db.once('open', function(){
//     console.log("We are connected...")
// });

var kittySchema = new mongoose.Schema({
    name: String
});

kittySchema.methods.speak = function(){
    var greeting = "My name is "+this.name
    console.log(greeting)
}

var kitten = mongoose.model('hsrKitty', kittySchema);
var hsrKitty = new kitten({name: 'hsrKitty'});
var hsrKitty2 = new kitten({name: 'hsrKitty2'});
// console.log(hsrKitty.name);
// hsrKitty.speak();

hsrKitty.save(function (err, hsrKitty){
    if (err) return console.error(err);
    hsrKitty.speak();
});
hsrKitty2.save(function (err, k){
    if (err) return console.error(err);
    k.speak();
});