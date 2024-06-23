import express, {Response} from 'express';

const app = express();
const port = 3000;

app.get('/', (res: Response) => {
    res.send('Hello World!');
});
app.listen(port, () => {
    console.info(`Server running at http://localhost:${port}`);
});
