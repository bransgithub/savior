<template>
    <div class="transactionDetails">

        <div class="contentDiv">
            <div class="name">
                [{{dateFormatted}}] {{name}} 
            </div>

            <div class="amount">
                ${{amount.toFixed(2)}}
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
        date: Date,
        amount: Number,
        budgetId: String
    },
    data() {
      return {

      }
    },
    computed: {
        dateFormatted() {
            //Regex to replace the "/YYYY" in the date
            return this.date.toLocaleDateString("en-US").replace(/\/\d{4}/g, "");
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
.name {
    text-align: left;
    margin: 0;
}
.amount {
    text-align: center;
    position: relative;
    margin: 0;
    top: -100%;
}
.transactionButtonsDiv {
    text-align: right;
    position: relative;
    top: -210%;
}
.editButton {
    margin-left: 5em;
}
.deleteButton {
    margin-left: 0.5em;
}
</style>
