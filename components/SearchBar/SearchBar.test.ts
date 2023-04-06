import { VueWrapper, mount } from '@vue/test-utils'
import SearchBar from './index.vue'

let wrapper: any;

describe('SearchBar.vue', () => {

  beforeEach(() => {
    wrapper = mount(SearchBar);
  })

  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true);
  })


  it("renders the working search input", async () => {
    const input = wrapper.find('[data-testid="search-input"]');
    expect(input.exists()).toBe(true);
    expect(input.attributes('placeholder')).toBe('Search');

    input.setValue('Mamuka');
    expect(input.element.value).toBe('Mamuka');
  })
})