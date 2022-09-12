  <template>
  <div class="header-container">
    <header class="the-header">
      <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
      <div class="logo">
        <nuxt-link to="/">Binimoy</nuxt-link>
      </div>
      <div class="spacer"></div>
      <div class="navigation-items">
        <ul class="nav-list">
          <!-- <li class="nav-item"><nuxt-link to="/posts">Server R post</nuxt-link></li> -->
          <!-- <li class="nav-item"><nuxt-link to="/postsStat">Client R post</nuxt-link></li> -->

          <!-- <li class="nav-item"><nuxt-link to="/lesson">Lesson</nuxt-link></li> -->
          <li class="nav-item">
            <nuxt-link to="/binimoy-posts/">Blogs</nuxt-link>
          </li>

          <li class="nav-item">
           
          </li>
          <li class="nav-item"></li>
          <li class="nav-item">
            <div class="dropdown">
              <button class="dropbtn" style="padding-right: 40px">Login</button>
              <div class="dropdown-content">
                <nuxt-link to="/auth/user-login">Login</nuxt-link>
                <nuxt-link to="/auth/user-signup">Registration</nuxt-link>
                 <nuxt-link to="/binimoy-admin">Admin</nuxt-link>
              </div>
            </div>
          </li>
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
};
</script>


<style scoped>
.dropbtn {
  background-color: #ef8341;
  font-size: 16px;
  border: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  margin-right: 100px;
  display: none;
  position: absolute;
  background-color: #ef8341;

  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  
  background-color: rgb(97, 66, 66);
  border-radius: 60px;


}

/*   dropdown    */

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
</style>
