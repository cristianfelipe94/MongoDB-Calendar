const http = require('http');

const Router = require('./router.js');
const controllers = require('./controllers.js')

// process.env.PORT: This is an environment variable.
// If this variable is not set it up, the default will be '8000'.
// Variable comes from Node environment.
const port = process.env.PORT || 8000;

const routes = [
    { method: 'GET', path: 'api/v1/calendar', controller: controllers.getAllBrands},
    { method: 'GET', path: 'api/v1/calendar/:id', controller: controllers.getBrandById},

    { method: 'POST', path: 'api/v1/calendar', controller: controllers.postCalendar},

    { method: 'DELETE', path: 'api/v1/calendar/:id', controller: controllers.deleteCarById}
];

const mongoose = require('mongoose');
const password = process.env.MONGO_ATLAS_PW;
mongoose.connect(
    'mongodb://cristianAdmin:'+password+'@cluster0-shard-00-00-j7pc1.mongodb.net:27017,cluster0-shard-00-01-j7pc1.mongodb.net:27017,cluster0-shard-00-02-j7pc1.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',
    {
        useNewUrlParser: true
    }
);

const serverFront = http.createServer(Router.Register(routes)).listen(port);

// const server = http.createServer(Router.Register(routes)).listen(port);
