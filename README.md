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
* [Mongoose](https://www.npmjs.com/package/mongoose) Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
* [Postman](https://www.getpostman.com/) API Development Environment.


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
The server is running in the port 7000 
### Endpoints
Open postman to use the API endpoint: `localhost:7000/providers/` to use the next methods:

#### Get 
In postman, we select the method `GET` in the select, and click on the `Send` button like the next image: 
![get](https://raw.githubusercontent.com/jhudaz/Morty/master/resources/images/GET-METHOD.png)
And the response will be an array of objects  with all the collection data, that in this case is `providers`: 
![get-response](https://raw.githubusercontent.com/jhudaz/Morty/master/resources/images/GET-RESPONSE.png)

#### Post 
In postman, we select the method `POST` in the select, click on `Body` option in the menu  and select the `raw` in the under menu, with the format `JSON`, and  click on the `Send` button  with an JSON object like the next image:
![post](https://raw.githubusercontent.com/jhudaz/Morty/master/resources/images/POST-METHOD.png)

#### Update 
![put](https://raw.githubusercontent.com/jhudaz/Morty/master/resources/images/PUT-METHOD.png)

#### Delete 
![delete](https://raw.githubusercontent.com/jhudaz/Morty/master/resources/images/DELETE-METHOD.png)


License
----

MIT
