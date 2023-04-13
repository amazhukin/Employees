import { IEmployee } from "~/store/employeeStore";
let dummyEmployees = [
  {
    "id": 0,
    "employee_name": "Michael Johnson",
    "employee_position": "Software Engineer of 2nd Category",
    "employee_salary": 89531,
    "employee_age": 27
  },
  {
    "id": 1,
    "employee_name": "John Smith",
    "employee_position": "Junior Software Engineer of 3rd Category",
    "employee_salary": 64523,
    "employee_age": 23
  },
  {
    "id": 2,
    "employee_name": "Emily Davis",
    "employee_position": "Senior Software Engineer of 1st Category",
    "employee_salary": 107623,
    "employee_age": 32
  },
  {
    "id": 3,
    "employee_name": "Jacob Martinez",
    "employee_position": "Software Engineer of 4th Category",
    "employee_salary": 72389,
    "employee_age": 26
  },
  {
    "id": 4,
    "employee_name": "Olivia Rodriguez",
    "employee_position": "Junior Software Engineer of 2nd Category",
    "employee_salary": 56897,
    "employee_age": 24
  },
  {
    "id": 5,
    "employee_name": "Grace Kim",
    "employee_position": "Senior Software Engineer of 3rd Category",
    "employee_salary": 113287,
    "employee_age": 35
  },
  {
    "id": 6,
    "employee_name": "Daniel Lee",
    "employee_position": "Software Engineer of 1st Category",
    "employee_salary": 99873,
    "employee_age": 30
  },
  {
    "id": 7,
    "employee_name": "Sophia Chen",
    "employee_position": "Junior Software Engineer of 4th Category",
    "employee_salary": 52643,
    "employee_age": 22
  },
  {
    "id": 8,
    "employee_name": "William Brown",
    "employee_position": "Senior Software Engineer of 2nd Category",
    "employee_salary": 105643,
    "employee_age": 34
  },
  {
    "id": 9,
    "employee_name": "Ella Wilson",
    "employee_position": "Software Engineer of 3rd Category",
    "employee_salary": 80234,
    "employee_age": 28
  },
  {
    "id": 10,
    "employee_name": "Alexander Kim",
    "employee_position": "Junior Software Engineer of 2nd Category",
    "employee_salary": 59932,
    "employee_age": 24
  },
  {
    "id": 11,
    "employee_name": "Samantha Lee",
    "employee_position": "Senior Software Engineer of 4th Category",
    "employee_salary": 119476,
    "employee_age": 37
  },
  {
    "id": 12,
    "employee_name": "Jacob Brown",
    "employee_position": "Software Engineer of 3rd Category",
    "employee_salary": 78654,
    "employee_age": 29
  },
  {
    "id": 13,
    "employee_name": "Emily Kim",
    "employee_position": "Junior Software Engineer of 1st Category",
    "employee_salary": 47892,
    "employee_age": 22
  },
  {
    "id": 14,
    "employee_name": "William Chen",
    "employee_position": "Senior Software Engineer of 2nd Category",
    "employee_salary": 104738,
    "employee_age": 33
  },
  {
    "id": 15,
    "employee_name": "Sophia Kim",
    "employee_position": "Software Engineer of 4th Category",
    "employee_salary": 89267,
    "employee_age": 28
  },
  {
    "id": 16,
    "employee_name": "Ethan Patel",
    "employee_position": "Junior Software Engineer of 3rd Category",
    "employee_salary": 61234,
    "employee_age": 24
  },
  {
    "id": 17,
    "employee_name": "Isabella Nguyen",
    "employee_position": "Senior Software Engineer of 1st Category",
    "employee_salary": 111245,
    "employee_age": 35
  },
  {
    "id": 18,
    "employee_name": "Daniel Garcia",
    "employee_position": "Software Engineer of 2nd Category",
    "employee_salary": 93568,
    "employee_age": 30
  },
  {
    "id": 19,
    "employee_name": "Mia Brown",
    "employee_position": "Junior Software Engineer of 4th Category",
    "employee_salary": 53987,
    "employee_age": 23
  },
  {
    "id": 20,
    "employee_name": "James Lee",
    "employee_position": "Senior Software Engineer of 3rd Category",
    "employee_salary": 114329,
    "employee_age": 36
  },
  {
    "id": 21,
    "employee_name": "Aiden Kim",
    "employee_position": "Junior Software Engineer of 2nd Category",
    "employee_salary": 61298,
    "employee_age": 24
  },
  {
    "id": 22,
    "employee_name": "Emma Park",
    "employee_position": "Software Engineer of 1st Category",
    "employee_salary": 101345,
    "employee_age": 31
  },
  {
    "id": 23,
    "employee_name": "Lucas Rodriguez",
    "employee_position": "Junior Software Engineer of 4th Category",
    "employee_salary": 53879,
    "employee_age": 22
  },
  {
    "id": 24,
    "employee_name": "Chloe Nguyen",
    "employee_position": "Senior Software Engineer of 2nd Category",
    "employee_salary": 103827,
    "employee_age": 34
  },
  {
    "id": 25,
    "employee_name": "Elijah Lee",
    "employee_position": "Software Engineer of 3rd Category",
    "employee_salary": 84792,
    "employee_age": 29
  },
  {
    "id": 26,
    "employee_name": "Victoria Chen",
    "employee_position": "Junior Software Engineer of 1st Category",
    "employee_salary": 48763,
    "employee_age": 23
  },
  {
    "id": 27,
    "employee_name": "Benjamin Park",
    "employee_position": "Senior Software Engineer of 4th Category",
    "employee_salary": 117564,
    "employee_age": 37
  },
  {
    "id": 28,
    "employee_name": "Sophie Brown",
    "employee_position": "Software Engineer of 2nd Category",
    "employee_salary": 98643,
    "employee_age": 31
  },
  {
    "id": 29,
    "employee_name": "Matthew Kim",
    "employee_position": "Junior Software Engineer of 3rd Category",
    "employee_salary": 58276,
    "employee_age": 25
  },
  {
    "id": 30,
    "employee_name": "Hannah Lee",
    "employee_position": "Senior Software Engineer of 1st Category",
    "employee_salary": 109785,
    "employee_age": 35
  },
  {
    "id": 31,
    "employee_name": "David Kim",
    "employee_position": "Software Engineer of 4th Category",
    "employee_salary": 92684,
    "employee_age": 30
  },
  {
    "id": 32,
    "employee_name": "Mia Park",
    "employee_position": "Junior Software Engineer of 2nd Category",
    "employee_salary": 62349,
    "employee_age": 24
  },
  {
    "id": 33,
    "employee_name": "Ethan Lee",
    "employee_position": "Senior Software Engineer of 3rd Category",
    "employee_salary": 111893,
    "employee_age": 36
  },
  {
    "id": 34,
    "employee_name": "Olivia Nguyen",
    "employee_position": "Software Engineer of 1st Category",
    "employee_salary": 103475,
    "employee_age": 32
  },
  {
    "id": 35,
    "employee_name": "William Kim",
    "employee_position": "Junior Software Engineer of 4th Category",
    "employee_salary": 54234,
    "employee_age": 23
  }
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

export {
  dummyEmployees,
  getDummyEmployees
}