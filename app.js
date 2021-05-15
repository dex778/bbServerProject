const Express = require('express');
const app = Express();
const database = require('./db');
const userController = require('./controllers/userController')

app.use(Express.json())
app.use("/", userController)

// database.sync();

app.listen(3006, () => console.log('[Port 3006]:THE APP IS RUNNING'))