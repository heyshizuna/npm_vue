<script>
import NewCalc from '@/components/customButton/NewCalc.vue'
export default {
  components: {
    NewCalc,
  },
  data(){
    return{
      numA:'0',
      numB:[],
    }
  },
  methods:{
    pushNumber(numberArray){
      this.numA=numberArray;
    }
  }
}
</script>
<template>
  <!-- 做出0-9數字盤，點擊數字後加到數字Ａ上 -->
  <div class="number">數字Ａ：
    <div class="num">{{ numA }}</div>
  </div>
  <NewCalc @push-number="pushNumber" />
</template>
  
<style lang="scss" scoped>
  .number {
    display: flex;
    .num{
      width: 200px;
      height: 20px;
      background-color: wheat;
    }
  }
</style>