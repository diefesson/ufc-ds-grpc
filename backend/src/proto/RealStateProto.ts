import protoLoader = require("@grpc/proto-loader");
import grpc = require("@grpc/grpc-js");
import path from "node:path";
import { PROTO_PATH } from "../env";

const servicePath = path.join(PROTO_PATH || ".", "real_state_service.proto");

const packageDefinition = protoLoader.loadSync(servicePath, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});
export const realStateProto: any =
    grpc.loadPackageDefinition(packageDefinition);
