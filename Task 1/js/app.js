document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const salary = document.getElementById('salary').value;

    document.getElementById('output').innerHTML = `Employee Name: ${name} <br> Salary: $${salary}`;
});
