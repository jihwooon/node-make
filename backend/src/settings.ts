import dotenv from "dotenv"

dotenv.config();

export const PORT = process.env.PORT || 3031;
export const CORS_ALLOW_ORIGIN = process.env.CORS_ALLOW_ORIGIN || "";
export const DB_PORT = parseInt(process.env.DB_PORT || "3306");