import { shallowMount } from '@vue/test-utils'
import ListPosts from '@/components/ListPosts.vue'
// import Content from '@/components/Content.vue'
// import axios from 'axios'

// Mock the axios library
// jest.mock('axios')

describe('Content.vue Test', () => {
  it('Renders the posts', () => {
  // render the component
    const wrapper = shallowMount(ListPosts)

    // check the name of the component
    expect(wrapper.name()).toMatch('ListPosts')
  })
})
