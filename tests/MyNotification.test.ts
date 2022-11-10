import { mount } from '@vue/test-utils'
import { MyNotification } from '../src/components'
import { describe, expect, test } from 'vitest'

describe('MyNotification', () => {
  test('renders the correct style for error', () => {
    const type = 'error'
    const wrapper = mount(MyNotification, {
      props: { type },
    })
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(['notification--error'])
    )
  })

  test('renders correct style for success', () => {
    const type = 'success'
    const wrapper = mount(MyNotification, {
      props: { type },
    })
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(['notification--success'])
    )
  })

  test('renders correct style for info', () => {
    const type = 'info'
    const wrapper = mount(MyNotification, {
      props: { type },
    })
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(['notification--info'])
    )
  })

  test('slides down when message is not empty', () => {
    const message = 'success'
    const wrapper = mount(MyNotification, {
      props: { message },
    })
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(['notification--slide'])
    )
  })

  test('slides up when message is empty', () => {
    const message = ''
    const wrapper = mount(MyNotification, {
      props: { message },
    })
    expect(wrapper.classes('notification--slide')).toBe(false)
  })

  test('emits event when close button is clicked', async () => {
    const wrapper = mount(MyNotification, {
      data() {
        return {
          clicked: false,
        }
      },
    })
    const closeButton = wrapper.find('button')
    await closeButton.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('clear-notification')
  })

  test('renders message when message is not empty', () => {
    const message = 'Something happened, try again'
    const wrapper = mount(MyNotification, {
      props: { message },
    })
    expect(wrapper.find('p').text()).toBe(message)
  })
})
