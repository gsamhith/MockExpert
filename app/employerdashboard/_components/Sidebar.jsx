// employerdashboard/_components/Sidebar.jsx
import React from 'react';
import styles from '../styles/Dashboard.module.css';

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <nav>
                <ul>
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li><a href="/employee-list">Employee List</a></li>
                    <li><a href="/settings">Settings</a></li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;
