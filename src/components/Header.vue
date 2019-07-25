<template>
  <header>
    <nav>
      <router-link to="/" id="logo">
        <img src="../assets/bleutest.png" />
      </router-link>
      <div class="links-right">
        <router-link to="/bleutestbuy">Bleutest BUY</router-link>
        <router-link to="/compare">Compare</router-link>
        <router-link to="/remittance">Remittance</router-link>
        <router-link to="/exchanges">Exchanges</router-link>
        <router-link to="/exchangesfees">Exchanges' Fees</router-link>
        <router-link to="/login" id="login">Login</router-link>
        <div>
          <CountryBrl />
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import CountryBrl from "./CountryBrl";

export default {
  name: "Header",
  components: {
    CountryBrl
  }
};
</script>

<style lang="scss" scoped>
header {
  background: #0080dd;
}
nav {
  padding: 25px 0px 35px 0px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
header nav div {
  justify-content: end;
  align-items: center;
}
.links-right div {
  display: inline-flex;
  vertical-align: middle;
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
.links-right a:hover,
.router-link-exact-active {
  border-bottom: #ffffff 2px solid !important;
}
#login {
  padding-left: 14px;
  padding-right: 14px;
  border: 2px solid #ffffff;
  border-radius: 12px;
  background: none;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
}
#login:hover {
  background: #fff;
  color: #0080dd;
  cursor: pointer;
}
</style>
