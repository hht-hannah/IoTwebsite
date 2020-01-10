<template>
  <div class="form-container">
    <h3 class="page-title">AKS</h3>
    <div class="search-container">
    <el-input  class='input-box' placeholder="请输入内容" v-model="input" clearable></el-input>
    <el-button>搜索</el-button>
    </div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      :default-sort="{prop: 'name', order: 'descending'}"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="名称" width="150">
        <template slot-scope="scope">
          <router-link class="hide-underline" :to="`IoTHub/${scope.row.name}`">{{ scope.row.name }}</router-link>
        </template>
      </el-table-column>
      <el-table-column prop="type" label="类型" width="120" sortable></el-table-column>
      <el-table-column prop="resourceGroup" label="资源组" width="150" sortable></el-table-column>
      <el-table-column prop="location" label="位置" width="120" sortable></el-table-column>
      <el-table-column prop="subscribe" label="订阅" show-overflow-tooltip sortable></el-table-column>
    </el-table>
    <div class="button-container">
      <router-link to="/CreateCluster">
        <el-button type="primary">添加</el-button>
      </router-link>
        <el-button type="danger">删除</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "IoTHubDashboard",
  data() {
    return {
      tableData: [
        {
          name: "iothubmanager",
          type: "IoT中心",
          resourceGroup: "iotmanager",
          location: "中国东部",
          subscribe: "IOT测试"
        },
        {
          name: "Starbucks",
          type: "IoT中心",
          resourceGroup: "Starbucks",
          location: "中国东部2",
          subscribe: "IOT测试"
        },
        {
          name: "testzengyxiot",
          type: "IoT中心",
          resourceGroup: "zengyxsource",
          location: "中国东部",
          subscribe: "IOT测试"
        }
      ],
      input: '',
      multipleSelection: []
    };
  },

  methods: {}
};
</script>


<style scoped>
.el-table {
  margin-left: 40px;
  margin-top: 20px;
  display: inline-block;
  width: 90%;
}

.page-title {
  color: #48576a;
  margin-left: 40px;
  margin-top: 40px;
}

.input-box {
  color: #48576a;
  margin-left: 40px;
  width: 300px;
}

.button-container {
  margin-left: 40px;
  margin-top: 40px;
}

.hide-underline {
  text-decoration: none;
}
</style>
