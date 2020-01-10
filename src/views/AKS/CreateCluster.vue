<template>
    <div class='form-container'>
      <h3 class='page-title'> 创建集群 </h3>
      <el-form label-position='left' ref='form' :model='form' label-width='80px'>
        <el-form-item label='name'>
          <el-input v-model='form.name'></el-input>
        </el-form-item>
        <el-form-item label='location'>
          <el-select v-model='form.region' placeholder='请选择'>
            <el-option label='区域一' value='shanghai'></el-option>
            <el-option label='区域二' value='beijing'></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label='subscribe'>
          <el-select v-model='form.subscribe' placeholder='请选择'>
            <el-option label='区域一' value='shanghai'></el-option>
            <el-option label='区域二' value='beijing'></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type='primary' @click='onSubmit'>立即创建</el-button>
          <router-link to='/AKSDashboard'>
          <el-button>取消</el-button>
          </router-link>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'CreateCluster',
  data () {
    return {
      form: {
        name: '',
        region: '',
        subscribe: ''
      }
    }
  },
  methods: {
    async onSubmit () {
        try {
          const response = await axios.post('http://127.0.0.1:3001/users/create', this.form);
          this.$message({message: '创建成功', type: 'success'});
          this.form.resetFields();
          console.log(response);
        } catch (error) {
          console.error(error);
        }
    },
    cancel () {
      this.form.resetFields();
    }
  }
}
</script>

<style scoped>
.el-form {
  margin-top: 20px;
  display: inline-block;
}

.page-title {
  color: #48576a;
  margin-top: 40px;
}

.form-container {
  margin-left: 40px;
}
</style>
