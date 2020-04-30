# sequelizedBurger
Restaurant Order App

### Overview
This is a restaurant order-tracking app that enables the customer to _*`create`*_ their own order, in this case a burger; _*`read`*_ the status of the order; _*`update`*_ the contents and/or status of the order; and finally, _*`delete`*_ the order - in other words, all of the CRUD operations are represented.   This program was developed by Steven Bowler for the purpose of gaining experience developing a full-stack app employing best-practices for executing the [Model-View-Control](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) (MVC) software development pattern.  Additionally, the project provides this programmer the opportunity develop skills in creating and deploying a functional full-stack app on [Heroku](https://www.heroku.com), integrating [Express-Handlebars](https://www.npmjs.com/package/express-handlebars), [ExpressJS](https://www.npmjs.com/package/express),[sequelize](https://www.npmjs.com/package/sequelize), and [MySQL](https://www.npmjs.com/package/mysql). _*`Enjoy`*_.


### User Documentation

First, watch this video: _*[burger](https://drive.google.com/file/d/1aaV586emAS9yznHqatfBParYsV_apiiC/view)*_.

Then, read the instructions and see the clips below

To use the app click [burger](https://protected-hollows-73924.herokuapp.com/)
1. To create a burger: Under the _*`Create a Burger`*_ heading, enter the name of the burger you desire in the text box and click the  _*`Create Burger`*_ button.
2. The name of the burger just created will be read into the bottom of the _*`To Be Devoured`*_ list.
3. To update the name of the burger: Under the _*`Update a Burger`*_ heading,
    1. From the dropdown: select the burger name you wish to update
    2. In the textbox to the right of the dropdown: type in the new burger name.
    3. Click the _*`Update a Burger`*_ button.
4. To update the status of any burger from _*`To Be Devoured`*_ to _*`Devoured`*_: click the _*`Devour Burger`*_ button to the right.
5. To delete the burger: Under the _*`Devoured`*_ heading: click the _*`Delete Burger`*_ button to the right of the burger to be deleted.


### Program Documentation
Program requires setup of Heroku Environment variable process.env.JAWSDB_URL from Heroku CLI
````
heroku config:set JAWSDB_URL=your_heroku_jawsdb_url
````

App executes the MVC software pattern in the following manner:
1. Initiate _*`server.js`*_
2. Serve _*`index.handlebars`*_ with current burgers table from burgers_db in MySQL/Heroku JawsDB.
3. User onclick event triggers one of four actions: Create Burger, Update Burger, Devour Burger, Delete Burger. See module [public/assets/js/burgers](https://stevenbowler.github.io/burger/docs/module-public_assets_js_burgers.html).  This makes the AJAX call with the appropriate route.
4. _*`public/assets/js/burgers`*_ JQuery based user input module requires [controllers/burgers_controller](https://stevenbowler.github.io/burger/docs/module-controllers_burgers_controller.html).
5. _*`controllers/burgers_controller`*_ module is the router that requires [models/burger](https://stevenbowler.github.io/burger/docs/module-models_burger.html) to make _*`burger`*_ specific calls to _*sequelize*_.  


Main module documentation and references can be accessed [here](https://stevenbowler.github.io/sequelizedBurger/docs/index.html).  Global scope variables can be accessed [here](https://stevenbowler.github.io/sequelizedBurger/docs/global.html), 

Deploy app thru [Heroku](https://www.heroku.com) with JawsDB.  [Watch this video](https://www.youtube.com/watch?v=btG3SkoNOLU&feature=youtu.be&list=PLOFmg4xbN_TPrB6w4rThsFanVxJI_SfER).


Directory structure is as follows:

```
.
├── config
│   └── connection.js
│   └── config.json
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── docs
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│       │   └── burger.png
│       └── js
│           └── burgers.js
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```

