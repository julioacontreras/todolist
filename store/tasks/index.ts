import { defineStore } from 'pinia'
import { TaskType } from '../../types/TaskType'
import { State } from './state'

const state: State = {
  tasks: []
}

export const useTasksStore = defineStore({
  id: 'tasks',
  state: () => state,
  actions: {
    clear (): void {
      while (this.tasks.length > 0) {
        this.tasks.pop()
      }
    },
    checkAll (checked: boolean): void {
      this.tasks.forEach((task) => {
        task.checked = checked
      })
    },
    check (taskId: number, checked: boolean): void {
      const task = this.findTaskById(taskId)
      if (task) {
        task.checked = checked
      }
    },
    findTaskById (taskId: number): TaskType | null {
      return this.tasks.find(task => task.id === taskId) as TaskType | null
    },
    remove (taskId: number): void {
      const index = this.tasks.findIndex(task => task.id === taskId)
      if (index >= 0) {
        this.tasks.splice(index, 1)
      }
    },
    create (label: string): void {
      const id = this.tasks.length + 1
      this.tasks.push({
        id,
        icon: 'circle',
        label,
        checked: false
      })
    }
  },
  getters: {
    getTasks (): Array<TaskType> {
      return this.tasks
    }
  }
})
