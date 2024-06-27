<template>
  <div id="app">
    <el-col id="left" :span="4">
      <h3>ZjTest</h3>
      <el-menu default-active="/" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :router="true">
        <el-menu-item index="/">
          <i class="el-icon-setting"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>我的工作台</span>
          </template>
          <el-menu-item-group>
            <template slot="title">zj</template>
            <el-menu-item index="/zj-test1">测试1</el-menu-item>
            <el-menu-item index="/verify">验证码</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">baby</template>
            <el-menu-item index="/tuodong">表格拖动</el-menu-item>
            <el-menu-item index="/tuodong2">表格拖动2</el-menu-item>
            <el-menu-item index="/chatOnline">在线聊天</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">gjb</template>
            <el-menu-item index="/import-excel">导入excel</el-menu-item>
            <el-menu-item index="/dubang">杜邦分析图</el-menu-item>
            <el-menu-item index="echart">echart</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="3" @click="back()">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col id="main" :span="20">
      <router-view></router-view>
    </el-col>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    back() {
      // 返回按钮的逻辑
      this.$router.go(-1);
    },
  },
};
</script>

<style>
.el-menu {
  height: 100%;
}

#left {
  height: 100%;
}

#main {
  height: 100%;
}
</style>
