<template>
    <div class="createModal" v-if="showModal">
        <button class="closeButton" @click="hide()">
            X
        </button>

        <div v-if="isBudget">
            Add new budget item

            <form
                id="newBudgetForm"
                action="https://savior-api.herokuapp.com/budget"
                method="post"
            >

            <p v-if="errors.length">
            <p>
                <label for="name">Name</label>
                <input
                    id="name"
                    v-model="name"
                    type="text"
                    name="name"
                >
            </p>

            <p>
                <label for="amount">Amount</label>
                <input
                    id="amount"
                    v-model="amount"
                    type="number"
                    name="amount"
                    min="0"
                >
            </p>

            <p>
                <label for="startDate">Start Date</label>
                <input
                    id="startDate"
                    v-model="startDate"
                    type="date"
                    name="startDate"
                >

                <label for="endDate">End Date</label>
                <input
                    id="endDate"
                    v-model="endDate"
                    type="date"
                    name="endDate"
                >
            </p>

            <p>
                <input 
                    type="submit"
                    value="Submit"
                >
            </p>

            </form>
        </div>

        <div v-else>
            Add transaction to {{name}} budget.

            <form
                id="newBudgetForm"
                action="https://savior-api.herokuapp.com/budget/ /addtransaction"
                method="post"
            >

            <p>
                <label for="name">Name</label>
                <input
                    id="name"
                    v-model="name"
                    type="text"
                    name="name"
                >
            </p>

            <p>
                <label for="amount">Amount</label>
                <input
                    id="amount"
                    v-model="amount"
                    type="number"
                    name="amount"
                    min="0"
                >
            </p>

            <p>
                <input 
                    type="submit"
                    value="Submit"
                >
            </p>

            </form>
        </div>

        <br/>
        <br/>
        <br/>
    </div>
</template>

<script>
  export default {
    name: 'CreateModal',
    props: {
        isBudget: Boolean
    },
    data() {
      return {
          showModal: false,
          errors: [],
          name: null,
          amount: null,
          startDate: null,
          endDate: null,
          budgetId: null
      }
    },
    methods: {
        show() {
            this.showModal = true;
        },
        hide() {
            this.showModal = false;
        }
    }
  }
</script>

<style scoped>
.createModal {
    z-index: 1;
    position: fixed;
    background-color: rgb(178, 232, 184);
    overflow: auto;
    padding: 1em 3em;
    border-radius: 1em;
    width: 60vw;
    height: 60vh;
    top: 50%;
    left: 50%;
    margin-top: -30vh;
    margin-left: -30vw;
    text-align: left;
}

</style>