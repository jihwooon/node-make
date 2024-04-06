import express from 'express';
import { User } from '../model/user';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv"
import { save } from '../model/user.repository'

dotenv.config();

const router = express.Router();

router.post('/users', async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.create({ email, password });
        save(user);
    } catch (error) {
        throw error;
    }
    res.sendStatus(201);
});

router.post('/login', async (req, res) => {
    const { email } = req.body;
    const accessToken = jwt.sign({ email }, process.env.JWT_SECRET as string, { expiresIn: '14d' });

    res.cookie('access-token', accessToken, {
        maxAge: 1000 * 60 * 60 * 24 * 14,
        httpOnly: true,
    });

    res.sendStatus(204);
})


export default router;
