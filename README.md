Project made by Felipe.

// Install client's dependencies inside root folder: ////
npm run client-install 

// Install client's dependencies inside Client folder: ////
npm install

// Run server inside root: ////
 npm run server

// Run client inside client folder: ////
npm run client

// Run client and server: ////
npm run start

// Request structure: ////
// Get all: # means any number from 1 to 12, represents a month number.
http://localhost:8000/api/v1/calendar/month/#

// Get by ID: Must specify # month number and ID.
http://localhost:8000/api/v1/calendar/month/#/id

// Post: Must specify # month number, DAY and value, ACTIVITY and Value.
http://localhost:8000/api/v1/calendar/month/#?day=ANYDAY&activity=ANYACTIVITY

// Delete: Must specify # month number and ID to be deleted from a month.
http://localhost:8000/api/v1/calendar/month/#/id

// Connect shell to Mongo Atlas: ////
mongo "mongodb://cluster0-shard-00-00-j7pc1.mongodb.net:27017,cluster0-shard-00-01-j7pc1.mongodb.net:27017,cluster0-shard-00-02-j7pc1.mongodb.net:27017/test?replicaSet=Cluster0-shard-0" --ssl --authenticationDatabase admin --username cristianAdmin --password WonderlandW33d666!
