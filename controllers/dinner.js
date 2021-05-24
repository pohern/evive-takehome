//Import .json after created
const Dinner = require('../dinner.json');

module.exports = {
    show
}

function show(req,res){
    res.send(Dinner);
}