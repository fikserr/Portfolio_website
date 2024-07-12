import Container from "../../layout/container";
import aboutImage from "../../images/about.png";
import styles from "./about.module.scss";
import { useContext } from "react";
import { Context } from "../../Context";

function About() {
  const {lang} = useContext(Context)
  return (
    <div className={styles.about}>
      <Container className={styles.about__container}>
        <div className={styles.about_left}>
          <img src={aboutImage} alt="" className={styles.about__image} />
        </div>

        <div className={styles.about__right}>
          <h1 className={styles.about__title}>
            About <span>Me</span>
          </h1>

          <p className={styles.about__text}>
            {lang.aboutOne}
          </p>
          <p className={styles.about__text}>
          {lang.aboutTwo}
          </p>
          <p className={styles.about__text}>
          {lang.aboutThree}
          </p>
        </div>
      </Container>
    </div>
  );
}

export default About;
