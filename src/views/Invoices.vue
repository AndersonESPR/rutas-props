<template>
    <div>
      <h1 v-if="invoiceId">Numero: {{ invoiceId }}</h1>
      <h1 v-else>Invoices Page</h1>
    </div>
  </template>
  
  <script>
  import { useRoute } from 'vue-router'
  
  export default {
    setup() {
      const route = useRoute()
      const invoiceId = +route.params.id || null // El signo + convierte `id` a número
  
      return {
        invoiceId
      }
    }
  }
  </script>
  