<template>
  <main id="details-main">
    <details-header />

    <b-container>
      <h3 class="title my-5">Spear's Patient Education Launch</h3>
      
    <b-row>
        <b-col cols="12" md="6">
          <h2>Project Overview</h2>
          <p>Launched in October 2018, this product showcased an interactive platform, providing dentists an effective way to present treatment options to patients chairside via ipad, Fire TV or Apple TV. Marketing components consisted of a landing page, thank you page and a prospect and members version of emails. Prospect email CTA's drove to the thank you page, while the customer emails drove to the landing page. 
          </p>

          <p class="mb-2 mb-md-0">The tablet app won Spear Education the bronze award from the <strong>Digital Health Awards, Spring 2019</strong>. </p>
      </b-col>

      <b-col cols="12" md="6">
          <p class="mb-2 mb-md-3"><strong>My Role: </strong>Front-end Developer</p>
          <p class="mb-2 mb-md-3"><strong>Teams: </strong> Marketing Director, Corporate Writer, Designers, Project Manager,  App Developers </p>
          <p><strong>Technologies: </strong> HubSpot, Sublime, Bootstrap 3, JQuery, Wistia </p>
        </b-col>
    </b-row>


    <b-row class="mt-2 mt-md-5">
      <b-col>
        <p class="mb-2 mb-md-4"><strong>Process: </strong>Using the designer's approved layouts, new templates were developed within HubSpot for the landing page, the thank you page and emails. Once the templates were created, the pages and emails were developed within HubSpot.  </p>

        <p><strong>Challenges: </strong>With many moving parts to this massive launch, tight coordination from all the teams involved was crucial. Many revisions were made as the project progressed, and produced an amazing product that was very well received.  </p>
      </b-col>
    </b-row>

        <hr class="my-3 my-md-5">


    <b-row>

        <b-col class="mb-3" cols="12" md="6">
          <p class="project-title">Landing Page <a class="view-live" href="http://content.speareducation.com/patient_education_learn_more">View live</a>&nbsp;<i class="fas fa-external-link-alt" aria-label="external link"></i></p>
          <img class="bordered img-fluid py-0" src="../assets/spear/spear-patient-ed-launch_LP.jpg" alt="Patient Ed Home Page" />
        </b-col>

        <b-col class="mb-3" cols="12" md="6">
          <p class="project-title">Thank You Page <a class="view-live" href="http://content.speareducation.com/patient_education_tour">View live</a>&nbsp;<i class="fas fa-external-link-alt" aria-label="external link"></i></p>
           <img class="bordered img-fluid py-0" src="../assets/spear/spear-patient-ed-launch_TYP.jpg" alt="Patient Ed Thank You Page" />

           <p class="project-title mt-2 mt-md-4">Emails</p>
            <img class="img-fluid py-0" src="../assets/spear/spear-pe-emails.jpg" alt="4 Patient Ed Emails" />
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