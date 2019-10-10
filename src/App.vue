<template>
  <div id="app">

      <b-container fluid>
        <b-row>
            <b-col id="sideNav" cols="12" md="3 px-0"> 
              <Sidebar /> 
            </b-col>

            <b-col cols="12" md="9">
              
              <transition name="fade" mode="out-in">
                 <router-view />
              </transition>

            </b-col>

        </b-row>
      </b-container> 
      
  </div>
</template>


<script>
import Sidebar from '@/components/Sidebar.vue'
import Home from '@/views/Home.vue'
import Web from '@/views/Web.vue'
import Skills from '@/views/Skills.vue'
import PatientEd from '@/views/PatientEd.vue'

export default {
  
  components: {
    Sidebar,
    Home, 
    Web,
    Skills,
    PatientEd
  }
  
}
</script>


<style lang="scss">
  #app {
    font-family: 'Montserrat', Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
</style>
