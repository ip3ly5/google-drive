<template>
  <div class="main">
    <CreateFolderLb v-if="showCreateFolderLightbox" @hideLightbox="showCreateFolderLightbox = false" /> 

    <SubHeading>
      <template v-slot:title><h2>My Folders</h2></template>
      <template v-slot:right-elements>
          <div class="standard-button" @click="showCreateFolderLightbox = !showCreateFolderLightbox">+ New Folder</div>
          <div class="view-all-button">View all</div>
      </template>
    </SubHeading>
  
    <div class="grid-container">
      <Folder v-for="folder in folders" :id="folder.id" :key="folder.id" :created_at="folder.attributes.created_at" :name="folder.attributes.name" :total_projects="folder.attributes.total_projects">
      </Folder>
    </div>
    <SubHeading>
      <template v-slot:title><h2>My Projects</h2></template>
      <template v-slot:right-elements>
          <div class="view-all-button">View all</div>
      </template>
    </SubHeading>
    <div class="grid-container">
      <Project v-for="project in projects" :id="project.id" :key="project.id" :attributes="project.attributes">
      </Project>
    </div>
  </div>
</template>

<script>
import Folder from '@/components/Folder.vue';
import Project from '@/components/Project.vue';
import SubHeading from '@/components/SubHeading.vue';
import CreateFolderLb from '@/lightboxes/CreateFolderLb.vue';

export default {
  name: 'Home',
  components: {
    Folder,
    Project,
    SubHeading,
    CreateFolderLb
  },

  data (){
      return {
          showCreateFolderLightbox:false
      }
  },

  computed: {
    user() {
      return this.$store.getters.getUser
    },

    folders(){
      return this.$store.getters.getFolders
    },

    projects(){
      return this.$store.getters.getProjects
    }
  },

  beforeRouteLeave(to, from, next){
    if(from.name == 'Home' && to.name == 'Folder'){
      let params = {"team_identifier": this.user.included[0].attributes.team_identifier, "id": to.params.id}
      this.$store.dispatch('fetchSpecificFolder', params).then(()=>{
        next()  
      })
    }
  }
}
</script>
<style>

.grid-container {
  display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 2em;
  grid-row-gap: 2em;
}

</style>