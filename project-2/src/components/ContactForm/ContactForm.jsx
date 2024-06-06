import style from './style/ContactFormStyle.module.css'
const ContactForm = () => {

    return <>
        <div className={style.overall_container}>
            <div className={style.info}>
                <div className={style.top_text}>
                    <h3>Contact Information</h3>
                    <p>Say something to start a live chat!</p>
                </div>
                <div className={style.middle_text}>
                    <p className={style.phone_number}>
                    <i className="fa-solid fa-phone-volume"></i><span className={style.ml}>+1012 3456 789</span>
                    </p>
                    <p className={style.mail}>
                    <i className="fa-solid fa-envelope"></i><span className={style.ml}>demo@gmail.com</span>
                    </p>
                    <p className={style.address}>
                    <i className="fa-solid fa-location-dot"></i><span className={style.ml}>132 Dartmouth Street Boston, Massachusetts 02156 United States </span>
                    </p>
                </div>
                <div className={style.social_links}>
                    <span className={style.links}>
                        <i className="fa-brands fa-instagram"></i>
                    </span>
                    <span className={style.links}>
                        <i class="fa-brands fa-twitter"></i>
                    </span>
                    <span className={style.links}>
                        <i class="fa-brands fa-discord"></i>
                    </span>
                </div>
            </div>

            <div className={style.container_form}>
                <form method="get" className={style.form}>
                    <div className={style.all}>
                        <div className={style.container}>
                            <div className={style.form_group}>
                                <label htmlFor="firstName" className={style.form_label}>First Name</label><br />
                                <input type="text" name="fname" id="firstName" className={style.form_controll} />
                            </div>
                            <div className={style.form_group}>
                                <label htmlFor="lastName" className={style.form_label}>Last Name</label><br />
                                <input type="text" name="lname" id="lastName" className={style.form_controll} />
                            </div>
                        </div>
                        <div className={style.container}>
                            <div className={style.form_group}>
                                <label htmlFor="email" className={style.form_label}>Email</label><br />
                                <input type="email" name="email" id="email" className={style.form_controll} />
                            </div>
                            <div className={style.form_group}>
                                <label htmlFor="phoneNumber" className={style.form_label}>Phone Number</label><br />
                                <input type="tel" name="phoneNumber" id="phoneNumber" className={style.form_controll} />
                            </div>
                        </div>
                        <h5 className={style.select_text}>Select Subject?</h5>
                        <div className={style.select_container}>
                            <div className={style.form_group}>
                                <input type="radio" name="subject" id="radio_1" value={1} className={style.form_controll} />
                                <label htmlFor="radio_1" className={style.form_label}>General Inquiry</label>
                            </div>
                            <div className={style.form_group}>
                                <input type="radio" name="subject" id="radio_2" value={2} className={style.form_controll} />
                                <label htmlFor="radio_2" className={style.form_label}>General Inquiry</label>
                            </div>
                            <div className={style.form_group}>
                                <input type="radio" name="subject" id="radio_3" value={3} className={style.form_controll} />
                                <label htmlFor="radio_3" className={style.form_label}>General Inquiry</label>
                            </div>
                            <div className={style.form_group}>
                                <input type="radio" name="subject" id="radio_4" value={4} className={style.form_controll} />
                                <label htmlFor="radio_4" className={style.form_label}>General Inquiry</label>
                            </div>
                        </div>
                        <div className={style.msg_cont}>
                            <div className={style.form_group}>
                                <label htmlFor="msg" className={style.form_label}>Message</label>
                                <textarea name="msg" id="msg" rows="1" placeholder="Write your message.." className={style.msg}></textarea>
                            </div>
                        </div>

                        <div className={style.submit_btn}>
                            <button type='submit' className={style.submit}>Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        {/* https://www.figma.com/design/znc4ucs921EZ7wiUOMsaJB/Contact-Us-Page-UIUX-Design-_-Contact-Form-Kit-(Community)?node-id=1-681&t=0GN4UmvkRrsiKyNO-0   */}
    </>
}

export default ContactForm