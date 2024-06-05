import style from './style/Title.module.css'

const Title = () => {

    return <section className={style.title}>
        <div
        className={style.title_content}
        >
            <h2 
            className={style.text}>
                Contact Us
            </h2>
            <p className={style.secondary_text}>
            Any question or remarks? Just write us a message!
            </p>
        </div>
    </section>
}

export default Title