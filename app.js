const Express = require('express');
const app = Express();
const database = require('./db');
const userController = require('./controllers/userController')
const recipeController = require('./controllers/recipeController')

database.sync();

app.use(Express.json())
app.use("/", userController)
app.use('/recipe', recipeController)



app.listen(3000, () => console.log('[Port 3000]:THE APP IS RUNNING'))