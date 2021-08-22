<template>
  <div class="login">
    <br />
    <button @click="login">Log in</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Login",
  computed: {
    ...mapState(["auth_token"]),
  },
  methods: {
    ...mapActions(["login"]),
  },
};
</script>
