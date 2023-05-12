import { defineStore } from "pinia";
import axios from "axios";

import { getDummyEmployees } from "../utils/employeeData";

import { getDummyEmployees } from '../utils/employeeData';

export interface IEmployee {
  id: number;
  employee_image: string;
  employee_name: string;
  employee_position: string;
  employee_salary: number;
  employee_age: number;
}

export interface IEmployeeState {
  items: IEmployee[];
  filteredItems: IEmployee[];
  imageItems: {
    url: string;
  }[];
}

export const useEmployeeStore = defineStore("employeeStore", {
  state: (): IEmployeeState => ({
    items: [],
    filteredItems: [],
    imageItems: [],
  }),
  getters: {
    getById: (state: IEmployeeState) => (employeeID: number) => {
      return state.items.find((item) => item.id === employeeID);
    },
    getByName: (state: IEmployeeState) => (employee_name: string) => {
      return state.items.find((item) =>
        item.employee_name.includes(employee_name)
      );
    },
  },
  actions: {
    setFilters(filteredItems: IEmployee[]) {
      this.filteredItems = filteredItems;
    },
    async dummyFetchEmployees() {
      try {
        const response = await getDummyEmployees();
        const query = gql`
          query getCharacters {
            characters {
              results {
                image
              }
            }
          }
        `;

        const { data }: any = await useAsyncQuery(query);
        const route = useRoute();

        response.forEach(
          (employee, x) =>
            (employee.employee_image = data.value.characters.results[x].image)
        );

        this.items = response;

        this.filteredItems = response;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchEmployees() {
      try {
        const response = (await axios.get(
          "https://dummy.restapiexample.com/api/v1/employees"
        )) as IEmployee[];
        const query = gql`
          query getCharacters {
            characters {
              results {
                image
              }
            }
          }
        `;

        const { data }: any = await useAsyncQuery(query);
        response.forEach(
          (employee: IEmployee, x: number) =>
            (employee.employee_image = data.value.characters.results[x].image)
        );

        this.items = response;

        this.filteredItems = response;
      } catch (error) {
        console.error(error);
      }
    },
    async addEmployee(employee: IEmployee) {
      try {
        const response = await axios.post(
          "https://dummy.restapiexample.com/api/v1/create",
          employee
        );
        this.items.push(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async updateEmployee(employee: IEmployee) {
      try {
        const response = await axios.put(
          `https://dummy.restapiexample.com/api/v1/update/${employee.id}`,
          employee
        );
        const index = this.items.findIndex(
          (item: IEmployee) => item.id === employee.id
        );
        if (index !== -1) {
          this.items.splice(index, 1, response.data);
        }
      } catch (error) {
        console.error(error);
      }
    },
    async deleteEmployee(id: number) {
      try {
        await axios.delete(
          `https://dummy.restapiexample.com/api/v1/delete/${id}`
        );
        const index = this.items.findIndex((item: IEmployee) => item.id === id);
        if (index !== -1) {
          this.items.splice(index, 1);
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
});
