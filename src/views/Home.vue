<template>
  <main id="home" class="home-main">
    <b-container>
      <b-row>
        <b-col class="main-text">   
          <h2 id="main-content" class="title">Front-end Web Developer</h2>
          <p class="bold">UI/UX Designer</p>
          <p class="mb-2 mb-5-md">I began my career as a graphic designer and illustrator with small ad agencies and marketing firms around the Chicago area. In 2007 I turned my sights to HTML and CSS. I continually strive to learn more in this rapidly growing technology industry.</p>
        
        <hr>
        
      <b-container id="home-icons">
        <b-row class="my-3 my-md-5">
          <b-col class="px-0 px-md-4 text-center" align-self="center" v-for="(logo, i) in techlogos" :key="i"> 
              <img :src="logo.src" :alt="logo.alt"  />
          </b-col>
        </b-row>
      </b-container>
          
          <h2 class="mt-4 mt-md-5 title">About This Site</h2>
          <p class="mb-0"><strong>Overview</strong>: This is a SPA that utilizes many of great aspects of VueJS. </p>
          <ul class="bulleted">
            <li class="bullet-li mt-3">Using Vue Router, the sidebar component's navigation links loads each main section component. </li>
            <li class="bullet-li">The icons above are an array in the data function, that loops through a with v-for directive. </li>
            <li class="bullet-li">Web Portfolio pages use Bootstrap cards as a single component that takes advantage of named slots, then imported into the parent component. </li>

            <li class="bullet-li">Portfolio Detail pages have a Header component using a breadcrumb with Vue Router. </li>
          </ul>



          <p class="mb-4"><strong>Design</strong>: Layout in Adobe XD with special attention to following the Web Content Accessibility Guidelines (WCAG) from beginning to development. </p>

          <p class="mb-4"><strong>Technologies</strong>: VueJS (SPA), Vue CLI3, Vue Router, BootstrapVue 4, SASS and Webpack then deployed to Firebase Hosting via the Firebase CLI.</p>
        </b-col>
      </b-row>
    </b-container>





  </main>
</template>



<script>

  export default {
    name: 'Home',

    data() {
      return {
        techlogos:  [
          { alt: "VueJS", src: require('../assets/vuejs.svg') },
          { alt: "Webpack", src: require('../assets/webpack.svg') },
          { alt: "BootstrapVue", src: require('../assets/bootvue.png') },
          { alt: "SASS", src: require('../assets/sass.svg') },
          { alt: "Firebase", src: require('../assets/firebase.svg') }       
          ]
      }
    }

  }
</script>



<style lang="scss">

</style>