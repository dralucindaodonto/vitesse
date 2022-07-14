
<script lang="ts">
import { h, defineComponent } from 'vue'
import { NButton, useMessage, DataTableColumns, NAvatar } from 'naive-ui'

type Patient = {
  avatar: string
  title: string
  links: string
}

const createColumns = ({
  play
}: {
  play: (row: Patient) => void
}): DataTableColumns<Patient> => {
  return [
    {
      //title: 'Avatar',
      key: 'avatar',
      width: 75,
      render(row) {
        return h('div', {}, [h(
          NAvatar,
          {
            round: true,
            size: 45,
            src: row.avatar,
            onClick: () => console.log('avatar', row)
          },

        )])


      }
    },
    {
      // title: 'Title',
      key: 'title',
      render(row) {
        return [h(
          'div',
          {
            'op30': true,
            'text-lg': true,
            'innerHTML': row.title,
            onClick: () => console.log('title', row)
          },

        ),
        h(
          'div',
          {
            'op30': true,
            'text-lg': true,
            'innerHTML': row.title,
            onClick: () => console.log('title', row)
          },

        )]
      }
    },
    {
      //  title: 'Links',
      key: 'links',
      render(row) {
        return h('div', { 'class': 'flex flex-row' }, [h(
          'div',
          {

            'op30': true,
            'text-lg': true,
            'innerHTML': row.title,
            onClick: () => console.log('title', row)
          },

        ),
        h(
          'div',
          {
            'op30': true,
            'text-lg': true,
            'innerHTML': row.title,
            onClick: () => console.log('title', row)
          },

        )])
      }
    },
    {
      //  title: 'Action',
      key: 'actions',
      render(row) {
        return h(
          NButton,
          {
            strong: true,
            tertiary: true,
            size: 'small',
            onClick: () => play(row)
          },
          { default: () => 'Play' }
        )
      }
    }
  ]
}

const data: Patient[] = [
  { avatar: 'https://mdbcdn.b-cdn.net/img/new/avatars/8.webp', title: 'Wonderwall', links: '4:18' },
  { avatar: 'https://mdbcdn.b-cdn.net/img/new/avatars/8.webp', title: "Don't Look Back in Anger", links: '4:48' },
  { avatar: 'https://mdbcdn.b-cdn.net/img/new/avatars/8.webp', title: 'Champagne Supernova', links: '7:27' }
]

export default defineComponent({
  setup() {
    const message = useMessage()
    return {
      data,
      columns: createColumns({
        play(row: Patient) {
          message.info(`Play ${row.title}`)
        }
      }),
      pagination: false as const
    }
  }
})
</script>
<template>
   <section id="patientList"> 
    <div ma-15>
      <RouterLink to="/patients/1">
        <span mx-2>Paciente 1</span>
      </RouterLink>
     
      <n-card title="Pacientes">
        <n-data-table class="n-table-remove-thead" striped :columns="columns" :data="data" :pagination="pagination"
          :bordered="false" />
      </n-card>
 
    </div>
       </section>




</template>

<style scoped >
 
  :deep(.n-data-table-th){
  display:none;
  }

 
 
 

</style>
 

<route lang="yaml">
meta:
  layout: main
</route>
