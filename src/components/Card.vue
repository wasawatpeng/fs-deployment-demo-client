<template>
  <div class="ui card">
    <div class="image">
      <img :src="imageUrl" />
    </div>
    <div class="content">
      <div class="header">{{ firstname }} {{ lastname }}</div>
      <div class="description">
        <span class="ui grey text">
          <p class="date">Mobile: {{ showPhoneFormat(mobile) }}</p>
          <p class="date">Email: {{ email }}</p>
          <p class="date">Facebook: {{ facebook }}</p>
        </span>
      </div>
        <br>
      <router-link :to="{path: 'editcontact', name: 'EditContact', params:{contactId:_id} }" >
      <button class="ui blue icon button">
        <i class="wrench inverted icon"></i>
      </button>
      </router-link>
      <button class="ui red icon button" @click="deleteContact(_id)">
        <i class="trash icon"></i>
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Card",
  data(){
      return{
          mobileFormat:''
      }
  },
  props: {
    _id:{
      type: String,
      require: true,
    },
    firstname: {
      type: String,
      require: true,
    },
    lastname: {
      type: String,
      require: true,
    },
    mobile: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    facebook: {
      type: String,
      require: true,
    },
    imageUrl: {
      type: String,
      require: true,
    },
  },
  methods:{
      deleteContact(id){
          axios.delete('http://localhost:5000/contacts/'+id)
          .then(()=>{
              console.log('Delete User ID: '+id)
          })
          .catch((err)=>{
              console.log(err)
          })
        window.location.reload()
      },
      showPhoneFormat(mobile){
         return mobile.slice(0,3) + '-' + mobile.slice(3,6) + '-' + mobile.slice(6,mobile.length-1)
      }
  }
};
</script>

<style></style>
