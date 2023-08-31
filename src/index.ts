import express, { Express } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieSession from 'cookie-session';
import { error } from 'console';


const mongoose = require('mongoose');
require('./models/User');

const passportConfig = require('./services/passport');

mongoose.connect(process.env.mongoURI);

const app: Express = express();
if (process.env.cookieKey == null) {
    throw new Error('cookieKey environment variable is not set');

}

app.use(cookieSession({ maxAge: 30 * 24 * 60 * 60 * 1000, keys: [process.env.cookieKey] }))
require('./routes/authRoutes')(app);

const port = 5000


app.listen(port, () => {

    console.log(`Running on ${port}`)
});

