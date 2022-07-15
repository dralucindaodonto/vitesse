
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


      <n-card title="Pacientes">
        <div vertical>
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

                <td class="align-center" justify="start">
                  <n-avatar :size="48" :round="true" :src="patient.avatar" />
                  <n-button size="small" quaternary round type="primary">
                    <template #icon>

                      <div class="i-mdi-alarm text-orange-400" />

                    </template>

                    {{ patient.nome }}
                  </n-button>



                  <n-button size="small" quaternary round type="primary">
                    <template #icon>

                      <div class="i-mdi-alarm text-orange-400" />

                    </template>

                    Perfil x
                  </n-button>

                  <n-button size="small" quaternary round type="primary">
                    <template #icon>

                      <div class="i-mdi-alarm text-orange-400" />

                    </template>

                    Perfil x
                  </n-button>
                  <n-button size="small" quaternary round type="primary">
                    <template #icon>

                      <div class="i-mdi-alarm text-orange-400" />

                    </template>

                    Perfil x
                  </n-button>
                  <n-button size="small" quaternary round type="primary">
                    <template #icon>

                      <div class="i-mdi-alarm text-orange-400" />

                    </template>

                    Perfil x
                  </n-button>
     
                </td>\
                <td>aaaaaaa</td>



              </tr>

            </tbody>
          </n-table>
        </div>

      </n-card>

    </div>
  </section>




</template>

<style scoped >
 
.n-table tbody>tr>td {

  display: flex;
  flex-direction: row;                                        
  justify-content: start;

  align-items: flex-start;
  justify-items: start;

  padding-top: 4px !important;


}
</style>
 

<route lang="yaml">
meta:
  layout: main
</route>
