import express, { Request, Response} from 'express';

const app = express();

app.listen(3000, () => {
    console.log("Listening..");
})

app.get('/', (req: Request, res: Response) => {
    res.send('hehe');
})