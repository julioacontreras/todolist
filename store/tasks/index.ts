import { defineStore } from 'pinia'
import { TaskType } from '../../types/TaskType'
import { State } from './state'
import { storeTasks, loadTasks } from './localStorage'

const state: State = {
  tasks: []
}

export const useTaskStore = defineStore({
  id: 'tasks',
  state: () => state,
  actions: {
    clear (): void {
      while (this.tasks.length > 0) {
        this.tasks.pop()
      }
      storeTasks(this.tasks)
    },
    checkAll (checked: boolean): void {
      this.tasks.forEach((task) => {
        task.checked = checked
      })
      storeTasks(this.tasks)
    },
    check (taskId: number, checked: boolean): void {
      const task = this.findTaskById(taskId)
      if (task) {
        task.checked = checked
      }
      storeTasks(this.tasks)
    },
    findTaskById (taskId: number): TaskType | null {
      return this.tasks.find(task => task.id === taskId) as TaskType | null
    },
    remove (taskId: number): void {
      const index = this.tasks.findIndex(task => task.id === taskId)
      if (index >= 0) {
        this.tasks.splice(index, 1)
      }
      storeTasks(this.tasks)
    },
    create (label: string): void {
      const id = this.tasks.length + 1
      this.tasks.push({
        id,
        icon: 'circle',
        label,
        checked: false
      })
      storeTasks(this.tasks)
    },
    load () {
      this.tasks = loadTasks()
    }
  },
  getters: {
    status (): string {
      const resultCheckeds = this.tasks.filter(task => task.checked === true)
      const total = this.tasks.length
      return `${resultCheckeds.length}/${total}`
    }
  }
})
