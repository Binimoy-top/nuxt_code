<template>
  <div class="sidenav-container">
    <div v-if="show" class="sidenav-backdrop" @click="$emit('close')"></div>
    <transition name="slide-side">
      <div v-if="show" class="sidenav">
        <ul class="nav-list" @click="$emit('close')">
          <li class="nav-item">
            <nuxt-link to="/binimoy-posts">Blog</nuxt-link>
          </li>
          <li class="nav-item"><nuxt-link to="/about">About</nuxt-link></li>
          <li class="nav-item">
            <nuxt-link to="/binimoy-admin">Admin</nuxt-link>
          </li>
          <li class="nav-item">
            <button @click="OnLogout" class="btn-hover" >Logout</button>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "TheSidenav",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    OnLogout() {
      console.log(localStorage.clear());
      // alert('hellow')
      localStorage.clear();
      this.$router.push("/");
    },
  },
};
</script>


<style scoped>
.sidenav-container {
  height: 100%;
  width: 100%;
}

.sidenav-backdrop {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
}

.sidenav {
  height: 100%;
  width: 300px;
  background-color: white;
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 30px;
}

.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(-100%);
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  margin: 20px 0;
}

.nav-item a {
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
}

.nav-item a:hover,
.nav-item a:active {
  color: red;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown a {
  color: black;
  border: 1px solid;
  text-decoration: none;
  background-color: white;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  /* min-width:60px; */
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  /* padding: 12px 16px; */
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
  background-color: green;
}

.button {
  background-color: #e94528; /* Green */
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

.btn-hover:hover {
  background-color: green;
}
</style>
