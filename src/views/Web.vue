<template>
  <main id="web" class="px-0 px-md-4" >
     <b-container>
      <b-row>
        <b-col class="main-text ">   
          <h2 id="main-content" class="title">Development Portfolio</h2>
           <p>These are a few of the most recent samples of work projects that I developed.  </p>
           <hr class="my-4" />
        </b-col>
      </b-row>

      <b-row > 
          <div class="card-deck">
            <PortfolioCard>  
              <img slot="tn-img" src="../assets/spear/spear-patient-ed-launch_tn.jpg" alt="Patient Education home page" class="card-img-top" />
              <h3 slot="title">Patient Education Launch</h3>
               <router-link slot="details" to="PatientEd">Project Details</router-link> 
            </PortfolioCard> 

    
            <PortfolioCard>  
              <img slot="tn-img" src="../assets/spear/spear-lead-gen_tn.jpg" alt="Lead generation home page" class="card-img-top" />
              <h3 slot="title">SPS Lead Generation</h3>
              <router-link slot="details" to="LeadGen">Project Details</router-link> 
            </PortfolioCard> 

            <PortfolioCard>  
              <img slot="tn-img" src="../assets/spear/spear-seminars_tn.jpg" alt="Seminars home page" class="card-img-top" />
              <h3 slot="title">Early Bird Seminar Campaign</h3>
               <router-link slot="details" to="EarlyBird">Project Details</router-link> 
            </PortfolioCard> 
        </div> 
      </b-row>

      <b-row class="mt-4"> 
          <div class="card-deck"> 

            <PortfolioCard>  
              <img slot="tn-img" src="../assets/spear/spear-mp-workshops_tn.jpg" alt="Workshop home page" class="card-img-top" />
              <h3 slot="title">Masters Club Workshops</h3>
              <router-link slot="details" to="MastersWorkshops">Project Details</router-link> 
            </PortfolioCard> 

            <PortfolioCard>  
              <img slot="tn-img" src="../assets/spear/spear-find-a-club_tn.jpg" alt="Join a Club home page" class="card-img-top" />
              <h3 slot="title">Join a Study Club</h3>
              <router-link slot="details" to="JoinClub">Project Details</router-link> 
            </PortfolioCard> 

            <PortfolioCard>  
              <img slot="tn-img" src="../assets/trixie-home-tn.jpg" alt="Prospectus home page" class="card-img-top" />
              <h3 slot="title">Trixie Cartoon</h3>
              <router-link slot="details" to="Trixie">Project Details</router-link> 
            </PortfolioCard>  


        </div> 
      </b-row>




      <b-row>
        <b-col class="mt-5">   
          <h2 class="title">UX/UI Designs</h2>
           <p>These are freelance designs that have not yet been used or developed. </p>
           <hr class="my-4" />
        </b-col>
      </b-row>


      <b-row class="mt-4"> 
          <div class="card-deck">

            <PortfolioCard>  
              <img slot="tn-img" src="../assets/black-pearl-tn.jpg" alt="Prospectus home page" class="card-img-top" />
              <h3 slot="title">Black Pearl Pirates</h3>
              <b-link slot="details" v-b-modal.modal-d1>Project Layout</b-link>
            </PortfolioCard>  

            <!-- MODAL -->
             <b-modal id="modal-d1" size="lg" hide-footer>
              <div class="d-block text-center">
                <h4>Black Pearl Pirates</h4>
                <p>Home Page</p>
                <img class="modal-img" fluid src="../assets/black-pearl-home.jpg" alt="Home Page design">
                <p class="mt-5">Services Page</p>
                <img class="modal-img" fluid src="../assets/black-pearl-svs.jpg" alt="Services Page design">
              </div>
              <b-button class="mt-3" block @click="$bvModal.hide('modal-d1')">Close</b-button>
            </b-modal>


            <PortfolioCard>  
              <img slot="tn-img" src="../assets/pirate-booty-tn.jpg" alt="Workshop home page" class="card-img-top" />
              <h3 slot="title">Zen Garden: Pirate Booty</h3>
              <b-link slot="details" v-b-modal.modal-d2>Project Layout</b-link>
            </PortfolioCard> 

            <!-- MODAL -->
             <b-modal id="modal-d2" size="lg" hide-footer>
              <div class="d-block text-center">
                <h4>CSS Zen Garden</h4>
                <img class="modal-img" fluid src="../assets/pirate-booty.jpg" alt="Home Page design">
              </div>
              <b-button class="mt-3" block @click="$bvModal.hide('modal-d2')">Close</b-button>
            </b-modal>


            <PortfolioCard>  
              <img slot="tn-img" src="../assets/shimmy-tn.jpg" alt="Workshop home page" class="card-img-top" />
              <h3 slot="title">Shimmy Responsive Email</h3>
              <b-link slot="details" v-b-modal.modal-d3>Project Layout</b-link>
            </PortfolioCard> 
            
            <!-- MODAL -->
             <b-modal id="modal-d3" size="lg" hide-footer>
              <div class="d-block text-center">
                <h4>Shimmy Dance Studio</h4>
                <img class="modal-img" fluid style="box-shadow:none;" src="../assets/shimmy-mobile.jpg" alt="Home Page design">
              </div>
              <b-button class="mt-3" block @click="$bvModal.hide('modal-d3')">Close</b-button>
            </b-modal>

        </div> 
      </b-row>




     </b-container>
    
  </main>
</template>


<script>
import PortfolioCard from '@/components/PortfolioCard.vue'

export default {
  name: "Web",

   components: {
    PortfolioCard
  }
}
</script>



<style lang="scss">
</style>