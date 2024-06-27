<template>
  <div>
    <ElTableDraggable>
      <el-table row-key="id" :data="workFlowData">
        <!-- 表头 -->
        <el-table-column prop="column1" label="Column 1"></el-table-column>
        <el-table-column prop="column2" label="Column 2"></el-table-column>
        <!-- 操作按钮 -->
        <el-table-column label="操作" width="100">
          <el-button type="primary"> Move </el-button>
        </el-table-column>
      </el-table>
    </ElTableDraggable>
  </div>
</template>

<script>
import ElTableDraggable from "el-table-draggable";

export default {
  components: {
    ElTableDraggable,
  },
  data() {
    return {
      workFlowData: [
        { id: 1, column1: "Data 1", column2: "1" },
        { id: 2, column1: "Data 2", column2: "2" },
        { id: 3, column1: "Data 3", column2: "3" },
        { id: 4, column1: "Data 4", column2: "4" },
        { id: 5, column1: "Data 5", column2: "5" },
      ],
    };
  },
  methods: {},
};
</script>

<style>
/* Add your custom styles here */
</style>
