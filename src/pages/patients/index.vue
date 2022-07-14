
<script setup lang="ts">

type Patients = {
  avatar: string
  nome: string
  celular: string
}


const data: Patients[] = [
  { avatar: 'https://mdbcdn.b-cdn.net/img/new/avatars/8.webp', nome: 'Lucinda Aparecida de Siqueira Dias Monteiro Lobato', celular: '12991155566' },
  { avatar: 'https://mdbcdn.b-cdn.net/img/new/avatars/8.webp', nome: "Don't Look Back in Anger", celular: '' },
  { avatar: 'https://mdbcdn.b-cdn.net/img/new/avatars/8.webp', nome: 'Champagne Supernova', celular: '74354354327' }
]


</script>
<template>
  <section id="patientList">
    <div ma-15>
      <RouterLink to="/patients/1">
        <span mx-2>Paciente 1</span>
      </RouterLink>
	<p class="flex">
			<span class="mr-1">Icon imported from `@iconify-json/carbon`:</span>
      <!-- A basic anchor icon from Phosphor icons -->
<div class="i-ph-anchor-simple-thin" />
<!-- An orange alarm from Material Design Icons -->
<div class="i-mdi-alarm text-orange-400" />
<!-- A large Vue logo -->
<div class="i-ic-outline-whatsapp text-3xl" />
<!-- Sun in light mode, Moon in dark mode, from Carbon -->
<button class="i-carbon-sun dark:i-carbon-moon" />
<!-- Twemoji of laugh, turns to tear on hovering -->
<div class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy" />
			<a
				class="i-carbon-logo-github text-blue-600 hover:text-red-600 icon24 inline-icon"
				href="https://github.com/unocss/unocss"
				target="_blank"
			></a>
		</p>

      <n-card title="Pacientes">


        <n-space vertical>
          <n-table>
            <thead>
              <!-- <tr>
                  <th>Abandon</th>
                  <th>Abormal</th>
                  <th>Abolish</th>
                  <th>...</th>
                  <th>It's hard to learn words</th>
                </tr> -->
            </thead>
            <tbody>
              <tr v-for="(patient, i ) in data" :key="i">
                <td width="5%">
                  <n-avatar :size="48" :round="true" :src="patient.avatar" />
                </td>
                <td class="group" mx4 all:transition-400>{{ patient.nome }}

                  <span transicao>Perfil</span>
                  <span class="i-ic-outline-whatsapp" transicao> <span>Whatsapp</span></span>
                  <span transicao>Editar</span>
                  <span transicao>Deletar</span>
                </td>

              </tr>

            </tbody>
          </n-table>
        </n-space>

      </n-card>

    </div>
  </section>




</template>

<style scoped >
:deep(.n-data-table-th) {
  display: none;
}
</style>
 

<route lang="yaml">
meta:
  layout: main
</route>
