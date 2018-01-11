<template>
<div>
  <div class="header-left" style="margin:0;float:left;">
    <h1 style="margin:0;">{{title}}</h1>
  </div>
  <el-dropdown style="float:right;">
    <span class="el-dropdown-link">
  <div class="header-right" style="margin:0;width:200px;float:right;">
    <h4 style="margin:0;">欢迎,admin<i class="el-icon-arrow-down el-icon--right"></i></h4>
  </div>
    </span>
      <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>注销</el-dropdown-item>
      </el-dropdown-menu>
  </el-dropdown>
</div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  computed: {
    title() {
      return this.$store.state.title;
    }
  }
};
</script>
