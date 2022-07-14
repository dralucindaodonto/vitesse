<script setup>
import { defineComponent, ref } from 'vue'
import { darkTheme } from 'naive-ui'
import { useStatefulComposable } from '../composables/naivedark'
const { globalState, updateValues }
        = useStatefulComposable()
function receive() {

}
</script>

<template>
  <div>
    <n-config-provider :theme="globalState.someString">
      <Navbar />
      <div class="mt-10 text-sm text-gray-900 dark:text-white">
        <RouterView />
      </div>
    </n-config-provider>
  </div>
</template>

