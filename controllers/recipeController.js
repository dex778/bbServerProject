const express = require('express');
const router = express.Router();
const validateSession = require('../middleware/validateSession');
const recipe = require('../models/recipe');


router.get('/', function(req, res){
    Recipe.findAll()
    .then(recipes => res.status(200). json(recipes))
    .catch(err => res.status(500).json({error: err}))
});

// Eric: call your own list of recipes and saved to your userid

router.get('/my-recipes', (req, res) => {
    let userid = req.user.id
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

router.put("/update/:entryId", function (req, res) {
    const updateRecipePost = {
        name: req.body.recipe.name,
        ingredients: req.body.recipe.ingredients,
        preparation: req.body.recipe.preparation,
        time: req.body.recipe.time,
        owner: req.body.recipe.owner
    };

    const query = { where: { id: req.params.entryId, owner: req.user.id } };

    Recipe.update(updateRecipePost, query)
        .then((recipes) => res.status(200).json(recipes))
        .catch((err) => res.status(500).json({ error: err }));
});

// Brey's DELETE ***********

router.delete("/delete/:id", function (req, res) {
    const query = {where: { id: req.params.id, owner: req.user.id } };

    recipe.destroy(query)
        .then(() => res.status(200).json({ message: "Recipe Entry Removed" }))
        .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
