var express = require('express');
var router = express.Router();
var cat = require('./cat');


router.get('/', (req,res) => {
  let catsArr = ["Maine Coon", "Sphynx", "Toyger", "Balinese", "Burmese", "Russian Blue", "Turkish Van", "Exotic", "Selkirk Rex", "Korat"];
  let randomCat = cat.getRandomCat(catsArr);
  console.log(randomCat);
    res.render('index',{randomCat:randomCat})
})

module.exports = router;
