<template>
  <!-- class={id === '' ? 'panel panel-primary' : 'panel panel-warning'} -->
  <div class="panel panel-primary">
    <div class="panel-heading">
      <h3 class="panel-title">
        <!-- {id === '' ? 'Add new task' : 'Edit task'} -->
        Add new task
        <span @click="closeForm()" class="fa fa-times-circle text-right"></span>
      </h3>
    </div>
    <div class="panel-body">
      <form>
        <div class="form-group">
          <label>Task-name :</label>
          <input v-model="newTask.name" type="text" class="form-control" name="newTaskName">
        </div>
        <label>Status :</label>
        <select v-model="newTask.status" class="form-control" name="status">
          <option value=true>To Do</option>
          <option value=false>Completed</option>
        </select>
        <br>
        <div class="text-center">
          <button @click.prevent="addNewTask()" type="submit" class="btn btn-warning">
            <span class="fa fa-plus mr-5"></span>
            <!-- {id === '' ? 'Add' : 'Save'} -->
            Add
          </button>&nbsp;
          <button @click="clearForm()" type="button" class="btn btn-danger">
            <span class="fa fa-close mr-5"></span>Clear
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskForm",
  data() {
      return {
          newTask: {
              id: '',
              name: '',
              status: true
          },
          a: {}  
      }
  },
  computed: {
      editTask(){
          this.a = this.$store.state.editTask;
          return this.$store.state.editTask;
      }
  },
  beforeMount() {
    this.editTask;
    console.log(this.a);
    this.newTask.id = this.editTask.id;
    this.newTask.name = this.editTask.name;
    this.newTask.status = this.editTask.status;
  },
  beforeUpdate() {
    console.log('akak');
  },
  methods: {
      closeForm(){
          this.$store.commit('toggleForm');
          console.log(this.editTask.status);
      },
      clearForm(){
          this.newTask.id = this.newTask.name = '';
          this.newTask.status = true;
      },
      addNewTask(){
          const id = require("crypto-random-string");
          if( this.newTask.status === 'false'){
              this.newTask.status = false;
          } else {
              this.newTask.status = true;
          }
          this.newTask.id = id(10);
          this.$store.commit('addNewTask',this.newTask);
          this.closeForm();
      }
  }
};
</script>

<style scoped>
</style>