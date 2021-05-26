import TestComponent from '../src/test.vue'
import List from '../src/list.vue'
import { mount } from '@vue/test-utils'
test('mount a vue component', () => {
    const wrapper = mount(TestComponent, {
        propsData: {
            value: "Test"
        }
    });
    expect(wrapper).toMatchSnapshot()
})

test('ListComponent', () => {
    const wrapper = mount(List);
    const movies = wrapper.vm.movies;
    wrapper.setData({ movies: [...movies, 'FastAndFurious'] })
    expect(wrapper).toMatchSnapshot()
})