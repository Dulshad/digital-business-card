import PropTypes from 'prop-types';
import styles from './Button.module.css'

Button.propTypes = {
    text: PropTypes.string.isRequired,
    iconPath: PropTypes.string.isRequired,
    backgroundColorHexCode: PropTypes.string.isRequired,
    colorHexCode: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
};

export default function Button({text, iconPath, backgroundColorHexCode, colorHexCode, width, height, href}) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer"  className={styles['btn']}
           style={{backgroundColor: backgroundColorHexCode, color: colorHexCode, width: width, height: height}}>
            <img src={iconPath} alt={`${text} icon`} className={styles['icon']}/>
            {text}
        </a>
    )
}