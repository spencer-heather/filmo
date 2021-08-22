<template>
  <div id="nav">
    <div class="start">
      <div id="appname">filmo</div>
    </div>
    <div class="end">
      <div id="user_info" v-if="user.logged_in" ref="user_info">
        <div>
          {{ user.username }}
        </div>
        <img id="avatar" v-bind:src="user.avatar_url" @load="on_avatar_load" />
        <div class="user_dropdown" v-bind:style="user_dropdown_style">
          <div>Account</div>
          <div>Likes</div>
          <div @click="logout">Log out</div>
        </div>
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
  data() {
    return {
      dropdown_width: 100
    };
  },
  computed: {
    ...mapState(["user"]),
    user_dropdown_style() {
      return {
        "min-width": this.dropdown_width + "px",
      };
    },
  },
  methods: {
    ...mapActions(["login", "logout"]),
    on_avatar_load() {
      this.dropdown_width = this.$refs.user_info.clientWidth;
    }
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
  height: 100px;
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

#user_info:hover .user_dropdown {display: flex; flex: 1; flex-direction: column;}

.user_dropdown {
  display: none;
  position: absolute;
  top: 100px;
  right: 0;
  background: #535A77;
  border: none;
}

.user_dropdown div {
  margin: 5px;
}

.user_dropdown div:hover {
  cursor: pointer;
  background: #ffbc76;
  color: black;
}
</style>
