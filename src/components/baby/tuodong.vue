<template>
  <div>
    <draggable v-model="workFlowData" group="tableGroup">
      <el-table :data="workFlowData">
        <!-- 表头 -->
        <el-table-column prop="column1" label="Column 1"></el-table-column>
        <el-table-column prop="column2" label="Column 2"></el-table-column>
        <!-- 操作按钮 -->
        <el-table-column label="操作" width="100">
          <el-button type="primary"> Move </el-button>
        </el-table-column>
      </el-table>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  components: {
    draggable,
  },
  data() {
    return {
      workFlowData: [
        { column1: "Data 1", column2: "Data A" },
        { column1: "Data 2", column2: "Data B" },
        { column1: "Data 3", column2: "Data C" },
        { column1: "Data 4", column2: "Data D" },
        { column1: "Data 5", column2: "Data E" },
      ],
    };
  },
};
</script>

<style>
/* Add your custom styles here */
</style>
