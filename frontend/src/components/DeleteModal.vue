<template>
    <div class="projectDetails" v-if="showModal">
        <button class="closeButton" @click="hide()">
            X
        </button>

        <h2>Are you sure?</h2>

        <button class="deleteButton" @click="deleteItem()">
            Yes, Delete!
        </button>

        <br/>
        <br/>
        <br/>
    </div>
</template>

<script>
  export default {
    name: 'DeleteModal',
    props: {
        id: String
    },
    data() {
      return {
          showModal: false
      }
    },
    methods: {
        show() {
            this.showModal = true;
        },
        hide() {
            this.showModal = false;
        },
        del() {
            alert("deleted");
        }
    }
  }
</script>

<style scoped>
.deleteModal {
    z-index: 1;
    position: fixed;
    overflow: auto;
    padding: 1em 3em;
    border-radius: 1em;
    width: 80vw;
    height: 90vh;
    top: 50%;
    left: 50%;
    margin-top: -45vh;
    margin-left: -40vw;
    text-align: left;
}

</style>