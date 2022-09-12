<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <h4 align="center">Registration</h4>
      <form @submit.prevent="OnSubmit">
        <AppControlInput type="email" v-model="email"
          >E-Mail Address</AppControlInput
        >
        <AppControlInput type="password" v-model="password1"
          >Password</AppControlInput
        >
        <AppControlInput type="password" v-model="password2"
          >Confirm Password</AppControlInput
        >

        <div class="center-1">
          <AppButton class="center" type="submit"> Submit</AppButton>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import AppControlInput from "@/components/UI/AppControlInput";
import AppButton from "@/components/UI/AppButton";
import axios from "axios";
export default {
  components: {
    AppControlInput,
    AppButton,
  },

  data() {
    return {
      email: "",
      password1: "",
      password2: "",
    };
  },

  methods: {
    OnSubmit() {
      if (this.password1 == "" && this.password2 == "") {
        alert("please insert the password and confirm password");
      } else if (this.password1 != "" && this.password2 == "") {
        alert("please write same password in the confirm password");
      } else if (this.password1 == this.password2) {
        axios
          .post("https://user-binimoy-default-rtdb.firebaseio.com/users.json", {
            users: this.email,
            password: this.password1,
          })
          .then((res) => {
            // this.$router.push("/binimoy-admin");
            //  alert("sucessfully added!");
            // console.log(res.data)
          })
          .catch((e) => console.log(e));

        axios
          .post(
            "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC5x4FdNXLaGSiszNJ-SZaSAPI8vwYbNRU",

            {
              email: this.email,
              password: this.password1,
              returnSecureToken: true,
            }
          )

          .then((res) => {
            alert("user " + this.email + " successfully added!");
            this.$router.push("/");
          })
          .catch((e) => console.log(e));
      } else if (this.password1 != this.password2) {
        alert("passwod does not match!");
      }
    },
  },
};
</script>


<style scoped>
.center-1 {
  display: flex;
  flex-direction: column;
}

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
    padding-top: 20px;
  }
}
</style>



