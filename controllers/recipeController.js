

const express = require('express');
const router = express.Router();
const validateSession = require('../middleware/validateSession');
const recipe = require('../models/recipe');

//Rachel's Create Recipe Creation *** //

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



// router.get('/', function(req, res){
//     Recipe.findAll()
//     .then(recipes => res.status(200). json(recipes))
//     .catch(err => res.status(500).json({error: err}))
// });

// Eric: call your own list of recipes and saved to your userid

router.get('/my-recipes', validateSession, (req, res) => {
    let userid = req.body.owner.id
    Recipe.findAll({
        where: {owner: userid}
    })
    ,then(recipes => res.status(200).json(recipes))
    .catch(err => res.status(500).json({error: err}))
});

// enable you to search by title
router.get('/:name', function(req,res) {
    let name = req.params.name;
    Recipe.findAll({
        where: {name: name}
    })
    .then(recipes => res.status(200).json(recipes))
    .catch(err => res.status(500),json({error: err}))
})
// Brey's PUT ***********

router.put("/update/:id", validateSession, function (req, res) {
    const updateRecipePost = {
        name: req.body.name,
        ingredients: req.body.ingredients,
        preparation: req.body.preparation,
        time: req.body.time,
        owner: req.body.owner
    };

    const query = { where: { 
        id: req.params.id 
    } };

    Recipe.update(updateRecipePost, query)
        .then((recipes) => res.status(200).json(recipes))
        .catch((err) => res.status(500).json({ error: err }));
});

// Brey's DELETE ***********

router.delete("/delete/:id", validateSession, function (req, res) {
    const query = { 
        where: { 
            id: req.params.id
        } };

    recipe.destroy(query)
        .then(() => res.status(200).json({ message: "Recipe Entry Removed" }))
        .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;



