import { VueWrapper, mount } from '@vue/test-utils'
import EmployeeCard from './index.vue'

let wrapper: any;

describe('EmployeeCard.vue', () => {

  beforeEach(() => {
    wrapper = mount(EmployeeCard);
  })

  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true);
  })


  it("renders the important details", async () => {
    const employeeImage = wrapper.find('[data-testid="employee-card-image"]');
    const employeeName = wrapper.find('[data-testid="employee-card-name"]');
    const employeePosition = wrapper.find('[data-testid="employee-card-position"]')

    expect(employeeImage.exists()).toBe(true);
    expect(employeeImage.attributes('src').length).toBeGreaterThan(0);

    expect(employeeName.exists()).toBe(true);
    expect(employeeName.text.length).toBeGreaterThan(0);

    expect(employeePosition.exists()).toBe(true);
    expect(employeePosition.text.length).toBeGreaterThan(0);

  })
})