<script lang="ts">
import { defineComponent, h,  ref } from 'vue'
import type { DataTableColumns } from 'naive-ui'
import {  NDropdown } from 'naive-ui'

const showDropdownRef = ref(false)
 

interface Song {
  no: number
  title: string
  length: string
}
const handleSelect = (key: string | number) => {
  // const message = useMessage()
  showDropdownRef.value = false
  console.log(key)
  // message.info(String(key))
}

const createColumns = (
  //   {
  //   play,
  // }: {
  //   play: (row: Song) => void
  // }
): DataTableColumns<Song> => {
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
        return h('div', { class: 'cursor-pointer' }, [h(NDropdown, {

          ref: 'refbus',
          trigger: 'hover',
          options: [
            {
              label: 'Jay Gatsby',
              key: 'jay gatsby',
            },
            {
              label: 'Daisy Buchanan',
              key: 'daisy buchanan',
            }],
          // onClick: (e) => {
          //   console.log('onclick', e, row)
          //   play(row, e)
          // },
          onSelect: (e) => {
            console.log('onselect', e, row)
            handleSelect(e)
          },

        }, { default: () => 'Menu' })])
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
 
    return {

      data,

      columns: createColumns(),

      pagination: false as const,
    }
  },
})
</script>

<template>
  <div>
    <n-card title="Orçamentos">
      <n-data-table :columns="columns" :data="data" :pagination="pagination" :bordered="false" />
    </n-card>
  </div>
</template>

<route lang="yaml">
meta:
  layout: patientlayout
</route>
