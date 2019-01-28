<template>
  <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
    <div class="dropdown">
      <button
        class="btn btn-primary dropdown-toggle"
        type="button"
        id="dropdownMenu1"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="true"
      >Sort
        <i class="fas fa-sort-down"></i>
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
        <li>
          <a role="button" href="#top">
            <i class="fas fa-sort-alpha-down">A-Z</i>
          </a>
        </li>
        <li>
          <a role="button" href="#top">
            <i class="fas fa-sort-alpha-up">Z-A</i>
          </a>
        </li>
        <li role="separator" class="divider"></li>
        <li>
          <a role="button" href="#top">To Do</a>
        </li>
        <li>
          <a role="button" href="#top">Completed</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: "TaskSortControl",
};
</script>

<style scoped>
</style>