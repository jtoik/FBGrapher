This is an incomplete simple app with the aim to get testing data from a FB campaign and graph it.

To initialise, if you haven't done so yet, you should install the dependencies 'express', 'cors', 'fb', 'http' and 'dotenv'.

Also, create a .env file in ./ with the FB access code written inside it in the form ACCESS_CODE=CodEg0esh3rE

fbmodule.js is an older file representing a dead end, where I couldn't get CORS to work with vanilla node.js

linechart.vue and linechartcontainer.vue were attempts to create the graph itself.

The express.js server is run by running "node fbexpress.js" from the command line terminal and will cause. It is set to run at localhost:3001

The current state of the program is that when index.html is opened, it performs a get request to localhost:3001 and receives the JSON-data and displays it.