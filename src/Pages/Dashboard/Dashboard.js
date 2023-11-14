import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <section>
            <div className="drawer lg:drawer-open">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <h2 className="text-3xl font-bold text-purple-500"> Welcome to your Dashboard.</h2>
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-sidebar" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-48 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><Link to="/dashboard">My Appointments</Link></li>
                        <li><Link to="/dashboard/review">My Reviews</Link></li>
                        <li><Link to="/dashboard/history">My History</Link></li>
                        <li><Link to="/dashboard/users">All Users</Link></li>
                    </ul>

                </div>
            </div>
        </section>
    );
};

export default Dashboard;