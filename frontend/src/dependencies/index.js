const grpc = require("@grpc/grpc-js");
const RealStateProto = require("../proto/RealStateProto.js");
const { BACKEND_ADDRESS } = require("../env/index.js");

exports.realStateService = new RealStateProto.RealStateService(
  BACKEND_ADDRESS,
  grpc.credentials.createInsecure()
);
