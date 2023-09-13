"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import styled from "styled-components";
import logo from "@/Assets/Images/Logos/Shipex-transparent-logo.png";
import Image from "next/image";
import { motion } from "framer-motion";

// Styled Components
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

  @media screen and (max-width: 1000px) {
    height: 6vh;
  }

  @media screen and (max-width: 768px) {
    height: 7vh;
    width: 95vw;
    top: 0.5rem;
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

const LogoImage = styled(Image)`
  height: auto;
  width: 7rem;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    width: 5.5rem;
  }
`;

const MenuLink = styled(Link)`
  font-size: 0.9rem;
  color: var(--text-grey);
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  font-family: var(--font);

  &:hover {
    color: var(--secondary-color);
  }
`;

const LoginLink = styled(Link)`
  background: var(--primary-color);
  font-size: 0.8rem;
  color: var(--white-bg);
  padding: 0.7rem 1.5rem;
  border-radius: 100px;
  text-decoration: none;
  transition: background 0.3s ease-in-out;
  font-family: var(--font);

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }

  &:hover {
    background: var(--secondary-color);
  }
`;

const CtaButton = styled(Link)`
  @media screen and (max-width: 1000px) {
    margin-right: 5rem;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const CtaButtonWrapper = styled.button`
  font-family: var(--font);
  font-size: 0.8rem;
  color: var(--text-color);
  padding: 10px 20px;
  border-radius: 100px;
  border: 2px solid var(--text-color);
  background: transparent;
  box-shadow: 5px 5px var(--text-color);
  cursor: pointer;

  &:active {
    box-shadow: none;
    transform: translate(5px, 5px);
  }
`;

const Bar = styled.div`
  display: none;
  cursor: pointer;
  position: absolute;
  z-index: 1000;
  right: 1rem;

  @media screen and (max-width: 1000px) {
    display: block;

    h1 {
      font-family: var(--normal-font-gort);
      font-family: var(--font);
      font-size: 1.3rem;
      color: var(--text-color);
      text-decoration: none;
      letter-spacing: 0.5px;
    }
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
  padding: 2rem;
  padding-top: 5rem;
  display: none;

  @media screen and (max-width: 1000px) {
    display: flex;
  }
`;

const SidebarContent = styled.div`
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

      .ctaButton {
        font-family: var(--font);
        font-size: 0.8rem;
        color: var(--text-color);
        padding: 10px 20px;
        border-radius: 100px;
        border: 2px solid var(--text-color);
        background: transparent;
        box-shadow: 5px 5px var(--text-color);
        cursor: pointer;

        &:hover {
          background: var(--secondary-color);
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
`;

const H1 = styled.h1`
  font-size: 3rem;
  color: var(--text-color);
  text-decoration: none;
  letter-spacing: 0.5px;
`;

// Variants
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
      <Navbar>
        <div className="logo">
          <Link href="/">
            <LogoImage src={logo} />
          </Link>
        </div>
        <Menu>
          <MenuList>
            <MenuItem>
              <MenuLink href="/">Home</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="/resources">Resources</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="/services">Service</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="/about">About Us</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="/contact">Contact</MenuLink>
            </MenuItem>
            <MenuItem>
              <LoginLink href="/login">Login/signUp</LoginLink>
            </MenuItem>
          </MenuList>
        </Menu>
        <CtaButton href="/">
          <CtaButtonWrapper>Book Shipment</CtaButtonWrapper>
        </CtaButton>
        <Bar onClick={sidebarToggle}>
          <H1>Menu</H1>
        </Bar>
      </Navbar>
      <SidebarBg ref={bgRef} onClick={sidebarToggle}></SidebarBg>
      <SidebarContainer ref={sidebarRef}>
        <Bar onClick={sidebarToggle}>
          <H1> &#8592;</H1>
        </Bar>
        <SidebarContent>
          <div className="logo">
            <Link href="/" className="a">
              <LogoImage src={logo} />
            </Link>
          </div>
          <div className="menu">
            <ul className="ul">
              <li className="li">
                <Link className="a" href="/">
                  Home
                </Link>
              </li>
              <li className="li">
                <Link className="a" href="/resources">
                  Resources
                </Link>
              </li>
              <li className="li">
                <Link className="a" href="/services">
                  Service
                </Link>
              </li>
              <li className="li">
                <Link className="a" href="/about">
                  About Us
                </Link>
              </li>
              <li className="li">
                <Link className="a" href="/contact">
                  Contact
                </Link>
              </li>
              <li className="li">
                <LoginLink href="/login">Login/signUp</LoginLink>
              </li>
            </ul>
          </div>
          <div className="ctaButton">
            <CtaButtonWrapper>Book Shipment</CtaButtonWrapper>
          </div>
        </SidebarContent>
      </SidebarContainer>
    </motion.div>
  );
}
