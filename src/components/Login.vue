<template lang="html">
  <div class="">
          <div class="nyam_loginbg">
        <div class="nyam_login_left"></div>
        <div class="nyam_login_right">
            <div class="nyam_login_logo">
                <img src="./login/Scripts/images/nylogo_cloud.png" class="nyam_login_logoimg pull-left" />
                <div class="nyam_login_logotext pull-left">
                    <span style="font-family: Consolas;">CloudWeaver</span>
                   
                </div>
                <div class="clear"></div>
            </div>
            <div class="nyam_login_box">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="用户登录" name="first">
                    <el-col >
                    <el-form :model="dynamicValidateForm" label-width="100px" ref="dynamicValidateForm">
                        <el-form-item prop="email" label="邮箱" :rules="rules.email">
                            <el-input v-model="dynamicValidateForm.email"></el-input>
                        </el-form-item>
                        <el-form-item prop="password" label="密码" :rules = "rules.password">
                            <el-input type="password" v-model="dynamicValidateForm.password"></el-input>
                        </el-form-item>
                        <el-button @click="submitForm('dynamicValidateForm')">登录</el-button>
                        <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
                    </el-form>
                    </el-col>
                    </el-tab-pane>
                        <el-tab-pane label="用户注册" name="second">
                            <Register></Register>
                        </el-tab-pane>
                    </el-tabs>
            </div>

        </div>
    </div>
  </div>
</template>


<script>
import Register from "@/components/Register.vue";
import * as types from "../store/types";
import api from "../axios";

import "./login/Scripts/bootstrap/css/bootstrap.min.css";
import "./login/Scripts/css/ny_bootstrap.css";
import "./login/Scripts/css/nyam_base.css";
import "./login/Scripts/css/nyam_layouts.css";
//   import "./login/Scripts/jquery/jquery-1.11.1.js";
//   import "./login/Scripts/bootstrap/js/bootstrap.min.js";

export default {
  name: "login",
  data() {
    return {
      dynamicValidateForm: {
        email: "",
        password: ""
      },
      activeName: this.$store.state.activeName,
      // 输入校验
      rules: {
        email: [
          {
            required: true,
            message: "请输入邮箱地址",
            trigger: "blur"
          },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: "blur"
          }
        ],
        password: {
          required: true,
          message: "请输入密码",
          trigger: "blur"
        }
      }
    };
  },
  components: {
    Register
  },
  methods: {
    handleClick(tab, event) {},
    // 重置
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 登录
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let opt = this.dynamicValidateForm;
          api.UserLogin(opt).then(({ data }) => {
            console.log(data);
            if (!data.info) {
              this.$message({
                type: "info",
                message: "账号不存在"
              });
            }
            if (data.success) {
              this.$message({
                type: "success",
                message: "登录成功"
              });
              this.$store.dispatch("UserLogin", data.token);
              this.$store.dispatch("UserName", data.email);
              let redirect = decodeURIComponent(
                this.$route.query.redirect || "/"
              );
              this.$router.push({
                path: redirect
              });
            } else {
              this.$message({
                type: "info",
                message: "密码错误"
              });
            }
          });
        } else {
          console.log("Error Submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.el-tabs{
    width: 70%;
    .el-tabs__item {
        color: white;
    }
}

.el-form {
    .el-form-item__label{
        color: white;
    }
}
</style>
