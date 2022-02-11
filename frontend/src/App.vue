<template>
  <div class="list">
    <span>Imoveis</span>
    <div class="item" v-for="state in states" v-bind:key="state.id">
      <button class="remove-button" v-on:click="onRemove(state.id)">
        deletar
      </button>
      <span>{{ state.id }}</span>
      <span>{{ state.title }}</span>
    </div>
  </div>
</template>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.item {
  padding: 10px;
  background-color: lightgrey;
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 5px;
}

.remove-button {
  color: white;
  background-color: red;
  border-radius: 5px;
}
</style>

<script>
const api = window.api;

export default {
  name: "App",
  data: () => ({
    states: [{ id: 4, title: "algo" }],
  }),
  methods: {
    async updateList() {
      api.findAll((error, response) => {
        if (error) {
          console.error(error);
        } else {
          console.log("updateList", response);
          this.states = response.states;
        }
      });
    },
    async onRemove(id) {
      api.remove({ id }, (error, response) => {
        if (error) {
          console.error(error);
        } else {
          console.log("remove", response);
        }
        this.updateList();
      });
    },
  },
  mounted() {
    this.updateList();
  },
};
</script>

<style></style>
