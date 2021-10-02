import { setActivePinia, createPinia } from 'pinia'
import { useTaskStore } from '../store/tasks'

describe('Tasks', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('Create one task', () => {
    const taskStore = useTaskStore()
    taskStore.create('task 1')
    expect(taskStore.tasks.length).toBe(1)
  })

  test('Create and remove task', () => {
    const taskStore = useTasksStore()
    taskStore.clear()
    taskStore.create('task 1')
    expect(taskStore.tasks.length).toBe(1)
    taskStore.create('task 2')
    expect(taskStore.tasks.length).toBe(2)
    expect(taskStore.findTaskById(1).label).toBe('task 1')
    expect(taskStore.findTaskById(2).label).toBe('task 2')
    taskStore.remove(1)
    expect(taskStore.tasks.length).toBe(1)
    expect(taskStore.findTaskById(2).label).toBe('task 2')
  })

  test('Check true one task', () => {
    const taskStore = useTasksStore()
    taskStore.clear()
    taskStore.create('task 1')
    taskStore.create('task 2')
    expect(taskStore.findTaskById(1).checked).toBe(false)
    expect(taskStore.findTaskById(2).checked).toBe(false)
    taskStore.check(1, true)
    expect(taskStore.findTaskById(1).checked).toBe(true)
    expect(taskStore.findTaskById(2).checked).toBe(false)
  })

  test('Check All true one task', () => {
    const taskStore = useTasksStore()
    taskStore.clear()
    taskStore.create('task 1')
    taskStore.create('task 2')
    expect(taskStore.findTaskById(1).checked).toBe(false)
    expect(taskStore.findTaskById(2).checked).toBe(false)
    taskStore.checkAll(true)
    expect(taskStore.findTaskById(1).checked).toBe(true)
    expect(taskStore.findTaskById(2).checked).toBe(true)
  })
})
