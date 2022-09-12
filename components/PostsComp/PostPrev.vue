<template>
  <Nuxt-link :to="postLink" class="post-preview">
    <article>
      <div class="post-thumbnail" style="">
        <h1>{{ title }} </h1> 
       
        
      </div>
      <!-- <div class="auth-date"></div> -->
       <p class="wr-style"><b>{{postDate | date}}</b></p>
       <p class="wr-style"> by {{postAuthor}}</p>

      <div class="post-content">
        <p>{{ PreviewText }}</p>
      </div>
    </article>
  </Nuxt-link>
</template>

<script>
import '@/plugins/date-filter.js'

export default {
  name: "Postprev",
  props: {
    id: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
     postAuthor: {
      type: String,
      required: true,
    },
    postDate: {
      type: String,
      required: true,
    },
    PreviewText: {
      type: String,
      required: true,
    },
  },
  computed: {
    postLink() {
      return this.isAdmin ? "/binimoy-admin/" + this.id : "/binimoy-posts/" + this.id;
    },
  },
};
</script>

<style scoped>



.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}
.wr-style{
 text-align: center;
}

.post-thumbnail {
  text-align: center;

  background-image: url("~assets/images/Blog_pic.png");
  background-repeat: no-repeat;
  background-size: 300px 100px; 
  width: 100%;
  height: 200px;
  background-position: center;

  /* background-size: cover; */
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}
</style>

