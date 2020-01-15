<template>
  <div class="form-container">
    <h3 class="page-title">Yaml文件</h3>
    <div class="search-container">
      <el-input class="input-box" placeholder="请输入内容" v-model="input" clearable></el-input>
      <el-button>搜索</el-button>
      <el-button type='primary'>添加</el-button>
    </div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      :default-sort="{prop: 'name', order: 'descending'}"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="name" label="名称" width="150"></el-table-column>
      <el-table-column prop="containerName" label="Container Name" width="150"></el-table-column>
      <el-table-column prop="targetCondition" label="Target Condition" width="200"></el-table-column>
      <el-table-column label="操作" show-overflow-tooltip>
        <template slot-scope="scope">
          <el-button size="mini">编辑</el-button>
          <el-button size="mini" type="primary">布置</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "DeployCountainer",
  data() {
    return {
      tableData: [
        {
          name: "sample-deployed",
          containerName: "tempsensor",
          targetCondition: "tags.location: b43"
        }
      ],
      input: "",
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