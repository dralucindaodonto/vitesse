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
            path: '/patients/1/anamnese',

          },
        },
        { default: () => 'Orçamentos' },
      ),
    key: '/patients/1/orcamentos',
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
        { default: () => 'Pagamentos' },
      ),
    key: '/patients/1/pagamentos',
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
        { default: () => 'Prontuário' },
      ),
    key: '/patients/1/prontuario',
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
        { default: () => 'Evoluções' },
      ),
    key: '/patients/1/evolucoes',
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
        { default: () => 'Arquivos' },
      ),
    key: '/patients/1/arquivos',
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
        { default: () => 'Documentos' },
      ),
    key: '/patients/1/documentos',
    //  icon: renderIcon(WorkIcon),
  },
]
</script>

<!-- <script>
export default {
  name: 'LightWithIconsAtBottom',
  data() {
    return {
      moved: true,
    }
  },
  methods: {
    sidebarHandler() {
      const sideBar = document.getElementById('mobile-nav')
      sideBar.style.transform = 'translateX(-260px)'
      if (this.$data.moved) {
        sideBar.style.transform = 'translateX(0px)'
        this.$data.moved = false
      }
      else {
        sideBar.style.transform = 'translateX(-260px)'
        this.$data.moved = true
      }
    },
  },
}
</script> -->

<template>
  <div class="text-center   dark:text-white ">
    <Navbar />
  </div>
  <section text-gray-900 dark:text-white>
    <div class="flex flex-no-wrap">
      <!-- Sidebar starts -->
      <!-- Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] -->
      <div class="min-w-76 absolute relative bg-dark h-250 flex-col justify-between hidden sm:flex  border-r-1 border-gray border-op-20">
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
        <n-card>
          <RouterView />
        </n-card>
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
