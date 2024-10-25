import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <section className={styles.page}>
        <h1 className={styles.h1}>About Innovate 2024</h1>
        <p className={styles.p}>
          Innovate 2024 is the premier event for tech enthusiasts, bringing
          together industry leaders, developers, and visionaries from around the
          world. Join us for an exciting day filled with cutting-edge insights,
          networking opportunities, and hands-on workshops.
        </p>
        <Link href="/about" className={styles.button}>
          About Innovate 2024
        </Link>
      </section>

      <section className={styles.highlights}>
        <h2 className={styles.h2}>Event Highlights</h2>
        <div className={styles.container}>
          <div className={styles.item}>
            <h3 className={styles.h3}>The Future of AI</h3>
            <p className={styles.ip}>
              Industry leader Sir Zia Khan shares insights into AI advancements
              shaping our world.
            </p>
          </div>
          <div className={styles.item}>
            <h3 className={styles.h3}>Building with Web3</h3>
            <p className={styles.ip}>
              A hands-on workshop to explore the fundamentals of blockchain
              technology and Web3 applications.
            </p>
          </div>
          <div className={styles.item}>
            <h3 className={styles.h3}>Innovators Roundtable</h3>
            <p className={styles.ip}>
              Thought leaders discuss trends and challenges in tech at our
              Innovators Roundtable.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <h2 className={styles.title}>Reserve Your Spot Now!</h2>
        <p className={styles.content}>
          Do not miss your chance to be part of this incredible event. Reserve
          your spot now and be at the forefront of tech innovation!
        </p>
        <Link href={"/contact"} className={styles.btn}>
          Register Now
        </Link>
      </section>

      <Footer></Footer>
    </>
  );
}
