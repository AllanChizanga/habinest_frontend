import React from 'react';

const RevenueChart = () => {
    const revenueData = [
        { month: 'Jan', revenue: 35000 },
        { month: 'Feb', revenue: 42000 },
        { month: 'Mar', revenue: 38000 },
        { month: 'Apr', revenue: 45000 },
        { month: 'May', revenue: 52000 },
        { month: 'Jun', revenue: 48000 },
        { month: 'Jul', revenue: 55280 }
    ];

    const maxRevenue = Math.max(...revenueData.map(d => d.revenue));

    return (
        <div className="revenue-chart">
            <div className="d-flex align-items-end" style={{ height: '200px', gap: '15px' }}>
                {revenueData.map((data, index) => {
                    const height = (data.revenue / maxRevenue) * 160;
                    return (
                        <div key={index} className="d-flex flex-column align-items-center" style={{ flex: 1 }}>
                            <div 
                                className="rounded-top"
                                style={{
                                    height: `${height}px`,
                                    backgroundColor: '#4A2E16',
                                    width: '30px',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer'
                                }}
                                onMouseOver={(e) => {
                                    e.target.style.backgroundColor = '#8B4513';
                                    e.target.style.transform = 'scale(1.1)';
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.backgroundColor = '#4A2E16';
                                    e.target.style.transform = 'scale(1)';
                                }}
                                title={`$${data.revenue.toLocaleString()}`}
                            ></div>
                            <div className="mt-2">
                                <small className="text-muted fw-bold">{data.month}</small>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="mt-3 text-center">
                <small className="text-muted">
                    Revenue growth over the last 7 months
                </small>
            </div>
        </div>
    );
};

export default RevenueChart;