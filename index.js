require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connect = require('./config/connection');
const book = require('./routes/bookRoute');
const user = require('./routes/userRoutes')
const discount = require('./routes/discount')
const createAdmin = require('./createAdmin');
const homeUser = require('./routes/user/home')
const frontUser = require('./routes/user/user')
app.use(cors());
app.use(book);
app.use(user);
app.use(discount);
app.use(homeUser)
app.use(frontUser);
connect();
createAdmin();
app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('server is running on 3000');
    }
})