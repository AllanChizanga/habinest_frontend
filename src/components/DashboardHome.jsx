import React, { useState, useEffect } from 'react';
import StatsCards from './StatsCards';
import RevenueChart from './RevenueChart';
import UserGrowthChart from './UserGrowthChart';
import RecentActivity from './RecentActivity';

const DashboardHome = () => {
    const [stats, setStats] = useState({
        totalUsers: 0,
        totalProperties: 0,
        totalTenants: 0,
        totalRevenue: 0,
        pendingRequests: 0,
        occupiedUnits: 0
    });

    useEffect(() => {
        // Simulate API call to fetch stats
        const fetchStats = async () => {
            setTimeout(() => {
                setStats({
                    totalUsers: 156,
                    totalProperties: 89,
                    totalTenants: 234,
                    totalRevenue: 45280,
                    pendingRequests: 23,
                    occupiedUnits: 167
                });
            }, 1000);
        };

        fetchStats();
    }, []);

    return (
        <div className="dashboard-home">
            <div className="row mb-4">
                <div className="col-12">
                    <h2 className="text-dark mb-2">Dashboard Overview</h2>
                    <p className="text-muted">
                        Welcome back! Here's what's happening with your properties today.
                    </p>
                </div>
            </div>

            {/* Statistics Cards */}
            <StatsCards stats={stats} />

            {/* Charts Row */}
            <div className="row mt-4">
                <div className="col-lg-8 mb-4">
                    <div className="card shadow-sm border-0">
                        <div className="card-body">
                            <h5 className="text-dark mb-3">Revenue Overview</h5>
                            <RevenueChart />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="card shadow-sm border-0">
                        <div className="card-body">
                            <h5 className="text-dark mb-3">User Distribution</h5>
                            <UserGrowthChart />
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="row mt-2">
                <div className="col-12">
                    <RecentActivity />
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;