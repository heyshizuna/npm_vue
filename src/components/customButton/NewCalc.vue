<script>
export default {
  props:{
    numA: {
      type: Array,
    },
    numB: {
      type: Array,
    }
  },
  data() {
    return {
      numberA:[],
      text: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', '']
    }
  },
  methods:{
    pushNumber(num){
      this.numberA.push(num);
    }
  },
  emit:['pushNumber']
}
</script>
<template>
  {{ numberA }}
  <section class="newCalc">
    <button type="button" class="calcBtn" v-for="item in text" :key="item.id" @click="pushNumber(item)">{{ item }}</button>
  </section>
</template>
  
<style lang="scss" scoped>
.newCalc {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  width: 316px;
  height: 220px;
  padding: 4px;
  border-radius: 6px;
  background-color: #d3d3d3;
  .calcBtn {
    width: 100px;
    height: 50px;
    background-color: #ffffff;
    border-radius: 2px;
    font-size: 24px;
  }
}
</style>