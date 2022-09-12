  <template>
  <div class="header-container">
    <header class="the-header">
      <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
      <div class="logo">
        <nuxt-link to="/">Binimoy</nuxt-link>
      </div>
      <div class="spacer"></div>
      <div class="navigation-items">
        <div class="dropdown">
          <span><nuxt-link to="/binimoy-admin">Admin</nuxt-link></span>
          <div class="dropdown-content">
            

            <button  @click="OnLogout" class="btn-hover">Logout</button>
          </div>
        </div>

        <ul class="nav-list">
          <li class="nav-item"></li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
import TheSideNavToggle from "@/components/Navigation/TheSideNavToggle";

export default {
  name: "TheHeader",
  components: {
    TheSideNavToggle,
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
.header-container {
  height: 60px;
}

.the-header {
  width: 100%;
  position: fixed;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ef8341;
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
}

.logo {
  margin: 0 10px;
  font-size: 1.3rem;
}

.logo a {
  text-decoration: none;
  color: white;
}

.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-item {
  margin: 0 10px;
}

.nav-item a {
  text-decoration: none;
  color: white;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: black;
}

/* dropdown */

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown a{
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

.btn-hover:hover{
    background-color: green;
}
</style>
