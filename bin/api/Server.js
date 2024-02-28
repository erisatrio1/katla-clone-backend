// require('dotenv').config()
// const express = require('express')


import dotenv from 'dotenv/config'
import express from 'express'
const VERSION = process.env.VERSION
const app = express()

// module
import v1FormsModule from '../modules/v1/solutions/forms.js'



// cors and security header
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if(req.method === 'OPTION') {
        res.header('Access-Control-Allow-Method', 'GET, POST, PUT, PATCH, DELETE');
        return res.json({});
    }
    next();
});

console.log("SERVER VERSION: ", VERSION)

// use module
app.use('/v1/forms', v1FormsModule);


// module.exports = app
export default app;
