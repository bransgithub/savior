<template>
    <div class="editModal saviorModal" v-if="showModal">
        <div class="closeDiv">
            <button class="closeButton" @click="hide()">
                X
            </button>
        </div>
        
        <div v-if="isBudget">
            Edit the budget.

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
            </p>

            <p>
                <label for="endDate">End Date</label>
                <input
                    id="endDate"
                    v-model="endDate"
                    type="date"
                    name="endDate"
                >
            </p>

            <p>
                <button class="submitButton" @click="onSubmitBudget()">Submit</button>
            </p>
        </div>

        <div v-else>
            Edit the transaction.

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
                <label for="transactionDate">Date</label>
                <input
                    id="transactionDate"
                    v-model="transactionDate"
                    type="date"
                    name="transactionDate"
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
                <button class="submitButton" @click="onSubmitTransaction()">Submit</button>
            </p>
        </div>

        <br/>
        <br/>
        <br/>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'EditModal',
    props: {
        id: String,
        isBudget: Boolean,
        name: String,
        amount: Number,
        startDate: Date,
        endDate: Date,
        transactionDate: Date
    },
    data() {
      return {
          showModal: false
      }
    },
    computed: {
        addBudgetEndpoint() {
            return `https://savior-api.herokuapp.com/budget/${this.id}`
        },
        addTransactionEndpoint() {
            return `https://savior-api.herokuapp.com/transaction/${this.id}`;
        }
    },
    methods: {
        show() {
            this.showModal = true;
        },
        hide() {
            this.showModal = false;
        },
        onSubmitBudget() {
            if (this.name && this.amount && this.startDate && this.endDate) {
                let newBudget = {
                    "id": this.id,
                    "name": this.name,
                    "amount": this.amount,
                    "startDate": this.startDate,
                    "endDate": this.endDate
                };

                axios.put(this.addBudgetEndpoint, newBudget)
                    .then((response => {
                        console.log(response);
                        location.reload();
                    })).catch(error => {
                        console.log(error.response);
                    });
            } else {
                console.log("Unable to make request; data missing.")
            }
        },
        onSubmitTransaction() {
            if (this.name && this.amount) {
                let newTransaction = {
                    "id": this.id,
                    "name": this.name,
                    "date": this.transactionDate,
                    "amount": this.amount
                };

                axios.put(this.addTransactionEndpoint, newTransaction)
                    .then((response => {
                        console.log(response);
                        location.reload();
                    })).catch(error => {
                        console.log(error.response);
                    });
            } else {
                console.log("Unable to make request; data missing.")
            }
        }
    }
  }
</script>

<style scoped>
.editModal {
    text-align: center;
    z-index: 1;
    position: fixed;
    background-color: rgb(178, 232, 184);
    overflow: auto;
    padding: 1em 3em;
    border-radius: 1em;
    width: 60vw;
    height: 60vh;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: left;
}

.closeDiv {
    text-align: right;
}
</style>