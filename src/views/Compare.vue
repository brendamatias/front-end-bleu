<template>
  <div>
    <div class="mainText">
      <h1>USD Best Price in Brazil</h1>
      <h5>
        Compare and find in realtime the best effective prices in Brazil's top USD exchanges, considering fees.
        <br />
        <router-link to="/exchanges" tag="button">Click on the exchange row</router-link> to view operation details.
      </h5>
    </div>
    <div>
      <CoinComponent />
    </div>
  </div>
</template>

<script>
import CoinComponent from "../components/CoinComponent";

export default {
  name: "Compare",
  components: {
    CoinComponent
  }
};
</script>

<style lang="scss" scoped>
div {
  text-align: center;
}
.mainText {
  margin-top: 97px;
  margin-bottom: 80px;
}
h1 {
  color: #003358;
  font-size: 52px;
  font-weight: 300;
  line-height: 61px;
  margin-bottom: 32px;
}
h5,
button {
  font-size: 18px;
  line-height: 32px;
  font-weight: normal;
  letter-spacing: 0.015em;
  color: #585858;
  opacity: 0.8;
}
button {
  background: #efefef;
  border: 1px solid #bebebe;
  box-sizing: border-box;
  border-radius: 8px;
  cursor: pointer;
  padding: 0 10px;
}
button:hover {
  background: rgba(88, 88, 88, 0.8);
  color: #efefef;
}
</style>
