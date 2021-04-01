<template>
  <div class="main">
    <div class="folder-header">
      <i class="fas fa-folder"></i>
      <i class="fas fa-ellipsis-v"></i>
    </div>
    <div class="folder-title">
      <router-link :key="$route.fullPath" :to="{name: 'Folder', params: {id: id} }" >
        <h3>{{name}}</h3>
      </router-link>
    </div>

    <div class="folder-footer">
      <div class="folder-date-created">
        <i class="far fa-clock"></i>
        <div>Created on: {{formattedTime}}</div>
      </div>
      <div class="folder-total-projects">
        <i class="fas fa-project-diagram"></i>
        <div>{{total_projects}}</div>
      </div>
    </div>

  </div>
</template>

<script>
var dayjs = require('dayjs')
var localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat)

export default {
  name: 'Folder',
  props: {
    created_at: String,
    name: String,
    total_projects: Number,
    id: String
  },
  computed: {
    formattedTime(){
      return dayjs(this.created_at).format('LL')
    }
  }
}
</script>

<style scoped>
a {
    color:rgb(71, 71, 71);
    text-decoration:none;
}

a:hover {
  text-decoration:underline;
}

.main {
  background:white;
  border-radius:1em;
  padding:2em;
  box-shadow:5px 3px 5px rgb(228, 228, 228);
}

.folder-header {
  display:flex;
  justify-content:space-between;
}

.fa-folder {
  color:#5C98E0;
  font-size:2em;
}

.folder-date-created, .folder-total-projects {
  display:flex;
  flex-direction:row;
  align-items:center;
  color:rgb(148, 148, 148);
  margin:.4em 0;
}

.folder-date-created div:last-child, .folder-total-projects div:last-child {
  margin-left:.5em;
}

.fa-ellipsis-v {
  color:darkgrey;
  font-size:1em;
}

</style>
