import { shallowMount } from '@vue/test-utils'
import Content from '@/components/Content.vue'
import axios from 'axios'

describe('Content.vue Test with Successful HTTP GET', () => {
  var wrapper

  beforeEach(() => {
    // eslint-disable-next-line camelcase
    const response_get = {
      data: [
        {
          userId: 1,
          title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
          id: 1,
          body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
        },
        {
          userId: 2,
          title: 'qui est esse',
          id: 2,
          body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'
        }
      ]
    }

    // Set the response from the GET call to axios
    axios.get.mockResolvedValue(response_get)

    // render the component
    wrapper = shallowMount(Content)
  })
  afterEach(() => {
    jest.resetModules()
    jest.clearAllMocks()
  })

  it('loads the user data when the component is created and mounted', () => {
    // check the name of the component
    expect(wrapper.name()).toMatch('Content')

    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toBeCalledWith('https://jsonplaceholder.typicode.com/posts')

    // check that the user data is properly set
    expect(wrapper.vm.id.length).toEqual(1)
    expect(wrapper.vm.posts[0].id).toMatch('1')
    expect(wrapper.vm.posts[0].userId).toMatch('1')
    expect(wrapper.vm.posts[0].body).toMatch('quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto')
  })
})
