<template>
  <navbar />
  <router-view />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    Navbar,
  },
  methods: {
    ...mapActions(["generate_client_uuid"]),
  },
  mounted() {
    this.generate_client_uuid();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Saira:wght@300&display=swap");

body {
  margin: 0;
  min-height: 100vh;
  background-color: #9297ad;
}

button {
  border-radius: 7px;
  border: none;
  margin: 5px;
  font-family: "Saira", sans-serif;
  cursor: pointer;
  font-size: 1em;
}

button:focus {
  outline: none;
}

#app {
  font-family: "Saira", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  font-size: 2.5em;
}
</style>
