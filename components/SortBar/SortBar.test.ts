import { VueWrapper, mount } from '@vue/test-utils'
import SortBar from './index.vue'

let wrapper: VueWrapper<any>;

describe('SortBar.vue', () => {

  beforeEach(() => {
    wrapper = mount(SortBar);
  })

  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true);
  })

  it("renders the tabs", async () => {
    const tabLabels = [
      'Any',
      'Working',
      'Away',
    ]

    tabLabels.forEach((label) => {
      const button = wrapper.find(`[data-testid="sort-tab-${label.toLowerCase()}"]`);
      expect(button.exists()).toBe(true);
      expect(button.text()).toBe(label);
    })
  })
})