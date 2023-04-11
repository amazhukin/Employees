import { mount } from '@vue/test-utils'
import EmployeeModal from './index.vue'

let wrapper: any;

describe('EmployeeModal.vue', () => {

  beforeEach(() => {
    wrapper = mount(EmployeeModal, {
      props: {
        employeeData: {
          id: 0,
          employee_image: "https://i.pravatar.cc/64",
          employee_name: "Jhon Doe",
          employee_position: "Senior Engineer of 1st Category",
          employee_salary: 320000,
          employee_age: 45
        },
      }
    });
  })

  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true);
  })


  it("renders the important details", () => {
    const employeeImage = wrapper.find('[data-testid="employee-modal-image"]');
    const employeeName = wrapper.find('[data-testid="employee-modal-name"]');
    const employeePosition = wrapper.find('[data-testid="employee-modal-position"]')
    const employeeSalary = wrapper.find('[data-testid="employee-modal-salary"]')
    const employeeAge = wrapper.find('[data-testid="employee-modal-age"]')

    expect(employeeImage.exists()).toBe(true);
    expect(employeeImage.attributes('src').length).toBeGreaterThan(0);

    expect(employeeName.exists()).toBe(true);
    expect(employeeName.text()).toBe("Jhon Doe");

    expect(employeePosition.exists()).toBe(true);
    expect(employeePosition.text()).toBe("Position: Senior Engineer of 1st Category");

    expect(employeeSalary.exists()).toBe(true);
    expect(employeeSalary.text()).toBe("Salary: 320000");

    expect(employeeAge.exists()).toBe(true);
    expect(employeeAge.text()).toBe("Age: 45");
    
  })
})