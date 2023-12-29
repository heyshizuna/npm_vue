<!-- JS區域 -->
<!-- setup為組合式寫法 -->
<script>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
export default { //選項式一定會有
  //元件宣告
  components:{
    RouterLink,
    RouterView
  },
}
</script>

<template>
  <!-- 把共用的部分放在最大的App.Vue -->
  <header>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/calc">Calc</RouterLink>
  </header>

  <main>
   <RouterView />
   <div>我來自公版，每個頁面都有我</div>
  </main>

  <footer>

  </footer>
</template>

<!-- CSS區域 -->
<style scoped></style>
