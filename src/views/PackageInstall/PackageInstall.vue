<template>
  <div class="router-container">
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/PackageInstall' }">安装程序包</el-breadcrumb-item>
    </el-breadcrumb>
    <h3 class="page-title">安装程序包</h3>

    <el-tabs tab-position="top">
      <el-tab-pane label="AZ">
        <el-form :inline="true" :model="formAZ" class="demo-form-inline">
          <el-form-item label="系统">
            <el-select v-model="formAZ.system" placeholder="请选择系统">
              <el-option label="安卓" value="andriod"></el-option>
              <el-option label="IOS" value="ios"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="installAZ()">安装</el-button>
            <el-button type="primary" @click="installAZ()">更新</el-button>
            <el-button type="danger" @click="installAZ()">卸载</el-button>
          </el-form-item>
        </el-form>
        <p>版本信息: </p>
        <textarea type="textarea" :rows="8" v-model="formAZ.version" readonly></textarea>

      </el-tab-pane>
      <el-tab-pane label="Kubernetes Control">
        <el-form :inline="true" :model="formKubectl" class="demo-form-inline">
          <el-form-item label="系统">
            <el-select v-model="formKubectl.system" placeholder="请选择系统">
              <el-option label="安卓" value="andriod"></el-option>
              <el-option label="IOS" value="ios"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="installKubectl()">安装</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="Helm">
        <el-form :inline="true" :model="formHelm" class="demo-form-inline">
          <el-form-item label="系统">
            <el-select v-model="formHelm.system" placeholder="请选择系统">
              <el-option label="安卓" value="andriod"></el-option>
              <el-option label="IOS" value="ios"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="installHelm()">安装</el-button>
          </el-form-item>
        </el-form>

        <p>版本信息: </p>
        <textarea type="textarea" :rows="8" v-model="formHelm.version" readonly></textarea>

      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      formAZ: {
        system: "",
        version: "azure-cli: 2.077 \ncommand-modules-nspkg: 2.0.3 \ncore: 2.0.7.7 \nnspkg: 3.0.4 telemetry: 1.0.4",
      },
      formKubectl: {
        system: ""
      },
      formHelm: {
        system: "",
        version: '',

      }
    };
  },
  methods: {},

  watch: {},

  async mounted() {}
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

.el-tabs{
  width: 90%;
}

textarea{
    width: 1000px;
    background: #eeeeee;
    font-size: 16px;
    color: #48576a;
}

p{
    color: #48576a;
}

</style>
