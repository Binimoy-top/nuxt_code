<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form @submit.prevent="OnSubmit">
        <AppControlInput type="email" v-model="email"
          >E-Mail Address</AppControlInput
        >
        <AppControlInput type="password" v-model="password"
          >Password</AppControlInput
        >
        <AppButton type="submit">Login</AppButton>
        
      </form>
    </div>
  </div>
</template>

<script>
import AppControlInput from "@/components/UI/AppControlInput";
import AppButton from "@/components/UI/AppButton";
import axios from "axios";

export default {
  name: "AdminAuthPage",
  // layout: "admin",
  components: {
    AppControlInput,
    AppButton,
  },
  data() {
    return {
      
      email: "",
      password: "",
    };
  },
  methods: {
    OnSubmit() {



axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+process.env.firebaseApiKey,

          {
            email: this.email,
            password: this.password,
            returnSecureToken: true,
          }
        )

        .then((res) => {
            localStorage.setItem('token', res.data.idToken)
             this.$router.push('/binimoy-admin');
          console.log(res);
        })
        .catch((e) => {
          alert('Please use right email and password!')
          this.email=''
          this.password=''
        });  






    //   this.$store.dispatch('authenticateUser',{
    //     isLogin:this.isLogin,
    //     email:this.email,
    //     password:this.password
    //   }).then(()=>{
    //     this.$router.push('/admin');
    //   })

      // we implemented this in the store authenticateUser

      /*
      let authUrl = "";
      if (!this.isLogin) {
        authUrl =
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
          process.env.firebaseApiKey;
      } else {
        authUrl =
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
          process.env.firebaseApiKey;

        console.log("login is on the construction ");
      }
      axios
        .post(
          authUrl,

          {
            email: this.email,
            password: this.password,
            returnSecureToken: true,
          }
        )

        .then((res) => {
          console.log(res);
        })
        .catch((e) => console.log(e));

        */

      /*  
      axios
        .post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
            process.env.firebaseApiKey, // Check the nuxt.config.js in the env section
          {
            email: this.email,
            password: this.password,
            returnSecureToken: true,
          }
        )

        .then((res) => {
          console.log(res);
        })
        .catch((e) => console.log(e)); */
    },
  },
};
</script>

<style scoped>
.admin-auth-page {
  padding: 200px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}

@media (max-width: 850px) {
 .admin-auth-page {
   padding: 0px;
  }
}
</style>
