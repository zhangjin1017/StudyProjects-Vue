<template>
  <div ref="chart"></div>
</template>

<script>
import * as d3 from "d3";

export default {
  name: "DupontAnalysisChart",
  mounted() {
    this.createChart();
  },
  methods: {
    createChart() {
      const data = {
        name: "总资产回报率 (ROE)",
        children: [
          {
            name: "净利润率",
            children: [
              { name: "净利润 (万元)", value: 200 },
              { name: "销售收入 (万元)", value: 1500 },
            ],
          },
          {
            name: "资产周转率",
            children: [
              { name: "销售收入 (万元)", value: 1500 },
              { name: "总资产 (万元)", value: 3000 },
            ],
          },
          {
            name: "权益乘数",
            children: [
              { name: "总资产 (万元)", value: 3000 },
              { name: "所有者权益 (万元)", value: 1500 },
            ],
          },
        ],
      };

      const width = 800;
      const height = 600;
      const svg = d3
        .select(this.$refs.chart)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(40,0)"); // 调整整个图的位置

      const treeLayout = d3.tree().size([height, width - 160]);
      const root = d3.hierarchy(data);
      treeLayout(root);

      svg
        .selectAll(".link")
        .data(root.links())
        .enter()
        .append("path")
        .attr("class", "link")
        .attr(
          "d",
          d3
            .linkVertical()
            .x((d) => d.x)
            .y((d) => d.y)
        );

      const nodes = svg
        .selectAll(".node")
        .data(root.descendants())
        .enter()
        .append("g")
        .attr("class", "node")
        .attr("transform", (d) => `translate(${d.x},${d.y})`);

      nodes
        .append("rect")
        .attr("width", 120)
        .attr("height", 60)
        .attr("x", -60)
        .attr("y", -30)
        .attr("fill", "white")
        .attr("stroke", "black");

      nodes
        .append("text")
        .attr("dy", 3)
        .attr("x", (d) => (d.children ? -8 : 8))
        .style("text-anchor", "middle")
        .text((d) => d.data.name);
    },
  },
};
</script>

<style>
.link {
  fill: none;
  stroke: #555;
  stroke-width: 1.5px;
}

.node text {
  font-size: 12px;
  font-family: Arial, sans-serif;
}
</style>
