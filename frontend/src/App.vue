<template>
  <div>
    <div v-for="state in states" v-bind:key="state.id">{{ state.title }}</div>
  </div>
</template>

<script>
const api = window.api;

console.log(api);

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
          console.log(response);
          this.states = response.states;
        }
      });
    },
  },
  mounted() {
    this.updateList();
  },
};
</script>

<style></style>
