<template>
    <div class="budgetDetails">
        <h2>{{name}}</h2>
        <p>{{startDateFormatted}}-{{endDateFormatted}}</p>

        <div class="progressBar">
            <p>${{amountSpent}}/${{amount}}</p>
        </div>

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
        <button @click="openEditBudgetModal()">Edit Budget Item</button>
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
          amountSpent: Number
      }
    },
    computed: {
        progress() {
            return this.amountSpent/this.amountSpent;
        },
        startDateFormatted() {
            return this.startDate.toLocaleDateString("en-US");
        },
        endDateFormatted() {
            return this.endDate.toLocaleDateString("en-US");
        }
    },
    mounted () {
        this.calculateAmountSpent();
    },
    methods: {
        openCreateTransactionModal: function() {
            this.$refs.createModal.show();
        },
        openEditBudgetModal: function() {
            this.$refs.editModal.show();  
        },
        openDeleteBudgetModal: function() {
            this.$refs.deleteModal.show();
        },
        calculateAmountSpent: function() {
            var amountSpent = 0;

            this.transactions.forEach(function(transaction) {
                amountSpent += transaction.amount;
            });

            this.amountSpent = amountSpent;
        }
    },
  }
</script>

<style scoped>
.budgetDetails {
    border: 1px solid black;
}
.progressBar {
    border: 1px solid black;
}
</style>