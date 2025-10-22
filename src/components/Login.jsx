import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
  
const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        if (error) setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('https://api.tintarmac.co.zw/api/v1/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            
            const data = await response.json();
            
            if (response.ok) {
                if (data.token) {
                    localStorage.setItem('authToken', data.token);
                    localStorage.setItem('userData', JSON.stringify(data.user));
                }
                navigate('/admin/dashboard');
            } else {
                setError(data.message || 'Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('Login error', error);
            setError('Network error. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div 
            className="container-fluid vh-100" 
            style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="row justify-content-center align-items-center h-100">
                <div className="col-md-6 col-lg-4">
                    <div 
                        className="card shadow-lg border-0 rounded-3" 
                        style={{
                            backgroundColor: '#F9F3DD',
                            backdropFilter: 'blur(10px)'
                        }}
                    >
                        <div className="card-body p-5">
                            {/* Logo/Brand */}
                            <div className="text-center mb-4">
                                <h2 
                                    className="fw-bold mb-2" 
                                    style={{ color: '#4A2E16' }}
                                >
                                    Habinest
                                </h2>
                                <p style={{ color: '#4A2E16', opacity: '0.8' }}>Admin Portal</p>
                            </div>

                            {/* Error Message */}
                            {error && (
                                <div className="alert alert-danger d-flex align-items-center" role="alert">
                                    <div>{error}</div>
                                </div>
                            )}

                            {/* Login Form */}
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label 
                                        htmlFor="email" 
                                        className="form-label fw-semibold"
                                        style={{ color: '#4A2E16' }}
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control form-control-lg"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        required
                                        disabled={loading}
                                        style={{
                                             backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                            border: '2px solid #4A2E16',
                                            borderRadius: '10px',
                                            padding: '12px 15px',
                                            color: '#4A2E16'
                                        }}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label 
                                        htmlFor="password" 
                                        className="form-label fw-semibold"
                                        style={{ color: '#4A2E16' }}
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control form-control-lg"
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Enter your password"
                                        required
                                        disabled={loading}
                                        style={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                            border: '2px solid #4A2E16',
                                            borderRadius: '10px',
                                            padding: '12px 15px',
                                            color: '#4A2E16'
                                        }}
                                    />
                                </div>

                                <div className="d-grid mb-3">
                                    <button
                                        type="submit"
                                        className="btn btn-lg fw-semibold border-0 d-flex justify-content-center align-items-center"
                                        disabled={loading}
                                        style={{
                                            backgroundColor: loading ? '#A38B70' : '#4A2E16',
                                            color: '#F9F3DD',
                                            borderRadius: '10px',
                                            padding: '12px',
                                            transition: 'all 0.3s ease',
                                            minHeight: '50px',
                                            border: '2px solid #4A2E16'
                                        }}
                                        onMouseOver={(e) => {
                                            if (!loading) {
                                                e.target.style.backgroundColor = '#3A2412';
                                                e.target.style.transform = 'translateY(-2px)';
                                            }
                                        }}
                                        onMouseOut={(e) => {
                                            if (!loading) {
                                                e.target.style.backgroundColor = '#4A2E16';
                                                e.target.style.transform = 'translateY(0)';
                                            }
                                        }}
                                    >
                                        {loading ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                                                Signing In...
                                            </>
                                        ) : (
                                            'Sign In'
                                        )}
                                    </button>
                                </div>

                                <div className="text-center">
                                    <a 
                                        href="#" 
                                        className="text-decoration-none fw-semibold"
                                        style={{ color: '#4A2E16' }}
                                        onMouseOver={(e) => e.target.style.color = '#3A2412'}
                                        onMouseOut={(e) => e.target.style.color = '#4A2E16'}
                                    >
                                        Forgot Password?
                                    </a>
                                </div>
                            </form>

                            {/* Additional Info */}
                            <div className="mt-4 text-center">
                                <small style={{ color: '#4A2E16', opacity: '0.7' }}>
                                    &copy; 2025 Habinest Rental Management System
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;