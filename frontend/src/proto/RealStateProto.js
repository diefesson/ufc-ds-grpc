const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path");
const { PROTO_PATH } = require("../env");

const servicePath = path.join(PROTO_PATH || ".", "real_state_service.proto");

const packageDefinition = protoLoader.loadSync(servicePath);

module.exports = grpc.loadPackageDefinition(packageDefinition);
