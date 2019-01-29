import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isDisplayForm: false,
    tasks: [],
    editTask: {},
    filterNameLowerCase: '',
    
  },
  mutations: {
    toggleForm(state) {
      state.isDisplayForm = !state.isDisplayForm;
    },
    generateData(state, tasks) {
      state.tasks = tasks;
    },
    toggleStatus(state, id) {
      state.tasks.forEach(task => {
        if (task.id === id) {
          task.status = !task.status;
        }
      })
    },
    addNewTask(state, newTask) {
      state.tasks.push(newTask);
    },
    deleteTask(state, index) {
      state.tasks.splice(index, 1);
    },
    editTask(state, editTask) {
      state.editTask = editTask;
      state.isDisplayForm = true;
    },
    filter(state,filterNameLowerCase){
      state.filterNameLowerCase = filterNameLowerCase;
    }
  },
  actions: {

  },
  getters: {
    tasksFilter(state){
      return state.tasks.filter(task => task.name.toLowerCase().indexOf(state.filterNameLowerCase) !== -1)
    }
  }
});