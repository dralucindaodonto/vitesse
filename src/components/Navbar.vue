<script setup lang='ts'>
import { NIcon, darkTheme } from 'naive-ui'
import type { Component } from 'vue'
import { defineComponent, h, ref } from 'vue'
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
    //  icon: renderIcon(WorkIcon),
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
    //  icon: renderIcon(WorkIcon),
  },
  {
    label: () =>
      h(
        'div',
        {
          onClick: () => {

          },
        },
        { default: () => 'Clínica' },
      ),
    key: 'clinic',
    //  icon: renderIcon(WorkIcon),
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
    //  icon: renderIcon(WorkIcon),
  },

]
</script>

<template>
  <div class="px-4 bg-dark pt-2 text-center text-gray-700 dark:text-white border-b-1 border-gray border-op-20">
    <nav text-xl pb-3>
      <n-space justify="space-between">
        <div pt-1>
          <n-button>Le Doctor</n-button>
        </div>
        <div>
          <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
        </div>

        <button class="icon-btn mt-2 " @click="toggleDark(); updateValues(isDark.value)">
          <div i="carbon-sun dark:carbon-moon" />
        </button>
      </n-space>
      <!-- <div absolute flex-row flex justify-center>
        <div>
          <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
        </div>
        <div>
          <button class="icon-btn mt-2 " @click="toggleDark(); updateValues(isDark.value)">
            <div i="carbon-sun dark:carbon-moon" />
          </button>
        </div>
      </div> -->
    </nav>
  </div>
</template>
