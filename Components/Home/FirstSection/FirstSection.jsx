"use client";

import React from "react";
import { motion } from "framer-motion";
import Avatar from "@/Components/Avatar/Avatar";
import styled from "styled-components";
import Link from "next/link";

const FirstSectionContainer = styled(motion.main)`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  position: relative;
  z-index: 0;

  a {
    text-decoration: none;
  }
`;

const BackgroundImage = styled.img`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: self-start;
  padding: 2rem 10rem;
  padding-top: 10vh;
  gap: 1rem;

  @media screen and (max-width: 1024px) {
    padding: 2rem 5rem;
    padding-top: 15vh;
  }

  @media screen and (max-width: 768px) {
    padding: 2rem 1rem;
    padding-top: 16vh;
  }
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 0;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
`;

const Heading1 = styled(motion.h1)`
  background: var(--text-gradient-secondary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 4rem;
  font-family: var(--heading-font-gort);
  font-weight: 100;
  width: 70%;

  @media screen and (max-width: 1024px) {
    font-size: 3rem;
    width: 100%;
  }
`;

const Paragraph = styled(motion.p)`
  font-size: 0.8rem;
  font-family: var(--light-font);
  line-height: 1.5;
  text-align: left;
  width: 50%;
  color: var(--text-grey);
  letter-spacing: 0.5px;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const AvatarContainer = styled(motion.div)`
  margin: 1rem 0;
`;

const RightContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FirstSectionImage = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;

  @media screen and (max-width: 1024px) {
    height: 40vh;
  }

  @media screen and (max-width: 768px) {
    height: 40vh;
    object-fit: contain;
  }
`;

const BottomContainer = styled(motion.div)`
  display: flex;
  backdrop-filter: blur(50px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100vw - 20rem);
  height: 100%;
  gap: 2rem;
  background: #e0d1fb50;
  padding: 2rem 0;
  border-radius: 50px;
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  -ms-border-radius: 50px;
  -o-border-radius: 50px;

  @media screen and (max-width: 1024px) {
    padding: 2rem 0;
    border-radius: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    -ms-border-radius: 20px;
    -o-border-radius: 20px;
    width: calc(100vw - 10rem);
  }

  @media screen and (max-width: 768px) {
    width: calc(100vw - 2rem);
  }
`;

const Heading3 = styled.h3`
  font-size: 1.2rem;
  font-family: var(--font);
  color: var(--text-color);
  letter-spacing: 0.5px;
`;

const InputSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
`;

const InputContainer = styled.div`
  position: relative;
  color: var(--text-color);
`;

const Input = styled.input`
  padding: 1rem 3rem;
  height: 4rem;
  border: 2px solid var(--text-color);
  border-top: none;
  border-bottom: none;
  font-size: 1rem;
  background: transparent;
  outline: none;
  box-shadow: 7px 7px 0px 0px var(--text-color);
  transition: all 0.5s ease-in-out;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;

  &:focus {
    box-shadow: none;
    transition: all 0.5s;
  }
`;

const Label = styled.label`
  position: absolute;
  top: 10px;
  left: 20px;
  transition: all 0.5s;
  z-index: -1;
  font-size: 0.8rem;
  font-family: var(--font);
  color: var(--text-grey);

  ${Input}:focus ~ & {
    top: -10px;
    left: 10px;
    color: var(--text-grey);
  }
`;

const TopLine = styled.div`
  position: absolute;
  content: "";
  background-color: var(--text-color);
  height: 2px;
  right: 0;
  top: 0;
  width: 100%;
  transition: all 0.5s;

  ${Input}:focus ~ & {
    width: 35%;
    height: 1.5px;
  }
`;

const Underline = styled.div`
  position: absolute;
  content: "";
  background-color: var(--text-color);
  height: 2px;
  right: 0;
  bottom: 0;
  transition: all 0.5s;

  ${Input}:focus ~ & {
    height: 1.5px;
    width: 100%;
  }
`;

const Button = styled.button`
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

  &:active {
    box-shadow: none;
    transform: translate(5px, 5px);
    -webkit-transform: translate(5px, 5px);
    -moz-transform: translate(5px, 5px);
    -ms-transform: translate(5px, 5px);
    -o-transform: translate(5px, 5px);
  }
`;

const fadevariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const upvariants = {
  hidden: {
    y: 100,
    opacity: 0.8,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
      delay: 1,
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

const variants = {
  hidden: {
    y: 100,
    opacity: 0.8,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
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

function FirstSection() {
  return (
    <>
      {" "}
      <FirstSectionContainer
        variants={fadevariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <BackgroundImage
          alt="shipexindia first section background"
          src="https://res.cloudinary.com/divbobkmd/image/upload/v1694586851/first-bg_rlvp5l.png"
        />
        <ContentContainer>
          <TopContainer>
            <LeftContainer>
              <Heading1
                variants={upvariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                We Deliver Your Dreams In Any Way.
              </Heading1>
              <Paragraph
                variants={upvariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                From start to finish, we approach every task with confidence,
                offering you seamless transportation solutions to help you and
                your business thrive.
              </Paragraph>
              <AvatarContainer
                variants={upvariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Avatar />
              </AvatarContainer>

              <Link href="/">
                {" "}
                <Button> Get Started</Button>
              </Link>
            </LeftContainer>
            <RightContainer
              variants={upvariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <FirstSectionImage
                src="https://res.cloudinary.com/divbobkmd/image/upload/v1694586850/first-sec_blx3n2.png"
                alt="Shipexindia Introduction"
              />
            </RightContainer>
          </TopContainer>
          <BottomContainer
            variants={variants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
          >
            <Heading3>Track Your Shipment</Heading3>
            <InputSection>
              <InputContainer>
                <Input name="text" type="text" />
                <Label htmlFor="input">Enter AWB/OrderId</Label>
                <TopLine></TopLine>
                <Underline></Underline>
              </InputContainer>
              <Button>Track Now</Button>
            </InputSection>
          </BottomContainer>
        </ContentContainer>
      </FirstSectionContainer>
    </>
  );
}

export default FirstSection;
