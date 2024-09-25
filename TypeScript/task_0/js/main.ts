interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}


const student1: Student = {
    firstName: "Salah",
    lastName: "Essioui",
    age: 40,
    location: "Tunisia"
};

const student2: Student = {
    firstName: "Lionel",
    lastName: "Messi",
    age: 38,
    location: "Argentina"
};


const studentsList: Student[] = [student1, student2];


const table = document.createElement('table');
table.style.border = '1px solid black';
table.style.width = "50%";
table.style.margin ="auto";
const tbody = document.createElement('tbody');

studentsList.forEach((student) => {
    const row = document.createElement('tr');
    
    
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    firstNameCell.style.border = '1px solid black';
    row.appendChild(firstNameCell);
    
    
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    locationCell.style.border = "1px solid black"
    row.appendChild(locationCell);
    
    
    tbody.appendChild(row);
});


table.appendChild(tbody);


document.body.appendChild(table);
