import styles from './Footer.module.css'
import twitterLogo from '../../images/twitter-logo.svg'
import instagramLogo from '../../images/instagram-logo.svg'
import facebookLogo from '../../images/facebook-logo.svg'
import githubLogo from '../../images/github-logo.svg'

export default function Footer() {
    return (
        <div className={styles.footer_container}>
            <div className={styles.footer_icon_container}>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img className={styles.footer_icon} src={twitterLogo} alt="Twitter"/>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img className={styles.footer_icon} src={instagramLogo} alt="Instagram"/>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img className={styles.footer_icon} src={facebookLogo} alt="Facebook"/>
                </a>
                <a href="https://github.com/Dulshad" target="_blank" rel="noopener noreferrer">
                    <img className={styles.footer_icon} src={githubLogo} alt="GitHub"/>
                </a>
            </div>
        </div>
    )
}