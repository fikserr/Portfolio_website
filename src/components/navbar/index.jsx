import { NavLink } from 'react-router-dom'
import Container from '../../layout/container'
import styles from './navbar.module.scss'
import uzbek from '../../images/uzbek.png'
import english from '../../images/enlish.jpg'
import classNames from 'classnames'
import { useContext} from 'react'
import { Context } from '../../Context'


function Navbar() {
  const {flag,changeLang} = useContext(Context)
  return (
    <div className={styles.navbar}>
      <Container className={styles.navbar__container}>
        <NavLink to="/" className={styles.navbar__logo}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M31.5294 14.2118C31.5294 18.8819 28.7623 22.9082 24.7793 24.7351C26.4612 23.3496 27.5322 21.248 27.5322 18.896C27.5322 14.7642 24.2259 11.4042 20.112 11.3205C20.0574 11.3167 20.0075 11.3167 19.9529 11.3167C19.8983 11.3167 19.8485 11.3167 19.7939 11.3205C18.2673 11.4033 17.0588 12.6663 17.0588 14.2108V28.6814C17.0588 33.4748 13.1699 37.3638 8.37646 37.3638V14.2118C8.37646 7.81928 13.5605 2.63528 19.9529 2.63528C26.3454 2.63528 31.5294 7.81928 31.5294 14.2118Z" fill="black" />
            <path d="M21.9992 16.2582C23.1294 15.128 23.1294 13.2956 21.9992 12.1654C20.8689 11.0351 19.0365 11.0351 17.9063 12.1654C16.7761 13.2956 16.7761 15.128 17.9063 16.2582C19.0365 17.3884 20.8689 17.3884 21.9992 16.2582Z" fill="black" />
          </svg>
          Personal
        </NavLink> 
        
        <div className={styles.navbar__links}>
          <NavLink to='about' className={styles.navbar__link}>About Me</NavLink>
          <NavLink to='skills' className={styles.navbar__link}>Skills</NavLink>
          <NavLink to='project' className={styles.navbar__link}>Project</NavLink>
          <NavLink to='contact' className={styles.navbar__link}>Contact me</NavLink>

        </div>
        
        <button className={styles.navbar__flag} onClick={()=>changeLang(!flag)}>
              <div className={classNames(styles.navbar__flag_english, flag ? styles.active : "")}>
                <img src={english} alt="english" />
                <p>EN</p>
              </div>
              <div className={classNames(styles.navbar__flag_uzbek, flag == false ? styles.active : "")}>
                <img src={uzbek} alt="uzbek" />
                <p>UZ</p>
              </div>
            </button>
 
      </Container>


    </div>
  )
}

export default Navbar