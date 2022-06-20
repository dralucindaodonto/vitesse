<script lang="ts">
import { defineComponent, h } from 'vue'
import type { DataTableColumns } from 'naive-ui'
import { NButton, NTag } from 'naive-ui'

const createData = (): RowData[] => [
  {
    key: 0,
    title: 'John Brown',
    value: 32,
    date: '10/10/2022',
    tags: ['nice', 'developer'],
  },
  {
    key: 1,
    title: 'Jim Green',
    value: 42,
    date: '10/10/2022',
    tags: ['wow'],
  },
  {
    key: 2,
    title: 'Joe Black',
    value: 32,
    date: '10/10/2022',
    tags: ['cool', 'teacher'],
  },
]

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
      expandable: rowData => rowData.name !== 'Jim Green',
      renderExpand: (rowData) => {
        return 'Procedimentos'
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

    //   render(row) {
    //     const tags = row.tags.map((tagKey) => {
    //       return h(
    //         NTag,
    //         {
    //           style: {
    //             marginRight: '6px',
    //           },
    //           type: 'info',
    //           bordered: false,
    //         },
    //         {
    //           default: () => tagKey,
    //         },
    //       )
    //     })
    //     return tags
    //   },

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
          { default: () => 'Aprovar' },
        )
      },
    },
  ]
}
export default defineComponent({
  setup() {
    return {
      data: createData(),
      columns: createColumns({
        sendMail(rowData) {

        },
      }),
      pagination: {
        valueSize: 10,
      },
    }
  },
})
</script>

<template>
  <n-data-table
    :columns="columns"
    :data="data"
    :pagination="pagination"
    default-expand-all
  />
</template>

<route lang="yaml">
meta:
  layout: patientlayout
</route>
