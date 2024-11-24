/*
 * Copyright (c) 2024. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 * Morbi non lorem porttitor neque feugiat blandit. Ut vitae ipsum eget quam lacinia accumsan.
 * Etiam sed turpis ac ipsum condimentum fringilla. Maecenas magna.
 * Proin dapibus sapien vel ante. Aliquam erat volutpat. Pellentesque sagittis ligula eget metus.
 * Vestibulum commodo. Ut rhoncus gravida arcu.
 */

import app from './app.js';
import http from 'http';
import createDebug from 'debug';

const debug = createDebug('node-ng');

const normalizePort = val => {
    const port = parseInt(val, 10);
    return isNaN(port) ? val: port >= 0 ? port : false;
}

const onError = err => {
    if (err.syscall !== "listen") {
        throw err;
    }
    const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
    switch (err) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            break;
        default:
            throw err;
    }
}

const onListening = () => {
    const addr = server.address();
    const bind = typeof port === "string" ? "pipe " + port : "port " + port;
    debug("Listening on " + bind);
};

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);
