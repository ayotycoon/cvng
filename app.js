const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const apiRouter = require('./routes/api/api');
const adminRouter = require('./routes/admin/admin');

const app = express();

app.use(logger('dev'));
app.use(express.json({ limit: '2mb'}));
app.use(express.urlencoded({ extended: true, limit:'2mb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
require('dotenv').config()
// mongoose
const mongoose = require('mongoose');

let port = 6000;
let ISPRODUCTION = true;

if (process.platform === "win32") {
    // if env is windows set production to false
    ISPRODUCTION = false;
    port = 8080;
}



if (!ISPRODUCTION) {
    console.log('1')
    const cors = require('cors');
    app.use(cors());
    mongoose.connect(process.env.CONNECTION_URI_local, { useNewUrlParser: true }).then(c => console.log('connected to db'))
        .catch(c => console.log('connection to db error local'))
} else {
    console.log('2')
    mongoose.connect(process.env.CONNECTION_URI_web, { useNewUrlParser: true }).then(c => console.log('connected to db'))
        .catch(c => console.log('connection to db error - web'))
}

app.use('/api', apiRouter);
app.use('/admin', adminRouter);

app.get('*', (req, res) => {
    res.sendFile(path.resolve('public/index.html'));
});


app.listen(port, () => {
    console.log('connected to server, port '+ port);
})
module.exports = app;
