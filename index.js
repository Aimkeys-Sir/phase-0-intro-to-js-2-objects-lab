// Write your solution in this file!
const employee={name:"Sam", streetAddress:"Gatura"}

function updateEmployeeWithKeyAndValue(employee,name="name",value="Sam")
{
    const employees_updated={...employee};
    employees_updated[name]=value;
     return employees_updated;
}
//console.log(updateEmployeeWithKeyAndValue(employees,"name","Guy"));

function deleteFromEmployeeByKey(employees=employee, key="name")
{
    const new_employees= {...employees};
    delete new_employees.name;
    return new_employees;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employees=employee, key="name", value="Sam")
{
employees[key]=value;
return employees;
}
function destructivelyDeleteFromEmployeeByKey(employees=employee, key="name")
{
delete employee.name;
return employee;
}