const employees = [
    { name: "MARK", salary: "$3000" },
    { name: "JACK", salary: "$5000" }
];

const employeeList = document.getElementById('employee-list');

employees.forEach(employee => {
    const listItem = document.createElement('li');
    listItem.textContent = `Name: ${employee.name}, Salary: ${employee.salary}`;
    employeeList.appendChild(listItem);
});
