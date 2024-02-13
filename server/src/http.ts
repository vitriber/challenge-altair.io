import express from 'express';
import http from 'http'
import cors from 'cors';
import { Server } from 'socket.io';

import { routes } from './routes';

const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);

const serverHttp = http.createServer(app);
const io = new Server({
    cors: {
        origin: "http://localhost:5143"
    }
});

export {serverHttp, io}