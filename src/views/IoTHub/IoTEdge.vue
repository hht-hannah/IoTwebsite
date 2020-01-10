<template>
  <div class="router-container">
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/IoTHubDashboard' }">IoT中心</el-breadcrumb-item>
      <el-breadcrumb-item :to="`/IoTHub/${$route.params.name}`">{{$route.params.name}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{$route.params.deviceID}}</el-breadcrumb-item>
    </el-breadcrumb>

    <h3 class="page-title">{{$route.params.deviceID}} - IoT Edge</h3>

    <div class="button-container">
      <el-button>设置模块</el-button>
      <router-link :to="`/IoTHub/${$route.params.name}/IoTEdge/${$route.params.deviceID}/DigitalTwin`">
      <el-button>设备孪生</el-button>
      </router-link>
      <el-dropdown >
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
      <!-- <IoTEntry title="设备ID" :content="$route.params.deviceID"></IoTEntry>
      <IoTEntry title="主连接字符串" content="一个字符串"></IoTEntry>
      <IoTEntry title="IoT Edge 运行时响应" content="200"></IoTEntry>
      <IoTEntry title="启用到 IoT 中心的连接" content style="display: inline-block; margin-top: -18px;"></IoTEntry>
      <el-radio v-model="radio" label="1" style="font-size: 16px;">启用</el-radio>
      <el-radio v-model="radio" label="2" style="font-size: 16px;">禁用</el-radio>-->
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
          <p class="entry-title">主连接字符串:</p>
          {{}}
          <img src="../../assets/img/copy.png" alt="copy" v-clipboard:copy />
        </span>
        <br />
        <span>
          <p class="entry-title">IoT Edge 运行时响应:</p>
          <el-radio v-model="radio" label="1" style="font-size: 16px;">启用</el-radio>
          <el-radio v-model="radio" label="2" style="font-size: 16px;">禁用</el-radio>
        </span>
        <br />
      </div>
    </div>

    <el-tabs tab-position="left">
      <el-tab-pane label="模块">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          :default-sort="{prop: 'name', order: 'descending'}"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="name" label="名称" width="150"></el-table-column>
          <el-table-column prop="typr" label="类型" width="150"></el-table-column>
          <el-table-column prop="deploy" label="已在部署中指定" width="180"></el-table-column>
          <el-table-column prop="report" label="已有设备报告" width="150"></el-table-column>
          <el-table-column prop="status" label="运行时状态" width="150"></el-table-column>
          <el-table-column prop="exit" label="退出代码" show-overflow-tooltip></el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="IoT Edge中心链接">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          :default-sort="{prop: 'name', order: 'descending'}"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="clientID" label="客户端ID" width="150"></el-table-column>
          <el-table-column prop="status" label="状态" show-overflow-tooltip></el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="部署">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          :default-sort="{prop: 'name', order: 'descending'}"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="clientID" label="部署" width="150"></el-table-column>
          <el-table-column prop="clientID" label="configration type" width="150"></el-table-column>
          <el-table-column prop="priority" label="优先级" width="150"></el-table-column>
          <el-table-column prop="status" label="已应用" width="150"></el-table-column>
          <el-table-column prop="UTC" label="创建时间" show-overflow-tooltip></el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
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

.button-container {
  margin-bottom: 20px;
}

.el-table {
  margin-top: 20px;
  display: inline-block;
  width: 90%;
}
</style>
