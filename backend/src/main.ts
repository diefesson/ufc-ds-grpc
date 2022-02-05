import grpc = require("@grpc/grpc-js");
import { realStateProto } from "./proto/RealStateProto";
import { realStateService } from "./dependencies";
import { HOST, PORT } from "./env";

function createServer(): grpc.Server {
    const server = new grpc.Server();
    server.addService(
        realStateProto.RealStateService.service,
        realStateService as any
    );
    return server;
}

const socketAddress = HOST + ":" + PORT;
const grpcServer = createServer();
grpcServer.bindAsync(
    socketAddress,
    grpc.ServerCredentials.createInsecure(),
    (_error, _port) => {
        grpcServer.start();
        console.log("server running at " + socketAddress);
    }
);
