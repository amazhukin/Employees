import { IEmployee } from "~/store/employeeStore";
// const employeeStore = useEmployeeStore();

const dummyEmployees = [

  {
    "id": 0,
    "employee_image": "",
    "employee_name": "Michael Johnson",
    "employee_position": "Software Engineer of 2nd Category",
    "employee_salary": 89531,
    "employee_age": 27
  },
  {
    "id": 1,
    "employee_image": "",
    "employee_name": "John Smith",
    "employee_position": "Junior Software Engineer of 3rd Category",
    "employee_salary": 64523,
    "employee_age": 23
  },
  {
    "id": 2,
    "employee_image": "",
    "employee_name": "Emily Davis",
    "employee_position": "Senior Software Engineer of 1st Category",
    "employee_salary": 107623,
    "employee_age": 32
  },
  {
    "id": 3,
    "employee_image": "",
    "employee_name": "Jacob Martinez",
    "employee_position": "Software Engineer of 4th Category",
    "employee_salary": 72389,
    "employee_age": 26
  },
  {
    "id": 4,
    "employee_image": "",
    "employee_name": "Olivia Rodriguez",
    "employee_position": "Junior Software Engineer of 2nd Category",
    "employee_salary": 56897,
    "employee_age": 24
  },
  {
    "id": 5,
    "employee_image": "",
    "employee_name": "Grace Kim",
    "employee_position": "Senior Software Engineer of 3rd Category",
    "employee_salary": 113287,
    "employee_age": 35
  },
  {
    "id": 6,
    "employee_image": "",
    "employee_name": "Daniel Lee",
    "employee_position": "Software Engineer of 1st Category",
    "employee_salary": 99873,
    "employee_age": 30
  },
  {
    "id": 7,
    "employee_image": "",
    "employee_name": "Sophia Chen",
    "employee_position": "Junior Software Engineer of 4th Category",
    "employee_salary": 52643,
    "employee_age": 22
  },
  {
    "id": 8,
    "employee_image": "",
    "employee_name": "William Brown",
    "employee_position": "Senior Software Engineer of 2nd Category",
    "employee_salary": 105643,
    "employee_age": 34
  },
  {
    "id": 9,
    "employee_image": "",
    "employee_name": "Ella Wilson",
    "employee_position": "Software Engineer of 3rd Category",
    "employee_salary": 80234,
    "employee_age": 28
  },
  {
    "id": 10,
    "employee_image": "",
    "employee_name": "Alexander Kim",
    "employee_position": "Junior Software Engineer of 2nd Category",
    "employee_salary": 59932,
    "employee_age": 24
  },
  {
    "id": 11,
    "employee_image": "",
    "employee_name": "Samantha Lee",
    "employee_position": "Senior Software Engineer of 4th Category",
    "employee_salary": 119476,
    "employee_age": 37
  },
  {
    "id": 12,
    "employee_image": "",
    "employee_name": "Jacob Brown",
    "employee_position": "Software Engineer of 3rd Category",
    "employee_salary": 78654,
    "employee_age": 29
  },
  {
    "id": 13,
    "employee_image": "",
    "employee_name": "Emily Kim",
    "employee_position": "Junior Software Engineer of 1st Category",
    "employee_salary": 47892,
    "employee_age": 22
  },
  {
    "id": 14,
    "employee_image": "",
    "employee_name": "William Chen",
    "employee_position": "Senior Software Engineer of 2nd Category",
    "employee_salary": 104738,
    "employee_age": 33
  },
  {
    "id": 15,
    "employee_image": "",
    "employee_name": "Sophia Kim",
    "employee_position": "Software Engineer of 4th Category",
    "employee_salary": 89267,
    "employee_age": 28
  },
  {
    "id": 16,
    "employee_image": "",
    "employee_name": "Ethan Patel",
    "employee_position": "Junior Software Engineer of 3rd Category",
    "employee_salary": 61234,
    "employee_age": 24
  },
  {
    "id": 17,
    "employee_image": "",
    "employee_name": "Isabella Nguyen",
    "employee_position": "Senior Software Engineer of 1st Category",
    "employee_salary": 111245,
    "employee_age": 35
  },
  {
    "id": 18,
    "employee_image": "",
    "employee_name": "Daniel Garcia",
    "employee_position": "Software Engineer of 2nd Category",
    "employee_salary": 93568,
    "employee_age": 30
  },
  {
    "id": 19,
    "employee_image": "",
    "employee_name": "Mia Brown",
    "employee_position": "Junior Software Engineer of 4th Category",
    "employee_salary": 53987,
    "employee_age": 23
  },
];

function getDummyEmployees(): Promise<IEmployee[]> {
  return new Promise((resolve, reject) => {
    try {
      resolve(dummyEmployees);
    } catch (err) {
      reject(err);
    }
  });
};

// function filterEmployees(filterQueue: string, items: IEmployee[]): IEmployee[] {
//   let filteredItems = items.filter((item) =>
//       item.employee_name.toLowerCase().includes(filterQueue.toLowerCase())
//     );
//     employeeStore.setFilters(filteredItems);
//   return []
// }

export {
  getDummyEmployees,
  filterEmployees
}