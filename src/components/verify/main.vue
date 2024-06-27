<template>
  <div>
    <el-row>
      <el-col :span="12">
        <el-card style="height: 200px"
          ><span>常规验证码</span>
          <Verify
            @success="alert('success')"
            @error="alert('error')"
            :type="1"
          ></Verify>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card style="height: 200px"
          ><span>运算验证码</span>
          <Verify
            @success="alert('success')"
            @error="alert('error')"
            :type="2"
          ></Verify>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-card
          ><span>滑动验证码</span>
          <Verify
            @success="alert('success')"
            @error="alert('error')"
            :type="3"
            :vOffset="5"
            :barSize="{
              width: '100%',
              height: '40px',
            }"
            :showButton="false"
          ></Verify>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-card
          ><span>拼图验证码</span>
          <Verify
            @success="alert('success')"
            @error="alert('error')"
            :type="4"
            :showButton="false"
            :imgUrl="imgUrl"
          ></Verify>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card
          ><span>选字验证码</span>
          <Verify
            @success="alert('success')"
            @error="alert('error')"
            :type="5"
            :showButton="false"
            :imgUrl="imgUrl"
          ></Verify>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Verify from "vue2-verify";

export default {
  name: "app",
  data() {
    return {
      imgUrl:
        "https://img2.baidu.com/it/u=1814561676,2470063876&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500",
    };
  },
  methods: {
    alert(text) {
      alert(text);
    },
  },
  components: {
    Verify,
  },
};
</script>
<style></style>
