import express, { Express } from 'express';

const app: Express = express();

const port = 5000

app.get('/', (req, res) => {

    res.send({ hi: 'theres' })


});

app.listen(port, () => {

    console.log(`Running on ${port}`)
});

