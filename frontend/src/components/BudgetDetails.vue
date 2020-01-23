<template>
    <div class="budgetDetails" v-if="showModal">
        <ul>
            <li>{{name}}</li>
            <li>{{startDate}}</li>
            <li>{{endDate}}</li>
            <li>{{amount}}</li>
        </ul>

        <TransactionDetails 
            v-for="transaction in transactions" 
            v-bind:key="transaction.id" 
        ></TransactionDetails>
    </div>
</template>

<script>
import TransactionDetails from './TransactionDetails.vue';
// import CreateModal from './components/CreateModal.vue';
// import EditModal from './components/EditModal.vue';
// import DeleteModal from './components/DeleteModal.vue';

  export default {
    name: 'BudgetDetails',
    components: {
        TransactionDetails,
        // CreateModal,
        // EditModal,
        // DeleteModal
    },
    props: {
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

    }
  }
</script>
