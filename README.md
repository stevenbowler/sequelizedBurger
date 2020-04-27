# burger
Restaurant Order App

### Overview
This is a restaurant order-tracking app that enables the customer to `create` their own order, in this case a burger; `read` the status of the order; `update` the contents and/or status of the order; and finally, `delete` the order - in other words, all of the CRUD operations are represented.   This program was developed by Steven Bowler for the purpose of gaining experience developing a full-stack app employing best-practices for executing the [Model-View-Control](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) (MVC) software development pattern.  Additionally, the project provides this programmer the opportunity develop skills in creating and deploying a functional full-stack app on [Heroku](https://www.heroku.com), integrating [Express-Handlebars](https://www.npmjs.com/package/express-handlebars), [ExpressJS](https://www.npmjs.com/package/express), and [MySQL](https://www.npmjs.com/package/mysql). `Enjoy`.


### User Documentation

First, watch this video: _*[burger](https://drive.google.com/file/d/1Kyg4pH1CS2qgeg0UL-o6Z4PXpzuNhe-v/view)*_.

Then, read the instructions and see the clips below

To use the app click [burger](https://intense-ravine-38720.herokuapp.com/)
1. From the home page click the `Order` button
2. From the survey page, all fields are required:
    1. Enter `name` up to 256 characters
    2. Enter a `picture` string which should be in the format "https://www.yourSite.com/yourPicture.jpg"
    3. Enter an `email address`. *Provide valid email to receive contact info regarding your soulmate match via email.*
    4. Respond to the 10 required questions
    5. Click `Submit` button
3. 


### Program Documentation
Main module and class references can be accessed [here](https://stevenbowler.github.io/burger/docs/index.html).  Global scope variables can be accessed [here](https://stevenbowler.github.io/burger/docs/global.html), 


Deploy app thru [Heroku](https://www.heroku.com).

For the email notifications with gmail to work requires [dotenv](https://www.npmjs.com/package/dotenv) to be installed and a `.env` file must be stored in the root directory for the app.  The `.env` file must contain the app owner's gmail address and password as shown below.  Also, note the owner's gmail account must have `access for less secure apps` enabled.
````
NODEMAILER_GMAIL_ACCOUNT=your_gmail_address
NODEMAILER_GMAIL_PASSWORD=your_gmail_password
````

ATTENTION: to deploy to Heroku then following `git push heroku master` command, and before accessing the app page, will be necesary to set the two environmental variables with these commands from the Heroku CLI:
````
heroku config:set NODEMAILER_GMAIL_ACCOUNT=your_gmail_address
heroku config:set NODEMAILER_GMAIL_PASSWORD=your_gmail_password
````
To use email other than gmail as host, will require setup and debug in a similar fashion, including assignments to the appropriate email address and password variables in the [nodemailer.js](https://stevenbowler.github.io/burger/docs/utilities_nodemailer.js.html) file.