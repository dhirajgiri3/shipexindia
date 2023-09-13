"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import logo from "@/Assets/Images/Logos/Shipex-transparent-logo.png";
import Image from "next/image";
import { motion } from "framer-motion";
import styled from "styled-components";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff50;
  backdrop-filter: blur(20px);
  width: 90vw;
  height: 8vh;
  padding: 1.5rem;
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  border-radius: 100px;
  -webkit-border-radius: 1000px;
  -moz-border-radius: 1000px;
  -ms-border-radius: 1000px;
  -o-border-radius: 1000px;

  @media screen and (max-width: 1000px) {
    height: 6vh;
  }

  @media screen and (max-width: 768px) {
    height: 7vh;
    width: 95vw;
    top: 0.5rem;
  }
`;

const Logo = styled.div`
  cursor: pointer;
  a {
    text-decoration: none;
    &:hover {
      color: var(--secondary-color);
    }
  }
  .logoimg {
    height: auto;
    width: 7rem;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 5.5rem;
    }
  }
`;

const Menu = styled.div`
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const MenuList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const MenuItem = styled.li`
  margin-right: 1rem;
`;

const NavLink = styled(Link)`
  font-size: 0.9rem;
  color: var(--text-grey);
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  font-family: var(--font);

  &:hover {
    color: var(--secondary-color);
  }
`;

const LoginLink = styled(NavLink)`
  color: var(--primary-color);
  font-size: 1rem;
`;

const CtaButton = styled.div`
  @media screen and (max-width: 1000px) {
    margin-right: 5rem;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const CtaButtonInner = styled.button`
  font-family: var(--font);
  font-size: 0.8rem;
  color: var(--text-color);
  padding: 10px 20px;
  border-radius: 100px;
  border: 2px solid var(--text-color);
  background: transparent;
  box-shadow: 5px 5px var(--text-color);
  cursor: pointer;
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  -ms-border-radius: 100px;
  -o-border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -5px;

  &:active {
    box-shadow: none;
    transform: translate(5px, 5px);
    -webkit-transform: translate(5px, 5px);
    -moz-transform: translate(5px, 5px);
    -ms-transform: translate(5px, 5px);
    -o-transform: translate(5px, 5px);
  }
`;

const BarIcon = styled.div`
  display: none;
  cursor: pointer;
  position: absolute;
  z-index: 1000;
  right: 1rem;

  @media screen and (max-width: 1000px) {
    display: block;
  }

  .h1 {
    font-family: var(--normal-font-gort);
    font-family: var(--font);
    font-size: 1.3rem;
    color: var(--text-color);
    text-decoration: none;
    letter-spacing: 0.5px;
  }
`;

const SidebarBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1002;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  transition: all 0.5s ease-in-out;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  display: none;

  @media screen and (max-width: 1000px) {
    display: block;
  }
`;

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  width: 70vw;
  height: 100vh;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 3rem;
  transition: 0.3s all ease-in-out;
  -webkit-transition: 0.3s all ease-in-out;
  -moz-transition: 0.3s all ease-in-out;
  -ms-transition: 0.3s all ease-in-out;
  -o-transition: 0.3s all ease-in-out;
  padding: 2rem;
  padding-top: 5rem;
  display: none;

  @media screen and (max-width: 1000px) {
    display: flex;
  }

  .content {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 3rem;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1003;
    width: 100%;
    background: #ffffff;
    backdrop-filter: blur(20px);
    padding: 0 2rem;

    .menu {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;

      .ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        gap: 2rem;

        @media screen and (max-width: 1000px) {
          gap: 3rem;
        }

        @media screen and (max-width: 768px) {
          gap: 2rem;
        }

        .li {
          margin-right: 1rem;
        }

        .a {
          font-size: 1.2rem;
          color: var(--text-grey);
          text-decoration: none;
          transition: color 0.2s ease-in-out;
          font-family: var(--mid-font);

          &:hover {
            color: var(--secondary-color);
          }
        }

        .login {
          background: var(--primary-color);
          font-size: 1rem;
          color: var(--white-bg);
          padding: 0.7rem 1.5rem;
          border-radius: 100px;
          -webkit-border-radius: 100px;
          -moz-border-radius: 100px;
          -ms-border-radius: 100px;
          -o-border-radius: 100px;
          margin: 1rem 0;

          &:hover {
            background: var(--secondary-color);
          }
        }

        .button {
          font-family: var(--font);
          font-size: 0.8rem;
          color: var(--text-color);
          padding: 10px 20px;
          border-radius: 100px;
          border: 2px solid var(--text-color);
          background: transparent;
          box-shadow: 5px 5px var(--text-color);
          cursor: pointer;
          -webkit-border-radius: 100px;
          -moz-border-radius: 100px;
          -ms-border-radius: 100px;
          -o-border-radius: 100px;
          display: flex;
          justify-content: center;
          align-items: center;

          &:hover {
            box-shadow: none;
            transform: translate(5px, 5px);
            -webkit-transform: translate(5px, 5px);
            -moz-transform: translate(5px, 5px);
            -ms-transform: translate(5px, 5px);
            -o-transform: translate(5px, 5px);
          }
        }
      }
    }

    .logo {
      .a {
        .logoimg {
          height: 5rem;
          width: 100%;
          object-fit: cover;
        }
      }
    }
  }

  .bar {
    display: none;
    cursor: pointer;
    position: absolute;
    z-index: 1100;
    right: 2rem;
    top: 1rem;

    @media screen and (max-width: 1000px) {
      display: block;

      .h1 {
        font-size: 3rem;
        color: var(--text-color);
        text-decoration: none;
        letter-spacing: 0.5px;
      }
    }
  }
`;

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
    <motion.div variants={variants} initial="hidden" animate="visible" exit="exit">
      <Navbar>
        <Logo>
          <Link href="/">
            <Image src={logo} />
          </Link>
        </Logo>
        <Menu>
          <MenuList>
            <MenuItem>
              <Link href="/">Home</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/resources">Resources</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/services">Service</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/about">About Us</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/contact">Contact</Link>
            </MenuItem>
            <MenuItem>
              <LoginLink href="/login">Login/signUp</LoginLink>
            </MenuItem>
          </MenuList>
        </Menu>
        <CtaButton>
          <CtaButtonInner>Book Shipment</CtaButtonInner>
        </CtaButton>
        <BarIcon onClick={sidebarToggle}>
          <h1>Menu</h1>
        </BarIcon>
      </Navbar>
      <SidebarBg ref={bgRef} onClick={sidebarToggle}></SidebarBg>
      <SidebarContainer ref={sidebarRef}>
        <div onClick={sidebarToggle}>
          <h1> &#8592;</h1>
        </div>
        <div>
          <div>
            <Link href="/">
              <Image src={logo} />
            </Link>
          </div>
          <div>
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
                <Link href="/login">Login/signUp</Link>
              </li>
            </ul>
          </div>
          <div>
            <button>Book Shipment</button>
          </div>
        </div>
      </SidebarContainer>
    </motion.div>
  );
  
}
