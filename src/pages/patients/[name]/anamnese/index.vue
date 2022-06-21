<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const checkedValueRef = ref<string | null>(null)

    return {
      SelectAnamnese: ref('song0'),
      options: [
        {
          label: 'Anamnese padrão do sistema',
          value: 'song0',
          selected: true,
        },
        {
          label: 'Anamnese de perguntas pessoais',
          value: 'song1',
        },
        {
          label: 'Anamnese 3',
          value: 'song2',
        },
        {
          label: 'Anamnese 4',
          value: 'song3',

        },

      ],

      checkedValue: checkedValueRef,
      handleChange(e: Event) {
        checkedValueRef.value = (e.target as HTMLInputElement).value
      },
    }
  },
})
</script>

<template>
  <n-card title="Anamnese">
    <div>
      <n-space vertical>
        <n-select v-model:value="SelectAnamnese" :options="options" :consistent-menu-width="false" />
      </n-space>
      <div pa-5>
        Você tem alergias ? Quais?
        <n-space py-2>
          <n-radio
            :checked="checkedValue === 'Definitely Maybe'"
            value="Definitely Maybe"
            name="basic-demo"
            @change="handleChange"
          >
            Sim
          </n-radio>
          <n-radio
            :checked="checkedValue === 'Be Here Now'"
            value="Be Here Now"
            name="basic-demo"
            @change="handleChange"
          >
            Não
          </n-radio>
        </n-space>

        <n-space vertical>
          <n-input type="text" placeholder="Resposta" />
        </n-space>
      </div>
    </div>
  </n-card>
</template>

<route lang="yaml">
meta:
  layout: patientlayout
</route>
