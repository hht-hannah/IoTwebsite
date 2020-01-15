<template>
  <div id="chart-container">
    <el-select v-model="value" placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <div id="chart" style="width: 800px;height:400px;"></div>
  </div>
</template>

<script>
import "echarts/lib/chart/bar";

export default {
  name: "IoTHubChart",
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "图表1"
        },
        {
          value: "选项2",
          label: "图表2"
        },
        {
          value: "选项3",
          label: "图表3"
        },
        {
          value: "选项4",
          label: "图表4"
        },
        {
          value: "选项5",
          label: "图表5"
        }
      ],
      value: ""
    };
  },
  methods: {
    drawChart() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("chart"));
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: "title"
        },
        tooltip: {
          trigger: "axis"
        },
        xAxis: {
          //x轴的坐标
          type: "category",
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value"
        },
        dataZoom: [
          {
            startValue: ""
          },
          {
            type: "inside"
          }
        ],
        series: [
          //数据加在这里
          {
            name: "1",
            type: "line",
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "2",
            type: "line",
            data: [220, 182, 191, 234, 290, 330, 310]
          }
        ]
      };
      // 使用指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  },
  mounted() {
    this.drawChart();
  }
};
</script>

<style scoped>
.el-select {
  margin: 20px;
}
</style>
