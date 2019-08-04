const http = require('http');
const fs = require('fs');

// process.env.PORT: This is an environment variable.
// If this variable is not set it up, the default will be '8000'.
// Variable comes from Node environment.
const port = process.env.PORT || 5000;

function createServer (req, res) {
    if (req.url == "/") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream('./index.html').pipe(res)
    };
};

const serverFront = http.createServer(
    createServer
).listen(port);

