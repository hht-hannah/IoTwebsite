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
          <p
            class="hide-underline"
            @click="showInfo(scope.$index, scope.row)"
          >{{ scope.row.keyName }}</p>
        </template>
      </el-table-column>
      <el-table-column prop="rights" label="权限" width="200" sortable></el-table-column>
      <el-table-column label="操作" show-overflow-tooltip>
        <template slot-scope="scope">
          <el-button size="mini" @click="showInfo(scope.$index, scope.row)">查看</el-button>
          <!-- <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button> -->
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :title="form.title" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="主密钥" label-width="100px">
          <el-input v-model="form.displayPrimaryKey" auto-complete="off" readonly></el-input>
          <img
            src="../../assets/img/copy.png"
            alt="copy"
            v-clipboard:copy="form.displayPrimaryKey"
          />
        </el-form-item>
        <el-form-item label="辅助密钥" label-width="100px">
          <el-input v-model="form.displaySecondaryKey" auto-complete="off" readonly></el-input>
            <img
            src="../../assets/img/copy.png"
            alt="copy"
            v-clipboard:copy="form.displaySecondaryKey"
          />
        </el-form-item>
        <el-form-item label="链接字符串" label-width="100px">
          <el-input v-model="form.connectionString" auto-complete="off" readonly></el-input>
            <img
            src="../../assets/img/copy.png"
            alt="copy"
            v-clipboard:copy="form.connectionString"
          />
        </el-form-item>
        <el-form-item label="权限" label-width="100px">
          <el-input v-model="form.displayRights" auto-complete="off" readonly></el-input>
          <img
            src="../../assets/img/copy.png"
            alt="copy"
            v-clipboard:copy="form.displayRights"
          />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible = false">确定</el-button>
      </div>
    </el-dialog>

    <div class="button-container"></div>
  </div>
</template>

<script>
import { getIoThubKeys } from "@/api/api.js";
export default {
  name: "SharePolicyDashboard",
  props: ["name", "resourcegroup"],
  data() {
    return {
      tableData: [],
      form:{
        title: "",
        displayPrimaryKey: "",
        displaySecondaryKey: "",
        connectionString: "",
        displayRights: "",
      },
      dialogFormVisible: false,
      input: "",
      multipleSelection: []
    };
  },

  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleDelete() {},
    showInfo(index, keyName) {
      this.dialogFormVisible = true;
      this.form.displayPrimaryKey = keyName.primaryKey;
      this.form.displaySecondaryKey = keyName.secondaryKey;
      this.form.displayRights = keyName.rights;
      this.form.title = keyName.keyName + " - 共享访问策略";
      this.form.connectionString = "HostName="+this.$store.state.hostName+";SharedAccessKeyName="+keyName.keyName+";SharedAccessKey="+keyName.primaryKey;
    }
  },
  async mounted() {
    this.tableData = (await getIoThubKeys(
      this.$props.resourcegroup,
      this.$props.name
    )).data.value;
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

.el-input {
  display: inline-block;
  width: 90%;
}

img {
  width: 14px;
}
</style>