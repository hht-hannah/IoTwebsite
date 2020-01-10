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
      <el-table-column label="设备ID" width="150">
        <template slot-scope="scope">
          <router-link class="hide-underline" :to="`${$route.params.name}/IoTDevice/${scope.row.deviceID}`">{{ scope.row.deviceID }}</router-link>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="状态" width="120" sortable></el-table-column>
      <el-table-column prop="utc" label="上次活动时间" width="150" sortable></el-table-column>
      <el-table-column prop="utc" label="上次状态更新" width="150" sortable></el-table-column>
      <el-table-column prop="verification" label="身份验证类型" width="150" sortable></el-table-column>
      <el-table-column prop="count" label="云到设备消息计数" show-overflow-tooltip sortable></el-table-column>
    </el-table>
    <div class="button-container">
      <router-link to="/CreateIoTDevice">
        <el-button type="primary">添加</el-button>
      </router-link>
      <el-button type="danger">删除</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "IoTDeviceDashboard",
  data() {
    return {
      tableData: [
        {
          deviceID: "iothub",
          status: "enabled",
          utc: "Aug.6",
          verification: "sas",
          count: "0"
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