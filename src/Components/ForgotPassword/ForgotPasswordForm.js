import React, { useState } from 'react';
import './ForgotPasswordForm.Styles.scss';

const ForgotPasswordForm = () => {
    const [formData, setFormData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
    });

    const [errors, setErrors] = useState({
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const url = "https://vitecon.vit.ac.in/api/forgotPassword"
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                setFormData({
                    currentPassword: '',
                    newPassword: '',
                    confirmNewPassword: '',
                });
            } else {
                const data = await response.json();
                setErrors(data.errors);
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="forgot-password-form">
            <h2>Forgot Password</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="currentPassword">Current Password</label>
                    <input type="password" name="currentPassword" value={formData.currentPassword} onChange={handleChange} />
                    {errors.currentPassword && <div className="error">{errors.currentPassword}</div>}
                </div>

                <div className="form-group">
                    <label htmlFor="newPassword">New Password</label>
                    <input type="password" name="newPassword" value={formData.newPassword} onChange={handleChange} />
                    {errors.newPassword && <div className="error">{errors.newPassword}</div>}
                </div>

                <div className="form-group">
                    <label htmlFor="confirmNewPassword">Confirm New Password</label>
                    <input type="password" name="confirmNewPassword" value={formData.confirmNewPassword} onChange={handleChange} />
                    {errors.confirmNewPassword && <div className="error">{errors.confirmNewPassword}</div>}
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ForgotPasswordForm;
