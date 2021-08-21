<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
  </div>
  <router-view />
</template>

<style>
@font-face {
  font-family: "IBM Plex Sans Thai", sans-serif;
  font-style: light;
  font-weight: 300;
  src: local("IBM Plex Sans Thai"),
    url("./fonts/IBMPlexSansThai-Light.ttf") format("truetype");
}

#app {
  font-family: "IBM Plex Sans Thai", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
