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
                        +1012 3456 789
                    </p>
                    <p className={style.mail}>
                        demo@gmail.com
                    </p>
                    <p className={style.address}>
                        132 Dartmouth Street Boston, Massachusetts 02156 United States                    </p>
                </div>
                <div className={style.social_links}>
                    <span className={style.links}>
                        <i class="fa-brands fa-instagram"></i>
                    </span>
                    <span className={style.links}>
                    <i class="fa-brands fa-twitter"></i>
                    </span>
                    <span className={style.links}>
                    <i class="fa-brands fa-discord"></i>
                    </span>
                </div>
            </div>
        </div>
        {/* https://www.figma.com/design/znc4ucs921EZ7wiUOMsaJB/Contact-Us-Page-UIUX-Design-_-Contact-Form-Kit-(Community)?node-id=1-681&t=0GN4UmvkRrsiKyNO-0   */}
    </>
}

export default ContactForm