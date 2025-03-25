# real-estate-services
## Running a web service for first time
> VSCode and Node.js need to be installed before staring this tutorial

1. Create a new folder and open it on VSCode 
2. Open the Terminal on VSCode and type 
```
npm init
```
You'll be asked to asnwer some questions, Press enter to get the default values.

3. A new file with the name **package.json** will be created. Modify the `"main" : "index.js"` line and change the **index.js** value to **server.js**
4. Create a new file and name it **server.js**. type the following code in the new file:
```
var express =  require('express');
var app = express();

app.listen(3000, () =>{
    console.log('Server is running on port 3000');
});
```
5. Go to the Terminal an type:
```
npm i -- save express
```
6. Update the packages of our project typing:
```
npm install
```
7. To run your project type `npm start` in the terminal, if there's no errors you'll see the following result

![Terminal picture](/assets/server-running.png)


## Creating a route and returning a message in the browser
>Nodemon is a tool that helps restarting node.js projects automatically when a file is updated.

1. In the file **server.js** add the following code after the declaration of variable:
```
const routes = require('express').Router();

routes.get('/', (req, res, next) => {
    res.json('Hello World');
});
```
2. We declared our Express app before, now we need attach it to use the routes router for any requests that come to **/**, typing the next  behind our last code.
```
app.use('/',routes);
```
3. Add **Nodemon** to your project with the following code:
```
npm i --save-dev- nodemon
```
4. In the file **package.json** you need to declare that the nodemon will be used to start the server inside the **scripts**
```
"start": "nodemon server.js"
``` 
5. We will use an extension to test our REST services on VSCode, we'll use **REST Client** in this project. After installing the extension we will create a new file and name it **.rest**. in this file we'll test our services.
6. In our **.rest** file we need to write the following code:
```
GET http://localhost:3000 HTTP/1.1
```
7. We need to run our server with `npm start` and go to our **.rest** file, then click in the **Send Request** link and we'll see a a server runnning locally with our phrase!.

![Terminal picture](/assets/hello-world.png)