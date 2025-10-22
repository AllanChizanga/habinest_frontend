import React, { useState, useEffect } from 'react';

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        // Simulate API call
        setTimeout(() => {
            setUsers([
                { id: 1, name: 'John Doe', email: 'john@example.com', type: 'Landlord', status: 'Active', joinDate: '2024-01-15' },
                { id: 2, name: 'Jane Smith', email: 'jane@example.com', type: 'Tenant', status: 'Active', joinDate: '2024-02-20' },
                { id: 3, name: 'Mike Johnson', email: 'mike@example.com', type: 'Tenant', status: 'Inactive', joinDate: '2024-01-10' },
                { id: 4, name: 'Sarah Wilson', email: 'sarah@example.com', type: 'Landlord', status: 'Active', joinDate: '2024-03-05' }
            ]);
            setLoading(false);
        }, 1000);
    }, []);

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '400px' }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="users-management">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h1 style={{ color: '#4A2E16' }}>Users Management</h1>
                    <p style={{ color: '#4A2E16', opacity: '0.8' }}>
                        Manage landlords, tenants, and administrators
                    </p>
                </div>
                <button 
                    className="btn fw-semibold"
                    style={{
                        backgroundColor: '#4A2E16',
                        color: '#F9F3DD',
                        border: '2px solid #4A2E16',
                        borderRadius: '10px',
                        padding: '10px 20px'
                    }}
                    onClick={() => setShowForm(true)}
                >
                    + Add New User
                </button>
            </div>

            <div className="card shadow-sm border-0">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead style={{ backgroundColor: '#4A2E16', color: '#F9F3DD' }}>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Type</th>
                                    <th>Status</th>
                                    <th>Join Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(user => (
                                    <tr key={user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <span className={`badge ${
                                                user.type === 'Landlord' ? 'bg-warning' : 
                                                user.type === 'Tenant' ? 'bg-info' : 'bg-secondary'
                                            }`}>
                                                {user.type}
                                            </span>
                                        </td>
                                        <td>
                                            <span className={`badge ${
                                                user.status === 'Active' ? 'bg-success' : 'bg-danger'
                                            }`}>
                                                {user.status}
                                            </span>
                                        </td>
                                        <td>{user.joinDate}</td>
                                        <td>
                                            <button className="btn btn-sm btn-outline-primary me-1">
                                                Edit
                                            </button>
                                            <button className="btn btn-sm btn-outline-danger">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserManagement;