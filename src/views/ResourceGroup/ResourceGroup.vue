<template>
  <div class="form-container">
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/RecourceGroup' }">资源组</el-breadcrumb-item>
    </el-breadcrumb>
    <h3 class="page-title">资源组</h3>
    <div class="search-container">
      <el-input class="input-box" placeholder="搜索" v-model="input" @change="search()" clearable></el-input>
      <el-button @click="search()">搜索</el-button>
       <el-button type="primary" @click="dialogFormVisible = true">添加</el-button>
             <el-dialog title="新建资源组" :visible.sync="dialogFormVisible">
        <el-form label-position="left" ref="form" :model="form" label-width="80px">
          <el-form-item label="名称">
            <el-input v-model="form.name" placeholder="命名资源组"></el-input>
          </el-form-item>
          <el-form-item label="位置">
            <el-select v-model="form.location" placeholder="请选择位置">
              <el-option label="中国北部" value="chinanorth"></el-option>
              <el-option label="中国北部2" value="chinanorth2"></el-option>
              <el-option label="中国东部" value="chinaeast"></el-option>
              <el-option label="中国东部2" value="chinaeast2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button @click="dialogFormVisible = false">取消</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
    <el-table
      ref="multipleTable"
      :data="displayData"
      tooltip-effect="dark"
      :default-sort="{prop: 'name', order: 'descending'}"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="名称" width="400">
        <template slot-scope="scope">
          <router-link class="hide-underline" :to="`IoTHub/${scope.row.name}`">{{ scope.row.name }}</router-link>
        </template>
      </el-table-column>
      <el-table-column prop="location" label="位置" show-overflow-tooltip sortable></el-table-column>
      <!-- <el-table-column prop="id" label="订阅" show-overflow-tooltip sortable></el-table-column> -->
    </el-table>
  </div>
</template>

<script>
import { resourcegroup, createRecourceGroup } from "@/api/api.js";
export default {
  name: "RecourceGroup",
  data() {
    return {
      displayData: [],
      tableData: [],
      loading: true,
      input: "",
      multipleSelection: [],
      dialogFormVisible: false,
      form: {
          name: "",
          location: "",
      }
    };
  },
  methods: {
    search() {
      this.displayData = [];
      var filter = this.input.toUpperCase();
      for (var i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i]) {
          if (this.tableData[i].name.toUpperCase().indexOf(filter) > -1) {
            this.displayData.push(this.tableData[i]);
          }
        }
      }
    },
    async onSubmit () {
       var res = await createRecourceGroup(this.form.name, this.form.location)
       console.log(res)
        if (res.data == "Created") {
        this.$message({
          message: "创建成功",
          type: "success"
        });
        this.dialogFormVisible = false;
        this.displayData = (await resourcegroup()).data;
      } else {
        this.$message.error("创建失败");
      }
    }
  },

  async mounted() {
    this.tableData = (await resourcegroup()).data.value;
    this.displayData = this.tableData;
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
  margin-top: 20px;
}

.input-box {
  color: #48576a;
  width: 300px;
}

.button-container {
  margin-top: 40px;
}

.form-container {
  margin-left: 40px;
}

.hide-underline {
  text-decoration: none;
}
</style>
