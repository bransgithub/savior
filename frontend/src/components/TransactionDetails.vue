<template>
    <div class="transactionDetails" v-if="showModal">

        <ul>
            <li>{{name}}</li>
            <li>{{amount}}</li>
        </ul>

    </div>
</template>

<script>
  export default {
    name: 'transactionDetails',
    props: {
        name: String,
        amount: Number
    },
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>
