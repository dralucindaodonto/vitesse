<template>
  <main>
    <div>
      <div>outros links ....</div>
    </div>
    <div>
      <div class="mt-5 mx-auto text-center opacity-75 dark:opacity-50 text-sm">
        <span mx-2>menu direita</span>
        <RouterView />
      </div>
    </div>
  </main>
</template>

<route lang="yaml">
meta:
  layout: patientlayout
</route>
