const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

const countryModel = require('../models/country');
const sismoModel = require('../models/sismo');

const countriesData = require('../data/countries');
const sismosData = require('../data/sismos');

mongoose.connect(`mongodb://${process.env.user}:${process.env.pass}@${process.env.host}:${process.env.port}/${process.env.db}`,  {});

countryModel.insertMany(countriesData).then(function(){
    console.log("Countries inserta2")
}).catch(function(error){
    console.log(error)
});

sismoModel.insertMany(sismosData).then(function(){
    console.log("Sismos inserta2")
}).catch(function(error){
    console.log(error)
});

