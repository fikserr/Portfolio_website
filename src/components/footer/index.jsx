import Container from '../../layout/container'
import styles from './footer.module.scss'

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer}>
        <Container className={styles.footer__container}>
          <div className={styles.footer__logo}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M31.5294 14.2117C31.5294 18.8818 28.7623 22.9082 24.7793 24.735C26.4612 23.3496 27.5322 21.248 27.5322 18.896C27.5322 14.7642 24.2259 11.4042 20.112 11.3204C20.0574 11.3167 20.0075 11.3167 19.9529 11.3167C19.8983 11.3167 19.8485 11.3167 19.7939 11.3204C18.2673 11.4033 17.0588 12.6663 17.0588 14.2108V28.6814C17.0588 33.4748 13.1699 37.3637 8.37646 37.3637V14.2117C8.37646 7.81925 13.5605 2.63525 19.9529 2.63525C26.3454 2.63525 31.5294 7.81925 31.5294 14.2117Z" fill="white" />
              <path d="M21.9992 16.2583C23.1294 15.1281 23.1294 13.2957 21.9992 12.1655C20.8689 11.0353 19.0365 11.0353 17.9063 12.1655C16.7761 13.2957 16.7761 15.1281 17.9063 16.2583C19.0365 17.3886 20.8689 17.3886 21.9992 16.2583Z" fill="white" />
            </svg>
            <p className={styles.footer__logo_text}>Personal</p>
          </div>


          <p className={styles.footer__text}>make by Abdullokh</p>


        </Container>


      </div>
    </div>
  )
}

export default Footer