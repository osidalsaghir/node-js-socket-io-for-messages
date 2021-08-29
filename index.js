
const http = require('http').createServer();

const io = require('socket.io')(http, {
    cors: { origin: "*" }
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('message', (message) =>     {
        console.log(message);
        io.emit('message', `${message[0]} said : ${message[1]}` );   
    });
});

http.listen(8080, () => console.log('listening on http://localhost:8080') );


