<template>
    <el-menu
    class="el-menu-vertical-demo scroll"
    @open="handleOpen"
    @close="handleClose"
    :background-color='mainColor'
    text-color="#fff"
    active-text-color="#ffd04b">
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

        <!-- <el-submenu index="1">
          <span slot="title">
            <i class="el-icon-menu"></i>
            <span>AKS</span>
          </span>
          <el-menu-item-group>
            <router-link to="/CreateResourceGroup" class="hide-underline"><el-menu-item index="1-1">创建资源组</el-menu-item></router-link>
            <router-link to="/CreateCluster" class="hide-underline"><el-menu-item index="1-1">创建集群</el-menu-item></router-link>
            <router-link to="/ClusterManagement" class="hide-underline"><el-menu-item index="1-2">集群管理</el-menu-item></router-link>
          </el-menu-item-group>
        </el-submenu>
                <el-submenu index="2">
          <span slot="title">
            <i class="el-icon-menu"></i>
            <span>IoT Edge Center</span>
          </span>
          <el-menu-item-group>
            <router-link to="/CreateStorage" class="hide-underline"><el-menu-item index="2-1">创建储存</el-menu-item></router-link>
            <router-link to="/UploadFile" class="hide-underline"><el-menu-item index="2-2">上传文件</el-menu-item></router-link>
            <router-link to="/DeployApp" class="hide-underline"><el-menu-item index="2-3">部署应用</el-menu-item></router-link>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <span slot="title">
            <i class="el-icon-setting"></i>
            <span>查删</span>
          </span>
          <el-menu-item-group>
            <router-link to="/CheckNode" class="hide-underline"><el-menu-item index="3-1">查询节点</el-menu-item></router-link>
            <router-link to="/CheckApp" class="hide-underline"><el-menu-item index="3-2">查询应用</el-menu-item></router-link>
            <router-link to="/CheckPod" class="hide-underline"><el-menu-item index="3-3">查询pod</el-menu-item></router-link>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <span slot="title">
            <i class="el-icon-menu"></i>
            <span>IoT Hub</span>
          </span>
          <el-menu-item-group>
            <router-link to="/CreateIotHub" class="hide-underline"><el-menu-item index="3-1">创建IoT Hub</el-menu-item></router-link>
            <router-link to="/RegisterDevice" class="hide-underline"><el-menu-item index="3-2">注册设备</el-menu-item></router-link>
            <router-link to="/GetDeviceString" class="hide-underline"><el-menu-item index="3-3">获取设备字符串</el-menu-item></router-link>
          </el-menu-item-group>
        </el-submenu> -->
      </el-menu>
</template>

<script>
  import {mainColor} from '../common/globalvariaties'

  export default {
    name: "Sidebar",
    data() {
      return {
        mainColor: mainColor ? mainColor : '#409EFF'
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
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

  .image{
    height: 30%;
  }
</style>
