<template>
    <div class="budgetDetails">
        <ul>
            <li>{{id}}</li>
            <li>{{name}}</li>
            <li>{{startDate}}</li>
            <li>{{endDate}}</li>
            <li>{{amount}}</li>
        </ul>

        <CreateModal 
            ref="createModal"
            :budgetId="id"
            :isBudget=false
        />

        <EditModal
            ref="editModal"
            :id="id"
            :name="name"
            :amount="amount"
            :startDate="startDate"
            :endDate="endDate"
            :isBudget=true
        />

        <DeleteModal 
            ref="deleteModal"
            :id="id"
            :isBudget=true
        />

        <button @click="openCreateTransactionModal()">Add Transaction</button>
        <button @click="openDeleteBudgetModal()">Delete Budget Item</button>

        <TransactionDetails 
            v-for="transaction in transactions" 
            v-bind:key="transaction._id" 
            :id="transaction._id"
            :name="transaction.name"
            :amount="transaction.amount"
            :budgetId="id"
        ></TransactionDetails>
    </div>
</template>

<script>
import TransactionDetails from './TransactionDetails.vue';
import CreateModal from './CreateModal.vue';
import EditModal from './EditModal.vue';
import DeleteModal from './DeleteModal.vue';

  export default {
    name: 'BudgetDetails',
    components: {
        TransactionDetails,
        CreateModal,
        EditModal,
        DeleteModal
    },
    props: {
        id: String,
        name: String,
        startDate: Date,
        endDate: Date,
        amount: Number,
        transactions: Array
    },
    data() {
      return {

      }
    },
    methods: {
        openCreateTransactionModal: function() {
            this.$refs.createModal.show();
        },
        openDeleteBudgetModal: function() {
            this.$refs.deleteModal.show();
        }
    }
  }
</script>

<style scoped>
.budgetDetails {
    border: 1px solid black;
}
</style>