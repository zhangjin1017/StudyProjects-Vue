<template>
  <div>
    <h1>政策列表</h1>
    <!-- 导入Excel按钮 -->
    <input type="file" @change="handleExcelImport" accept=".xlsx, .xls" />
    <table>
      <thead>
        <tr>
          <th>优惠名称</th>
          <th>政策代码</th>
          <th>主要税种</th>
          <th>次要税种</th>
          <th>收入类型</th>
          <th>政策文档</th>
          <th>优惠条款</th>
          <th>创建时间</th>
          <th>更新时间</th>
          <th>政策链接</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="policy in policies" :key="policy.id">
          <td>{{ policy.preferentialName }}</td>
          <td>{{ policy.policyCode }}</td>
          <td>{{ policy.taxMajorCategories }}</td>
          <td>{{ policy.taxMinorCategories }}</td>
          <td>{{ policy.incomeType }}</td>
          <td>{{ policy.policyDoc }}</td>
          <td>{{ policy.preferentialTerms }}</td>
          <td>{{ policy.createTime }}</td>
          <td>{{ policy.updateTime }}</td>
          <td>
            <a :href="policy.policyUrl" target="_blank">查看详情</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import * as XLSX from "xlsx";

export default {
  name: "PolicyList",
  data() {
    return {
      policies: [
        // 初始模拟数据
        {
          id: "10496",
          policyCode: "01121311",
          policyUrl:
            "https://www.54sdr.cn/wap/view?id=61318fef2d0edd70f6375d48",
          taxMajorCategories: "支持其他各项事业",
          taxMinorCategories: "交通运输",
          incomeType: "增值税",
          policyDoc:
            "《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号",
          preferentialTerms: "附件3第二条第（一）款",
          preferentialName: "管道运输服务增值税即征即退",
          createTime: "2023-12-27 17:34:52.0",
          updateTime: "2023-12-27 17:34:52.0",
        },
        {
          id: "10752",
          policyCode: "05049901",
          policyUrl:
            "https://www.54sdr.cn/wap/view?id=613189e18ecf7db883ec78d2",
          taxMajorCategories: "促进小微企业发展",
          taxMinorCategories: "其他",
          incomeType: "个人所得税",
          policyDoc:
            "《财政部 税务总局关于小微企业和个体工商户所得税优惠政策的公告》 财政部 税务总局公告2023年第6号",
          preferentialTerms: "第二条",
          preferentialName: "个体工商户减半征收经营所得个人所得税",
          createTime: "2023-12-27 17:34:52.0",
          updateTime: "2023-12-27 17:34:52.0",
        },
      ],
    };
  },
  methods: {
    handleExcelImport(event) {
      const file = event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const json = XLSX.utils.sheet_to_json(worksheet);
        this.policies = json; // 替换数据
      };
      reader.readAsArrayBuffer(file);
    },
  },
};
</script>

<style>
/* 你的样式 */
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f4f4f4;
}
</style>
