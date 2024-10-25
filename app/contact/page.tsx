import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <>
      <Header />
      <Hero />
      <section className={styles.contact}>
        <h2 className={styles.title}>Contact Information</h2>
        <p className={styles.content}>
          Have questions about Innovate 2024? Reach out to us, and we will get
          back to you as soon as possible!
        </p>
        <ul className={styles.details}>
          <li className={styles.li}>
            <strong>Email:</strong> info@innovate2024.com
          </li>
          <li className={styles.li}>
            <strong>Phone:</strong> +92 123456789
          </li>
          <li className={styles.li}>
            <strong>Address:</strong> Shahrah-e-Faisal, Karachi, Pakistan
          </li>
        </ul>
      </section>

      <section className={styles.form}>
        <h2 className={styles.title2}>Get in Touch</h2>
        <form className={styles.contactform}>
          <label className={styles.label}>
            Name:
            <input
              className={styles.input}
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
          </label>
          <label className={styles.label}>
            Email:
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </label>
          <label className={styles.label}>
            Message:
            <textarea
              className={styles.textarea}
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
          </label>
          <button className={styles.button} type="submit">
            Send Message
          </button>
        </form>
      </section>

      <Footer></Footer>
    </>
  );
}
