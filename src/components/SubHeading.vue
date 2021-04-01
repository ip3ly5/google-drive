<template>
  <div class="sub-heading">
      <slot name="title"></slot>
      <div class="sub-heading-right">
        <slot name="right-elements"></slot>
      </div>
  </div>
</template>

<script>
  export default {
    name:"Subheading"
  }
</script>

<style>

.sub-heading {
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin:1em 0;
}

.sub-heading-right {
  display:flex;
  flex-direction:row;
  align-items:center;
}

.view-all-button {
  color:#377BDD;
  margin:0 2em;
}

.create-folder-button {
  padding:.75em 1em;
  background-color:#377BDD;
  color:white;
  border-radius:.25em;
}

</style>