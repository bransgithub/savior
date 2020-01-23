<template>
    <div class="deleteModal" v-if="showModal">
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
import axios from 'axios';

  export default {
    name: 'DeleteModal',
    props: {
        id: String,
        isBudget: Boolean
    },
    data() {
      return {
          showModal: false
      }
    },
    computed: {
        deleteBudgetEndpoint() {
            return `https://savior-api.herokuapp.com/budget/${this.id}`
        },
        deleteTransactionEndpoint() {
            return `https://savior-api.herokuapp.com/transaction/${this.id}`;
        }
    },
    methods: {
        show() {
            this.showModal = true;
        },
        hide() {
            this.showModal = false;
        },
        deleteItem() {
            var deleteUrl = this.isBudget ? this.deleteBudgetEndpoint : this.deleteTransactionEndpoint;
 
            axios.delete(deleteUrl)
                .then((response => {
                    console.log(response);
                    location.reload();
                })).catch(error => {
                    console.log(error.response);
                });
        }
    }
  }
</script>

<style scoped>
.deleteModal {
    z-index: 1;
    position: fixed;
    background-color: rgb(178, 232, 184);
    overflow: auto;
    padding: 1em 3em;
    border-radius: 1em;
    width: 60vw;
    height: 60vh;
    top: 50%;
    left: 50%;
    margin-top: -30vh;
    margin-left: -30vw;
    text-align: left;
}

</style>