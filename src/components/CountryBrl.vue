<template>
  <div class="brl">
    <img src="../assets/icon-brl.jpg" />
    <select @change="onChange($event)">
      <option value="USD-BRL" class="background">BRL</option>
      <option value="BRL-USD" disabled>USD</option>
      <option value="EUR-BRL" disabled>EUR</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "CountryBrl"
};
</script>

<style lang="scss" scoped>
img {
  margin-left: 12px;
}
select {
  font-style: regular;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  border: none;
  padding: 0px 12px;
  background: url("data:image/svg+xml;utf8,<svg width='8' height='4' viewBox='0 0 8 4' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 0L4 4L8 0H0Z' fill='rgba(255, 255, 255, 0.2)'/></svg>")
    no-repeat;
  background-position: right 0% top 50%;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
}
.background {
  background: #0080dd;
}
</style>
