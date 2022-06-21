<script lang="ts">
import { defineComponent, h, nextTick, ref } from 'vue'
import type { DataTableColumns } from 'naive-ui'
import { NButton, useMessage } from 'naive-ui'

const showDropdownRef = ref(false)
const xRef = ref(0)
const yRef = ref(0)

const handleContextMenu = (e: MouseEvent) => {
  e.preventDefault()
  showDropdownRef.value = false
  nextTick().then(() => {
    showDropdownRef.value = true
    xRef.value = e.clientX
    yRef.value = e.clientY
  })
}

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
        return h('div', {}, [h(NButton, {

          onClick: (e) => {
            console.log(e)
            play(row, e)
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

const options = [
  {
    label: 'Jay Gatsby',
    key: 'jay gatsby',
  },
  {
    label: 'Daisy Buchanan',
    key: 'daisy buchanan',
  },

]
export default defineComponent({
  setup() {
    const message = useMessage()

    return {

      handleSelect(key: string | number) {
        showDropdownRef.value = false
        message.info(String(key))
      },

      onClickoutside() {
        message.info('clickoutside')
        showDropdownRef.value = false
      },

      options,
      showDropdown: showDropdownRef,
      x: xRef,
      y: yRef,
      data,

      columns: createColumns({
        play(row: Song, e: MouseEvent | KeyboardEvent) {
          message.info(`Play ${row.title} - ${e}`)
          handleContextMenu (e)
        },
      }),

      pagination: false as const,
    }
  },
})
</script>

<template>
  <n-data-table
    :columns="columns"
    :data="data"
    :pagination="pagination"
    :bordered="false"
  />
  <n-dropdown
    placement="bottom-start"
    trigger="manual"
    :x="x"
    :y="y"
    :options="options"
    :show="showDropdown"
    :on-clickoutside="onClickoutside"
    @select="handleSelect"
  />
</template>

<route lang="yaml">
meta:
  layout: patientlayout
</route>
