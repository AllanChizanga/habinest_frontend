import React from 'react';

const Sidebar = ({ activeSection, setActiveSection }) => {
    const menuItems = [
        { key: 'dashboard', label: 'Dashboard', icon: '📊' },
        { key: 'users', label: 'Users Management', icon: '👥' },
        { key: 'properties', label: 'Properties', icon: '🏢' },
        { key: 'tenants', label: 'Tenants', icon: '👨‍👩‍👧‍👦' },
        { key: 'landlords', label: 'Landlords', icon: '🏠' },
        { key: 'payments', label: 'Payments', icon: '💰' },
        { key: 'maintenance', label: 'Maintenance', icon: '🔧' },
        { key: 'reports', label: 'Reports', icon: '📈' },
        { key: 'settings', label: 'Settings', icon: '⚙️' }
    ];

    return (
        <div className="sidebar bg-white" style={{ height: '100%' }}>
            <div className="p-3">
                <h6 className="text-muted text-uppercase small fw-bold mb-3">Navigation</h6>
                
                <ul className="nav nav-pills flex-column">
                    {menuItems.map(item => (
                        <li className="nav-item mb-1" key={item.key}>
                            <button
                                className={`nav-link w-100 text-start d-flex align-items-center ${
                                    activeSection === item.key ? 'active bg-primary text-white' : 'text-dark'
                                }`}
                                onClick={() => setActiveSection(item.key)}
                                style={{
                                    border: 'none',
                                    borderRadius: '6px',
                                    padding: '10px 12px',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                <span className="me-2">{item.icon}</span>
                                <span className="fw-medium">{item.label}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;