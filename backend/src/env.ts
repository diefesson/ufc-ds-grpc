import dotenv from "dotenv";

dotenv.config();

export const PROTO_PATH = process.env.PROTO_PATH || "../proto";
export const HOST = process.env.HOST || "0.0.0.0";
export const PORT = process.env.PORT || "8888";
