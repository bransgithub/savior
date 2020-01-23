<template>
    <div class="createModal" v-if="showModal">
        <button class="closeButton" @click="hide()">
            X
        </button>

        <div v-if="isBudget">
            Add budget

<!--
            <form
                if="budgetApp"
                @submit="checkBudgetForm"
                action="http://localhost:8085/budget"
                method="post"
            >
            -->

            <p>
                <label for="name">

        </div>

        <div v-else>
            Add transaction
        </div>

        <button class="submitButton" @click="submitItem()">
            Submit
        </button>

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
          showModal: false
      }
    },
    methods: {
        show() {
            this.showModal = true;
        },
        hide() {
            this.showModal = false;
        },
        submitItem() {
            alert("created!");
        }
    }
  }
</script>

<style scoped>
.createModal {
    z-index: 1;
    position: fixed;
    overflow: auto;
    padding: 1em 3em;
    border-radius: 1em;
    width: 80vw;
    height: 90vh;
    top: 50%;
    left: 50%;
    margin-top: -45vh;
    margin-left: -40vw;
    text-align: left;
}

</style>