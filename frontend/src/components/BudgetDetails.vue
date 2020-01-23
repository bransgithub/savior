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
        :isBudget=false
        />

        <button @click="openCreateModal()">Add Transaction</button>

        <TransactionDetails 
            v-for="transaction in transactions" 
            v-bind:key="transaction.id" 
            :budgetId="id"
        ></TransactionDetails>
    </div>
</template>

<script>
import TransactionDetails from './TransactionDetails.vue';
import CreateModal from './CreateModal.vue';
// import EditModal from './EditModal.vue';
// import DeleteModal from './DeleteModal.vue';

  export default {
    name: 'BudgetDetails',
    components: {
        TransactionDetails,
        CreateModal,
        // EditModal,
        // DeleteModal
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
        openCreateModal: function() {
        this.$refs.createModal.show();
        }
    }
  }
</script>

<style scoped>
.budgetDetails {
    border: 1px solid black;
}
</style>