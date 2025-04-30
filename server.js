import express from 'express';
import cors from 'cors'
import 'dotenv/config'
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import authRouter from './routes/authRoute.js';

const app = express();
const port = process.env.PORT || 5000;

connectDB();


app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials : true}))

// mern-auth
// I0h6hUlMnK6fUmy3



//api endpoint

app.get('/', (req, res) =>{
    res.send('API Working')
})

app.get('/api/auth', authRouter)



app.listen(port, () =>{
    console.log('My server is running.')
})
