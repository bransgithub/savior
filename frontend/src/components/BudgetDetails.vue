<template>
    <div class="budgetDetails">
        <div class="budgetButtons">
            <button class="editBudgetButton" @click="openEditBudgetModal()">Edit</button>
            <button class="deleteBudgetButton" @click="openDeleteBudgetModal()">X</button>
        </div>
        <h2 class="header">{{name}}</h2>
        <p class="dateSubheader">{{startDateFormatted}}-{{endDateFormatted}}</p>
                
        <div class="progressBar">
            <div class="amountFraction">
                ${{amountSpent}}/${{amount}}
            </div>
            <div class="progressBarInside" :style="{ width: amountSpentPercentage }">

            </div>
        </div>

        <div class="transactionsHeaderSection">
            <div class="transactionHeader">
                <strong>Transactions</strong>
            </div>
            <div class="addTransactionButtonDiv">
                <button class="addTransactionButton" @click="openCreateTransactionModal()">+</button>
            </div>
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
          amountSpent: null
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
        },
        amountSpentPercentage() {
            return (this.amountSpent/this.amount)*100 + "%";
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
.header {
    margin: 0.5em 0 0 0;
}
.dateSubheader {
    margin: 0.5em auto 1em;
}
.budgetDetails {
    border: 1px solid green;
    border-radius: 20px;
    margin-bottom: 1em;
}
.budgetButtons {
    text-align: right;
    padding-top: 1em;
    width: 90%;
    margin: 0 auto;
}
.editBudgetButton {
    margin-right: 0.5em;
}
.progressBar {
    border: 1px solid green;
    position: relative;
    height: 1.5em;
    width: 90%;
    margin: 0 auto;
}
.progressBarInside {
    position: relative;
    background: rgb(121, 203, 121, 0.2);
    height: 1em;
    top: -90%;
    padding-top: 0.5em;
}
.amountFraction {
    margin-top: 0;
    margin-bottom: 0;
    left: 50%;
}
.transactionsHeaderSection {
    position: relative;
    border-bottom: 2px solid green;
    height: 1.5em;
    width: 90%;
    margin: 0.5em auto 0 auto;
}
.transactionHeader {
    text-align: left;
    margin: 0;
}
.addTransactionButtonDiv {
    text-align: right;
    position: relative;
    height: 1em;
    top: -130%;
    padding-top: 0.5em;
}

</style>