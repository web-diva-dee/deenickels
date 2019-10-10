<template>
  <main id="details-main">
    <details-header />

    <b-container>
      <h3 class="title my-5">Early Bird Seminar Campaign</h3>
      
    <b-row>
        <b-col cols="12" md="6">
          <h2>Project Overview</h2>
          <p>This campaign was created in 2018 to promote each of our 7 seminars that are scheduled throughout the year in two locations. In 2019 I revamped the templates to use Bootstrap 4. This campaign uses multiple modals for the registration form, schedule, dates, planning and for each instructor. Instructor modals link to their individual instructor bio page.  
          </p>
      </b-col>

      <b-col cols="12" md="6">
          <p class="mb-2 mb-md-3"><strong>My Role: </strong>Front-end Developer</p>
          <p class="mb-2 mb-md-3"><strong>Teams: </strong> Marketing Director, Corporate Writer, Project Manager, Designers</p>
          <p><strong>Technologies: </strong> HubSpot, VSCode, Bootstrap 4, JQuery, Wistia </p>
        </b-col>
    </b-row>


    <b-row class="mt-2 mt-md-5">
      <b-col>
        <p class="mb-2 mb-md-4"><strong>Process: </strong>Using the designer's approved layouts, new templates were developed within HubSpot for the landing page and bio page. Once the templates were created, the pages and emails were developed within HubSpot.  </p>

        <p><strong>Challenges: </strong>Having multiple instructors, modals and seminars with different details meant building a very large template, keeping the template as clean, simple and versatile as possible is important. I always try to anticipate what to build into the templates, so that regions can be as customizable as possible for many future iterations.  </p>
      </b-col>
    </b-row>

        <hr class="my-3 my-md-5">


    <b-row>

        <b-col class="mb-3" cols="12" md="6">
          <p class="project-title">Esthetic Dilemmas Arizona</p>
          <img class="bordered img-fluid py-0" src="../assets/spear/spear-seminars-LP.jpg" alt="Home Page" />
        </b-col>

        <b-col class="mb-3" cols="12" md="6">

           <p class="project-title">Instructor Modal</p>
           <img class="bordered img-fluid py-0" src="../assets/spear/spear-seminar-modal.jpg" alt="Patient Ed Thank You Page" />

           <p class="project-title mt-2 mt-md-5">Bio Page</p>
           <img class="bordered img-fluid py-0" src="../assets/spear/spear-seminars-bio.jpg" alt="Patient Ed Thank You Page" />

        </b-col>

    </b-row>

     <!-- Emails -->
     <p class="project-title mt-2 mt-md-4">Emails</p>
    <b-row>
        <b-col>
          <img class="bordered img-fluid mb-3" src="../assets/spear/seminar-esthetic-email-1.jpg" alt="Patient Ed Email 1" />
        </b-col>
        
        <b-col sm>
          <img class="bordered img-fluid mb-3" src="../assets/spear/seminar-esthetic-email-2.jpg" alt="Patient Ed Email 2" />
        </b-col>

        <b-col sm>
          <img class="bordered img-fluid mb-3" src="../assets/spear/seminar-esthetic-email-3.jpg" alt="Patient Ed Email 3" />
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