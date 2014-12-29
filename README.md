# jobFinder


install heroku toolbelt

we need git install.
> git init

heroku login

heroku create

git 

git push heroku master // to push the source code to heroku

heroku ps:scale web=1

https://afternoon-everglades-8738.herokuapp.com/

Mongodb

* open cmd window 
* copy paste the following command line

"c:\program files\MongoDB 2.6 Standard\bin\mongod" --dbpath C:\Dev\pluralsight-ci\data --repair
"c:\program files\MongoDB 2.6 Standard\bin\mongod" --dbpath C:\Dev\pluralsight-ci\data

MongoDB commands lines:


"c:\program files\MongoDB 2.6 Standard\bin\mongo"  //Start the mongo console

show dbs   //shows the database avaialable

use psJWT // switch to the good database

db.users.find()  // list documents of the users collection

db.users.remove({}); // remove all the documents in the collection users  
