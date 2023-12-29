<script>
import  CalcButton from '@/components/customButton/CalcButton.vue'

export default {
  components:{
    CalcButton,
  },
  data() {
    return {
      numA: 0,
      numB: 0,
      result: 0,
      html: `<div>所見即所得</div>`,
    }
  },
  methods: {
    add() {
      if (this.numA.toString().trim() === '' || this.numB.toString().trim() === '') return;
      this.result = this.numA + this.numB;
    },
    minus() {
      if (this.numA.toString().trim() === '' || this.numB.toString().trim() === '') return;
      this.result = this.numA - this.numB;
    },
    mult() {
      if (this.numA.toString().trim() === '' || this.numB.toString().trim() === '') return;
      this.result = this.numA * this.numB;
    },
    divi() {
      if (this.numA.toString().trim() === '' || this.numB.toString().trim() === '') return;
      this.result = this.numA / this.numB;
    },
  }
}
</script>

<template>
  <!-- v-if -->
  <!-- v-else if -->
  <!-- v-else -->
  <!-- v-show -->
  <!-- v-for 要補:key -->
  <!-- v-bind 省略寫法“:” -->
  <!-- v-on 省略寫法“@”連接觸發事件 -->
  <!-- v-html 將元素正確印在畫面上，最常用於所見即所得編輯器 -->
  <div v-html="html"></div>
  <!-- v-model input資料與變數產生連結 -->
  <div class="calc">計算機</div>
  <div><label>數字Ａ：<input v-model="numA" type="number"></label></div>
  <div><label>數字Ｂ：<input v-model="numB" type="number"></label></div>
  <div class="btns">
    <CalcButton @click="add()">+</CalcButton>
    <CalcButton @click="minus()">-</CalcButton>
    <CalcButton @click="mult()">*</CalcButton>
    <CalcButton @click="divi()">/</CalcButton>
    <!-- <button @click="add()" type="button" class="btn">+</button>
    <button @click="minus()" type="button" class="btn">-</button>
    <button @click="mult()" type="button" class="btn">*</button>
    <button @click="divi()" type="button" class="btn">/</button> -->
  </div>
  <div class="output text-main-deep">
    計算結果：{{ result }}
  </div>
  <div class="box">
    響應式斷點測試
  </div>
</template>

<style lang="scss" scoped>
/* scoped只會作用在此頁面的元素，不會影響其他區塊的樣式 */
.calc {
  @apply mb-[5px] text-[lightblue];
}
input{
  @apply pl-2;
}
.btns {
  @apply flex gap-[15px] mt-[5px];

  

}

.box {
  @apply my-4 w-[150px] h-[150px] bg-[wheat] md:w-[300px] md:h-[300px];
}
</style>
