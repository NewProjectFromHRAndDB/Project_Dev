<template>
  <div class="container">
    <div class="header">
      <h1>{{title}}</h1>
    </div>
    <div class="content" style="background-image:url('../static/img/login.png');">
      <div class="content_wrapper">
        <div class="login_container">
          <form id="loginform" autocomplete="off" name="loginform" style="margin:0px">
            <p><h4>用户名：</h4></p>
            <p><input type="text" class="inputstyle" v-model="username"></p>
            <p><h4>密码：</h4></p>
            <p><input type="password" class="inputstyle" v-model="psw"></p>
            <p><h4>验证码：</h4></p>
            <p><img v-bind:src="src"  width="90" height="30">
            <input type="password" v-model="yzm"></p>
            <div class="buttons">
                <input type="button" class="button" id="login_button" value="立即登录" @click="login()">
                <input type="button" class="button" id="reset_button" value="清空" @click="reset()">
            </div>
          </form>
        </div>

      </div>
    </div>
    <div class="footer">
      <p>公安部沈阳消防研究所&nbsp;&copy;&nbsp;Copyright&nbsp;&copy;&nbsp;{{author}} - 2018 All rights reserved</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      username: "",
      psw: "",
      yzm: "",
      src: "http://10.119.119.175:8004/imageCode",
      users: [
        {
          username: "zhangsan",
          password: "123456",
          userimg: "user.jpg",
          words: "世界那么大我想去看看。"
        },
        {
          username: "lisi",
          password: "123456",
          userimg: "user01.jpg",
          words: "雨过天晴的美好。"
        },
        {
          username: "admin",
          password: "123456",
          userimg: "user02.jpg",
          words: "下大雨了，怎么办啊。"
        }
      ]
    };
  },
  methods: {
    login: function() {
      var flag = false;
      for (var i = 0, len = this.users.length; i < len; i++) {
        if (
          this.users[i].username === this.username &&
          this.users[i].password === this.psw
        ) {
          flag = true;
          this.$router.push({ path: "helloworld" });
          break;
        }
      }
      if (!flag) {
        alert("输入的账号或密码不正确！");
      }
    },
    reset: function() {
      this.username = "";
      this.psw = "";
    }
  },
  computed: {
    author() {
      return this.$store.state.author;
    },
    title() {
      return this.$store.state.title;
    }
  }
};
</script>

<style scoped>
@import "../static/css/login.css";
</style>