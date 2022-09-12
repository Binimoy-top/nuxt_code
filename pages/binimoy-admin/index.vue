







<template>
  <div class="admin-page">
    <div class="admin_nav">
      <nuxt-link to="/auth/signup">Create new Admin</nuxt-link>
      <!-- <button @click="OnLogout">Logout</button> -->
    </div>

    <section class="new-post">
      <button @click="$router.push('/binimoy-admin/newposts')">
        Create post
      </button>
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <!-- <PostList isAdmin :posts="loadedPosts"/> -->
      <PostList isAdmin :posts="loadedPosts" />

    </section>
  </div>
</template>



<script>
// component imported in the plugins folder core-components file and made global componenet

// import PostList from "@/components/PostsComp/PostList.Vue";
// import AppButton from "@/components/UI/AppButton.vue";
import axios from "axios";
import { addAbortSignal } from "stream";

export default {
  middleware: "binimoy-auth",
  layout: "binimoy_layout",
  props:[],
  data() {
    return {
      loadedPosts: [],
    };
  },
  created() {
    axios
      .get(process.env.baseURL + "/posts.json")
      //check the nuxt config --env
      .then((res) => {
        // const postarray=[]
        for (const key in res.data) {
          this.loadedPosts.push({ ...res.data[key], id: key });
        }
      })
      .catch((e) => context.error(e));

      
  },
  

  
  mounted() {},

  // layout:'admin',
  components: {
    // PostList,
    // AppButton,
  },
  //   computed:{
  //     loadedPosts(){
  //       return this.$store.getters.loadedPosts
  //     }
  // }
};
</script>


<style scoped>
.admin-page {
  padding: 80px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid rgb(139, 40, 40);
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
  /* background-color: aqua; */
}

.admin_nav {
  justify-content: space-around;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
}

.admin_nav a{
  text-decoration: none;
  color: black;
  border:2px solid;
  background-color: rgb(21, 124, 214);
}
</style>
