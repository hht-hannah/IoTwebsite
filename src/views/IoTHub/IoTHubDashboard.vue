<template>
  <div class="form-container">
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/IoTHubDashboard' }">IoT中心</el-breadcrumb-item>
    </el-breadcrumb>
    <h3 class="page-title">IoT中心</h3>
    <div class="search-container">
      <el-input class="input-box" placeholder="搜索" v-model="input" @change="search()" clearable></el-input>
      <el-button @click="search()">搜索</el-button>
      <el-button type="primary" @click="dialogFormVisible = true">添加</el-button>
      <el-dialog title="添加IoT中心" :visible.sync="dialogFormVisible">
        <el-form label-position="left" ref="form" :model="form" label-width="150px">
          <el-form-item label="名称">
            <el-input v-model="form.name" placeholder="命名IoT中心"></el-input>
          </el-form-item>
          <el-form-item label="资源组">
            <el-select v-model="form.resourceGroup" placeholder="请选择已有的资源组">
              <el-option
                v-for="data in resourcegroup"
                :key="data.id"
                :lable="data.name"
                :value="data.name"
              ></el-option>
            </el-select>
            <router-link :to="{ path: '/ResourceGroup' }">
              <el-button type="text" size="small">新建资源组</el-button>
            </router-link>
          </el-form-item>
          <el-form-item label="SKU">
            <el-select v-model="form.sku.name" placeholder="请选择缩放层">
              <el-option label="S1: 标准层" value="S1"></el-option>
              <el-option label="S2: 标准层" value="S2"></el-option>
              <el-option label="S3: 标准层" value="S3"></el-option>
              <el-option label="B1: 基本层" value="B1"></el-option>
              <el-option label="B2: 基本层" value="B2"></el-option>
              <el-option label="B3: 基本层" value="B3"></el-option>
              <el-option label="F1: 免费层" value="F1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="中心单元数量">
            <el-input v-model="form.sku.capacity" placeholder="设置中心单元数量"></el-input>
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
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="名称" width="150">
        <template slot-scope="scope">
          <router-link class="hide-underline" :to="`IoTHub/${scope.row.name}`">{{ scope.row.name }}</router-link>
        </template>
      </el-table-column>
      <el-table-column prop="type" label="类型" width="220" sortable></el-table-column>
      <el-table-column prop="resourcegroup" label="资源组" width="150" sortable></el-table-column>
      <el-table-column prop="location" label="位置" width="120" sortable></el-table-column>
      <el-table-column prop="subscriptionid" label="订阅"></el-table-column>
      <el-table-column label="操作"  show-overflow-tooltip>
        <template slot-scope="scope">
          <router-link class="hide-underline" :to="`IoTHub/${scope.row.name}`"> <el-button size="mini">编辑</el-button> </router-link>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { resourcegroup, listbysubid, createIoThub, deleteIoThub } from "@/api/api.js";
export default {
  name: "IoTHubDashboard",
  data() {
    return {
      displayData: [],
      tableData: [],
      resourcegroup: [],
      loading: true,
      input: "",
      multipleSelection: [],
      dialogFormVisible: false,
      // innerFormVisible: false,
      form: {
        name: "",
        location: "",
        resourceGroup: "",
        sku: {
          name: "",
          tier: "",
          capacity: 1
        }
      }
      // newform: {
      //   name: "",
      //   location: ''
      // }
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
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    async handleDelete(index, data) {
       console.log(data)
       var res = await deleteIoThub(data.resourcegroup, data.name)
        if (res.data == "success") {
        this.$message({
          message: "已删除",
          type: "success"
        });
        this.displayData = (await listbysubid()).data;
      } else {
        this.$message.error("出错了");
      }
    },

    async onSubmit() {
      if (this.form.sku.name == "S1" || "S2" || "S3") {
        this.form.sku.tier = "Standard";
      } else if (this.form.sku.name == "B1" || "B2" || "B3") {
        this.form.sku.tier = "Basic";
      } else if (this.form.sku.name == "F1") {
        this.form.sku.tier = "Free";
      }
      var res = await createIoThub(this.form.resourceGroup, this.form.name, {
        name: this.form.name,
        location: this.form.location,
        sku: this.form.sku
      });
      if (res.data == "success") {
        this.$message({
          message: "创建成功",
          type: "success"
        });
        this.dialogFormVisible = false;
        this.displayData = (await listbysubid()).data;
      } else {
        this.$message.error("创建失败");
      }
    }
  },

  async mounted() {
    this.tableData = (await listbysubid()).data;
    this.displayData = this.tableData;
    this.resourcegroup = (await resourcegroup()).data.value;
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

.form-container {
  margin-left: 40px;
}

.hide-underline {
  text-decoration: none;
}
</style>
