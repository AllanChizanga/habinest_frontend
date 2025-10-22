import React from 'react';

const StatsCards = ({ stats }) => {
    const cardData = [
        {
            title: 'Total Users',
            value: stats.totalUsers,
            icon: '👥',
            color: '#4A2E16',
            description: 'Landlords + Tenants + Admins'
        },
        {
            title: 'Total Properties',
            value: stats.totalProperties,
            icon: '🏢',
            color: '#8B4513',
            description: 'Registered properties'
        },
        {
            title: 'Active Tenants',
            value: stats.totalTenants,
            icon: '👨‍👩‍👧‍👦',
            color: '#A0522D',
            description: 'Currently renting'
        },
        {
            title: 'Monthly Revenue',
            value: `$${stats.totalRevenue.toLocaleString()}`,
            icon: '💰',
            color: '#CD853F',
            description: 'This month'
        },
        {
            title: 'Pending Requests',
            value: stats.pendingRequests,
            icon: '⏰',
            color: '#D2691E',
            description: 'Require attention'
        },
        {
            title: 'Occupied Units',
            value: stats.occupiedUnits,
            icon: '🔑',
            color: '#BC8F8F',
            description: 'Currently occupied'
        }
    ];

    return (
        <div className="row">
            {cardData.map((card, index) => (
                <div key={index} className="col-md-4 col-lg-2 mb-4">
                    <div 
                        className="card text-white shadow-sm h-100 border-0"
                        style={{ 
                            backgroundColor: card.color,
                            borderRadius: '15px',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                        }}
                        onMouseOver={(e) => {
                            e.target.style.transform = 'translateY(-5px)';
                            e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                        }}
                    >
                        <div className="card-body text-center p-3">
                            <div className="fs-1 mb-2">{card.icon}</div>
                            <h4 className="fw-bold mb-1">{card.value}</h4>
                            <h6 className="mb-1">{card.title}</h6>
                            <small className="opacity-75">{card.description}</small>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StatsCards;