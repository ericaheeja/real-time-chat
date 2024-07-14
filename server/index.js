const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());
app.use(router);

io.on("connection", (socket) => {
  console.log("We have a new connection!!!");

  socket.on("disconnect", () => {
    console.log("User had left!");
  });
});

app.use(router);

server.listen(process.env.PORT || 5000, () => console.log(`Server has started.`));
