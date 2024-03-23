import './login.css';
import React, { useState } from 'react';

function LoginForm(){

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.token);
               
                window.location.replace('/dashboard'); 
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    localStorage.removeItem('token');
    return (
        <div className="login-form-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} style={{width: '250px'}} />
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} style={{width: '250px'}} />
                <br/><br/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;
