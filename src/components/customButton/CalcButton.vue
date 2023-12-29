<script>
export default{

};
</script>

<template>
    <section id="CalcButton">
      <button type="button" class="btn">
        <!-- 挖洞裝東西 -->
        <slot/>
      </button>
    </section>
</template>

<style lang="scss" scoped>
  #CalcButton{
    .btn {
    @apply w-[50px] h-[50px] border-none rounded-[4px] bg-[lightblue] text-[dodgerblue] text-[30px] cursor-pointer leading-[50px] shadow-lg hover:bg-blue-500 hover:text-white;

  }

  }
</style>