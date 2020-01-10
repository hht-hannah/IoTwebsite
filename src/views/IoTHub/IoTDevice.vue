<template>
  <div class="router-container">
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/IoTHubDashboard' }">IoT中心</el-breadcrumb-item>
      <el-breadcrumb-item :to="`/IoTHub/${$route.params.name}`">{{$route.params.name}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{$route.params.deviceID}}</el-breadcrumb-item>
    </el-breadcrumb>
    <h3 class="page-title">{{$route.params.deviceID}} - IoT设备</h3>
    <div class="button-container">
      <el-button>保存</el-button>
      <router-link :to="`/IoTHub/${$route.params.name}/IoTDevice/${$route.params.deviceID}/DigitalTwin`">
      <el-button>设备孪生</el-button>
      </router-link>
      <el-dropdown>
        <el-button>
          管理密钥
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>重新生成主密钥</el-dropdown-item>
          <el-dropdown-item>重新生成辅助密钥</el-dropdown-item>
          <el-dropdown-item>交换密钥</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <div class="entry-container">
      <div class="entry-container">
        <span>
          <p class="entry-title">设备ID:</p>
          {{$route.params.deviceID}}
          <img
            src="../../assets/img/copy.png"
            alt="copy"
            v-clipboard:copy="$route.params.deviceID"
          />
        </span>
        <br />
        <span>
          <p class="entry-title">主连接字符串:</p>
          {{}}
          <img src="../../assets/img/copy.png" alt="copy" v-clipboard:copy />
        </span>
        <br />
        <span>
          <p class="entry-title">启用到 IoT 中心的连接:</p>
          <el-radio v-model="radio" label="1" style="font-size: 16px;">启用</el-radio>
          <el-radio v-model="radio" label="2" style="font-size: 16px;">禁用</el-radio>
        </span>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      radio: "1"
    };
  }
};
</script>

<style scoped>
.router-container {
  margin-left: 40px;
}

.page-title {
  color: #48576a;
  margin-top: 20px;
}

.entry-container {
  margin-top: 20px;
  margin-left: 20px;
}

.button-container {
  margin-top: 20px;
}

.entry-container {
  margin: 20px;
}

.entry-title {
  display: inline-block;
  width: 200px;
  height: 10px;
}

.el-input {
  display: inline-block;
  width: 320px;
}

img {
  width: 14px;
}
</style>
