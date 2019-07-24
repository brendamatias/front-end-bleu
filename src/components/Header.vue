<template>
  <header>
    <nav>
      <router-link to="/" class="logo">
        <img src="../assets/Bleutest.png" />
      </router-link>
      <div class="links-right">
        <router-link to="/bleutestbuy">Bleutest BUY</router-link>
        <router-link to="/compare">Compare</router-link>
        <router-link to="/remittance">Remittance</router-link>
        <router-link to="/exchanges">Exchanges</router-link>
        <router-link to="/exchangesfees">Exchanges'Fees</router-link>
        <router-link to="/login" class="login">Login</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
header {
  background: #0080dd;
}
nav {
  padding: 35px 0px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
header nav div {
  justify-content: end;
  align-items: center;
}
a {
}
.links-right a {
  color: #ffffff;
  font-size: 16px;
  height: 19px;
  font-weight: normal;
  line-height: 19px;
  margin: 0px 24px;
  padding: 8px 8px;
  border-bottom: transparent 2px solid;
}

.links-right a:hover {
  border-bottom: #ffffff 2px solid;
}

.login {
  height: 19px;
  margin: 10px 8px !important;
  border: 2px solid #ffffff !important;
  box-sizing: border-box;
  border-radius: 12px;
}

.login:hover {
  color: #000;
  border: 2px solid #000 !important;
}
</style>
