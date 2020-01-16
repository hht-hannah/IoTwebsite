<template scope='scope'>
  <div class="hello">
    <h3 class="page-title">{{ msg }} {{ username }}</h3>

    <el-card class="box-card">
      <div class="text item">{{'tenantID: ' + tenantID }}</div>
      <div class="text item">{{'clientID: ' + clientID }}</div>
      <el-button @click="dialogFormVisible = true">查看权限</el-button>
    </el-card>

    <el-card class="box-card">
      <div class="text item">{{'tenantID: ' + tenantID }}</div>
      <div class="text item">{{'clientID: ' + clientID }}</div>
      <el-button @click="dialogFormVisible = true">查看权限</el-button>
    </el-card>

    <el-dialog title="权限" :visible.sync="dialogFormVisible">
      <el-form :model="form" label-width="120px">
        <el-form-item label="IoT中心">
          <el-checkbox-group v-model="form.iothub">
            <el-checkbox label="查看" name="iothub"></el-checkbox>
            <el-checkbox label="修改" name="iothub"></el-checkbox>
            <el-checkbox label="删除" name="iothub"></el-checkbox>
            <el-checkbox label="新增" name="iothub"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="AKS">
          <el-checkbox-group v-model="form.aks">
            <el-checkbox label="查看" name="aks"></el-checkbox>
            <el-checkbox label="修改" name="aks"></el-checkbox>
            <el-checkbox label="删除" name="aks"></el-checkbox>
            <el-checkbox label="新增" name="aks"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="资源组">
          <el-checkbox-group v-model="form.resource">
            <el-checkbox label="查看" name="resource"></el-checkbox>
            <el-checkbox label="修改" name="resource"></el-checkbox>
            <el-checkbox label="删除" name="resource"></el-checkbox>
            <el-checkbox label="新增" name="resource"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit()">保存</el-button>
          <el-button @click="dialogFormVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <!-- v-for在进行过度时，使用 transition-group 标签，使用后内层标签需要有独有的 key 值 这段可以列出所有的user-->
    <!-- <transition-group name="list-complete" tag="ul">
        <li v-for="(item, index) in user" :key="item._id" class="list-complete-item">
            {{ index+1 }}. {{ item.email }}
            <el-button type="" @click="del_user(index)">删除</el-button>
        </li>
    </transition-group>
    <br>
    <el-button type="primary" @click="logout()">登出</el-button>-->
    <el-button type="primary" @click="logout()">添加服务主体</el-button>
  </div>
</template>

<script>
import * as types from "../store/types";
import api from "../axios";
export default {
  name: "personalInformation",
  data() {
    return {
      msg: "Welcome!",
      user: "",
      username: "",
      tenantID: "",
      clientID: "",
      clientSecret: "",
      dialogFormVisible: false,
      form: {
        iothub: [],
        aks: [],
        resource: []
      }
    };
  },
  mounted() {
    // this.get_User();
    this.username = localStorage.getItem("username");
  },
  methods: {
    onSubmit() {

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
    del_user(id) {
      let opt = {
        id: this.user[id]._id
      };
      api
        .delUser(opt)
        .then(response => {
          console.log(response);
          this.$message({
            type: "success",
            message: "删除成功"
          });
          this.get_User();
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.page-title {
  color: #48576a;
  margin-top: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  /*display: inline-block;*/
  margin: 10px 0;
}

a {
  color: #42b983;
}

.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}

.list-complete-enter,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-complete-leave-active {
  position: absolute;
}

.hello {
  margin-left: 40px;
}

.text {
  font-size: 16px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 600px;
  margin: 20px;
}
</style>
