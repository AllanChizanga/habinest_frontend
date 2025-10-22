import React, { useState, useEffect } from 'react';

const PropertiesManagement = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate API call
        setTimeout(() => {
            setProperties([
                { id: 1, name: 'Skyline Apartments', type: 'Apartment', location: 'City Center', units: 24, occupied: 18, status: 'Active' },
                { id: 2, name: 'Garden Villas', type: 'Villa', location: 'Suburbs', units: 12, occupied: 8, status: 'Active' },
                { id: 3, name: 'River View Condos', type: 'Condo', location: 'Riverside', units: 36, occupied: 30, status: 'Maintenance' },
                { id: 4, name: 'Mountain Retreat', type: 'House', location: 'Hills', units: 1, occupied: 0, status: 'Available' }
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
        <div className="properties-management">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h1 style={{ color: '#4A2E16' }}>Properties Management</h1>
                    <p style={{ color: '#4A2E16', opacity: '0.8' }}>
                        Manage all rental properties and units
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
                >
                    + Add New Property
                </button>
            </div>

            <div className="row">
                {properties.map(property => (
                    <div key={property.id} className="col-lg-6 mb-4">
                        <div className="card shadow-sm border-0 h-100">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-start mb-3">
                                    <h5 style={{ color: '#4A2E16' }}>{property.name}</h5>
                                    <span className={`badge ${
                                        property.status === 'Active' ? 'bg-success' : 
                                        property.status === 'Maintenance' ? 'bg-warning' : 'bg-info'
                                    }`}>
                                        {property.status}
                                    </span>
                                </div>
                                
                                <div className="mb-3">
                                    <small className="text-muted d-block">
                                        <strong>Type:</strong> {property.type}
                                    </small>
                                    <small className="text-muted d-block">
                                        <strong>Location:</strong> {property.location}
                                    </small>
                                </div>

                                <div className="progress mb-3" style={{ height: '8px' }}>
                                    <div 
                                        className="progress-bar" 
                                        style={{ 
                                            width: `${(property.occupied / property.units) * 100}%`,
                                            backgroundColor: '#4A2E16'
                                        }}
                                    ></div>
                                </div>

                                <div className="d-flex justify-content-between text-center">
                                    <div>
                                        <h6 className="mb-0" style={{ color: '#4A2E16' }}>{property.units}</h6>
                                        <small className="text-muted">Total Units</small>
                                    </div>
                                    <div>
                                        <h6 className="mb-0" style={{ color: '#4A2E16' }}>{property.occupied}</h6>
                                        <small className="text-muted">Occupied</small>
                                    </div>
                                    <div>
                                        <h6 className="mb-0" style={{ color: '#4A2E16' }}>{property.units - property.occupied}</h6>
                                        <small className="text-muted">Available</small>
                                    </div>
                                </div>

                                <div className="mt-3 d-flex gap-2">
                                    <button className="btn btn-sm btn-outline-primary flex-fill">
                                        View Details
                                    </button>
                                    <button className="btn btn-sm btn-outline-warning">
                                        Edit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PropertiesManagement;