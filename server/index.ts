import { Request, Response } from "express";
import { Socket } from "net";

const express = require("express");
const cors = require('cors');
const {Server} = require("socket.io");
const {createServer} = require('node:http');
const app = express(); // express app
const server = createServer(app); // an http server of express app
const port = 8000;
app.use(cors());

const io = new Server (server, {
    cors: {
        origins: ["http://localhost:3000", "http://localhost:3000/chat"],
        methods: ["GET", "POST"],
    }
}); // making the socket.io server of our http server of express

// typescript types
interface userInfoType {
    username: string,
    roomId: any,
}

interface messageType {
    username: string,
    roomId: any,
    messageContent: string,
}

// socket.io
io.on('connection', (socket: any) => {
    // user gets connected
    console.log("A user has connected");

    // user joins a room
    socket.on("join", (userInfo: userInfoType) => {
        socket.join(userInfo.roomId);
        console.log(`${userInfo.username} has joined ${userInfo.roomId}`);
    })

    // message sent from client
    socket.on("message", (messageInfo: messageType) => {
        socket.to(messageInfo.roomId).emit("displayingMessage", messageInfo);
        console.log(`${messageInfo.messageContent} was sent to ${messageInfo.roomId}`)
    })

    // when user disconnects
    socket.on("disconnect", () => {
        console.log("A User has disconnected");
    })
})

// api
app.get("/", (req: Request, res: Response) => {
    res.send("Hello");
});

// hosted
server.listen(port, () => {
    console.log(`Server started at port ${port}`);
});