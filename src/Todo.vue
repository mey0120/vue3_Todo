<template>
  <div class="wrap">
    <div class="app-container" id="taskList">
      <h1 class="app-header">TO DO LIST</h1>
      <div class="add-task">
        <input type="text" autocomplete="off" placeholder="Add New Task" v-model="tasks.name" @keyup.enter="newItem"
          class="task-input">
        <input type="submit" value="+" class="submit-task" @click="newItem" title="Add Task">
      </div>
      <ul class="task-list">
        <li class="task-list-item" v-for="task in tasks" :key="task">
          <label class="task-list-item-label">
            <input type="checkbox">
            <span>{{task.name}}</span>
          </label>
          <span @click="delItem(task)" class="delete-btn" title="Delete Task">{{task.del}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'to do list',
      tasks: [{
          name: 'Start a new pen'
        },
        {
          name: 'Read a book'
        },
        {
          name: 'Meeting with team'
        }
      ]

    }
  },
  methods: {
    newItem: function () {
      if (!this.tasks.name) {
        return
      }
      this.tasks.push({
        name: this.tasks.name,
      });
      this.tasks.name = "";
    },
    delItem: function (task) {
      this.tasks.splice(this.tasks.indexOf(task), 1)
    }
  }


}
</script>

<style scoped>
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 16px;
  background: #ddb0b6;
  box-sizing: border-box;
}

.app-container {
  border-radius: 15px;
  width: 100%;
  max-width: 480px;
  max-height: 100%;
  background-color: #10101d;
  padding: 24px;
  margin: 0 auto;
  box-sizing: border-box;
}

.app-header {
  font-size: 20px;
  line-height: 32px;
  margin: 0 0 12px 0;
  color: #fff;
}

.submit-task {
  width: 32px;
  height: 32px;
  color: #fff;
  font-size: 40px;
  line-height: 0.5;
  flex-shrink: 0;
  border: none;
  background: #ee9ca7;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 12px 0 rgba(238, 156, 167, 0.4);
}

.add-task {
  height: 40px;
  font-size: 14px;
  display: flex;
}

.task-input {
  border-right: none;
  width: 100%;
  padding: 0 4px;
  outline: none;
  border: none;
  border-bottom: 1px solid #fff;
  background-color: transparent;
  margin-right: 12px;
  color: #fff;
  font-size: 20px;
}

.task-list {
  padding-top: 20px;
}

.task-list-item {
  background-color: #191933;
  border-radius: 4px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  padding: 8px;
}

.task-list-item input {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid #fff;
  transition: .2s;
  margin-right: 8px;
  flex-shrink: 0;
  margin-top: 4px;
  appearance: none;
}

.task-list-item input:hover {
  border-color: #ee9ca7;
  box-shadow: 0 0 0 3px rgba(238, 156, 167, 0.2);
}

.task-list-item input:checked {
  background-size: 10px;
  border: 1px solid #ee9ca7;
  background-color: #ee9ca7;
}

.task-list-item input:checked+span {
  color: rgba(255, 255, 255, 0.5);
  text-decoration: line-through rgba(255, 255, 255, 0.8);
}

.task-list-item label {
  display: flex;
  align-items: flex-start;
  color: #fff;
  margin-right: 8px;
  font-size: 14px;
  line-height: 24px;
  position: relative;
  transition: .2s;
  cursor: pointer;
}

.delete-btn {
  margin-left: auto;
  display: block;
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  background: url(../assets/outline_delete_white_24dp.png);
  margin-bottom: 3px;
}

</style>