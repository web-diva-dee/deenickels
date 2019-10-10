<template>
  <main id="details-main">
    <details-header />

    <b-container>
      <h3 class="title my-5">Trixie Cartoon</h3>
      
    <b-row>
        <b-col cols="12" md="6">
          <h2>Project Overview</h2>
          <p>Trixie is my vector-based cartoon strip, created after my dachshund Cleo, and is near and dear to my heart.  This site was developed in 2014 and is next on my list to revamp with VueJS. I was told that this site got me my first development position! <i class="fas fa-heart" aria-label="heart"></i> Thanks Trixie!
          </p>

      </b-col>

      <b-col cols="12" md="6">
          <p class="mb-2 mb-md-3"><strong>My Role: </strong>Creator, Illustrator, Designer &amp; Developer</p>
          
          <p><strong>Technologies: </strong> Sublime, Responsive Grid System, JQuery, Javascript </p>
        </b-col>
    </b-row>


    <b-row class="mt-2 mt-md-5">
      <b-col>
        <p class="mb-2 mb-md-4"><strong>Process: </strong> This was the second site I designed and developed for Trixie. I decided to use the Responsive Grid System, a less robust CSS framework than Bootstrap.  </p>

        <p><strong>Challenges: </strong>To show the many strips and gags in an organized way, I chose to do this with a show/hide panel using JQuery, one for strips and one for gags, with a modal for the comic.   </p>
      </b-col>
    </b-row>

        <hr class="my-3 my-md-5">


    <b-row>
        <b-col class="mb-3" cols="12" md="6">
          <p class="project-title">Home Page </p>
          <img class="bordered img-fluid py-0" src="../assets/trixie-home.jpg" alt="Trixie Home Page" />

          <p class="project-title mt-2 mt-md-4">Laughs Page</p>
          <img class="bordered img-fluid py-0" src="../assets/trixie-laughs.jpg" alt="Trixie strip and gag page" />
        </b-col>

        <b-col class="mb-3" cols="12" md="6">
          <p class="project-title">Friends Page</p>
          <img class="bordered img-fluid py-0" src="../assets/trixie-friends.jpg" alt="Trixie strip and gag page" />

          <p class="project-title mt-2 mt-md-4">About Page </p>
          <img class="bordered img-fluid py-0" src="../assets/trixie-about.jpg" alt="Trixie About Page" />
        </b-col>
    </b-row>



    </b-container>
    
  </main>
</template>


<script>
import DetailsHeader from '@/components/DetailsHeader.vue'

export default {
  
  components: {
    DetailsHeader
  }
  
}
</script>



<style>

</style>