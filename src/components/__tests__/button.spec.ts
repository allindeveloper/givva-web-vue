import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Button from '../button.vue'

describe('Button', () => {
  it('renders properly', () => {
    const wrapper = mount(Button, { props: { label: 'Click me' } })
    expect(wrapper.text()).toContain('Click me')
  })
})
