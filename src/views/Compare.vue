<template>
  <div>
    <div class="mainText">
      <h1>USD Best Price in Brazil</h1>
      <h5>
        Compare and find in realtime the best effective prices in Brazil's top USD exchanges, considering fees.
        <br />
        <button>Click on the exchange row</button> to view operation details.
      </h5>
    </div>
    <!-- <div class="select">
      <select name="select">
        <option value="BRL" selected>BRL</option>
        <option value="EUR">EUR</option>
      </select>
    </div>
    <div class="btnsCompare">
      <v-select id="mySelect" v-model="selected" :options="['BRL','EUR']"></v-select>
      <input name="money" id="money" type="text" v-model="busca" />

      <svg
        width="20"
        height="13"
        viewBox="0 0 20 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.18 0.179932L10 7.33993L2.82 0.179932L0 2.99993L10 12.9999L20 2.99993L17.18 0.179932Z"
          fill="#003358"
        />
      </svg>
    </div>-->
  </div>
</template>

<script>
export default {
  name: "Compare"
};
</script>

<style scoped>
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
}
button:hover {
  background: rgba(88, 88, 88, 0.8);
  color: #efefef;
}
/* input {
  width: 290px;
  height: 80px;
  opacity: 0.2;
  border: 2px solid #585858;
  box-sizing: border-box;
  border-radius: 16px;
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  height: 100%;
} */
</style>
