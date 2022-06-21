<script lang="ts">
import { defineComponent, h } from 'vue'
import type { DataTableColumns } from 'naive-ui'
import { NButton, NTag, useMessage } from 'naive-ui'

interface RowData {
  key: number
  title: string
  value: number
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
      title: 'Título',
      key: 'title',
    },
    {
      title: 'Valor',
      key: 'value',
    },
    {
      title: 'Data',
      key: 'date',
    },
    {
      title: 'Situação',
      key: 'tags',
      render(row) {
        const tags = row.tags.map((tagKey) => {
          return h(
            NTag,
            {
              style: {
                marginRight: '6px',
              },
              type: 'info',
              bordered: false,
            },
            {
              default: () => tagKey,
            },
          )
        })
        return tags
      },
    },
    {
      title: 'Ação',
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
    title: 'Parcela 1/3',
    value: 32,
    date: '01/01/2022',
    tags: ['pago'],
  },
  {
    key: 1,
    title: 'Parcela 2/3',
    value: 42,
    date: '01/01/2022',
    tags: ['aberto'],
  },
  {
    key: 2,
    title: 'Parcela 3/3',
    value: 32,
    date: '01/01/2022',
    tags: ['pago'],
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
    <n-card title="Pagamentos">
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
