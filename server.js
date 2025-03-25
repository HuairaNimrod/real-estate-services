var express =  require('express');
var app = express();
const port = process.env.PORT || 3000;

const routes = require('express').Router();

//defining the route
routes.get('/', (req, res, next) => {
    res.json('Hello World');
});

//attach the route to the app
app.use('/',routes);

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});