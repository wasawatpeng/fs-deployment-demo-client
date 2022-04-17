<template>
  <Navbar />
  <div class="ui left aligned compact segment center-segment">
    <h2 class="ui header">New contact</h2>
    <div class="ui divider"></div>
    <form class="ui form">
      <div class="field">
        <label>Contact ID</label>
        <input
          style="width: 1000px"
          type="text"
          name="contact-id"
          placeholder="Contact ID"
          v-model="Contact.cid"
        />
      </div>
      <div class="field">
        <label>First Name</label>
        <input
          style="width: 1000px"
          type="text"
          name="first-name"
          placeholder="First Name"
          v-model="Contact.firstname"
        />
      </div>
      <div class="field">
        <label>Last Name</label>
        <input
          style="width: 1000px"
          type="text"
          name="last-name"
          placeholder="Last Name"
          v-model="Contact.lastname"
        />
      </div>
      <div class="field">
        <label>Mobile Number</label>
        <input
          style="width: 1000px"
          type="text"
          name="mobile-number"
          placeholder="Mobile Number"
          v-model="Contact.mobile"
        />
      </div>
      <div class="field">
        <label>Email</label>
        <input
          style="width: 1000px"
          type="text"
          name="email"
          placeholder="Email"
          v-model="Contact.email"
        />
      </div>
      <div class="field">
        <label>Facebook</label>
        <input
          style="width: 1000px"
          type="text"
          name="facebook"
          placeholder="facebook"
          v-model="Contact.facebook"
        />
      </div>
      <div class="field">
        <label>Image URL</label>
        <input
          style="width: 1000px"
          type="text"
          name="imgUrl"
          placeholder="Image URL"
          v-model="Contact.imageUrl"
        />
      </div>
      <div class="vertical-center">
        <button
          class="ui primary basic button"
          type="submit"
          @click="addContact"
        >
          Submit
        </button>
        <router-link to="/contacts">
          <button class="ui negative basic button">Back</button>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import axios from "axios";
export default {
  name: "AddContact",
  components: {
    Navbar,
  },
  data() {
    return {
      Contact: {
        cid: "",
        firstname: "",
        lastname: "",
        mobile: "",
        email: "",
        facebook: "",
        imageUrl: "https://fomantic-ui.com/images/avatar/large/steve.jpg",
      },
    };
  },
  mounted() {
    console.log("Login status: " + window.localStorage.getItem("isLogin"));
    if (window.localStorage.getItem("isLogin") == 1) {
      console.log("สำเร็จ");
    } else if (window.localStorage.getItem("isLogin") == 0) {
      console.log("ไม่สำเร็จ");
      alert("Please login first");
      window.location.replace("http://localhost:3000/");
    }
  },
  methods: {
    addContact() {
      let newContact = {
        cid: this.Contact.cid,
        firstname: this.Contact.firstname,
        lastname: this.Contact.lastname,
        mobile: this.Contact.mobile,
        email: this.Contact.email,
        facebook: this.Contact.facebook,
        imageUrl: this.Contact.imageUrl,
      };
      axios
        .post("http://localhost:5000/contacts", newContact)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.vertical-center {
  text-align: center;
}
.center-segment {
  margin-left: auto;
  margin-right: auto;
}
</style>
