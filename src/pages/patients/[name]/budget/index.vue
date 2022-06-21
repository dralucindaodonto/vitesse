<script setup lang="ts">
import { defineComponent, h } from 'vue'
import type { DataTableColumns } from 'naive-ui'
import { NButton, NDropdown, NIcon, NTag, useMessage } from 'naive-ui'
import type { Component } from 'vue'
import {
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon,
  PersonCircleOutline as UserIcon,
} from '@vicons/ionicons5'
const message = useMessage()
const renderIcon = (icon: Component) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon),
    })
  }
}

const handleSelect = (key: string | number) => {
  message.info(String(key.title))
}

const createData = (): RowData[] => [
  {
    key: 0,
    title: 'John Brown',
    value: 32,
    date: '10/10/2022',
    // tags: ['nice', 'developer'],
  },
  {
    key: 1,
    title: 'Jim Green',
    value: 42,
    date: '10/10/2022',
    // tags: ['wow'],
  },
  {
    key: 2,
    title: 'Joe Black',
    value: 32,
    date: '10/10/2022',
    // tags: ['cool', 'teacher'],
  },
]

interface RowData {
  key: number
  title: string
  value: number
  date: string

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
        return h(NDropdown,
          {
            onSelect: () => handleSelect(row),
            options: [
              {
                label: 'Profile',
                key: 'profile',
                icon: renderIcon(UserIcon),
              },
              {
                label: 'Edit',
                key: 'editProfile',
                icon: renderIcon(EditIcon),
              },
              {
                label: 'Logout',
                key: 'logout',
                icon: renderIcon(LogoutIcon),
              },
            ],
          },
          h(
            NButton,
            {
              size: 'small',

            },
            { default: () => 'Send Email' },
          ),

        )

        // return
      },
    },
  ]
}
// export default defineComponent({
//   setup() {
//     return {

//   },
// })
const data = createData()
const columns = createColumns({
  sendMail(rowData) {

  },
})
const pagination = {
  valueSize: 10,
}
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
