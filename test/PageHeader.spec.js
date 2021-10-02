import { mount } from '@vue/test-utils'
import PageHeader from '~/components/PageHeader.vue'

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(PageHeader)
    expect(wrapper.vm).toBeTruthy()
  })
})
