import styles from './Contacto.module.css'

export const Contacto = () => {
    return (
        <section className={styles.center}>
            <h1>Página de Contacto</h1>
            <form className={styles.form}>
                <input type="text /"></input>
                <input type="text /"></input>
                <textarea name="" id=""></textarea>
                <button>Enviar</button>
            </form>
        </section>
    )
}