interface Student {
    firstName: string;
    lastname: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Salah",
    lastname: "Essioui",
    age: 40,
    location: "Tunisia"
};

const student2: Student = {
    firstName: "Lionel",
    lastname: "Messi",
    age: 39,
    location: "Argentina"
};

const studentsList:Student[] = [student1, student2];

function renderTable(): void {
    const table = document.createElement("table");
    // use css for design
    table.style.width = "50%;"
    table.style.border = "2px solid black";

    const headerRow = document.createElement("tr");

    const headerName = document.createElement("th");
    headerName.textContent = "First Name";
    headerName.style.border = "2px solid black";

    const headerLocation = document.createElement("th");
    headerLocation.textContent = "Location";
    headerLocation.style.border = "2px solid black";

    headerRow.append(headerName);
    headerRow.append(headerLocation);
    table.appendChild(headerRow);

    studentsList.forEach((student) => {
        const row = document.createElement("tr");

        const nameStd = document.createElement("td");
        nameStd.textContent = student.firstName;
        nameStd.style.border = "2px solid black";

        const locationStd = document.createElement("td");
        locationStd.textContent = student.location;
        locationStd.style.border = "2px solid black";

        row.appendChild(nameStd);
        row.appendChild(locationStd);
        table.appendChild(row);

    });
    document.body.appendChild(table);
}
