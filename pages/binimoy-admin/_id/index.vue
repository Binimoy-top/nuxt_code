<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPosts" @submit="Onsubmitted" @del="onDelete" :ShowDel='true' :ShowSaveToUpdate="true"/>
      
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/AdminComp/AdminPostForm.vue";
import axios from "axios";

export default {
  layout: "binimoy_layout",
  components: {
    AdminPostForm,
  },

  asyncData(context) {
    return axios
      .get(
        "https://binimoy-afc76-default-rtdb.firebaseio.com/posts/" +
          context.params.id +
          ".json"
      )
      .then((res) => {
        return {
          loadedPosts: { ...res.data, id: context.params.id },
        };
      })
      .catch((e) => context.error(e));
  },

  methods: {
    Onsubmitted(editedpost) {
      console.log(editedpost)
      axios
        .put(
          "https://binimoy-afc76-default-rtdb.firebaseio.com/posts/" +
            this.$route.params.id +
            ".json",
          editedpost
        )
        .then((res) => {
          this.$router.push("/binimoy-admin");
        })
        .catch((e) => console.log(e));
      console.log(editedpost);
    },
    onDelete() {
      return axios
        .delete(
          "https://binimoy-afc76-default-rtdb.firebaseio.com/posts/" +
            this.$route.params.id +
            ".json"
        )
        .then((res) => {
          alert("deleted!");
          this.$router.push("/binimoy-admin");

          // return {

          // };
        })
        .catch((e) => context.error(e));
    },

    
  },
  created() {
    console.log(this.$route.params.postid);
    console.log(this.loadedPosts);
  },
};
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 780px) {
  .update-form {
    width: 500px;
  }
}
</style>