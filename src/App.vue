<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div v-if="!mobile">
    <Navigation msg="Welcome to Your Vue.js App"/>
  </div>
  <div v-else>
    <h2>Sorry, this app is not supported in mobile devices.</h2>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';

export default {
  name: 'App',
  components: {
    Navigation
  },
  data() {
    return {
      mobile: false
    }
  },
  created() {
    this.checkScreen();
    window.addEventListener('resize', this.checkScreen);
  },
  methods: {
    checkScreen() {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      
      this.mobile = false;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
