import express, { Express } from 'express';
import dotenv from 'dotenv';
dotenv.config();

const mongoose = require('mongoose');
require('./models/User');

const passportConfig = require('./services/passport');

mongoose.connect(process.env.mongoURI);

const app: Express = express();
require('./routes/authRoutes')(app);

const port = 5000


app.listen(port, () => {

    console.log(`Running on ${port}`)
});

