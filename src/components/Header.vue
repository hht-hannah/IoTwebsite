<template>
  <el-menu
    class="el-menu-demo navigation-container"
    mode="horizontal"
    @select="handleSelect"
    :background-color="mainColor"
    text-color="#fff"
    active-text-color="#ffffff"
  >
    <el-menu-item index="1">个人中心</el-menu-item>
    <el-menu-item index="2" style="float: right">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          切换皮肤
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <!--<router-link to='/personalInformation' style='text-decoration: none'><el-dropdown-item>用户信息</el-dropdown-item></router-link>-->
          <!--<el-dropdown-item>设置</el-dropdown-item>-->
          <el-dropdown-item @click.native="changeColor('blue')">蓝色</el-dropdown-item>
          <el-dropdown-item @click.native="changeColor('orange')">橙色</el-dropdown-item>
          <el-dropdown-item @click.native="changeColor('red')">红色</el-dropdown-item>
          <el-dropdown-item @click.native="changeColor('black')">黑色</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-menu-item>
    <el-menu-item index="3" style="float: right">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <!-- <img src="../assets/img/yonghu.svg" />-->
          {{username}} 
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/personalInformation" style="text-decoration: none">
            <el-dropdown-item>用户信息</el-dropdown-item>
          </router-link>
          <!--<el-dropdown-item>设置</el-dropdown-item>-->
          <el-dropdown-item @click.native="logout">登出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-menu-item>
  </el-menu>
</template>

<script>
import { mainColor, changeMainColor } from "../common/globalvariaties";
import { getCookie } from "../../utils/package-cookies";
import * as types from "../store/types";
import api from "../axios";

export default {
  name: "Header",
  data() {
    return {
      user: "",
      username: "",
      mainColor: mainColor ? mainColor : "#409EFF"
    };
  },
  mounted() {
    // this.get_User();
    this.username = localStorage.getItem("username");
    console.log(this.username)
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    get_User() {
      setTimeout(() => {
        api.getUser().then(({ data }) => {
          if (data.code == 401) {
            console.log("token");
            this.$router.push("/login");
            this.$store.dispatch("UserLogout");
            console.log(localStorage.token);
          } else {
            this.user = data;
          }
        });
      }, 100);
    },
    logout() {
      this.$store.dispatch("UserLogout");
      if (!this.$store.state.token) {
        this.$router.push("/login");
        this.$message({
          type: "success",
          message: "登出成功"
        });
      } else {
        this.$message({
          type: "info",
          message: "登出失败"
        });
      }
    },
    changeColor(color) {
      switch (color) {
        case "blue":
          changeMainColor("#409EFF");
          window.location.reload();
          break;
        case "orange":
          changeMainColor("#E6A23C");
          window.location.reload();
          break;
        case "red":
          changeMainColor("#F56C6C");
          window.location.reload();
          break;
        case "black":
          changeMainColor("rgb(48, 49, 51)");
          window.location.reload();
          break;
      }
    }
  },
  // mounted() {
  //   console.log(getCookie("mainColor"));
  //   console.log(this.mainColor);
  // }
};
</script>

<style rel='stylesheet/scss' lang='scss' scoped>
@import "../assets/scss/variaties";
.navigation-container {
  border: $main-color;
  .el-menu-item,
  .el-submenu__title {
    height: 100%;
  }
  .hide-underline {
    text-decoration: none;
  }
}
</style>
