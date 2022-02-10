const dotenv = require("dotenv");

dotenv.config();

exports.PROTO_PATH = process.env.PROTO_PATH || "../proto";
exports.BACKEND_ADDRESS = process.env.HOST || "127.0.0.1:8888";
