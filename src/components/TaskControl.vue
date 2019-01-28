<template>
  <div class="row mt-15">
    <TaskSearchControl />
    <TaskSortControl />
  </div>
</template>

<script>
import TaskSearchControl from './TaskSearchControl.vue';
import TaskSortControl from './TaskSortControl.vue';

export default {
    name: "TaskControl",
    components: { TaskSearchControl, TaskSortControl}
};
</script>

<style scoped>
</style>