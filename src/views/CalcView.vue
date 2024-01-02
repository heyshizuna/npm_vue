<script>
import CalcButton from '@/components/customButton/CalcButton.vue'

export default {
  components: {
    CalcButton,
  },
  data() {
    return {
      numA: 0,
      numB: 0,
      result: 0,
      html: `<div>所見即所得</div>`,
      calcType:['+','-','*','/'],
    }
  },
  methods: {
    calc(type) {
      if (this.numA.toString().trim() === '' || this.numB.toString().trim() === '') return;
      switch (type) {
        case '+':
          this.result = this.numA + this.numB;
          break;
        case '-':
          this.result = this.numA - this.numB;
          break;
        case '*':
          this.result = this.numA * this.numB;
          break;
        case '/':
          this.result = this.numA / this.numB;
          break;
        default:
          break;
      }
    },
    // 將子元件傳回來的值寫進主頁面data內
    finalResult(result){
      this.result=result;
    }
  }
}
</script>

<template>
  <!-- v-html 將元素正確印在畫面上，最常用於所見即所得編輯器 -->
  <div v-html="html"></div>
  <!-- v-model input資料與變數產生連結 -->
  <div class="calc">計算機</div>
  <div><label>數字Ａ：<input v-model="numA" type="number"></label></div>
  <div><label>數字Ｂ：<input v-model="numB" type="number"></label></div>
  <div class="btns">
    <CalcButton :calc-type="calcType" :number-one="numA" :number-two="numB" @final-result="finalResult" />
    <!-- <CalcButton @click="calc('+')">+</CalcButton>
    <CalcButton @click="calc('-')">-</CalcButton>
    <CalcButton @click="calc('*')">*</CalcButton>
    <CalcButton @click="calc('/')">/</CalcButton> -->
  </div>
  <div class="output text-main-deep">
    計算結果：{{ result }}
  </div>
  <div class="box">
    Tailwind響應式斷點測試
  </div>
</template>

<style lang="scss" scoped>
/* scoped只會作用在此頁面的元素，不會影響其他區塊的樣式 */
.calc {
  @apply mb-[5px] text-[lightblue];
}

input {
  @apply pl-2;
}

.btns {
  @apply flex gap-[15px] mt-[5px];
}

.box {
  @apply my-4 w-[150px] h-[150px] bg-[wheat] md:w-[300px] md:h-[300px];
}
</style>
