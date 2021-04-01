<template>
  <div class="modal">
          <div class="container">
              <div class="container-header">
                <h3>Create your folder here </h3>
                <h4>Add a new folder to group your projects.</h4>
              </div>
              <div class="container-body">
                <input placeholder="Folder name" v-model="folderNameInput">
              </div>
              <div class="container-footer">
                <div class="standard-button" @click="submitForm">Create folder</div>
                <div class="cancel-button" @click="$emit('hideLightbox')">Cancel</div>
              </div>
          </div>
  </div>
</template>

<script>
export default {
    name: 'CreateFolderLb',
    data (){
        return {
            folderNameInput: '',
        }
    },
    methods:{
        submitForm(){
            let payload = {
                "data":{
                    "type": "project-folder",
                    "attributes": {
                        "name": this.folderNameInput
                    }
                }
            };
            let team_identifier = this.$store.state.user.included[0].attributes.team_identifier
            let data = [payload, team_identifier]
            this.$store.dispatch('addFolder', data).then(()=>{
                this.$store.dispatch('fetchFolders', team_identifier)
                this.folderNameInput = '';
                this.$emit('hideLightbox')
            })
        }
    }
}
</script>

<style scoped>

.modal {
    position:fixed;
    top:0;
    left:0;
    z-index:99;
    background:rgba(107, 107, 107, 0.4);
    flex:1;
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
}

.container {
    display:flex;
    flex-direction:column;
    text-align:center;
    align-items:center;
    background:white;
    padding:6em;
}

.standard-button {
    background:#20C499;
    width:7em;
    margin-bottom:1em;
}

.container-header, .container-body, .container-footer {
    margin:1em 0;
}

.cancel-button:hover {
    cursor:pointer;
}

</style>