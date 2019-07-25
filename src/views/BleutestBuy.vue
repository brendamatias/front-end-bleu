<template>
  <div v-if="contracted">
    <h3>Contracted? {{contracted}}</h3>
    <h3>Yay!!! When do I start? ♥</h3>
    <img src="https://media.giphy.com/media/eYilisUwipOEM/giphy.gif" />
  </div>
</template>

<script>
export default {
  name: "BleutestBuy",
  data() {
    return {
      contracted: true
    };
  }
};
</script>

<style lang="sass" scoped>
img 
  width: 250px
  border-radius: 20px
h3 
  margin-bottom: 20px
  font-size: 40px
  letter-spacing: 2px
  color: #67E6DC
div 
  margin-top: 97px
  text-align: center
</style>