
<template>
  <div id="chart-container">
    <div id="chart" style="width: 800px; height:400px;"></div>
  </div>
</template>

<script>
export default {
  name: "AKSChart",
  props: ["title"],
  data() {
    return {};
  },
  methods: {
    drawChart() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("chart"));
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: this.$props.title
        },
        tooltip: {
          trigger: "axis"
        },
        xAxis: {
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
      // 使用刚指定的配置项和数据显示图表。
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
