<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
  // beforeMount() {
  //   window.addEventListener("load", this.onLoad);
  //   window.addEventListener("beforeunload", this.onUnload);
  // },
  // beforeDestroy() {
  //   window.removeEventListener("load", this.onLoad);
  //   window.removeEventListener("beforeunload", this.onUnload);
  // },
  // methods: {
  //   onLoad(event) {
  //     window.localStorage.setItem("isMySessionActive", true);
  //     window.localStorage.setItem("isLogin", false);
  //     // console.log(window.localStorage.getItem("isMySessionActive"))
  //   },
  //   onUnload(event) {
  //     window.localStorage.setItem("isMySessionActive", false);
  //     // window.localStorage.setItem("isLogin", false);
  //     // console.log(window.localStorage.getItem("isMySessionActive"))
  //   }
  // }
}
</script>
