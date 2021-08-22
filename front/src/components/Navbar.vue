<template>
  <div id="nav">
    <div class="start">
      <div id="appname">filmo</div>
    </div>
    <div class="end">
      <div id="user_info" v-if="logged_in">
        <div>
          {{ username }}
        </div>
        <img id="avatar" v-bind:src="avatar_url" />
      </div>
      <div v-else>
        <button id="login_button" @click="login">Log in</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Navbar",
  computed: {
    ...mapState(["logged_in", "username", "avatar_url"]),
  },
  methods: {
    ...mapActions(["login"]),
  },
};
</script>

<style>
#nav {
  background: #323958;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  min-height: 100px;
}

#login_button {
  background: #ffbc76;
  color: black;
}

#appname {
  margin: 0 5px;
}

#avatar {
  border-radius: 100px;
  height: 80px;
  margin: 10px 10px 10px 10px;
}

#user_info {
  display: flex;
  align-items: center;
}
</style>
