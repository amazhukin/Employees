import { mount } from '@vue/test-utils'
import Pagination from './index.vue'

let wrapper: any;

describe('Pagination.vue', () => {
  beforeEach(() => {
    let itemsArr = Array.from({ length: 20 }, (_, i) => ({id: i, employee_name: `Employee Name ${i}`}))

    wrapper = mount(Pagination, {
      props: {
        items: itemsArr,
        callback: jest.fn()
      }
    });
  });

  it('renders the correct number of pagination pages', () => {
    const pageNums = wrapper.findAll('[data-testid^="page-id-"]');
    expect(pageNums).toHaveLength(4);
  });

  it('renders the correct page numbers on the pagination pages', () => {
    const pageNums = wrapper.findAll('[data-testid^="page-id-"]');
    expect(pageNums[0].text()).toBe('1');
    expect(pageNums[1].text()).toBe('2');
    expect(pageNums[2].text()).toBe('3');
  });

  it('highlights the current page number on the pagination pages', async () => {
    const pageNums = wrapper.findAll('[data-testid^="page-id-"]');
    const secondPageNum = pageNums[1];
    await secondPageNum.trigger('click');
    expect(secondPageNum.classes()).toContain('text-red-500');
    expect(pageNums[0].classes()).not.toContain('text-red-500');
    expect(pageNums[2].classes()).not.toContain('text-red-500');
  });

  it('calls the callback function with the correct items when the current page changes', async () => {
    const secondPageNum = wrapper.find('[data-testid="page-id-2"]');
    await secondPageNum.trigger('click');
    expect(wrapper.vm.$props.callback).toHaveBeenCalledWith([
      { id: 5, employee_name: 'Employee Name 5' },
      { id: 6, employee_name: 'Employee Name 6' },
      { id: 7, employee_name: 'Employee Name 7' },
      { id: 8, employee_name: 'Employee Name 8' },
      { id: 9, employee_name: 'Employee Name 9' }
    ]);
  });
})