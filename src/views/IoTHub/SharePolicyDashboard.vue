<template>
  <div class="form-container">
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      :default-sort="{prop: 'name', order: 'descending'}"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="策略" width="200">
        <template slot-scope="scope">
          <p class="hide-underline"  @click="showInfo(scope.$index, scope.row)">{{ scope.row.name }}</p>
        </template>
      </el-table-column>
      <el-table-column prop="authority" label="权限" width="200" sortable></el-table-column>
      <el-table-column label="操作"  show-overflow-tooltip>
        <template slot-scope="scope">
          <el-button size="mini" @click="showInfo(scope.$index, scope.row)" >查看</el-button>
          <!-- <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button> -->
        </template>
      </el-table-column>
    </el-table>
    <div class="button-container">
    </div>
  </div>
</template>

<script>
export default {
  name: "SharePolicyDashboard",
  data() {
    return {
      tableData: [{
          name: "service",
          authority: "服务连接",
      }],
      input: '',
      multipleSelection: []
    };
  },

  methods: {
      handleSelectionChange(val) {
      this.multipleSelection = val;
    },
      handleDelete() {},
      showInfo() {},

  }
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