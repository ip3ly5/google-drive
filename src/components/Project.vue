<template>
  <div class="main">
    <div class="project-header">
      <i class="fas fa-circle"></i>
    </div>
    <div class="project-title">
        <h3>
            {{attributes.name}}
        </h3>
        <div class="file-name">
            {{attributes.file_name}}
        </div>
    </div>
    <div class="project-body">
        <div class="text-pair">
            <h4 class="text-pair-title">
                Date of order
            </h4>
            <div class="text-pair-body">
                {{formattedTime}} ago
            </div>
        </div>
        <div class="text-pair">
            <h4 class="text-pair-title">
                Price
            </h4>
            <div class="text-pair-body">
                 DKK {{attributes.price.amount}}
            </div>
        </div>

    </div>
    <div class="project-footer">
      {{attributes.total_projects}}
    </div>

  </div>
</template>
<script>

var dayjs = require('dayjs')
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

export default {
  name: 'Project',
  props: {
    id: String,
    attributes: Object
  },

  computed: {
      formattedTime(){
        let difference = dayjs().from(dayjs(this.attributes.created_at), true)
        return difference
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a {
    color:rgb(71, 71, 71);
    text-decoration:none;
}

.main {
    background:white;
    border-radius:1em;
    padding:2em;
    box-shadow:5px 3px 5px rgb(228, 228, 228);
}

.project-header {
    display:flex;
    justify-content:space-between;
}

.file-name {
    color:#377BDD;
}

.fa-circle {
    margin-left:auto;
    color:#dbdbdb;
    font-size:1.25em;
}

.text-pair {
    margin:2em 0;
    display:flex;
    flex-direction:column;
}

.text-pair-title {
    text-transform:uppercase;

}

</style>
