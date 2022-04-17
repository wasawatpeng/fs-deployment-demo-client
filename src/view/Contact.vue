<template>
  <Navbar/>
  <div class="ui green double segment">
    <div class="ui right labeled fluid action input">
    <div class="ui green label"> Contacts </div>
      <input type="text" placeholder="Search..." v-model="search" />
      <div class="ui buttons">
      <button class="ui active button">Search</button>
      <router-link to="/addcontact">
      <button class="ui orange button" @click="">+ Add</button>
      </router-link>
      </div>
    </div>
  </div>

    <div class="ui segment">
        <div class = "ui link cards">
            <Card
                v-for="contacts in filterContacts"
                :key="contacts.cid"
                :_id="contacts._id"
                :firstname="contacts.firstname"
                :lastname="contacts.lastname"
                :email="contacts.email"
                :mobile="contacts.mobile"
                :facebook="contacts.facebook"
                :imageUrl="contacts.imageUrl"
            />
        </div>
    </div>

</template>

<script>
import Login from '../view/Login.vue'
import Card from '../components/Card.vue'
import Navbar from '../components/Navbar.vue'
import axios from 'axios'
export default {
  name: "Contact",
  components:{
      Login,
      Card,
      Navbar
  },
  data(){
      return{
          search:'',
          Contacts:[],
          isLogin:false,
          disable:false
      }
  },
  mounted(){
    console.log("Login status: "+window.localStorage.getItem("isLogin"))
    if(window.localStorage.getItem("isLogin")==1){
      console.log("สำเร็จ")
      axios.get('http://localhost:5000/contacts')
      .then((res)=>{
          console.log(res.data)
          this.Contacts = res.data
      })
      .catch((err)=>{
          console.log(err)
      })
    }
    else if(window.localStorage.getItem("isLogin")==0){
      console.log("ไม่สำเร็จ")
      alert("Please login first")
      window.location.replace('http://localhost:3000/')
    }
  },
  computed:{
        filterContacts: function(){
            return this.Contacts.filter((contact)=>{
                return contact.firstname.toLowerCase().match(this.search.toLowerCase()) || contact.lastname.toLowerCase().match(this.search.toLowerCase())
            })
        }
  },
  methods:{
    accessEnable(){
      this.isLogin=true
    }
  }
}
</script>

<style></style>
