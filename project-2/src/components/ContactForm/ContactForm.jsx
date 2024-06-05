import style from './style/ContactFormStyle.module.css'
const ContactForm = () => {

    return <>
        <div className={style.overall_container}>
            <div className={style.info}>
                <div className={style.top_text}>
                <h3>Contact Information</h3>
                <p>Say something to start a live chat!</p>
                </div>
            </div>
        </div>

    </>
}

export default ContactForm