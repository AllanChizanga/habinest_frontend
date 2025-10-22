import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import DashboardHome from './DashboardHome';
import UsersManagement from './UserManagement';
import PropertiesManagement from './PropertiesManagement';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState('dashboard');
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userData');
        navigate('/login');
    };

    const renderContent = () => {
        switch (activeSection) {
            case 'dashboard':
                return <DashboardHome />;
            case 'users':
                return <UsersManagement />;
            case 'properties':
                return <PropertiesManagement />;
            default:
                return <DashboardHome />;
        }
    };

    return (
        <div className="container-fluid bg-light" style={{ minHeight: '100vh' }}>
            {/* Top Navigation */}
            <nav className="navbar navbar-light bg-white fixed-top shadow-sm" style={{ height: '70px' }}>
                <div className="container-fluid">
                    <button 
                        className="navbar-toggler me-3 border-0"
                        type="button"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        style={{ backgroundColor: 'transparent' }}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <span className="navbar-brand fw-bold fs-4 text-dark">
                        🏠 Habinest Admin
                    </span>
                    
                    <div className="d-flex align-items-center">
                        <span className="text-muted me-3 d-none d-md-block">Welcome, Admin</span>
                        <button 
                            className="btn btn-outline-dark btn-sm"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </nav>

            <div className="d-flex" style={{ paddingTop: '70px' }}>
                {/* Sidebar */}
                <div 
                    className={`bg-white shadow-sm ${sidebarOpen ? 'd-block' : 'd-none d-md-block'}`}
                    style={{ 
                        width: '250px', 
                        minHeight: 'calc(100vh - 70px)',
                        borderRight: '1px solid #dee2e6'
                    }}
                >
                    <Sidebar 
                        activeSection={activeSection} 
                        setActiveSection={setActiveSection}
                    />
                </div>

                {/* Main Content */}
                <div 
                    className="flex-grow-1 p-4 bg-light"
                    style={{ 
                        marginLeft: sidebarOpen ? '0' : '-250px',
                        transition: 'margin-left 0.3s ease'
                    }}
                >
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;