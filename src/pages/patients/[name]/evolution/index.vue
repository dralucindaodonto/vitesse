<script lang="ts">
import { defineComponent, h } from 'vue'
import type { DataTableColumns } from 'naive-ui'
import { NButton, NTag, useMessage } from 'naive-ui'

interface RowData {
  key: number
  title: string
  value: number
  date: string
  dentist: string[]
}

const createColumns = ({
  sendMail,
}: {
  sendMail: (rowData: RowData) => void
}): DataTableColumns<RowData> => {
  return [
    {
      type: 'selection',
    },
    {
      type: 'expand',
      expandable: rowData => rowData.title !== 'Jim Green',
      renderExpand: (rowData) => {
        return `${rowData.title} is a good guy.`
      },
    },
    {
      title: 'Título',
      key: 'title',
    },
    {
      title: 'Dentes',
      key: 'value',
    },
    {
      title: 'Data',
      key: 'date',
    },
    {
      title: 'Dentista',
      key: 'dentist',

    },
    {
      title: 'Action',
      key: 'actions',
      render(row) {
        return h(
          NButton,
          {
            size: 'small',
            onClick: () => sendMail(row),
          },
          { default: () => 'Send Email' },
        )
      },
    },
  ]
}

const createData = (): RowData[] => [
  {
    key: 0,
    title: 'Tratamento de Canal',
    value: 32,
    date: '01/01/2022',
    dentist: 'Dra Luicinda',
  },
  {
    key: 1,
    title: 'Clareamento',
    value: 42,
    date: '01/01/2022',
    dentist: 'Dr Wolf',
  },
  {
    key: 2,
    title: 'Facetas de porcelana',
    value: 32,
    date: '01/01/2022',
    dentist: 'Dra Luicinda',
  },
]

export default defineComponent({
  setup() {
    const message = useMessage()
    return {
      data: createData(),
      columns: createColumns({
        sendMail(rowData) {
          message.info(`send mail to ${rowData.title}`)
        },
      }),
      pagination: {
        pageSize: 10,
      },
    }
  },
})
</script>

<template>
  <div>
    <n-card title="Evoluções">
      <n-data-table
        :columns="columns"
        :data="data"
        :pagination="pagination"
        default-expand-all
      />
    </n-card>
  </div>
</template>

<route lang="yaml">
meta:
  layout: patientlayout
</route>
