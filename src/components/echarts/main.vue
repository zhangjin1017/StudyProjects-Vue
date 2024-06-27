<template>
  <div>
    <el-tabs>
      <el-tab-pane label="echart1">
        <div style="width: 500px; height: 500px" ref="chart1" id="echart1"></div
      ></el-tab-pane>
      <el-tab-pane label="echart2"
        ><div
          style="width: 500px; height: 500px"
          ref="chart2"
          id="echart2"
        ></div
      ></el-tab-pane>
    </el-tabs>

    <div style="width: 1000px; height: 300px" ref="chart3" id="echart3"></div>
  </div>
</template>
<script>
export default {
  name: "echart",
  data() {
    return {
      value1: 50,
      value2: 100,
    };
  },
  mounted() {
    this.initEchart1();
    this.initEchart2();
    this.initEchart3();
  },
  methods: {
    initEchart1() {
      // const chart1 = this.$echarts.init(this.$refs.chart1);
      const chart1 = this.$echarts.init(document.getElementById("echart1"));

      const vatOption = {
        series: [
          {
            type: "gauge",
            startAngle: 180,
            endAngle: 0,
            center: ["50%", "75%"],
            radius: "100%",
            min: -200,
            max: 200,
            splitNumber: 8,
            axisLine: {
              lineStyle: {
                width: 6,
                color: [
                  [0.2, "#FF6E76"],
                  [0.4, "#FDDD60"],
                  [0.6, "#58D9F9"],
                  [0.8, "#f8D9F9"],
                  [1, "#7CFFB2"],
                ],
              },
            },
            pointer: {
              icon: "path://M12.8,0.7l12,40.1H0.7L12.8,0.7z",
              length: "12%",
              width: 10,
              offsetCenter: [0, "-60%"],
              itemStyle: {
                color: "auto",
              },
            },
            axisTick: {
              length: 5,
              lineStyle: {
                color: "auto",
                width: 1,
              },
            },
            splitLine: {
              length: 10,
              lineStyle: {
                color: "auto",
                width: 2,
              },
            },
            axisLabel: {
              color: "#464646",
              fontSize: 13,
              distance: -40,
              rotate: "tangential",
              formatter: function (value) {
                if (value == 200) {
                  return "高";
                } else if (value == 100) {
                  return "偏高";
                } else if (value == 0) {
                  return "正常";
                } else if (value == -100) {
                  return "偏低";
                } else if (value == -200) {
                  return "低";
                }
                return "";
              },
            },
            title: {
              offsetCenter: [0, "-10%"],
              fontSize: 13,
            },
            detail: {
              fontSize: 30,
              offsetCenter: [0, "-35%"],
              valueAnimation: true,
              formatter: function (value) {
                return Math.round(value * 100) / 100 + "";
              },
              color: "inherit",
            },
            data: [
              {
                value: this.value1,
                name: "税负偏离度",
              },
            ],
          },
        ],
      };
      chart1.setOption(vatOption);
    },
    initEchart2() {
      // const chart2 = this.$echarts.init(this.$refs.chart2);
      const chart2 = this.$echarts.init(document.getElementById("echart2"));
      const citOption = {
        series: [
          {
            type: "gauge",
            startAngle: 180,
            endAngle: 0,
            center: ["50%", "75%"],
            radius: "100%",
            min: -200,
            max: 200,
            splitNumber: 8,
            axisLine: {
              lineStyle: {
                width: 6,
                color: [
                  [0.2, "#FF6E76"],
                  [0.4, "#FDDD60"],
                  [0.6, "#58D9F9"],
                  [0.8, "#f8D9F9"],
                  [1, "#7CFFB2"],
                ],
              },
            },
            pointer: {
              icon: "path://M12.8,0.7l12,40.1H0.7L12.8,0.7z",
              length: "12%",
              width: 10,
              offsetCenter: [0, "-60%"],
              itemStyle: {
                color: "auto",
              },
            },
            axisTick: {
              length: 5,
              lineStyle: {
                color: "auto",
                width: 1,
              },
            },
            splitLine: {
              length: 10,
              lineStyle: {
                color: "auto",
                width: 2,
              },
            },
            axisLabel: {
              color: "#464646",
              fontSize: 13,
              distance: -40,
              rotate: "tangential",
              formatter: function (value) {
                if (value == 200) {
                  return "高";
                } else if (value == 100) {
                  return "偏高";
                } else if (value == 0) {
                  return "正常";
                } else if (value == -100) {
                  return "偏低";
                } else if (value == -200) {
                  return "低";
                }
                return "";
              },
            },
            title: {
              offsetCenter: [0, "-10%"],
              fontSize: 13,
            },
            detail: {
              fontSize: 30,
              offsetCenter: [0, "-35%"],
              valueAnimation: true,
              formatter: function (value) {
                return Math.round(value * 100) / 100 + "";
              },
              color: "inherit",
            },
            data: [
              {
                value: this.value2,
                name: "税负偏离度",
              },
            ],
          },
        ],
      };
      chart2.setOption(citOption);
    },
    initEchart3() {
      // const chart3 = this.$echarts.init(this.$refs.chart3);
      const chart3 = this.$echarts.init(document.getElementById("echart3"));
      const option = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
          },
        ],
      };
      chart3.setOption(option);
    },
  },
};
</script>
