import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export async function authenticateUser(req: Request, res: Response, next: NextFunction) {
    const accessToken = req.cookies["access-token"];
    if (!accessToken) {
        return res.sendStatus(401);
    }

    jwt.verify(accessToken, process.env.TOKEN_SECRET as string, (err: any, user: any) => {
        console.log(err)

        if (err) return res.sendStatus(403)

        req.user = user

        next()
    })
}