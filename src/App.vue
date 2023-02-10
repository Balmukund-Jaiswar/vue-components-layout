<template>
  <the-header></the-header>
  <mid-content></mid-content>
  <content-four></content-four>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import ContentFour from './components/ContentFour.vue';
import MidContent from './components/MidContent.vue'

export default{
  components:{
    TheHeader,
    MidContent,
    ContentFour
  },
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }

  #app {
    padding: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  

</style>
