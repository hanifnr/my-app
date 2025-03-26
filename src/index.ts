import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import pool from './utils/database';

dotenv.config();

const app = express();
const PORT = parseInt(process.env.PORT as string, 10) || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: "Hello from EC2!" });
});

app.get('/users', async (req, res) => {
    const { rows } = await pool.query('SELECT * FROM users');
    res.json(rows);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
