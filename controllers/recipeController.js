let express = require('express');
let router = express.Router();
let validateSession = require('../middleware/validate-session');
const recipe = require('../models/recipe');

router.post('/create', validateSession, (req,res) => {
    recipe.create({
        name: req.body.name,
        ingredients: req.body.ingredients,
        preparation: req.body.preparation,
        owner: req.body.owner,
        time: req.body.time
    })
    .then(recipe => res.status(200).json(recipe))
    .catch (err=> res.status(500).json({error:err}))
})

router.get('/', function(req,res){
    Recipe.findAll()
    .then(recipes => res.status(200). json(recipes))
    .catch(err => res.status(500).json({error: err}))
});

router.get('/my-recipes', validateSession, (req, res) => {
    let userid = req.user.id
    Recipe.findAll({
        where: {owner: userid}
    })
    ,then(recipes => res.status(200).json(recipes))
    .catch(err => res.status(500).json({error: err}))
});

router.get('/:title', function(req,res) {
    let title = req.params.title;
    Recipe.findAll({
        where: {title: title}
    })
    .then(recipes => res.status(200).json(recipes))
    .catch(err => res.status(500),json({error: err}))
})

module.exports = router;
