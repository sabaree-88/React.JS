import React, { useState, useEffect } from 'react';
import style from './style/ContactFormStyle.module.css';

const ContactForm = () => {
    const initialFormData = {
        firstName: '',
        lastName: '',
        email: '',
        phone_number: '',
        message: '',
        subject: '',  
    };

    const formDataValue = () => {
        const savedData = localStorage.getItem('formData');
        return savedData ? JSON.parse(savedData) : initialFormData;
    };

    const [formData, setFormData] = useState(formDataValue);
    const [err, setErr] = useState({});

    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(formData));
    }, [formData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};

        if (!formData.firstName.trim()) {
            errors.firstName = 'First name is required!';
        }

        if (!formData.lastName.trim()) {
            errors.lastName = 'Last name is required!';
        }

        if (!formData.email.trim()) {
            errors.email = 'Email is required!';
        }

        if (!formData.phone_number.trim()) {
            errors.phone_number = 'Phone number is required!';
        }

        if (!formData.subject) {
            errors.subject = 'Subject is required!';  // Validate subject
        }

        if (!formData.message.trim()) {
            errors.message = 'Message is required!';
        }

        setErr(errors);

        if (Object.keys(errors).length === 0) {
            localStorage.setItem('formData', JSON.stringify(formData));
            alert('Submitted successfully!');
        }
    };

    return (
        <div className={style.overall_container}>
            <div className={style.info}>
                <div className={style.top_text}>
                    <h3>Contact Information</h3>
                    <p>Say something to start a live chat!</p>
                </div>
                <div className={style.middle_text}>
                    <p className={style.phone_number}>
                        <i className="fa-solid fa-phone-volume"></i>
                        <span className={style.ml}>+1012 3456 789</span>
                    </p>
                    <p className={style.mail}>
                        <i className="fa-solid fa-envelope"></i>
                        <span className={style.ml}>demo@gmail.com</span>
                    </p>
                    <p className={style.address}>
                        <i className="fa-solid fa-location-dot"></i>
                        <span className={style.ml}>132 Dartmouth Street Boston, Massachusetts 02156 United States</span>
                    </p>
                </div>
                <div className={style.social_links}>
                    <span className={style.links}>
                        <i className="fa-brands fa-instagram"></i>
                    </span>
                    <span className={style.links}>
                        <i className="fa-brands fa-twitter"></i>
                    </span>
                    <span className={style.links}>
                        <i className="fa-brands fa-discord"></i>
                    </span>
                </div>
            </div>

            <div className={style.container_form}>
                <form method="get" className={style.form} onSubmit={handleSubmit}>
                    <div className={style.all}>
                        <div className={style.container}>
                            <div className={style.form_group}>
                                <label htmlFor="firstName" className={style.form_label}>First Name</label><br />
                                <input
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    className={style.form_controll}
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                                {err.firstName && <span className={style.text_red}>{err.firstName}</span>}
                            </div>
                            <div className={style.form_group}>
                                <label htmlFor="lastName" className={style.form_label}>Last Name</label><br />
                                <input
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    className={style.form_controll}
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                                {err.lastName && <span className={style.text_red}>{err.lastName}</span>}
                            </div>
                        </div>
                        <div className={style.container}>
                            <div className={style.form_group}>
                                <label htmlFor="email" className={style.form_label}>Email</label><br />
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className={style.form_controll}
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {err.email && <span className={style.text_red}>{err.email}</span>}
                            </div>
                            <div className={style.form_group}>
                                <label htmlFor="phoneNumber" className={style.form_label}>Phone Number</label><br />
                                <input
                                    type="tel"
                                    name="phone_number"
                                    id="phoneNumber"
                                    className={style.form_controll}
                                    value={formData.phone_number}
                                    onChange={handleChange}
                                />
                                {err.phone_number && <span className={style.text_red}>{err.phone_number}</span>}
                            </div>
                        </div>
                        <h5 className={style.select_text}>Select Subject?</h5>
                        <div className={style.select_container}>
                            <div className={style.form_group}>
                                <input
                                    type="radio"
                                    name="subject"
                                    id="radio_1"
                                    value="1"
                                    className={style.form_controll}
                                    checked={formData.subject === "1"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="radio_1" className={style.form_label}>General Inquiry</label>
                            </div>
                            <div className={style.form_group}>
                                <input
                                    type="radio"
                                    name="subject"
                                    id="radio_2"
                                    value="2"
                                    className={style.form_controll}
                                    checked={formData.subject === "2"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="radio_2" className={style.form_label}>Technical Support</label>
                            </div>
                            <div className={style.form_group}>
                                <input
                                    type="radio"
                                    name="subject"
                                    id="radio_3"
                                    value="3"
                                    className={style.form_controll}
                                    checked={formData.subject === "3"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="radio_3" className={style.form_label}>Sales Inquiry</label>
                            </div>
                            <div className={style.form_group}>
                                <input
                                    type="radio"
                                    name="subject"
                                    id="radio_4"
                                    value="4"
                                    className={style.form_controll}
                                    checked={formData.subject === "4"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="radio_4" className={style.form_label}>Other</label>
                            </div>
                        </div>
                        {err.subject && <span className={style.text_red}>{err.subject}</span>}
                        <div className={style.msg_cont}>
                            <div className={style.form_group}>
                                <label htmlFor="msg" className={style.form_label}>Message</label>
                                <textarea
                                    name="message"
                                    id="msg"
                                    rows="1"
                                    placeholder="Write your message.."
                                    className={style.msg}
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                                {err.message && <span className={style.text_red}>{err.message}</span>}
                            </div>
                        </div>

                        <div className={style.submit_btn}>
                            <button type='submit' className={style.submit}>Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
