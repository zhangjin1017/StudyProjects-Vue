<template>
  <div>
    <div class="test" :style="[is ? { backgroundColor: 'red' } : '', bg]">
      这是测试页面
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const is = ref(true);
const bg = ref({ backgroundColor: "green" });
setInterval(() => {
  is.value = !is.value;
}, 1000);
</script>
<style>
.test {
  height: 50px;
  width: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 40px;
}
</style>
