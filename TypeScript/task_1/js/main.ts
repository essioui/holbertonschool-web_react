interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
  console.log(teacher3);

  const teacher4: Teacher = {
    firstName: "Steve",
    fullTimeEmployee: true,
    lastName: "Alex",
    location: "KSA",
    experience: 40,
  };
  teacher4.location = "USA";
  console.log(teacher4);


console.log("--------------------------------");
console.log("2. Extending the Teacher class");
  
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);


console.log("------------------------------------------");
console.log("3. Printing teachers");

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = function (firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe"));

console.log("-------------------------");
console.log("4. Writing a class");

