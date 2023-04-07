import { VueWrapper, mount } from '@vue/test-utils'
import EmployeeCard from './index.vue'

let wrapper: any;

describe('EmployeeCard.vue', () => {

  beforeEach(() => {
    wrapper = mount(EmployeeCard, {
      props: {
        employeeData: {
          id: 0,
          employee_name: "Jhon Doe",
          employee_position: "Senior Engineer of 1st Category",
        },
      }
    });
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
    expect(employeeName.text()).toBe("Jhon Doe");

    expect(employeePosition.exists()).toBe(true);
    expect(employeePosition.text()).toBe("Senior Engineer of 1st Category");
  })

  // TODO: ADD TEST CASE TO TEST IF THREE DOTS ARE CLICKABLE
})