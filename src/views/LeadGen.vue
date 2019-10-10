<template>
  <main id="details-main">
    <details-header />

    <b-container>
      <h3 class="title my-5">Spear Practice Solutions &ndash; Lead Generation</h3>
      
    <b-row>
        <b-col cols="12" md="6">
          <h2>Project Overview</h2>
          <p>Spear Practice Solutions provides consultants, training and reporting to help dentists build their business. The target audience of this campaign was current Spear customers who had shown an interest in SPS.  Four emails highlighting different doctors' success stories would deliver leads to the landing page, and upon form submission direct the user to the thank you page. 
          </p>
      </b-col>

      <b-col cols="12" md="6">
          <p class="mb-2 mb-md-3"><strong>My Role: </strong>Front-end Developer</p>
          <p class="mb-2 mb-md-3"><strong>Teams: </strong> Marketing Director, Corporate Writer, Designers, Project Manager, SPS Managers</p>
          <p><strong>Technologies: </strong> HubSpot, Sublime, Bootstrap 3, JQuery, Wistia </p>
        </b-col>
    </b-row>


    <b-row class="mt-2 mt-md-5">
      <b-col>
        <p class="mb-2 mb-md-4"><strong>Process: </strong>Using the designer's approved layouts, new templates were developed within HubSpot for the landing page and thank you page. Once the templates were created, the pages were developed within HubSpot. The emails were created from a basic boilerplate template that I had developed to accommodate most of our needs with template modules and booleans to turn regions on and off. </p>

        <p><strong>Challenges: </strong>Custom JQuery was built for the navbar to stick to the top on scroll and then after the second section scrolled up, the Schedule a Call button would be added to the navbar. Because this used Bootstrap 3, the three-column, side-by-side comparisons were a challenge on responsiveness, with the upgrade to BS4, that would now be a snap! </p>
      </b-col>
    </b-row>

        <hr class="my-3 my-md-5">


    <b-row>

        <b-col class="mb-3" cols="12" md="6">
          <p class="project-title">Landing Page <a class="view-live" href="http://content.speareducation.com/sps ">View live</a>&nbsp;<i class="fas fa-external-link-alt" aria-label="external link"></i></p>
          <img class="bordered img-fluid py-0" src="../assets/spear/spear-lead-gen.jpg" alt="Lead Generation Home Page" />
        </b-col>

        <b-col class="mb-3" cols="12" md="6">

           <p class="project-title">Thank You Page <a class="view-live" href="http://content.speareducation.com/sps-thank-you">View live</a>&nbsp;<i class="fas fa-external-link-alt" aria-label="external link"></i></p>
           <img class="bordered img-fluid py-0" src="../assets/spear/spear-lead-gen-thank-you.jpg" alt="SPS Thank You Page" />

            <p class="project-title mt-2 mt-md-4">Email</p>
           <img class="bordered img-fluid py-0" src="../assets/spear/spear-lead-gen-email.jpg" alt="SPS Email" />



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