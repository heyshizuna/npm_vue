<script>
import Swal from 'sweetalert2'

export default {
  data() {
    return {
      newTodo: '',
      newDate: '',
      doTime: '',
      todoList: [],
      finishList: [],
    }
  },
  //網頁載入時先會觸發
  mounted() {
    this.updateDate();
    //將sessionstorage的資料存進data裡，須將JSON格式轉譯回陣列
    if (sessionStorage.getItem('todoList')) {
      this.todoList = JSON.parse(sessionStorage.getItem('todoList'));
    }
  },
  methods: {
    addList() {
      Swal.fire({
        title: "確認新增待辦事項？",
        text: "請確定你會完成此事項",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#8cb9dc",
        confirmButtonText: "確認",
        cancelButtonColor: "#c4dcee",
        cancelButtonText: "取消",
      }).then((result) => {
        if (result.isConfirmed) {
          //抓陣列裡的id最大數+1當作是下一個項目的id
          let idStamp = this.todoList.length ? Math.max(...this.todoList.map(item => item.id)) + 1 : 1;
          if (!this.newTodo.trim() || !this.doTime.trim()) return Swal.fire({
            title: "新增失敗",
            text: "待辦事項名稱或完成期限未填寫",
            icon: "error",
            confirmButtonColor: "#d85858",
          });;

          this.todoList.push({
            id: idStamp,
            todo: this.newTodo,
            todoTime: this.doTime,
            checked: false,
            editIng: false,
            editTodo: '',
          })

          this.newTodo = '';
          //需要將最新資料存入sessionStorage，須將陣列轉譯成JSON格式
          sessionStorage.setItem("todoList", JSON.stringify(this.todoList));

          Swal.fire({
            title: "新增成功",
            text: "已將待辦事項加入清單",
            icon: "success",
            confirmButtonColor: "#8cb9dc",
          });

        }
      });

    },
    delList(index) {
      this.todoList.splice(index, 1);
      sessionStorage.setItem("todoList", JSON.stringify(this.todoList));
    },
    checkThis() {
      this.finishList = this.todoList.filter((item) => item.checked);
      sessionStorage.setItem("todoList", JSON.stringify(this.todoList));
    },
    updateDate() {
      let newDate = new Date();
      let year = newDate.getFullYear();
      let month = newDate.getMonth() + 1;
      let days = newDate.getDate();
      let Time = (time) => (String(time).length < 2 ? `0${time}` : time);

      this.newDate = `${year}-${Time(month)}-${Time(days)}`;
    },
    clearAll() {
      Swal.fire({
        title: "確認刪除全部事項？",
        text: "將會清空所有待辦事項",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#8cb9dc",
        confirmButtonText: "確認",
        cancelButtonColor: "#c4dcee",
        cancelButtonText: "取消",
      }).then((result) => {
        if (result.isConfirmed) {
          this.todoList = [];
          sessionStorage.setItem("todoList", JSON.stringify(this.todoList));
          Swal.fire({
            title: "刪除成功",
            text: "已清空所有待辦事項",
            icon: "success",
            confirmButtonColor: "#8cb9dc",
          });
        }
      });

    },
    startEdit(item) {
      item.editIng = !item.editIng;
      item.editTodo = item.todo;
    },
    endEdit(item) {
      item.todo = item.editTodo;
      item.editIng = !item.editIng;
    },
  }
}
</script>

<template>
  <div class="todoList">
    <div class="addList">
      <div class="detail">
        <input class="text" type="text" placeholder="需要做什麼呢？" v-model="newTodo">
        事項完成期限：<input class="date" type="date" v-model="doTime" :min="newDate">
        事項記錄日期：<span class="timestamp">{{ newDate }}</span>
      </div>
      <button type="button" class="btn" @click="addList()">新增</button>
    </div>
    <div class="progress">
      <div class="progressline"><span class="finishtext">( {{ finishList.length }} / {{ todoList.length }} )</span>
        <div class="lightline" v-if="finishList.length > 0"></div>
        <div class="lightline finish" v-else></div>
      </div>
      <div class="clearall" @click="clearAll()">清除全部事項</div>
    </div>
    <div class="todotable" v-if="todoList.length">
      <table>
        <thead>
          <tr>
            <th>待辦事項</th>
            <th>完成期限</th>
            <th>記錄日期</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in todoList" :key="item.id" :class="{ 'line-through': item.checked === true }">
            <td><label><input class="checkbox" type="checkbox" v-model="item.checked" @change="checkThis">
                <span @dblclick="startEdit(item)" v-if="!item.editIng">{{ item.todo }}</span>
                <input type="text" v-else v-model="item.editTodo" @blur="endEdit(item)"
                  @keyup.enter="$event.target.blur()">
              </label></td>
            <td><span class="todotime">{{ item.todoTime }}</span></td>
            <td><span class="logtime">{{ newDate }}</span></td>
            <td><font-awesome-icon v-if="item.checked === false" :icon="['fas', 'trash']" class="del"
                @click="delList(index)" />
              <font-awesome-icon v-else :icon="['fas', 'file']" class="del" />
            </td>
          </tr>
        </tbody>
      </table>
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

      .date {
        margin-right: 8px;
      }

      .date,
      .timestamp {
        width: 29.5%;
        height: 40px;
        background-color: #ebebeb;
        text-align: center;
      }
    }

    .btn {
      width: 60px;
      background-color: #8cb9dc;
      color: #262626;
      line-height: 40px;

      &:active {
        background-color: #c4dcee;
      }
    }
  }

  .progress {
    width: 630px;
    height: 40px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    .progressline {
      position: relative;
      height: 20px;
      margin-right: 20px;
      flex-grow: 1;
      border: 2px solid #8cb9dc;
      border-radius: 50px;

      .finishtext {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 12px;
        color: #262626;
      }

      .lightline {
        height: 100%;
        background-color: #8cb9dc;
      }

      .lightline.finish {
        width: 0;
      }
    }

    .clearall {
      padding: 0 8px;
      background-color: #c4dcee;
      color: #262626;
      line-height: 40px;
      cursor: pointer;

      &:active {
        background-color: #8cb9dc;
      }
    }
  }

  .todotable {
    width: 630px;
    height: 500px;
    overflow-y: scroll;

    table {
      width: 100%;
      border-collapse: collapse;
    }

    thead tr {


      th {
        text-align: center;
        position: sticky;
        top: 0;
        background-color: #c4dcee;
      }
    }

    tr {
      height: 40px;
      background-color: #f3f3f3;

      label {
        // display: inline-block;
        // width: 100%;
        // background-color: inherit;

        .checkbox {
          width: 20px;
          height: 20px;
          margin: 0 8px;
        }
      }

    }

    tr:nth-of-type(even) td {
      background-color: #dedede;
    }

    td {
      text-align: center;

      .todotime {
        font-size: 14px;
        color: #d85858;
      }

      .logtime {
        font-size: 14px;
      }
    }

    td:first-child {
      width: 60%;
      text-align: left;
      font-size: 20px;
      vertical-align: middle;
    }

    .del {
      width: 17.5px;
      height: 20px;
      padding-right: 8px;
      font-size: 20px;
      color: #d85858;
      cursor: pointer;
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