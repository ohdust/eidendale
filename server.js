// expressJS implementation
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
// socketIO implementation
const http = require('http').Server(app);
//const io = require('socket.io')(http);

const io = require('socket.io')(http, {
    allowEIO3: true,
    cors: {
        origins: "*:*",
        methods: ["GET", "POST"],
        allowedHeaders: ["content-type"],
        pingTimeout: 7000,
        pingInterval: 3000
    }
})

// server-side array for keeping track of users in a room
let userList = [];

// for GETTING html pages + static files (CSS, images, etc)
app.use( express.static('public') );
// for POSTING JSON data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// connecting to routing file
require('./routes/apiRoute.js')(app, userList);

// connecting to socketIO routing
io.on('connection', (socket) => require('./routes/socketRoute.js')(io, socket, userList));

// start server
http.listen(PORT, () => {
    console.log('listening on port', PORT);
});
