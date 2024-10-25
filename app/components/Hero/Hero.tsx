import styles from "./Hero.module.css";
import Link from "next/link";

const Hero = () => (
    <div className={styles.container}>
      <h1 className={styles.title}>Join Us at Innovate 2024</h1>
      <p className={styles.subtitle}>Discover the future of technology with industry leaders and pioneers.</p>
      <Link href={'/contact'} className={styles.button}>Register Now</Link>
    </div>
  );
  
  export default Hero;