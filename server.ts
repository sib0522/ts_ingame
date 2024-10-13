import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

// start server by express
const app = express();

const router = require('./router');

app.use('/', router);

const PORT = process.env['PORT'] || 8080;
app.listen(PORT, () => {
    console.log('Server is running on http://localhost:${PORT}');
})
