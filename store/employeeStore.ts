import { defineStore } from 'pinia';
import axios from 'axios';

export interface IEmployee {
  id: number,
  employee_image: string,
  employee_name: string,
  employee_position: string,
  employee_salary: number,
  employee_age: number,
}

export interface IEmployeeState {
  items: IEmployee[]
}

export const useEmployeeStore = defineStore("employeeStore", {
  state: (): IEmployeeState => ({
    items: [],
  }),
  getters: {
    getById: (state: IEmployeeState) => (id: number) => {
      return state.items.find(item => item.id === id);
    },
    getByName: (state: IEmployeeState) => (employee_name: string) => {
      return state.items.find(item => item.employee_name.includes(employee_name))
    }
  },
  actions: {
    async fetchEmployees() {
      try {
        const response = await axios.get('https://dummy.restapiexample.com/api/v1/employees');
        this.items = response.data.data;
      } catch (error) {
        console.error(error);
      }
    },
    async addEmployee(employee: IEmployee) {
      try {
        const response = await axios.post('https://dummy.restapiexample.com/api/v1/create', employee);
        this.items.push(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async updateEmployee(employee: IEmployee) {
      try {
        const response = await axios.put(`https://dummy.restapiexample.com/api/v1/update/${employee.id}`, employee);
        const index = this.items.findIndex((item: IEmployee) => item.id === employee.id);
        if (index !== -1) {
          this.items.splice(index, 1, response.data);
        }
      } catch (error) {
        console.error(error);
      }
    },
    async deleteEmployee(id: number) {
      try {
        await axios.delete(`https://dummy.restapiexample.com/api/v1/delete/${id}`);
        const index = this.items.findIndex((item: IEmployee) => item.id === id);
        if (index !== -1) {
          this.items.splice(index, 1);
        }
      } catch (error) {
        console.error(error);
      }
    },
  }
});