# sequelizedBurger
Restaurant Order App

### Overview
This is a restaurant order-tracking app that enables the customer to _*`create`*_ their own order, in this case a burger; _*`read`*_ the status of the order; _*`update`*_ the contents and/or status of the order; and finally, _*`delete`*_ the order - in other words, all of the CRUD operations are represented.   This program was developed by Steven Bowler for the purpose of gaining experience developing a full-stack app employing best-practices for executing the [Model-View-Control](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) (MVC) software development pattern.  Additionally, the project provides this programmer the opportunity develop skills in creating and deploying a functional full-stack app on [Heroku](https://www.heroku.com), integrating [Express-Handlebars](https://www.npmjs.com/package/express-handlebars), [ExpressJS](https://www.npmjs.com/package/expressjs),[sequelize](https://www.npmjs.com/package/sequelize), and [MySQL](https://www.npmjs.com/package/mysql). _*`Enjoy`*_.


### User Documentation

First, watch this video: _*[burger](https://drive.google.com/file/d/1aaV586emAS9yznHqatfBParYsV_apiiC/view)*_.

Then, read the instructions and see the clips below

To use the app click [burger](https://protected-hollows-73924.herokuapp.com/)
1. To create a burger, under the _*`Create a Burger Order`*_ heading: 
    1. Enter the burger order you desire in the text box _*`enter burger order`*_.
    2. Enter the customer name in the _*`enter customer name`*_ field. 
    3. Click the  _*`Create Order`*_ button.
2. The burger order just created will be read into the bottom of the _*`To Be Delivered`*_ list.
3. To update a burger order, under the _*`Update a Burger Order`*_ heading:
    1. From the dropdown: select the burger order to update
    2. In the textbox to the right of the dropdown: type in the new burger name.
    3. Click the _*`Update Order`*_ button.
4. To update the status of any burger order from _*`To Be Delivered`*_ to _*`Delivered`*_: click the _*`Deliver Order`*_ button to the right of the order.
5. To delete the burger order: Under the _*`Delivered`*_ heading: click the _*`Order Complete`*_ button to the right of the burger order to be deleted.


### Program Documentation
Deploy app thru [Heroku](https://www.heroku.com) with JawsDB.  [Watch this video](https://www.youtube.com/watch?v=btG3SkoNOLU&feature=youtu.be&list=PLOFmg4xbN_TPrB6w4rThsFanVxJI_SfER), note string of JAWSDB_URL, see below.

Program requires setting Heroku Environment variable process.env.JAWSDB_URL from Heroku CLI
````
heroku config:set JAWSDB_URL=your_heroku_jawsdb_url
````

App executes the MVC software pattern in the following manner:
1. Initiate _*`server.js`*_
2. Serve _*`index.handlebars`*_ with current burgers table from burgers_db in MySQL/Heroku JawsDB.
3. User onclick event triggers one of four actions: Create Burger, Update Burger, Devour Burger, Delete Burger. See module [public/assets/js/burgers](https://stevenbowler.github.io/burger/docs/module-public_assets_js_burgers.html).  This makes the AJAX call with the appropriate route.
4. _*`public/assets/js/burgers`*_ JQuery based user input module requires [controllers/burgers_controller](https://stevenbowler.github.io/burger/docs/module-controllers_burgers_controller.html).
5. _*`controllers/burgers_controller`*_ module is the router that requires [models/oldburger](https://stevenbowler.github.io/burger/docs/module-models_oldburger.html) to make _*`burger`*_ specific calls to _*sequelize*_.  


Main module documentation and references can be accessed [here](https://stevenbowler.github.io/sequelizedBurger/docs/index.html).  Global scope variables can be accessed [here](https://stevenbowler.github.io/sequelizedBurger/docs/global.html), 



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

