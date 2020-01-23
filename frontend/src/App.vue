<template>
  <div id="app">
    <!--
    <img class="moneyImg" alt="Money logo" src="./assets/moneybag.png">
    <h2>Savior</h2>
    <p>Don't be (too) broke.</p>
    -->

    <div v-if="budgetItems">
      <BudgetDetails
        v-for="item in budgetItems"
        v-bind:key="item.id"
        :id="item._id"
        :name="item.name"
        :startDate="new Date(item.startDate)"
        :endDate="new Date(item.endDate)"
        :amount="item.amount"
        :transactions="item.transactions" />
    </div>

    <CreateModal 
      ref="createModal"
      :isBudget=true
    />

    <button @click="openCreateModal()">Add Another Budget!</button>

  </div>
</template>

<script>
import BudgetDetails from './components/BudgetDetails.vue'
import CreateModal from './components/CreateModal.vue';
//import axios from 'axios';

export default {
  name: 'app',
  components: {
    BudgetDetails,
    CreateModal
  },
  data () {
    return {
      budgetItems: null,
      apiAddress: null
    }
  },
  mounted () {
    this.apiAddress = 'https://savior-api.herokuapp.com';
    this.getBudgetItems();
  },
  methods: {
    getBudgetItems: function() {
      this.budgetItems = new Array();

      //var budgetItemsUrl = `${this.apiAddress}/budget`;

      this.budgetItems = [
        {
          "name": "1",
          "startDate": new Date(),
          "endDate": new Date(),
          "amount": 1000,
          "transactions": [
            {
              "name": "T22",
              "amount": 200.68
            },
            {
              "name": "T23",
              "amount": 312.12
            }
          ]
        },
        {
          "name": "2",
          "startDate": new Date(),
          "endDate": new Date(),
          "amount": 500,
          "transactions": [
            {
              "name": "T22",
              "amount": 40.19
            }
          ]
        },
        {
          "name": "3",
          "startDate": new Date(),
          "endDate": new Date(),
          "amount": 500,
          "transactions": []
        }
      ]
/*
      axios.get(budgetItemsUrl)
        .then((response => {
          this.budgetItems = response.data;
        })).catch(error => {
          console.log(error.response);
        });
        */
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
  font-size: 24px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 65%;
  margin: 60px auto;
}
button {
    font-size: 1em;
}
.moneyImg {
  height: 5em;
  width: 5em;
}
</style>
