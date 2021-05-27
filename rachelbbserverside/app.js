const { static } = require('express');
let Express = require('express');

let app = Express();

app.use(Express.json())

app.get('/create', function(req, res){
    console.log(req.body);
    res.send('Create GET Endpoint Success');
})

app.get('/home', (req, res) => {
    console.log(__dirname);
    res.sendFile(__dirname + '/static.html');
})

app.post('/create', function(req, res){
    console.log(req.body);
    res.send('Create POST Endpoint Success');
})




app.listen(8000, function() 
{
    console.log('Alright stop, collaborate and listen');
}

);