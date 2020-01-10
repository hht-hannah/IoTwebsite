<template>
  <div class="form-container">
    <!-- <h3 class="page-title">{{$route.params.name}} - IoT设备</h3> -->
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
          <el-table-column prop="clientID" label="部署" width="150"></el-table-column> 
          <el-table-column prop="clientID" label="configration type" width="150"></el-table-column>
          <el-table-column prop="priority" label="优先级" width="150"></el-table-column>
          <el-table-column prop="status" label="已应用" width="150"></el-table-column>
          <el-table-column prop="UTC" label="创建时间"  show-overflow-tooltip ></el-table-column>
        </el-table>
    <div class="button-container">
      <router-link to="/CreateIoTDevice">
        <el-button type="primary">创建部署</el-button>
      </router-link>
      <el-button type="danger">删除</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "IoTEdgeDashboard",
  data() {
    return {
      tableData: [
        {
          deviceID: "Starbucks",
          status: "406",
          edgeCount: "3",
          clientCount: "3",
          deployCount: "2"
        },
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
  margin-top: 20px;
  display: inline-block;
  width: 90%;
}

.page-title {
  color: #48576a;
}

.input-box {
  margin-top: 10px;
  color: #48576a;
  width: 300px;
}

.button-container {
  margin-top: 20px;
}

.hide-underline {
  text-decoration: none;
}
</style>