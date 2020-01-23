<template>
  <div id="app">
    <img alt="Money logo" src="./assets/moneybag.png">
    <h2>Savior</h2>
    <p>Save cash fast</p>

    <div v-if="budgetItems">
      <BudgetDetails
        v-for="item in budgetItems"
        v-bind:key="item.id"
        name: item.name
        startDate: item.startDate
        endDate: item.endDate
        amount: item.amount
        transactions: item.transactions />
    </div>

    <CreateModal 
      ref="createModal"
      isBudget="true"
    />

    <button @click="openCreateModal()">Add Another Budget!</button>

  </div>
</template>

<script>
import BudgetDetails from './components/BudgetDetails.vue'
import CreateModal from './components/CreateModal.vue';
// import EditModal from './components/EditModal.vue';
// import DeleteModal from './components/DeleteModal.vue';
import axios from 'axios';

export default {
  name: 'app',
  components: {
    BudgetDetails,
    CreateModal,
    // EditModal,
    // DeleteModal
  },
  data () {
    return {
      budgetItems: null,
      apiAddress: null
    }
  },
  mounted () {
    this.apiAddress = 'http://localhost:8085';
    this.getBudgetItems();
  },
  methods: {
    getBudgetItems: function() {
      this.budgetItems = new Array();

      var budgetItemsUrl = `${this.apiAddress}/budget`;

      axios.get(budgetItemsUrl)
        .then((response => {
          this.budgetItems = response.data;
        }));
    },
    openCreateModal: function() {
      this.$refs.createModal.show();
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
