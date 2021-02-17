# --- Hack.Diversity React/Redux Template ---

## Getting Started
Wondering how to get this thing working? Well, do we have the READMEs for you!
- [server](server/README.md)
- [client](client/README.md)

## Deployment
-  [Amplify](/docs/amplify/README.md)
-  [Beanstalk](/docs/beanstalk/README.md)


Apologies for the delay. The guide and configuration files for the backend deployment are now ready. The code will be available in the React-Redux Template repository. To hopefully make it easier for you all to get your deployments working, I have attached a eb_deployment.zip file. This file contains all the documentation and configuration files that you will need. Below  repository. To hopefully make it easier for you all to get your deployments working, The updated files are availble in this Zip Archive. Please follow the instructions below to update your existing projects.

Updating The Package.json FIle
Some of your projects may have new dependencies which is alright. But you will need to make some changes to your server/package.json file.

You're going to need to change the "engines."node" value to 12.20.1 . This may require you to change your current NodeJs version to 12.20. Please let us know if you run into any issues.
channelchannelchannelchannel
You will also need to add a new script under the "Scripts" section:

"start": "node index.js", (don't forget the comma!)


Updating the DB Connection
Some of you may have made some changes to to your code since you copied the template. The following code will be changed wherever you set the connection string to MongoDB.



You will need to make sure to add process.env.MONGO_CONNECTION_STRING || <your original string>. This will make it that the Environment Variable MONGO_CONNECTION_STRING is used if available, and if not it will use the hard-coded string (usually pointing to a local database). Note that we are using environment variables as to not store our username and password in our code base which is a security risk.
Updating the API URL
If you forked or copied the React-Redux template earlier last month, you may not have some changes made to client/src/api/index.js. Similar to the changes above, you will be adding two Environment Variables REACT_APP_API_URL and REEACT_APP_API_HOST. Again, you may have changed your code a bit but find the location where you set the API URL and API Hostname (if used).


Copying Docs and .ebextensions
Next, you will copy the documentation. I recommend removing the existing docs directory and README.md file from the root of your project. The documentation makes use of links, so this will ensure that they work.

From the Zip file, copy and replace files as follows:

README.md --> README.md
docs --> docs
server/.ebextensions --> server/.ebextensions


Stuck?
Please look at the other files in the Zip archive for guidance on what the api/index.js, db/index.js , and package.json files should look like.

Make sure to post in #help_me_dehack if you are stuck with any part of this.
