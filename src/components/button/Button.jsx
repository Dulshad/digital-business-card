import styles from './Button.module.css'

export default function Button({ text, iconPath, backgroundColorHexCode, colorHexCode, width, height, href }) {
    return (
        <a href={href} target="_blank" className={styles['btn']}
           style={{ backgroundColor: backgroundColorHexCode, color: colorHexCode, width: width, height: height }}>
            <img src={iconPath} alt={`${text} icon`} className={styles['icon']} />
            {text}
        </a>
    )
}