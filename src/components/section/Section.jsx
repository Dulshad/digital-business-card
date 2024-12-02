import styles from './Section.module.css'

export default function Section({ title, content }) {
    return (
        <div className={styles.section_container}>
            <h1 className={styles.section_title}>{title}</h1>
            <p className={styles.section_content}>{content}</p>
        </div>
    )
}