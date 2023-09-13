"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import styles from "./(css)/Header.module.css";
import logo from "@/Assets/Images/Logos/Shipex-transparent-logo.png";
import Image from "next/image";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
      delay: 0.3,
    },
  },
  exit: {
    y: 100,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Header() {
  const [showSidebar, setShowSidebar] = useState(false);

  const sidebarRef = useRef(null);

  const bgRef = useRef(null);

  useEffect(() => {
    const sidebar = sidebarRef.current;
    const bg = bgRef.current;
    if (showSidebar) {
      sidebar.style = "translateX(0)";
      bg.style.background = "#00000099";
      bg.style.display = "block";
    } else {
      sidebar.style.transform = "translateX(-150vw)";
      bg.style.background = "transparent";
      bg.style.display = "none";
    }
  }, [showSidebar]);

  const sidebarToggle = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/">
            <Image className={styles.logoimg} src={logo} />
          </Link>
        </div>
        <div className={styles.menu}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/resources">Resources</Link>
            </li>
            <li>
              <Link href="/services">Service</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link className={styles.login} href="/login">
                Login/signUp
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.ctaButton}>
          <button>Book Shipment</button>
        </div>
        <div onClick={sidebarToggle} className={styles.bar}>
          <h1 className={styles.h1}>Menu</h1>
        </div>
      </nav>
      <div
        ref={bgRef}
        className={styles.sidebarbg}
        onClick={sidebarToggle}
      ></div>
      <div className={styles.sidebarContainer} ref={sidebarRef}>
        <div onClick={sidebarToggle} className={styles.bar}>
          <h1 className={styles.h1}> &#8592;</h1>
        </div>
        <div className={styles.content}>
          <div className={styles.logo}>
            <Link href="/" className={styles.a}>
              <Image className={styles.logoimg} src={logo} />
            </Link>
          </div>
          <div className={styles.menu}>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <Link className={styles.a} href="/">
                  Home
                </Link>
              </li>
              <li className={styles.li}>
                <Link className={styles.a} href="/resources">
                  Resources
                </Link>
              </li>
              <li className={styles.li}>
                <Link className={styles.a} href="/services">
                  Service
                </Link>
              </li>
              <li className={styles.li}>
                <Link className={styles.a} href="/about">
                  About Us
                </Link>
              </li>
              <li className={styles.li}>
                <Link className={styles.a} href="/contact">
                  Contact
                </Link>
              </li>
              <li className={styles.li}>
                <Link className={styles.login} href="/login">
                  Login/signUp
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.ctaButton}>
            <button>Book Shipment</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}