<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const checkedValueRef = ref<string | null>(null)

    return {

      checkedValue: checkedValueRef,
      handleChange(e: Event) {
        checkedValueRef.value = (e.target as HTMLInputElement).value
      },
    }
  },
})
</script>

<template>
  <div>
    <div pa-5>
      Você tem alergias ? Quais?
    </div>
    <n-space px-5>
      <n-radio
        :checked="checkedValue === 'Definitely Maybe'"
        value="Definitely Maybe"
        name="basic-demo"
        @change="handleChange"
      >
        Sim
      </n-radio>
      <n-radio
        :checked="checkedValue === 'Be Here Now'"
        value="Be Here Now"
        name="basic-demo"
        @change="handleChange"
      >
        Não
      </n-radio>
    </n-space>
    <n-space vertical>
      <n-space>
        <n-button>
          Dark
        </n-button>
        <n-button>
          Light
        </n-button>
      </n-space>

      <n-card>
        <n-el
          tag="span"
          style="color: var(--primary-color); transition: .3s var(--cubic-bezier-ease-in-out);"
        >
          I am a Span.
        </n-el>
        <!-- A basic anchor icon from Phosphor icons -->
        <!-- An orange alarm from Material Design Icons -->
        <div class="i-mdi-alarm text-orange-400" />
        <!-- A large Vue logo -->
        <!-- Sun in light mode, Moon in dark mode, from Carbon -->
        <button class="i-carbon-sun dark:i-carbon-moon" />
        <!-- Twemoji of laugh, turns to tear on hovering -->
      </n-card>
    </n-space>
  </div>
</template>

<route lang="yaml">
meta:
  layout: patientlayout
</route>
