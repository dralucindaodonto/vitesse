<script setup lang="ts">
import { NIcon, darkTheme } from 'naive-ui'

import type { Component } from 'vue'
import { defineComponent, h } from 'vue'

import type { MenuOption } from 'naive-ui'
import { RouterLink } from 'vue-router'

import {
  LogOutOutline as HomeIcon,
  LaptopOutline as WorkIcon,
} from '@vicons/ionicons5'

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/patients/1',

          },
        },
        { default: () => 'Perfil' },
      ),
    key: '/patients/1',
    //  icon: renderIcon(WorkIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/patients/1/anamnese',

          },
        },
        { default: () => 'Anamnese' },
      ),
    key: '/patients/1/anamnese',
    //  icon: renderIcon(WorkIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/patients/1/budget',

          },
        },
        { default: () => 'Orçamentos' },
      ),
    key: '/patients/1/budget',
    //  icon: renderIcon(WorkIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/patients/1/payment',

          },
        },
        { default: () => 'Pagamentos' },
      ),
    key: '/patients/1/payment',
    //  icon: renderIcon(WorkIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/patients/1/treatment',

          },
        },
        { default: () => 'Prontuário' },
      ),
    key: '/patients/1/treatment',
    //  icon: renderIcon(WorkIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/patients/1/evolution',

          },
        },
        { default: () => 'Evoluções' },
      ),
    key: '/patients/1/evolution',
    //  icon: renderIcon(WorkIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/patients/1/file',

          },
        },
        { default: () => 'Arquivos' },
      ),
    key: '/patients/1/file',
    //  icon: renderIcon(WorkIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/patients/1/document',

          },
        },
        { default: () => 'Documentos' },
      ),
    key: '/patients/1/document',
    //  icon: renderIcon(WorkIcon),
  },
]
</script>

<template>
  <div class="text-center   dark:text-white ">
    <Navbar />
  </div>
  <section text-gray-900 dark:text-white>
    <div class="flex flex-no-wrap">
      <!-- Sidebar starts -->
      <!-- Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] -->
      <div class="min-w-76 absolute relative bg-dark h-250 flex-col justify-between flex  border-r-1 border-gray border-op-27">
        <div class="px-8 pt-14">
          <div class="text-center   dark:text-white ">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
              class="rounded-full w-32 mb-4 mx-auto"
              alt="Avatar"
            >
            <h5 class="text-xl font-medium leading-tight mb-2 ">
              John Doe
            </h5>
            <p class="text-gray-500">
              Web designer
            </p>
          </div>

          <n-menu pl-6 :options="menuOptions" />
        </div>
      </div>

      <div class="container mx-auto py-10 md:w-4/5 w-11/12 px-6">
        <RouterView />
      </div>
    </div>
  </section>
</template>

<style scoped>
.n-layout-header {
  padding: 24px;
}

.n-layout-footer {
  padding: 24px;
}
</style>
