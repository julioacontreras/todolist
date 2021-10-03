import { TaskType } from '../../types/TaskType'

const ls = require('local-storage')

export const storeTasks = (tasks: Array<TaskType>) => {
  ls('tasks', JSON.stringify(tasks))
}

export const loadTasks = (): Array<TaskType> => {
  const json = ls('tasks')
  if (!json) {
    return []
  }
  return JSON.parse(json) as Array<TaskType>
}
