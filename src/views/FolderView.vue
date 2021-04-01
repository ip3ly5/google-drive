<template>
    <div class="main">
        <SubHeading>
            <template v-slot:title>
                <h2>Dashboard -> {{folder.data.attributes.name}}</h2>
            </template>
            <template v-slot:right-elements>
                <h4> Folder created: {{formattedTime}}</h4>
            </template>
        </SubHeading>
        <div v-if="folder.data.attributes.total_projects < 1" class="no-projects-banner">
            You don't have any projects :(
        </div>
        <div class="grid-container">
            <Project v-for="project in folder.included" :key="project.id" :attributes="project.attributes">
            </Project>
        </div>
    </div>
  
</template>

<script>
import Project from '@/components/Project.vue';
import SubHeading from '@/components/SubHeading.vue';

var dayjs = require('dayjs')

export default {

    name: 'FolderView',
        components: {
        Project,
        SubHeading
    },
    
    data (){
        return {
            componentLoad:false,
            folderId: this.$route.params.id,
        }
    },

    computed:{
        user() {
            return this.$store.getters.getUser
        },

        folder() {
            return this.$store.getters.getSpecificFolder
        },

        formattedTime(){
            return dayjs(this.folder.data.attributes.created_at).format('DD/MM/YY HH:mm')
        }
    }
}
</script>

<style>

.main {
    display:flex;  
    flex-direction:column;
}

.no-projects-banner {
    font-size:4em;
    display:flex;
    flex:1;
    justify-content:center;
    align-items:center;
    color:lightgrey;
}

.grid-container {
  display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 2em;
  grid-row-gap: 2em;
}
</style>