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
      <div class="mt-10  mx-auto text-center opacity-75 dark:opacity-50 text-sm text-gray-900 dark:text-gray-200">
        <RouterView />
      </div>
    </n-config-provider>
  </div>
</template>

