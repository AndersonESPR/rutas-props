<template>
  <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <!--<router-link to= "{name: 'inovices'}">
        <button>Invoices</button>
      </router-link> -->
      <router-link to="/invoices">Invoices</router-link>
  </div>
  <router-view />
</template>