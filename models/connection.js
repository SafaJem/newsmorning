var mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useUnifiedTopology : true,
    useNewUrlParser: true,
}

mongoose.connect('mongodb+srv://dev2:1234@cluster0.pns7r.mongodb.net/morningnews?retryWrites=true&w=majority',
    options,
    function(err){
        console.log("mongo db connecté");
    }
)

module.exports = mongoose