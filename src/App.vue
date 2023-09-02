<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="container">
    <i class="iconify icon" data-icon="ic:baseline-10k"></i>
    <Icon class="vue-icon" icon="ic:baseline-10k"/>
    <Icon icon="my:ab-testing"></Icon>
    <i class="iconify" data-icon="my:ab-testing"></i>
    <span class="hello">Hello</span>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  height: 50px;
  background-color: pink;
}

.icon {
  /* background: skyblue; */
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.vue-icon {
  width: 30px;
  height: 30px;
  color: red;
}

.hello {
  font-size: 30px;
}
</style>
