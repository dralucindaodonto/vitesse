<script setup lang='ts'>
import { NIcon, darkTheme } from 'naive-ui'
import type { Component } from 'vue'
import { defineComponent, defineEmits, h, ref } from 'vue'
import { RouterLink } from 'vue-router'
import type { MenuOption } from 'naive-ui'
import {
  LogOutOutline as HomeIcon,
  SunnyOutline as Sunny,
  LaptopOutline as WorkIcon,
} from '@vicons/ionicons5'
import { useStatefulComposable } from '../composables/naivedark'

const { globalState, updateValues }
        = useStatefulComposable()
const { t, availableLocales, locale } = useI18n()
const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const activeKey = ref<string | null>(null)

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/',

          },
        },
        { default: () => 'Home' },
      ),
    key: 'home',
    icon: renderIcon(WorkIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/patients',

          },
        },
        { default: () => 'Pacientes' },
      ),
    key: 'patients',
    icon: renderIcon(WorkIcon),
  },
  {
    label: () =>
      h(
        'div',
        {
          onClick: () => {
            console.log('clinica clicked')
          },
        },
        { default: () => 'Clínica' },
      ),
    key: 'clinic',
    icon: renderIcon(WorkIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/config',

          },
        },
        { default: () => 'Configurações' },
      ),
    key: 'config',
    icon: renderIcon(WorkIcon),
  },
  {
    label: () =>
      h(
        'button', {
          class: 'pt-2',

          onClick: () => {
            console.log('clinica clicked')
            toggleDark()
            updateValues(isDark.value)
          },
        },
        h('div', { i: 'carbon-sun dark:carbon-moon' }),

      ),
    key: 'sunny',

  },
// SunnyOutline
]
</script>

<template>
  <div class="px-4   text-center text-gray-700 dark:text-gray-200">
    <nav text-xl pb-16 mt-3>
      <div absolute flex-row flex justify-center top-6 pb-3 right-0 left-0 fw300 border-b-1 border-gray border-op-20>
        <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
      </div>
    </nav>
  </div>
</template>
