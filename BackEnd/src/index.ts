import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'
import process from 'process';
import UserRouter from './UserService/userRouter';
import SectorRouter from './SectorService/sectorRouter';

dotenv.config();


const port = process.env.PORT || 5000;
const mongodbUrl = process.env.DATABASE_URL || "";
const app: Express = express();


mongoose.connect(mongodbUrl).
  catch(error =>
    console.log(error)
  );
mongoose.connection.on('error', err => {
  console.log(err);
});



app.use(express.json());
app.use(cors())

app.use(UserRouter);
app.use(SectorRouter);

app.get("/helloworld", (_, res: Response) => {
  res.send('helloworld')
})


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
