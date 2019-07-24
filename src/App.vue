<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>
<script>
import Header from "./components/Header.vue";

export default {
  components: {
    Header
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
* {
  box-sizing: border-box;
}
body,
ul,
li,
h1,
h2,
h3,
h4,
h5,
h6,
p {
  padding: 0px;
  margin: 0px;
}

ul,
a {
  list-style: none;
  text-decoration: none;
}

body {
  font-family: "Roboto", sans-serif;
  font-style: normal;
}

button,
a {
  transition: all 0.3s;
}
</style>
