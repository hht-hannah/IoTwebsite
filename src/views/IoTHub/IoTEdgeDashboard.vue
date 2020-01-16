<template>
  <div class="form-container">
    <!-- <h3 class="page-title">{{$route.params.name}} - IoT设备</h3> -->
    <div class="search-container">
      <el-input class="input-box" placeholder="请输入内容" v-model="input" @change="search()" clearable></el-input>
      <el-button @click="search()">搜索</el-button>
      <el-button type="primary" @click="CreateFormVisible=true">添加</el-button>
      <el-dialog title="添加IoT设备" :visible.sync="CreateFormVisible">
        <el-form label-position="left" ref="createEdge" :model="createEdge" label-width="160px">
          <el-form-item label="设备ID">
            <el-input v-model="createEdge.deviceId" placeholder="命名IoT Edge"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleCreateEdge()">确认添加</el-button>
            <el-button @click="CreateFormVisible = false">取消</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
    <el-table
      ref="multipleTable"
      :data="displayData"
      tooltip-effect="dark"
      :default-sort="{prop: 'name', order: 'descending'}"
      @selection-change="handleSelectionChange()"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="设备ID" width="150">
        <template slot-scope="scope">
          <router-link
            class="hide-underline"
            :to="`${$route.params.name}/IoTEdge/${scope.row.deviceId}`"
          >{{ scope.row.deviceId }}</router-link>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="状态" width="80"></el-table-column>
      <el-table-column prop="lastActivityTime" label="上次活动时间" width="150" sortable></el-table-column>
      <el-table-column prop="statusUpdateTime" label="上次状态更新" width="150" sortable></el-table-column>
      <el-table-column prop="authenticationType" label="身份验证类型" width="120"></el-table-column>
      <el-table-column prop="cloudToDeviceMessageCount" label="云到设备消息计数" sortable></el-table-column>
      <el-table-column label="操作" show-overflow-tooltip>
        <template slot-scope="scope">
          <router-link
            class="hide-underline"
            :to="`${$route.params.name}/IoTEdge/${scope.row.deviceId}`"
          >
            <el-button size="mini">编辑</el-button>
          </router-link>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="button-container"></div>
  </div>
</template>

<script>
import { createEdge, getEdgeDevices } from "@/api/api.js";
export default {
  name: "IoTEdgeDashboard",
  data() {
    return {
      CreateFormVisible: false,
      tableData: [],
      displayData: [],
      input: "",
      multipleSelection: [],
      createEdge: {
        deviceId: ""
      }
    };
  },

  methods: {
    search() {
      this.displayData = [];
      var filter = this.input.toUpperCase();
      for (var i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i]) {
          if (this.tableData[i].deviceId.toUpperCase().indexOf(filter) > -1) {
            this.displayData.push(this.tableData[i]);
          }
        }
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    async handleCreateEdge() {
      var res = await createEdge(this.createEdge.deviceId, {
        hostName: this.$store.state.hostName,
        sharedAccessKeyName: this.$store.state.accessKey.keyName,
        sharedAccessKey: this.$store.state.accessKey.primaryKey
      });
      if (res.data == "success") {
        this.$message({
          message: "创建成功",
          type: "success"
        });
        this.CreateFormVisible = false;
        this.displayData = (await getDevice(this.$props)).data;
      } else {
        this.$message.error("创建失败");
      }
    }
  },
  async mounted() {
    this.tableData = (
      await getEdgeDevices({
        hostName: this.$store.state.hostName,
        sharedAccessKeyName: this.$store.state.accessKey.keyName,
        sharedAccessKey: this.$store.state.accessKey.primaryKey
      })
    ).data.body;
    this.displayData = this.tableData;
  }
};
</script>


<style scoped>
.el-table {
  margin-top: 20px;
  display: inline-block;
  width: 100%;
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