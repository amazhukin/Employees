import { defineStore } from 'pinia';
import axios from 'axios';

import { getDummyEmployees } from '~/utils/employeeData';

export interface IEmployee {
  id: number,
  employee_name: string,
  employee_position: string,
  employee_salary: number,
  employee_age: number,
}

export interface IEmployeeState {
  items: IEmployee[],
  imageItems: {
    url: string
  }[]
}

export const useEmployeeStore = defineStore("employeeStore", {
  state: (): IEmployeeState => ({
    items: [],
    imageItems: []
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
    async dummyFetchEmployees() {
      try {
        const response = await getDummyEmployees();
        this.items = response;

        const query = gql`
        query {
          images(limit: 35) {
            url
          }
        }
        `

        const { data } = await useAsyncQuery(query);
        console.log(data, '[GraphQL DATA]');
      } catch (error) {
        console.error(error)
      }
    },
    async fetchEmployees() {
      try {
        const response = await axios.get('https://dummy.restapiexample.com/api/v1/employees');
        this.items = response.data.data;
        // TODO: Add GraphQL Get Images

        const query = gql`
        query {
          images(limit: 35) {
            url
          }
        }
        `

        const { data } = await useAsyncQuery(query);
        console.log(data, ' [GRAPHQL DATA]');
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