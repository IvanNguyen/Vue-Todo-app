<template>
  <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
    <div class="input-group">
      <input
        type="text"
        class="form-control"
        placeholder="Input your task's name"
      >
      <span class="input-group-btn">
        <button class="btn btn-primary" type="button">
          <span class="fa fa-search mr-5"></span>Search
        </button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
    name: "TaskSearchControl",
};
</script>

<style scoped>
</style>