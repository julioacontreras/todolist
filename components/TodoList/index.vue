<template>
  <div class="w-96 h-96 relative mx-auto p-3 bg-white shadow top-over">
    <b-field>
      <b-input
        v-model="nameTask"
        placeholder="Digite su nueva tarea"
        type="text"
        icon="check-circle"
        icon-right="plus-circle"
        icon-right-clickable
        @icon-right-click="createTask()"
      />
    </b-field>
    <div v-if="tasks.length === 0">
      <no-tasks />
    </div>
    <div v-if="tasks.length">
      <header-todo-list />
      <task v-for="(task, index) in tasks" :key="index" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
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
    const tasks = ref([])
    const nameTask = ref('')

    const createTask = () => {
      console.log(nameTask.value)
      nameTask.value = ''
    }

    return {
      // refs
      tasks,
      nameTask,
      // methods
      createTask
    }
  }
})
</script>

<style scoped>
.top-over {
  top: -90px;
}
</style>
