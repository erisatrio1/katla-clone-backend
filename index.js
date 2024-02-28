

import dotenv from 'dotenv/config'
import db from './bin/config/Database.js'
import http from 'http'
import app from './bin/api/Server.js'
const port = process.env.PORT;



const server = http.createServer(app);

server.listen(port, () => {
    console.log('Server Up and Running');
})