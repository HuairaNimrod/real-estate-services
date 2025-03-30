var express =  require('express');
var app = express();
const port = process.env.PORT || 3000;

//attach the route to the app
app.use('/',require('./routes'));

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});