<template>
  <div class="group pl-4 pt-2 pb-2 flex items-center">
    <div
      class="w-12"
      @click="checkTask(id, !checked)"
    >
      <check :checked="checked" />
    </div>
    <div class="flex flex-grow">
      <p
        class="text-base"
        :class="{
          'line-through': checked
        }"
      >
        {{ label }}
      </p>
    </div>
    <div class="w-12 flex justify-end">
      <div class="opacity-0 group-hover:opacity-100" @click="removeTask(id)">
        <close />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useTaskStore } from '../../store/tasks/index'
import Close from '../Displays/Close.vue'
import Check from '../Displays/Check.vue'

export default defineComponent({
  components: {
    Close,
    Check
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    checked: {
      type: Boolean,
      required: true
    }
  },
  setup () {
    const taskStore = useTaskStore()

    const checkTask = (id: number, checked: boolean) => {
      taskStore.check(id, checked)
    }

    const removeTask = (id: number) => {
      taskStore.remove(id)
    }

    return {
      // methods
      checkTask,
      removeTask
    }
  }
})
</script>
