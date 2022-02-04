class RealStateRepository {
    currentId: number;
    states: any[];

    constructor() {
        this.currentId = 0;
        this.states = [];
    }

    async add(state: any) {
        var id = this.currentId++;
        state.id = id;
        this.states.push(state);
    }

    async update(state: any) {
        const index = this.states.findIndex((s) => state.id == s.id);
        if (index == -1) {
            return null;
        }
        this.states[index] = state;
        return state;
    }

    async find(id: number) {
        const state = this.states.find((s) => s.id == id);
        return state;
    }

    async findAll() {
        return this.states;
    }

    async remove(id: number) {
        const index = this.states.findIndex((s) => s.id == id);
        if (id == -1) {
            return null;
        }
        const [state] = this.states.splice(index, 1);
        return state;
    }
}

export default RealStateRepository;
