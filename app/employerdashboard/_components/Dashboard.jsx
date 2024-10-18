// employerdashboard/_components/Dashboard.jsx
// employerdashboard/_components/Dashboard.jsx
import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [userAnswers, setUserAnswers] = useState([]);

    useEffect(() => {
        const fetchUserAnswers = async () => {
            try {
                const response = await fetch('/api/user-answers');
                const data = await response.json();
                setUserAnswers(data);
            } catch (error) {
                console.error('Failed to fetch user answers:', error);
            }
        };

        fetchUserAnswers();
    }, []);

    return (
        <main>
            <h2>Dashboard</h2>
            <p>Welcome to the Employer Dashboard!</p>
            <h3>User Answers</h3>
            <table>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {userAnswers.map((answer) => (
                        <tr key={answer.id}>
                            <td>{answer.userEmail}</td>
                            <td>{answer.rating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
};

export default Dashboard;

