<template>
    <div class="transactionDetails">

        <div class="contentDiv">
            <div class="content">
                {{name}} <span class="amount">{{amount}}</span>
            </div>

            <div class="transactionButtonsDiv">
                <button class="editButton" @click="openEditTransactionModal()">Edit</button>
                <button class="deleteButton" @click="openDeleteTransactionModal()">X</button>
            </div>
        </div>

        <EditModal
            ref="editModal"
            :id="id"
            :name="name"
            :amount="amount"
            :isBudget=false
        />

        <DeleteModal 
            ref="deleteModal"
            :id="id"
            :isBudget=false
        />
    </div>
</template>

<script>
import EditModal from './EditModal.vue';
import DeleteModal from './DeleteModal.vue';

  export default {
    name: 'transactionDetails',
    components: {
        EditModal,
        DeleteModal
    },
    props: {
        id: String,
        name: String,
        amount: Number,
        budgetId: String
    },
    data() {
      return {

      }
    },
    methods: {
        openDeleteTransactionModal: function() {
            this.$refs.deleteModal.show();
        },
        openEditTransactionModal: function() {
            this.$refs.editModal.show();  
        }
    }
  }
</script>

<style scoped>
.contentDiv {
    position: relative;
    border-bottom: 1px solid green;
    height: 1.5em;
    width: 90%;
    margin: 0.5em auto 0 auto;
    padding-top: 0;
    padding-bottom: 0.1em;
}
.content {
    text-align: left;
    margin: 0;
}
.transactionButtonsDiv {
    text-align: right;
    position: relative;
    top: -100%;
}
.amount {
    margin-left: 3em;
}
.editButton {
    margin-left: 5em;
}
.deleteButton {
    margin-left: 0.5em;
}
</style>
