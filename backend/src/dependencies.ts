import RealStateRepository from "./repository/RealStateRepository";
import RealStateService from "./service/RealStateService";

export const realStateRepository = new RealStateRepository();
export const realStateService = new RealStateService(realStateRepository);
