<template>
    <Navbar/>
    <div class="ui left aligned compact segment center-segment">
    <h2 class="ui header">Login</h2>
    <div class="ui divider"></div>
    <form class="ui form">
      <div class="field">
        <label>User Account</label>
        <input
          style="width: 600px"
          type="text"
          name="contact-id"
          placeholder="User Account"
          v-model="usernameInput"
        />
      </div>
      <div class="field">
        <label>Password</label>
        <input
          style="width: 600px"
          type="password"
          name="first-name"
          placeholder="Password"
          v-model="passwordInput"
        />
      </div>
    </form>
    <p></p>
    <div class="vertical-center">
        <button class="ui primary basic button" @click="authLogin">Login</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Navbar from "../components/Navbar.vue";
export default {
  name: "Login",
  components: {
    Navbar,
  },
  data() {
    return {
      usernameInput: '',
      passwordInput: '',
      authUser:{
          username:'',
          password:''
      }
    };
  },
  mounted(){
      window.localStorage.setItem("isLogin",0)
      console.log("Login status: "+window.localStorage.getItem("isLogin"))
  },
  methods:{
      authLogin(){
          axios.get('http://localhost:5000/users/'+this.usernameInput)
          .then((res)=>{
              this.authUser=res.data
              if(res.data === ''){
                window.localStorage.setItem("isLogin",0)
                alert("Invalid Username/Password")
                window.location.reload()
              }
              else if(res.data){
                if(this.passwordInput === this.authUser.password){
                    window.localStorage.setItem("isLogin",1)
                    console.log("Login status: "+window.localStorage.getItem("isLogin"))
                    window.location.replace('http://localhost:3000/contacts')
                }
                else{
                    window.localStorage.setItem("isLogin",0)
                    alert("Invalid Username/Password")
                    window.location.reload()
                }
              }
          })
          .catch((err)=>{
              console.log(err)
          })
      }
  }
};
</script>

<style scoped>
.vertical-center {
    text-align: center;
}
.center-segment{
  margin-left: auto;
  margin-right: auto;
}
</style>
