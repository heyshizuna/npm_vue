<script>
export default {
  // 要主頁面接收值
  props: {
    calcType: {
      type: Array,
      default: '',
    },
    numberOne: {
      type: Number,
    },
    numberTwo: {
      type: Number,
    }
  },
  // 要回傳給主頁面的方法
  emit: ['finalResult'],
  // 如果接進來的值需要做修改可以在data內轉換，或是要定義變數
  data() {
    return {
      type: this.calcType ?? [],
      result: 0,
    }
  },
  methods: {
    enterCalc(type) {
      if (this.numberOne.toString().trim() === '' || this.numberTwo.toString().trim() === '') return;
      switch (type) {
        case '+':
          this.result = this.numberOne + this.numberTwo;
          break;
        case '-':
          this.result = this.numberOne - this.numberTwo;
          break;
        case '*':
          this.result = this.numberOne * this.numberTwo;
          break;
        case '/':
          this.result = this.numberOne / this.numberTwo;
          break;
        default:
          break;
      }
      // 利用剛剛的要傳回主頁面的emit的文字將結果傳回主頁面
      //this.$emit('事件名稱',參數)
      this.$emit('finalResult', this.result);
    },
  }
};
</script>

<template>
  <section id="CalcButton">
    <button type="button" class="btn" v-for="item in type" :key="item.id" @click="enterCalc(item)">
      {{ item }}
    </button>
  </section>
</template>

<style lang="scss" scoped>
#CalcButton {
  .btn {
    @apply w-[50px] h-[50px] mx-3 border-none rounded-[4px] bg-[lightblue] text-[dodgerblue] text-[30px] cursor-pointer leading-[50px] shadow-lg hover:bg-blue-500 hover:text-white;

  }

}
</style>