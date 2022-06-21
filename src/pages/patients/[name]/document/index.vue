<script lang="ts">
import { defineComponent, h } from 'vue'
import type { DataTableColumns } from 'naive-ui'
import { NButton, useMessage } from 'naive-ui'

interface Song {
  no: number
  title: string
  length: string
}

const createColumns = ({
  play,
}: {
  play: (row: Song) => void
}): DataTableColumns<Song> => {
  return [
    {
      title: 'No',
      key: 'no',
    },
    {
      title: 'Title',
      key: 'title',
    },
    {
      title: 'Length',
      key: 'length',
    },
    {
      title: 'Action',
      key: 'actions',
      render(row) {
        return h(
          NButton,
          {
            strong: true,
            tertiary: true,
            size: 'small',
            onClick: () => play(row),
          },
          { default: () => 'Play' },
        )
      },
    },
  ]
}

const data: Song[] = [
  { no: 3, title: 'Wonderwall', length: '4:18' },
  { no: 4, title: 'Don\'t Look Back in Anger', length: '4:48' },
  { no: 12, title: 'Champagne Supernova', length: '7:27' },
]

export default defineComponent({
  setup() {
    const message = useMessage()
    return {
      data,
      columns: createColumns({
        play(row: Song) {
          message.info(`Play ${row.title}`)
        },
      }),
      pagination: false as const,
    }
  },
})
</script>

<template>
  <n-card title="Documentos">
    <n-space pb-6>
      <n-button>Novo documento</n-button>
      <n-button>Nova receita</n-button>
      <n-button>Novo atestado</n-button>
    </n-space>
    <n-data-table
      :columns="columns"
      :data="data"
      :pagination="pagination"
      :bordered="false"
    />
  </n-card>
</template>

<route lang="yaml">
meta:
  layout: patientlayout
</route>
