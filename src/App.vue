<script setup lang="ts">
import { useStatefulComposable } from './composables/naivedark'
const { globalState, updateValues }
         = useStatefulComposable()
onMounted(() => {
  updateValues(isDark.value)
})
const themeOverrides
= {
  GradientText: {
    colorStartPrimary: 'rgba(91, 119, 104, 0.6)',
  },
  common: {
    // borderColor: 'rgb(224, 224, 230)',
  },
  Card: {
    borderColor: 'rgba(155, 155, 155, 0.25)',
  },
}

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Vitesse',
  meta: [
    { name: 'description', content: 'Opinionated Vite Starter Template' },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#00aba9' : '#ffffff'),
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: computed(() => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg'),
    },
  ],
})
</script>

<template>
  <n-config-provider :theme="globalState.someString" :theme-overrides="themeOverrides">
    <n-loading-bar-provider>
      <n-message-provider>
        <n-notification-provider>
          <n-dialog-provider>
            <RouterView />
          </n-dialog-provider>
        </n-notification-provider>
      </n-message-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>
