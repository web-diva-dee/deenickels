<template>

    <nav id="sidebar" class="px-2 pt-3 cactus-bkg">

      <a class="sr-only" href="#main-content">Skip to Main Content</a>

      <img class="img-fluid p-4 p-lg-5 d-none d-md-block mx-auto" src="../assets/dee.png" alt="headshot of Dee">
      
      <h1>Dee Nickels</h1>
      <p class="mb-4 bold">Front-end Web Developer</p>

      <div id="nav" class="my-2 my-5-md">
        <ul>
          <li class="mx-0 pt-1 py-md-3 d-md-block">
            <router-link to="Home">Home</router-link> 
          <span class="d-md-none">&nbsp; | &nbsp;</span>
          </li>

          <li class="mx-0 pt-1 py-md-3 d-md-block">
            <router-link to="Web">Web Portfolio</router-link> 
          </li>

        <br class="d-md-none">

          <li class="mx-0 pt-3 py-md-3 d-md-block">
            <router-link to="Skills">Skills</router-link> 
            <span class="d-md-none">&nbsp; | &nbsp;</span>
          </li>

          <li class="mx-0 pt-3 py-md-3 d-md-block">
            <router-link to="Resume">Resum&eacute;</router-link> 
          </li>

        </ul>

        <p class="mt-2 mt-md-5 mb-1 d-none d-md-block"><strong>GET IN TOUCH</strong></p>
        <ul>
          <li class="mx-0 py-2 d-block">
            <a href="tel:+14802044810">480.204.4810</a> 
          </li>

          <li class="m-2">
            <a href="mailto:diananickels@me.com?subject=A Message from your Website!" aria-label="Email link"> <i class="fa fa-envelope text-white" aria-hidden="true"></i></a> 
          </li>

          <li class="mx-2">
            <a href="https://www.linkedin.com/in/diananickels/" target="_blank" aria-label="LinkedIn link"> <i class="fab fa-linkedin text-white" aria-hidden="true"></i></a> 
          </li>
        </ul>

      </div>
    </nav>

</template>



<script>
export default {

}
</script>


<style lang="scss">

</style>
