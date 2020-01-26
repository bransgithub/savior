<template>
  <div id="app">
    <img class="moneyImg" alt="Money logo" src="./assets/moneybag.png">
    <h2 class="header"><a href="https://github.com/bransgithub/savior">Savior</a></h2>
    <p class="subHeader">Don't be (too) broke.</p>

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
import axios from 'axios';

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

      var budgetItemsUrl = `${this.apiAddress}/budget`;

      axios.get(budgetItemsUrl)
        .then((response => {
          this.budgetItems = response.data;
        })).catch(error => {
          console.log(error.response);
        });
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
.header {
  margin-bottom: 0;
}
.subHeader {
  margin-top: 0.5em;
}
button {
  font-size: 1em;
  border: none;
  border-radius: 5px;
  background-color: rgb(121, 203, 121, 0.2);
  padding: 0.2em 0.5em;
}
label {
  margin-right: 0.5em;
}
input {
  font-size: 0.8em;
}
.moneyImg {
  height: 5em;
  width: 5em;
}
@media(max-width:768px) {
  #app {
    font-size: 24px;
    width: 90%;
  }
  button {
    font-size: 0.8em;
  }
}

@media(max-width:600px) {
  #app {
    font-size: 20px;
    width: 90%;
  }
}
</style>
