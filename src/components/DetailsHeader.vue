<template>

  <b-container id="details-header" >
  <b-row class="mt-5">
    <b-col md order="2" order-md="1">
      <h3 class="title">PROJECT DETAILS</h3>
    </b-col>

    <b-col md order="1" order-md="2">
      <b-breadcrumb :items="items" class="float-none float-md-right mb-4 mb-md-0"></b-breadcrumb>
      <!-- <h3 class="title text-center text-md-right">2 Breadcrumb links</h3> -->
    </b-col>
  </b-row>
  <hr>
</b-container>

</template>


<script>
export default {
    data() {
      return {
        items: [
          {
            text: 'Home',
            href: 'Home'
          },
          {
            text: 'Web Portfolio',
            href: '/web'
          },
          {
            text: 'Details',
            active: true
          }
        ]
      }
    }
  }

</script>



<style>

</style>