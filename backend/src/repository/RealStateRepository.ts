class RealStateRepository {
    currentId: number;
    states: any[];

    constructor() {
        this.currentId = 0;
        this.states = [];
    }

    add(state: any) {
        var id = this.currentId++;
        state.id = id;
        this.states.push(state);
        return state;
    }

    update(state: any) {
        const index = this.states.findIndex((s) => state.id == s.id);
        if (index == -1) {
            return null;
        }
        this.states[index] = state;
        return state;
    }

    find(id: number) {
        return this.states.find((s) => s.id == id);
    }

    findAll() {
        console.log(this.states);
        return this.states;
    }

    remove(id: number) {
        const index = this.states.findIndex((s) => s.id == id);
        console.log(index); //TODO: remove me
        if (index == -1) {
            return null;
        }
        const [state] = this.states.splice(index, 1);
        return state;
    }
}

export default RealStateRepository;
