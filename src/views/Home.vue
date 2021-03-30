<template>
  <div class="main">
    <SubHeading>
      <template v-slot:title><h2>Heading</h2></template>
      <template v-slot:right-elements>
          <div class="standard-button">+ New Folder</div>
          <div class="view-all-button">View all</div>
      </template>
    </SubHeading>
  
    <div class="folder-container">
      <Folder v-for="folder in folders" :key="folder.id" :created_at="folder.attributes.created_at" :name="folder.attributes.name" :total_projects="folder.attributes.total_projects">
      </Folder>
    </div>
    <SubHeading>
      <template v-slot:title><h2>My Projects</h2></template>
      <template v-slot:right-elements>
          <div class="view-all-button">View all</div>
      </template>
    </SubHeading>
  </div>
</template>

<script>
// @ is an alias to /src
import Folder from '@/components/Folder.vue';
import SubHeading from '@/components/SubHeading.vue';

export default {
  name: 'Home',
  components: {
    Folder,
    SubHeading
  },

  data (){
    return {
      // folders: [{"name":"Lewis", "msg":"hello"},{"name":"Lev", "msg":"gang"},{"name":"tas", "msg":"bot"} ]
    }
  },

  computed: {
    user() {
      return this.$store.getters.getUser
    },

    folders(){
      return this.$store.getters.getFolders
    }
  },

  mounted(){
    this.$store.dispatch('fetchFolders', 'developer-account')
  }
}
</script>
<style>

.folder-container {
  display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 2em;
  grid-row-gap: 2em;
}

</style>