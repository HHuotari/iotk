const { response } = require('express');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  console.log("kukkuu");
});

router.use(function (request,response,next){
console.log("tässä middleware 1");
next();
});

router.get ('/toka', function(request, response)
{
  response.send("Tämä on toka");
  console.log("toka");

});

router.use(function (request,response,next){
  console.log("middleware 2");
  next();
  });

router.get ('/kolmas/:nimi', function(request, response)
{
  response.send("tässä on  "+request.params.nimi);
  console.log(request.params.nimi);

});

router.use(function (request,response,next){
  console.log("middleware 3!");
  next();
  });

router.get ('/neljas/:enimi/:snimi', function(request, response)
{
  response.send("olenpa vaan "+request.params.enimi+" "+request.params.snimi);

});


router.post('/', function(request, response)
{
  response.send(request.body);
});

module.exports = router;
