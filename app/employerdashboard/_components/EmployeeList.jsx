// employerdashboard/_components/EmployeeList.jsx
import React from 'react';

const EmployeeList = () => {
    const employees = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Sam Johnson' },
    ];

    return (
        <div>
            <h2>Employee List</h2>
            <ul>
                {employees.map(employee => (
                    <li key={employee.id}>{employee.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default EmployeeList;
