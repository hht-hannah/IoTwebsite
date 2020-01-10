<template>
  <div class="router-container">
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/IoTHubDashboard' }">IoT中心</el-breadcrumb-item>
      <el-breadcrumb-item :to="`/IoTHub/${$route.params.name}`">{{$route.params.name}}</el-breadcrumb-item>
      <el-breadcrumb-item :to="`/IoTHub/${$route.params.name}/IoTDevice/${$route.params.deviceID}`" >{{$route.params.deviceID}}</el-breadcrumb-item>
      <el-breadcrumb-item >设备孪生</el-breadcrumb-item>
    </el-breadcrumb>
    <h3 class="page-title">{{$route.params.deviceID}} - 设备孪生</h3>
    <el-button>保存</el-button>
    <br />
    <br />
    <textarea type="textarea" :rows="8" v-model="content"></textarea>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      content: ""
    };
  },
  methods: {},

  watch: {},

  async mounted() {
    var obj = { hello: "world", Test: ["hello"] };
    this.content = JSON.stringify(obj, null, 4);
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

textarea {
  width: 1000px;
  font-size: 16px;
  color: #48576a;
}

p {
  color: #48576a;
}
</style>
