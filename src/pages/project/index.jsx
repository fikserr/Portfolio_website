import Container from "../../layout/container";
import oil from "../../images/oil.png";
import sushi from "../../images/sushi.png";
import styles from "./project.module.scss";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../Context";

function Project() {
  const {lang} = useContext(Context)
  return (
    <div className={styles.project}>
      <Container className={styles.project__container}>
        <h1 className={styles.project__title}>
          My <span>Projects</span>
        </h1>

        <div className={styles.project__content}>
          <div className={styles.project__card}>
            <img src={oil} alt="image" />
          </div>
          <div className={styles.project__card}>
            <h3 className={styles.project__card_number}>01</h3>
            <h4 className={styles.project__card_name}>Products Oil WebSite</h4>
            <p className={styles.project__card_text}>
              {lang.oilSite}
            </p>
            <NavLink to="https://fanciful-belekoy-cdc93e.netlify.app/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10.8333 9.16658L17.6667 2.33325"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.3333 5.66675V1.66675H14.3333"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.16667 1.66675H7.5C3.33333 1.66675 1.66667 3.33341 1.66667 7.50008V12.5001C1.66667 16.6667 3.33333 18.3334 7.5 18.3334H12.5C16.6667 18.3334 18.3333 16.6667 18.3333 12.5001V10.8334"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </NavLink>
          </div>
          <div className={styles.project__card}>
            <img src={sushi} alt="image" />
          </div>
          <div className={styles.project__card}>
            <h3 className={styles.project__card_number}>02</h3>
            <h4 className={styles.project__card_name}>
              Products Ninja_Sushi WebSite
            </h4>
            <p className={styles.project__card_text}>
            {lang.sushi}
            </p>
            <NavLink to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10.8333 9.16658L17.6667 2.33325"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.3333 5.66675V1.66675H14.3333"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.16667 1.66675H7.5C3.33333 1.66675 1.66667 3.33341 1.66667 7.50008V12.5001C1.66667 16.6667 3.33333 18.3334 7.5 18.3334H12.5C16.6667 18.3334 18.3333 16.6667 18.3333 12.5001V10.8334"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </NavLink>
          </div>
    
        </div>
      </Container>
    </div>
  );
}

export default Project;
