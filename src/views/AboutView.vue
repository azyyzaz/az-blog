<template>
  <div class="about">

    <h1>This is an about page</h1>
    <el-input v-model="input" placeholder="Please input" />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
<script setup lang="ts">
import { ref } from 'vue'
const input = ref('啊P在家吗?')

</script>