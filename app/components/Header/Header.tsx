"use client";

import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        Innovate
      </Link>
      <ul className={styles.navList}>
        <li>
          <Link
            href="/"
            className={`${styles.navLink} ${
              pathname === "/" ? styles.active : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={`${styles.navLink} ${
              pathname === "/about" ? styles.active : ""
            }`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={`${styles.navLink} ${
              pathname === "/contact" ? styles.active : ""
            }`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
