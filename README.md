# Morty API
---
## Jaime Andres Velez Rojas
API REST with a CRUD for a mongodb collection


### DevTools

 This application uses the next libraries and packages to work properly
* [Node](https://nodejs.org/en/) Asynchronous event driven JavaScript runtime interfaces .
* [Express](http://expressjs.com/) web framework for Node.js.
* [Dotenv](https://www.npmjs.com/package/dotenv) Dotenv is a zero-dependency module that loads environment variables from a .env file.
* [Body-parser](https://www.npmjs.com/package/body-parser) Node.js body parsing middleware.
* [Nodemon](https://www.npmjs.com/package/nodemon) Tool that helps develop node.js based applications by automatically restarting the node application when file changes.
* [Mongoose](https://www.npmjs.com/package/mongoose) Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
* [Postman](https://www.getpostman.com/) API Development Environment.
* [Mocha](https://mochajs.org/) JavaScript test framework running on Node.js.
* [Chai](https://www.chaijs.com/) Assertion library for node and the browser.
* [Chai HTTP](https://www.npmjs.com/package/chai-http) HTTP integration testing with Chai assertions.


###  Download
Download from the repository [here](https://github.com/jhudaz/Morty), or use the git command to clone it:
```sh
$ git clone https://github.com/jhudaz/Morty.git
```
### Installation
#### Requirements
 have installed [NodeJs](https://nodejs.org/en/) , [npm](https://www.npmjs.com/), [Postman](https://www.getpostman.com/) and a text editor
 
 

Install the dependencies.

```sh
$ cd rick
$ npm install
```

### Run the aplication

Development environment
```sh
$ npm start
```
### Notes
The server is running in the port 4000 by default, but if you want to run the server in another port you can use the next command: 
```sh
PORT=7000 npm start
```
### Endpoints
Open postman to use the API endpoint with the port that you have choose, that in this case is the 7000: `localhost:7000/providers/` 

#### Get 
In postman, we select the method `GET` in the select, and click on the `Send` button like the next image: 
![get](https://raw.githubusercontent.com/jhudaz/Morty/master/resources/images/GET-METHOD.png)
And the response will be an array of objects  with all the collection data, that in this case is `providers`: 
![get-response](https://raw.githubusercontent.com/jhudaz/Morty/master/resources/images/GET-RESPONSE.png)

#### Post 
We select the method `POST` in the select, click on `Body` option in the menu  and select the `raw` in the under menu, with the format `JSON`, and  click on the `Send` button  with an JSON object like the next image:
![post](https://raw.githubusercontent.com/jhudaz/Morty/master/resources/images/POST-METHOD.png)
The response will be an object with the data sended
![post-response](https://raw.githubusercontent.com/jhudaz/Morty/master/resources/images/POST-RESPONSE.png)

#### Update 
We select the method `PUT` in the select, click on `Body` option in the menu  and select the `raw` in the under menu, with the format `JSON`, and  click on the `Send` button  with an JSON object like the next image:
#### Note:
We can update by any field specified in the `updatedBy`, in the example i used `email`, but you can choose any   that there is in the model:
![put](https://raw.githubusercontent.com/jhudaz/Morty/master/resources/images/PUT-METHOD.png)
The response will be the object that was modified 
![put-response](https://raw.githubusercontent.com/jhudaz/Morty/master/resources/images/PUT-RESPONSE.png)

#### Delete 
We select the method `DELETE` in the select, click on `Body` option in the menu  and select the `raw` in the under menu, with the format `JSON`, and  click on the `Send` button  with an JSON object like the next image:
#### Note:
Like  in the update  example  we can delete by any field specified  in `deleteBy`, but you can choose any one, that is specified in the model:

![delete](https://raw.githubusercontent.com/jhudaz/Morty/master/resources/images/DELETE-METHOD.png)
the response will be the data  that was deleted
![delete-response](https://raw.githubusercontent.com/jhudaz/Morty/master/resources/images/DELETE-RESPONSE.png)

### Test

To run the test you have to stop the server, and then use the next command
```sh
$ npm test
```


License
----

MIT
