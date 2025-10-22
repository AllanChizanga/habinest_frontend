import React from 'react';

const RecentActivity = () => {
    const activities = [
        {
            id: 1,
            type: 'new_tenant',
            message: 'New tenant application - John Doe',
            time: '2 hours ago',
            icon: '👤'
        },
        {
            id: 2,
            type: 'payment',
            message: 'Payment received - Apartment 101',
            time: '4 hours ago',
            icon: '💰'
        },
        {
            id: 3,
            type: 'maintenance',
            message: 'Maintenance request - Unit 205',
            time: '6 hours ago',
            icon: '🔧'
        },
        {
            id: 4,
            type: 'new_property',
            message: 'New property listed - Skyline Apartments',
            time: '1 day ago',
            icon: '🏢'
        },
        {
            id: 5,
            type: 'contract',
            message: 'Lease agreement signed - Unit 304',
            time: '2 days ago',
            icon: '📝'
        }
    ];

    return (
        <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
                <h5 style={{ color: '#4A2E16' }}>Recent Activity</h5>
                <div className="activity-list">
                    {activities.map(activity => (
                        <div 
                            key={activity.id}
                            className="d-flex align-items-center p-3 border-bottom"
                            style={{ 
                                borderColor: 'rgba(74, 46, 22, 0.1) !important',
                                transition: 'background-color 0.3s ease'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(249, 243, 221, 0.5)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                            }}
                        >
                            <div 
                                className="rounded-circle d-flex align-items-center justify-content-center me-3"
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    backgroundColor: '#4A2E16',
                                    color: '#F9F3DD'
                                }}
                            >
                                <span>{activity.icon}</span>
                            </div>
                            <div className="flex-grow-1">
                                <p className="mb-1" style={{ color: '#4A2E16' }}>
                                    {activity.message}
                                </p>
                                <small className="text-muted">{activity.time}</small>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecentActivity;