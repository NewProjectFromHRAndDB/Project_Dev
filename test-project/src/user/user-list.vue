<template>
  <div class="hello">
  <el-container>
    <el-header>
      <header-component></header-component>
    </el-header>
    <el-container style="height: 500px;">
    <el-aside width="200px">
      <aside-component></aside-component>
    </el-aside >
    <el-main>Main</el-main>
    </el-container>
  </el-container>
  </div>
</template>

<script>
import Header from "../components/base/header.vue";
import Aside from "../components/base/aside.vue";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "This is user-list!"
    };
  },
  components: {
    headerComponent: Header,
    asideComponent: Aside
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../static/css/base.css";
</style>
