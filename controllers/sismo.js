const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

const express = require('express');
const bodyParser = require('body-parser');

const sismoModel = require('../models/sismo');

const router = express.Router();
const urlencodedParser = bodyParser.urlencoded({ limit: '50mb', extended: true });

mongoose.connect(`mongodb://${process.env.user}:${process.env.pass}@${process.env.host}:${process.env.port}/${process.env.db}`,  {});

//Servicio
function ArrayAvg(myArray) {
  var i = 0, summ = 0, ArrayLen = myArray.length;
  while (i < ArrayLen) {
      summ = summ + myArray[i++];
}
  return summ / ArrayLen;
}

//Inserta un sismo
router.get('/insert', urlencodedParser, async function(req, response, next){
  sismoModel.insertMany(req.query).then(function(r){
    response.status(200).send(r); next();
  }).catch(function(error){
    response.status(500).send(error); next();
  });
});

//Elimina un sismo mediante su id
router.get('/delete', urlencodedParser, async function(req, response, next){
  sismoModel.deleteOne({id: req.query.id}).then(function(r){
    response.status(200).send(r); next();
  }).catch(function(error){
    response.status(500).send(error); next();
  });
});

//Lista todos los sismos
router.get('/list', urlencodedParser, async function(req, response, next){
  sismoModel.find({},function(err, docs){
    if(docs) response.status(200).send(docs); next();
    if(err) response.status(500).send(err); next();
  });
});

//Muestra una lista de todos los sismos con magnitud mayor o igual a magnitude
router.get('/gte', urlencodedParser, async function(req, response, next){
  sismoModel.find({magnitude: {$gte: req.query.magnitude}}, function(err, docs){
    if(docs) response.status(200).send(docs); next();
    if(err) response.status(500).send(err); next();
  });
});

//Muestra el promedio de la magnitud de los sismos
router.get('/average', urlencodedParser, async function(req, response, next){
  sismoModel.find({}, "magnitude", function(err, docs){
    if(docs){
      const magnitudeArr = docs.map((e) => e.magnitude);
      const average = ArrayAvg(magnitudeArr)
      response.status(200).send({average: average}); 
      next();
    }
    if(err) response.status(500).send(err); next();
  });
});

module.exports = router;