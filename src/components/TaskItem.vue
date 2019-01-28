<template>
  <tr>
    <td>{{index+1}}</td>
    <td>{{task.name}}</td>
    <td class="text-center">
      <span @click="toggleStatus(task.id)"
      :class="[task.status ? 'label label-danger' : 'label label-info']">
          {{task.status ? 'To Do' : 'Completed'}}
        </span>
    </td>
    <td class="text-center">
      <button @click="editTask(task)" type="button" class="btn btn-warning">
        <span class="fa fa-pencil mr-5"></span>Edit
      </button>
      &nbsp;
      <button @click="deleteTask(index)" type="button" class="btn btn-danger">
        <span class="fa fa-trash mr-5"></span>Delete
      </button>
    </td>
  </tr>
</template>

<script>
export default {
    name: "TaskItem",
    props: {
        index: {
            type: Number,
            required: true,
        },
        task: {
            type: Object,
            required: true,
        }
    },
    methods : {
        toggleStatus(id) {
            this.$store.commit('toggleStatus',id);
        },
        deleteTask(index){
            this.$store.commit('deleteTask',index);
        },
        editTask(editTask){
            this.$store.commit('editTask',editTask);
        }
    }
};
</script>

<style scoped>
</style>