import grpc = require("@grpc/grpc-js");
import protoLoader = require("@grpc/proto-loader");
import RealStateRepository from "./repository/RealStateRepository";

const PROTO_PATH = "./proto/real_state_service.proto";

function loadProto(): any {
    const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
    });
    return grpc.loadPackageDefinition(packageDefinition);
}

function createServer(): grpc.Server {
    const RealStateProto = loadProto();
    const realStateRepository = new RealStateRepository();
    const server = new grpc.Server();
    server.addService(RealStateProto.RealStateService.service, {
        add(call: any, callback: any) {
            callback(null, realStateRepository.add(call.request));
        },
    });
    return server;
}

const server = createServer();
server.bindAsync(
    "192.168.2.7:888",
    grpc.ServerCredentials.createInsecure(),
    () => server.start()
);
