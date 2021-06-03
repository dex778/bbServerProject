require('dotenv').config();

const Express = require('express');
const app = Express();
const cors = require('cors')
const database = require('./db');
const userController = require('./controllers/userController')
const recipeController = require('./controllers/recipeController')

database.sync();

app.use(require('./middleware/headers'));
app.use(cors())

app.use(Express.json())
app.use("/", userController)
app.use('/recipe', recipeController)



app.listen(process.env.PORT, () => console.log(`[${process.env.PORT}]: THE APP IS RUNNING`))