<script setup lang="ts">
 


import type { MenuOption } from 'naive-ui'
import { RouterLink } from 'vue-router'

const patient_id = '2';


const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: `/patients/${patient_id}`,

          },
        },
        { default: () => 'Perfil' },
      ),
    key: `/patients/${patient_id}`,
    //  icon: renderIcon(WorkIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: `/patients/${patient_id}/anamnese`,

          },
        },
        { default: () => 'Anamnese' },
      ),
    key: `/patients/${patient_id}/anamnese`,
    //  icon: renderIcon(WorkIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: `/patients/${patient_id}/budget`,

          },
        },
        { default: () => 'Orçamentos' },
      ),
    key: `/patients/${patient_id}/budget`,
    //  icon: renderIcon(WorkIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: `/patients/${patient_id}/payment`,

          },
        },
        { default: () => 'Pagamentos' },
      ),
    key: `/patients/${patient_id}/payment`,
    //  icon: renderIcon(WorkIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: `/patients/${patient_id}/treatment`,

          },
        },
        { default: () => 'Prontuário' },
      ),
    key: `/patients/${patient_id}/treatment`,
    //  icon: renderIcon(WorkIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: `/patients/${patient_id}/evolution`,

          },
        },
        { default: () => 'Evoluções' },
      ),
    key: `/patients/${patient_id}/evolution`,
    //  icon: renderIcon(WorkIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: `/patients/${patient_id}/file`,

          },
        },
        { default: () => 'Arquivos' },
      ),
    key: `/patients/${patient_id}/file`,
    //  icon: renderIcon(WorkIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: `/patients/${patient_id}/document`,

          },
        },
        { default: () => 'Documentos' },
      ),
    key: `/patients/${patient_id}/document`,
    //  icon: renderIcon(WorkIcon),
  },
]
</script>

<template>
  <div class="   dark:text-white ">
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
