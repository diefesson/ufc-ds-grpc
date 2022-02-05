import RealStateRepository from "../repository/RealStateRepository";

export default class RealStateService {
    realStateRepository: RealStateRepository;

    constructor(realStateRepository: RealStateRepository) {
        this.realStateRepository = realStateRepository;
    }

    add(call: any, callback: any) {
        callback(null, this.realStateRepository.add(call.request));
    }

    update(call: any, callback: any) {
        callback(null, this.realStateRepository.update(call.request));
    }

    find(call: any, callback: any) {
        callback(null, this.realStateRepository.find(call.request.id));
    }

    findAll(call: any, callback: any) {
        callback(null, { states: this.realStateRepository.findAll() });
    }

    remove(call: any, callback: any) {
        callback(null, this.realStateRepository.remove(call.request.id));
    }
}
