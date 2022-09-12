<template>
  <div>
    <TheHeaderAdmin @sidenavToggle="displaySidenav=!displaySidenav"/>
    <TheSidenav_admin :show="displaySidenav" @close="displaySidenav=false"/>
    <Nuxt />
  </div>
</template>

<script>
// import 'TheHeader' from  '@/components/Navigation/TheHeader.vue'
import TheHeaderAdmin from "@/components/Navigation/TheHeaderAdmin";
import TheSidenav_admin from "@/components/Navigation/TheSidenav_admin";

export default {

  middleware:'log',
  components: { TheHeaderAdmin,TheSidenav_admin },
  data(){
    return{
      displaySidenav:false
    }
  }
};
</script>

<style >
html {
  font-family: "Open Sans", sans-serif;
}
body {
  margin: 0;
}
</style>