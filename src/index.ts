import express, { Express } from 'express';
import dotenv from 'dotenv';
dotenv.config();


const passportConfig = require('./services/passport');

const app: Express = express();
require('./routes/authRoutes')(app);

const port = 5000


app.listen(port, () => {

    console.log(`Running on ${port}`)
});

