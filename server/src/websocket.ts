import { io } from './http';

io.on("connection", socket => {

    console.log("Received a new connection");
    console.log(socket.id);
})