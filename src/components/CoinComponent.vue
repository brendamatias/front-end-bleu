<template>
  <div class="coinComponent">
    <div class="coinComponentLeft">
      <input
        type="text"
        v-model="coinValue"
        @input="currencyValueConverted()"
        @keypress="isNumber($event)"
        v-money="money"
      />
      <select @change="onChange($event)">
        <option value="USD-BRL">BRL</option>
        <option value="BRL-USD">USD</option>
        <option value="CAD-BRL">CAD</option>
        <option value="EUR-BRL">EUR</option>
        <option value="BTC-BRL">BTC</option>
      </select>
    </div>
    <div class="coinComponentRight">
      <input
        type="text"
        v-bind:value="valueTotal.toFixed(2).replace('.', ',')"
        disabled
        v-money="money"
      />
      <select disabled id="convertedCurrency">
        <option value="USD-BRL">USD</option>
        <option value="BRL-USD">BRL</option>
        <option value="CAD-BRL">BRL</option>
        <option value="EUR-BRL">BRL</option>
        <option value="BTC-BRL">BRL</option>
      </select>
    </div>
  </div>
</template>

<script>
import { VMoney } from "v-money";
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "CoinComponent",
  mixins: [fetchData],
  data() {
    return {
      coinValue: 0,
      options: ["USD-BRL", "EUR"],
      selectCoin: "",
      valueTotal: 0,
      money: {
        decimal: ",",
        thousands: "",
        precision: 2,
        masked: false
      }
    };
  },
  directives: { money: VMoney },
  methods: {
    isNumber(e) {
      e = e ? e : window.event;
      var charCode = e.which ? e.which : e.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        e.preventDefault();
      } else {
        return true;
      }
    },
    onChange(event) {
      this.fetchData(event.target.value);
      this.selectCoin = event.target.value;
      this.updatedSelectCoin();
      this.currencyValueConverted();
    },
    updatedSelectCoin() {
      document.getElementById("convertedCurrency").value = this.selectCoin;
    },
    currencyValueConverted() {
      let userVal = Number(this.coinValue.replace(",", "."));
      if (this.selectCoin === "USD-BRL") {
        this.valueTotal = userVal / this.price;
      } else if (this.selectCoin != null) {
        this.valueTotal = userVal * this.price;
      }
    }
  },
  created() {
    this.selectCoin = "USD-BRL";
    this.fetchData(this.selectCoin);
  }
};
</script>

<style lang="scss" scoped>
.coinComponent,
.coinComponentLeft,
.coinComponentRight {
  display: inline-flex !important;
}
input,
select {
  height: 80px !important;
  font-size: 28px;
  line-height: 33px;
  border: 2px solid rgba(88, 88, 88, 0.2);
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
}
input {
  width: 180px;
  color: #585858;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  padding: 0px 16px 0px 69px;
  border-right: none;
}
select {
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  font-weight: bold;
  border-left: none;
}
.coinComponentLeft {
  margin-right: 16px;
}
.coinComponentLeft,
.coinComponentRight {
  position: relative;
}
.coinComponentLeft::after,
.coinComponentRight::after {
  content: "";
  border-left: 2px solid rgba(88, 88, 88, 0.2);
  display: block;
  position: absolute;
  top: 16px;
  bottom: 16px;
  right: 42%;
}
.coinComponentLeft select {
  padding: 0px 51px 0px 16px;
  color: #003358;
  background: url("data:image/svg+xml;utf8,<svg width='20' height='13' viewBox='0 0 20 13' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M17.18 0.179932L10 7.33993L2.82 0.179932L0 2.99993L10 12.9999L20 2.99993L17.18 0.179932Z' fill='rgba(0, 51, 88, 1)'/></svg>")
    no-repeat;
  background-position: right 18px top 50%;
}
.coinComponentRight select {
  padding: 0px 33px 0px 31px;
  color: #585858;
}

input:disabled {
  background: none;
}
</style>