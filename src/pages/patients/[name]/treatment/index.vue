<script lang="ts">
import { defineComponent, h } from 'vue'
import type { DataTableColumns } from 'naive-ui'
import { NButton, NTag, useMessage } from 'naive-ui'

interface RowData {
  dentist: string
  key: number
  title: string
  category: number
  date: string
  tags: string[]
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
      title: 'Tratamento',
      key: 'title',
    },
    {
      title: 'Age',
      key: 'category',
    },
    {
      title: 'Address',
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
          { default: () => 'Finalizar' },
        )
      },
    },
  ]
}

const createData = (): RowData[] => [
  {
    key: 0,
    title: 'Tratamento de Canal',
    category: 32,
    date: '01/01/2022',
    dentist: 'Dra Lucinda',
  },
  {
    key: 1,
    title: 'Clareamento',
    category: 42,
    date: '01/01/2022',
    dentist: 'Dra Lucinda',
  },
  {
    key: 2,
    title: 'Facetas de porcelana',
    category: 32,
    date: '01/01/2022',
    dentist: 'Dra Lucinda',
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
    <n-card title="Prontuário">
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
