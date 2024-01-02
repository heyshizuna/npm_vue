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
  emit:['pushNumber'],
  data() {
    return {
      numberA:[],
      textNum:[1,2,3,4,5,6,7,8,9,'.',0,'AC']
    }
  },
  methods:{
    pushNumber(num){
      if(num == 'AC'){
        this.numberA = [];
      this.$emit('pushNumber','0');
      return;
      }
      
      if(this.numberA.length == 0 && Number(num) == 0){
        return;
      }else if((this.numberA.length == 0 && num == '.')){
        this.numberA.push(0);
      };
      this.numberA.push(num);
      this.$emit('pushNumber',this.numberA.join(""));
    }
  },
  
}
</script>
<template>
  <div class="newCalc">
    <button type="button" class="calcBtn" v-for="item in textNum" :key="item.id" @click="pushNumber(item)">{{ item }}</button>
  </div>
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
