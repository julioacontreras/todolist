<template>
  <div class="group pl-4 pt-2 pb-2 flex items-center">
    <div class="w-12">
      <div class="opacity-0 group-hover:opacity-100" @click="checkAllTasks">
        <check :checked="checked" />
      </div>
    </div>
    <div class="flex flex-col flex-grow">
      <p class="w-full flex text-base text-primary justify-center font-semibold uppercase">
        Listado de tareas - {{ status }}
      </p>
    </div>
    <div class="w-12 flex justify-end pr-3">
      <div class="opacity-0 group-hover:opacity-100" @click="removeAllTasks">
        <close />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@vue/composition-api'
import { useTaskStore } from '../../store/tasks/index'
import Close from '../Displays/Close.vue'
import Check from '../Displays/Check.vue'

export default defineComponent({
  components: {
    Close,
    Check
  },
  setup () {
    const taskStore = useTaskStore()
    const checked = ref(false)

    const checkAllTasks = () => {
      checked.value = !checked.value
      taskStore.checkAll(checked.value)
    }

    const removeAllTasks = () => {
      taskStore.clear()
    }

    return {
      // methods
      checkAllTasks,
      removeAllTasks,
      // refs
      checked,
      status: computed(() => taskStore.status)
    }
  }
})
</script>
