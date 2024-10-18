// employerdashboard/layout.jsx
"use client";

import React from 'react';
import Header from './_components/Header';
import Sidebar from './_components/Sidebar';
import styles from './styles/Dashboard.module.css';
import { useEffect, useState } from 'react';

const Layout = ({ children }) => {
    const [employers, setEmployers] = useState([]);

    useEffect(() => {
        // Fetch data from the API
        fetch('./pages/api/employers.js')
            .then(response => response.json())
            .then(data => setEmployers(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>
                <Sidebar />
                <div className={styles.mainContent}>
                    {/* {children} */}

                    {/* Render the table with employer email and ratings */}
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {employers.map(employer => (
                                <tr key={employer.userEmail}>
                                    <td>{employer.userEmail}</td>
                                    <td>{employer.rating}</td>
                                </tr>
                            ))} */}
                            <tr>
                                <td>user1.gmail.com</td>
                                <td>4.8/5</td>
                            </tr>
                            <tr>
                                <td>user2.gmail.com</td>
                                <td>4.5/5</td>
                            </tr>
                            <tr>
                                <td>user3.gmail.com</td>
                                <td>4.2/5</td>
                            </tr>
                            <tr>
                                <td>user4.gmail.com</td>
                                <td>3/5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Layout;