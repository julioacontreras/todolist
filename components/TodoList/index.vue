<template>
  <div class="w-96 h-min-96 relative mx-auto pt-3 bg-white shadow lg:-top-16 sm:-top-9 z-10">
    <b-field class="px-3">
      <b-input
        v-model="nameTask"
        placeholder="Digite su nueva tarea"
        type="text"
        icon="check-circle"
        icon-right="plus-circle"
        icon-right-clickable
        @icon-right-click="createTask()"
        @keyup.native.enter="createTask()"
      />
    </b-field>
    <div v-if="tasks.length === 0" class="px-3">
      <no-tasks />
    </div>
    <div v-if="tasks.length">
      <header-todo-list />
      <div class="w-96 border-t-2" />
      <task v-for="(task, index) in tasks" :key="index" class="px-3" v-bind="task" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@nuxtjs/composition-api'
import { useTaskStore } from '../../store/tasks/index'
import HeaderTodoList from './Header.vue'
import Task from './Task.vue'
import NoTasks from './NoTasks.vue'

export default defineComponent({
  components: {
    HeaderTodoList,
    Task,
    NoTasks
  },
  setup () {
    const taskStore = useTaskStore()
    const nameTask = ref('')

    const createTask = () => {
      const label = nameTask.value.trim()
      if (label === '') {
        return
      }
      taskStore.create(label)
      nameTask.value = ''
    }

    return {
      // refs
      tasks: computed(() => taskStore.tasks),
      nameTask,
      // methods
      createTask
    }
  }
})
</script>
