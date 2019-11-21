import { Student } from './student.js';

let students = [
    new Student('Julius', 'Kashihakumwa', '2086007157'),
    new Student('Theo', 'Naftali', '408700654'),
    new Student('James', 'Hatuikulipi', '0813040307')
];


students.forEach(
    (student) => {
        let tr = document.createElement("tr");
    
        let tdFirstName = document.createElement("td");
        let tdLastName = document.createElement("td");
        let tdINumber = document.createElement("td");

        tdFirstName.innerHTML = student.firstName;
        tdLastName.innerHTML = student.lastName;
        tdINumber.innerHTML = student.iNumber;

        tr.appendChild(tdFirstName);
        tr.appendChild(tdLastName);
        tr.appendChild(tdINumber);

        document.getElementById("students").appendChild(tr);
    }
);

