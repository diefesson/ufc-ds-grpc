import grpc = require("@grpc/grpc-js");
import protoLoader = require("@grpc/proto-loader");
import RealStateRepository from "./repository/RealStateRepository";

const PROTO_PATH = "./proto/real_state_service.proto";

const realStateRepository = new RealStateRepository();

console.log(grpc);

const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const RealStateProto: any = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

server.addService(RealStateProto.RealStateService.service, {
    add(state: any, callback: any) {
        realStateRepository.add(state).then((s) => callback(null, s));
    },
});

server.bindAsync(
    "0.0.0.0:8080",
    grpc.ServerCredentials.createInsecure(),
    (error, port) => {
        if (error) {
            console.error(error);
        } else {
            console.log("server running on port " + port);
        }
    }
);
