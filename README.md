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