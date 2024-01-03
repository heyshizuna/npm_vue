<script>
export default {
  data() {
    return {
      newTodo: '',
      todoList: [
        // {
        //   id:1,
        //   todo: '今天好冷',
        //   checked: false,
        // },
      ]
    }
  },
  //網頁載入時先會觸發
  mounted() {
    //將sessionstorage的資料存進data裡，須將JSON格式轉譯回陣列
    if (sessionStorage.getItem('todoList')) {
      this.todoList = JSON.parse(sessionStorage.getItem('todoList'));
    }
  },
  methods: {
    addList() {

      //抓陣列裡的id最大數+1當作是下一個項目的id
      let idStamp = this.todoList.length ? Math.max(...this.todoList.map(item => item.id)) + 1 : 1;
      if (!this.newTodo.trim()) return;
      this.todoList.push({
        id: idStamp,
        todo: this.newTodo,
        checked: false,
      })

      this.newTodo = '';
      //需要將最新資料存入sessionStorage，須將陣列轉譯成JSON格式
      sessionStorage.setItem("todoList", JSON.stringify(this.todoList));
    },
    delList() {

    },
  }
}
</script>

<template>
  <div class="todoList">
    <div class="addList">
      <div class="detail">
        <input class="text" type="text" placeholder="需要做什麼呢？" v-model="newTodo">
        事項完成期限：<input class="date" type="date">
        事項記錄時間：<input class="timestamp" type="date">
      </div>
      <button type="button" class="btn" @click="addList()">新增</button>
    </div>
    <div class="checkList" v-if="todoList.length">
      <div class="check" v-for="item in todoList" :key="item.id"
        :class="{ 'line-through text-warmGray-400': item.checked === true }">
        <label><input type="checkbox" v-model="item.checked"><span>{{ item.todo }}</span></label><font-awesome-icon
          :icon="['fas', 'trash']" class="del" @click="delList(item.id)" />
      </div>
    </div>
    <div class="clear" v-else>尚未新增待辦事項</div>
  </div>
</template>

<style lang="scss" scoped>
.todoList {
  width: 630px;

  .addList {
    width: 100%;
    display: flex;
    font-size: 16px;
    line-height: 40px;
    margin-bottom: 10px;

    .detail {
      width: 570px;
      display: flex;
      flex-wrap: wrap;

      .text {
        width: 100%;
        height: 40px;
        background-color: #ebebeb;
        padding-left: 8px;
        flex-grow: 1;
        margin-bottom: 2px;
      }
      .date{
        margin-right: 8px;
      }
      .date,.timestamp{
        width: 29.5%;
        height: 40px;
        background-color: #ebebeb;
        text-align: center;
      }
    }


    .btn {
      width: 60px;
      // height: 40px;
      background-color: #8cb9dc;
      color: #262626;
      line-height: 40px;

      &:active {
        background-color: #c4dcee;
      }
    }
  }

  .checkList {
    width: 630px;
    height: 500px;
    overflow-y: scroll;

    .check {
      height: 40px;
      display: flex;
      align-items: center;
      background-color: #c4dcee;
      margin-bottom: 5px;
      padding: 0 8px;

      label {
        flex-grow: 1;
        display: flex;
        color: #262626;

        input {
          width: 23px;
          height: 23px;
          margin-right: 8px;
        }
      }

      .del {
        font-size: 20px;
        color: #d85858;
        cursor: pointer;
      }
    }
  }

  .clear {
    width: 630px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: #d85858;
    background-color: #ebebeb;
  }
}
</style>