import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import styles from "./about.module.css";

export default function About() {
  return (
    <>
      <Header />
      <Hero />
      <section className={styles.event}>
        <h2 className={styles.title}>Event Overview</h2>
        <p className={styles.content}>
          Innovate 2024 is the go-to event for those passionate about the future
          of technology. This year event brings together industry leaders,
          developers, and tech enthusiasts for a series of insightful talks,
          interactive workshops, and networking opportunities designed to
          inspire and educate.
        </p>
      </section>

      <section className={styles.mission}>
        <h2 className={styles.title2}>Our Mission</h2>
        <p className={styles.content2}>
          At Innovate 2024, our mission is to bridge the gap between
          groundbreaking ideas and real-world applications. We aim to foster a
          community that embraces innovation, inclusivity, and impact-driven
          advancements in technology.
        </p>
      </section>

      <section className={styles.history}>
        <h2 className={styles.title3}>Event History</h2>
        <p className={styles.content3}>
          Since its inception in 2015, Innovate has grown to become one of the
          most anticipated technology events each year. With a focus on
          innovation, we have hosted industry leaders and emerging talents,
          creating a dynamic platform for tech-driven discussions,
          collaborations, and learning opportunities.
        </p>
      </section>

      <Footer></Footer>
    </>
  );
}
