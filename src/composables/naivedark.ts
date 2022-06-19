import { reactive, ref } from 'vue'

import { darkTheme } from 'naive-ui'
const globalState = reactive({
  someString: darkTheme,
  someBoolean: false,
})

export const useStatefulComposable = () => {
  const localState = reactive({
    someString: darkTheme,
    someBoolean: false,
  })

  const updateValues = (bValue: boolean) => {
    console.log('result:', bValue)
    if (bValue === true) {
      globalState.someBoolean = true
      globalState.someString = darkTheme
    }
    else {
      globalState.someBoolean = false
      globalState.someString = null
    }
  }

  return {
    darkTheme,
    theme: ref(null),
    globalState,
    localState,
    updateValues,
  }
}
