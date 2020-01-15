<template>
  <el-menu
    class="el-menu-vertical-demo scroll"
    @open="handleOpen"
    @close="handleClose"
    :background-color="mainColor"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <router-link to="/IoTHubDashboard" class="hide-underline">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i> IoT中心
      </el-menu-item>
    </router-link>

    <router-link to="/AKSDashboard" class="hide-underline">
      <el-menu-item index="2">
        <i class="el-icon-menu"></i> AKS
      </el-menu-item>
    </router-link>

    <router-link to="/ResourceGroup" class="hide-underline">
      <el-menu-item index="3">
        <i class="el-icon-menu"></i> 资源组
      </el-menu-item>
    </router-link>

    <router-link to="/PackageInstall" class="hide-underline">
      <el-menu-item index="4">
        <i class="el-icon-menu"></i> 安装
      </el-menu-item>
    </router-link>
  </el-menu>
</template>

<script>
import { mainColor } from "../common/globalvariaties";

export default {
  name: "Sidebar",
  data() {
    return {
      mainColor: mainColor ? mainColor : "#409EFF"
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>


<style rel="stylesheet/scss" lang="scss" scoped>
.scroll {
  overflow: auto;
}

.el-menu-vertical-demo {
  /*重载一些样式*/
  .el-menu-item {
    min-width: auto;
  }
  .hide-underline {
    text-decoration: none;
  }
}

.image {
  height: 30%;
}
</style>
