<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <h4 align="center">Add New Admin</h4>
      <form @submit.prevent="OnSubmit">
        <AppControlInput type="email" v-model="email"
          >E-Mail Address</AppControlInput
        >
        <AppControlInput type="password" v-model="password"
          >Password</AppControlInput
        >
        <AppButton type="submit">ADD </AppButton>
        
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



axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+process.env.firebaseApiKey,

          {
            email: this.email,
            password: this.password,
            returnSecureToken: true,
          }
        )

        .then((res) => {
          alert('user '+  this.email+' successfully added!');
          this.$router.push('/binimoy-admin')

        })
        .catch((e) => console.log(e));  





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
