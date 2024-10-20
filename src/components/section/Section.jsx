import styles from './Section.module.css'

export default function Section({ title, content }) {
    return (
        <div className={styles['section-container']}>
            <h1 className={styles['section-title']}>{title}</h1>
            <p className={styles['section-content']}>{content}</p>
        </div>
    )
}