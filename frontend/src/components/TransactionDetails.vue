<template>
    <div class="transactionDetails">

        <ul>
            <li>{{id}}</li>
            <li>{{name}}</li>
            <li>{{amount}}</li>
            <li>{{budgetId}}</li>
        </ul>

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

        <button @click="openDeleteTransactionModal()">Delete Transaction Item</button>
    </div>
</template>

<script>
import DeleteModal from './DeleteModal.vue';

  export default {
    name: 'transactionDetails',
    components: {
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
        }
    }
  }
</script>
