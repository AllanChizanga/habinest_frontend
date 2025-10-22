import React from 'react';

const UserGrowthChart = () => {
    const growthData = [
        { type: 'Landlords', count: 45, color: '#4A2E16' },
        { type: 'Tenants', count: 178, color: '#8B4513' },
        { type: 'Admins', count: 3, color: '#A0522D' }
    ];

    const total = growthData.reduce((sum, item) => sum + item.count, 0);

    return (
        <div className="user-growth-chart">
            <div className="d-flex justify-content-center mb-4">
                <div 
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                        width: '120px',
                        height: '120px',
                        background: `conic-gradient(
                            ${growthData[0].color} 0% ${(growthData[0].count / total) * 100}%,
                            ${growthData[1].color} 0% ${((growthData[0].count + growthData[1].count) / total) * 100}%,
                            ${growthData[2].color} 0% 100%
                        )`
                    }}
                >
                    <div 
                        className="rounded-circle d-flex align-items-center justify-content-center"
                        style={{
                            width: '80px',
                            height: '80px',
                            backgroundColor: '#F9F3DD'
                        }}
                    >
                        <strong style={{ color: '#4A2E16', fontSize: '14px' }}>
                            {total}
                        </strong>
                    </div>
                </div>
            </div>

            <div className="legend">
                {growthData.map((item, index) => (
                    <div key={index} className="d-flex align-items-center mb-2">
                        <div 
                            className="rounded me-2"
                            style={{
                                width: '12px',
                                height: '12px',
                                backgroundColor: item.color
                            }}
                        ></div>
                        <small className="text-muted">
                            <strong>{item.type}:</strong> {item.count} ({Math.round((item.count / total) * 100)}%)
                        </small>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserGrowthChart;