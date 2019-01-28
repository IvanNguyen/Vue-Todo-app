<template>
  <div id="app">
    <div class="container">
      <!-- Auto load modal - pending -->
      <!-- Main content -->
      <div class="text-center">
        <h1>--- TO-DO LIST ---</h1>
        <hr>
      </div>
      <div class="row">
        <div :class="showTaskForm">
          <TaskForm v-if="isDisplayForm"/>
        </div>

        <div :class="contentForm">
          <button @click="toggleForm()" type="button" class="btn btn-primary">
            <i class="fa fa-plus"></i> Add new task
          </button>&nbsp;
          <button @click="generateData()" type="button" class="btn btn-danger mr-5">
            <span class="fa fa-plus"></span> Generate Data
          </button>
          <TaskControl/>
          <TaskList/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskForm from "./components/TaskForm.vue";
import TaskControl from "./components/TaskControl.vue";
import TaskList from "./components/TaskList.vue";

export default {
  name: "app",
  components: { TaskForm, TaskControl, TaskList },
  computed: {
    isDisplayForm() {
      return this.$store.state.isDisplayForm;
    },
    showTaskForm() {
      return this.isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : "";
    },
    contentForm() {
      return this.isDisplayForm
        ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
        : "col-xs-12 col-sm-12 col-md-12 col-lg-12";
    }
  },
  methods: {
    toggleForm() {
      this.$store.commit("toggleForm");
    },
    generateData() {
      const id = require("crypto-random-string");
      var tasks = [
        {
          id: id(10),
          name: "Hoc lap trinh",
          status: true
        },
        {
          id: id(10),
          name: "Mua quan ao mua dong",
          status: false
        },
        {
          id: id(10),
          name: "Lam viec nha",
          status: false
        },
        {
          id: id(10),
          name: "ban hang online",
          status: true
        },
        {
          id: id(10),
          name: "Giao hang cho khach",
          status: true
        },
        {
          id: id(10),
          name: "Da banh ",
          status: false
        }
      ];
      this.$store.commit("generateData",tasks);
    }
  }
};
</script>

<style>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
/* external CSS  */
.App {
  text-align: center;
}
.App-logo {
  animation: App-logo-spin infinite 20s linear;
  height: 40vmin;
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

.mt-15 {
  margin-top: 15px;
}
.mr-5 {
  margin-right: 5px;
}
.ml-5 {
  margin-left: 5px;
}
.pr-5 {
  padding-right: 5px;
}
.dropdown-menu .fa:before {
  padding-right: 10px;
}
.text-right {
  float: right;
  cursor: pointer;
}
.text-right:hover {
  color: red;
}
.sort_selected::after {
  font-family: "Font Awesome 5 Free";
  font-weight: bold;
  font-style: normal;
  margin: 0px 0px 0px 10px;
  display: inline-block;
  content: "\f00c";
}
.container {
  background-color: white;
}
</style>
