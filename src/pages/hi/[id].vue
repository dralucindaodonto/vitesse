<script setup lang="ts">
import { darkTheme } from 'naive-ui'
const props = defineProps<{ name: string }>()
const router = useRouter()
const user = useUserStore()
const { t } = useI18n()

watchEffect(() => {
  user.setNewName(props.name)
})

const nameinfo = { fullname: { name: 'renato', age: '30' } }
</script>

<template>
  <div>
    <div>
      <n-button>Defa asd sadsa dsadult nameinfo. {{ nameinfo.fullname.age }}</n-button>
    </div>
    <div text-4xl text-center>
      <n-space>
        <n-collapse :theme="darkTheme">
          <div>
            <n-collapse-item title="right" name="1">
              <div>goo dasdd</div>
            </n-collapse-item>
            <n-collapse-item title="right" name="2">
              <div>nice</div>
            </n-collapse-item>
            <n-collapse-item title="right" name="3">
              <div>very good</div>
            </n-collapse-item>
          </div>
        </n-collapse>
        <n-tag>Real Love</n-tag>
        <n-tag type="success">
          Yes It Is
        </n-tag>
        <n-tag type="warning">
          I'm Down
        </n-tag>
        <n-tag type="error">
          Yesterday
        </n-tag>
        <n-tag type="info">
          I'm Looking Through You
        </n-tag>
      </n-space>
      <div i-carbon-pedestrian inline-block />
      dsadasdas asdasdas
    </div>

    <p>
      {{ t('intro.hi', { name: props.name }) }}
    </p>

    <p text-sm opacity-75>
      <em>{{ t('intro.dynamic-route') }}</em>
    </p>

    <template v-if="user.otherNames.length">
      <p text-sm mt-4>
        <span opacity-75>{{ t('intro.aka') }}:</span>
        <ul>
          <li v-for="otherName in user.otherNames" :key="otherName">
            <router-link :to="`/hi/${otherName}`" replace>
              {{ otherName }}
            </router-link>
          </li>
        </ul>
      </p>
    </template>

    <div>
      <n-button
        :theme="darkTheme"
        mt-8 text-sm
        @click="router.back()"
      >
        vOLTAR
      </n-button>
    </div>
  </div>
</template>
