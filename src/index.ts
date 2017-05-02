import * as express from 'express';
import * as bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/hi/:name', (req, res) => {
    res.send({
        message: 'Hello, JOSE'
    });
});

app.listen(port, () => {
    console.log('API REST running on port 5000');
});
