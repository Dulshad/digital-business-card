import dulshadImg from '../../images/dulshad.jpg'
import styles from './Info.module.css'
import Button from '../button/Button.jsx'
import linkedinIcon from '../../images/linkedin.svg'
import emailIcon from '../../images/mail-solid.svg'

export default function Info() {
    return (
        <div className={styles['info-container']}>
            <img className={styles['info-img']} src={dulshadImg} alt="Profile picture of Dulshad"/>
            <h1 className={styles['info-title']}>Dulshad Faraj</h1>
            <p className={styles['info-subtitle']}>Fullstack Developer</p>
            <p className={styles['info-smalltext']}>dulshadfaraj.website </p>
            <div className={styles['info-btn-container']}>
                <Button text="Email" href="mailto:dulshad@website.com" backgroundColorHexCode="#FFFFFF" colorHexCode="#374151" iconPath={emailIcon} width="90px" height="32px"/>
                <Button text="LinkedIn" href="https://www.linkedin.com/in/dulshad-faraj/" backgroundColorHexCode="#5093E2" colorHexCode="#FFFFFF" iconPath={linkedinIcon}
                        width="115px" height="32px"/>
            </div>
        </div>
    )
}