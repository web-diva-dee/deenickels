<template>
  <main id="details-main">
    <details-header />

    <b-container>
      <h3 class="title my-5">Masters Program Workshops</h3>
      
    <b-row>
        <b-col cols="12" md="6">
          <h2>Project Overview</h2>
          <p>Masters Program is a unique program designed for highly-specialized dentists. This campaign consists of two landing pages, one for Endodontists and one for Surgical Specialists. 
          </p>

      </b-col>

      <b-col cols="12" md="6">
          <p class="mb-2 mb-md-3"><strong>My Role: </strong>Front-end Developer</p>
          <p class="mb-2 mb-md-3"><strong>Teams: </strong> Marketing Director, Corporate Writer, Designers, Project Manager,  App Developers </p>
          <p><strong>Technologies: </strong> HubSpot, VSCode, Bootstrap 3</p>
        </b-col>
    </b-row>


    <b-row class="mt-2 mt-md-5">
      <b-col>
        <p class="mb-2 mb-md-4"><strong>Process: </strong>Using the designer's approved layouts, new templates were developed within HubSpot for the landing page. Both Endo and Surgical pages uses the same template, and some pages required either three or four columns below the main section, boolean column modules were built into the template. Once the templates were created, the pages and emails were developed within HubSpot.    </p>

      </b-col>
    </b-row>

        <hr class="my-3 my-md-5">


    <b-row class="justify-content-md-center">
        <b-col class="mb-3" cols="12" md="auto" >
          <p class="project-title">Landing Page <a class="view-live" href="http://content.speareducation.com/endodontist-workshop-2">View live</a>&nbsp;<i class="fas fa-external-link-alt" aria-label="external link"></i></p>
          <img class="bordered img-fluid py-0" src="../assets/spear/spear-masters-workshops.jpg" alt="Masters Program Endodontist Workshop Home Page" />
        </b-col>

        <b-col class="mb-3" cols="12" md="auto">
          <p class="project-title">Email</p>
           <img class="bordered img-fluid py-0" src="../assets/spear/spear-masters-workshop-email.jpg" alt="email" />
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