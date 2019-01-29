<template>
  <div class="row mt-15">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <table class="table table-bordered table-hover">
        <thead>
          <tr>
            <th class="text-center">No</th>
            <th class="text-center">Task</th>
            <th class="text-center">Status</th>
            <th class="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <input
                v-model="filterName"
                type="text"
                class="form-control"
                name="filterName"
                placeholder="Filter"
              >
            </td>
            <td>
              <select class="form-control" name="filterStatus">
                <option value="{0}">All</option>
                <option value="{-1}">Completed</option>
                <option value="{1}">To do</option>
              </select>
            </td>
            <td></td>
          </tr>
          <TaskItem v-for="(task, index) in tasksFilter" :index="index" :task="task" :key="task.id"></TaskItem>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import TaskItem from "./TaskItem.vue";

export default {
  name: "TaskList",
  data() {
    return {
      filterName: '',
      check: false
    };
  },
  components: { TaskItem },
  computed: {
    filterNameLowerCase(){
        return this.filterName.toLowerCase();
    },
    // tasks() {
    //   return this.$store.state.tasks;
    // },
    tasksFilter() {
        return this.$store.getters.tasksFilter;
    }
  },
  beforeUpdate() {
    this.$store.commit('filter',this.filterNameLowerCase)
  },
  
};
</script>

<style scoped>
</style>