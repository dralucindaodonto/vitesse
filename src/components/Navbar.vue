<script setup>
import { darkTheme } from 'naive-ui'

import { defineEmits } from 'vue'
import { useStatefulComposable } from '../composables/naivedark'
const { globalState, updateValues }
        = useStatefulComposable()
const { t, availableLocales, locale } = useI18n()
const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <div class="px-4   text-center text-gray-700 dark:text-gray-200">
    <nav text-xl pb-16 mt-3>
      <div absolute flex-row flex justify-center top-6 pb-6 right-0 left-0 fw300 border-b-1 border-gray border-op-20>
        <RouterLink to="/">
          <span mx-2>Home</span>
        </RouterLink>
        <RouterLink to="/patients">
          <span mx-2>Pacientes</span>
        </RouterLink>

        <RouterLink class="icon-btn mx-2" to="/about" :title="t('button.about')">
          <div mx-2 i-carbon-dicom-overlay />
        </RouterLink>

        <n-button @click="send()">
          send
        </n-button>
        {{ isDark.value }}
        <button class="icon-btn mx-2 !outline-none" :title="t('button.toggle_dark')" @click="toggleDark(); updateValues(isDark.value)">
          <div i="carbon-sun dark:carbon-moon" />
        </button>
      </div>
    </nav>
  </div>
</template>
