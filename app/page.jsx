"use client";

import React, { useRef, useEffect, useState } from "react";
import FirstSection from "@/Components/Home/FirstSection/FirstSection";
import CompanyLogo from "@/Components/Home/CompanyLogo/CompanyLogo";
import styled from "styled-components";
import Avatar from "@/Components/Avatar/Avatar";
import { useInView } from "react-intersection-observer";
import Mockup1 from "@/Components/Home/Mockup1/Mockup1";
import Cards from "@/Components/Home/Card/Cards";
import Timeline from "@/Components/Home/Timeline/Timeline";
import gsap from "gsap";

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;

  .container {
    min-height: 30vh;
    width: 100%;
    height: 100%;
  }
`;

function Page() {
  const containerRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const mainRef = useRef(null);

  const [containerInView, setContainerInView] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    const colors = ["#5065f9", "#00c27c", "#eee", "#55fed2", "#745fde"];

    containerInView.forEach((inView, index) => {
      if (inView) {
        gsap.to(mainRef.current, {
          backgroundColor: colors[index],
          duration: 0.3,
          ease: "power2.inOut",
        });
      }
    });
  }, [containerInView]);

  const containerIntersectionObservers = containerRefs.map((ref, index) => {
    const [containerRef, inView] = useInView({ threshold: 0.4 });
    useEffect(() => {
      if (inView !== containerInView[index]) {
        setContainerInView((prevContainerInView) => {
          const updatedContainerInView = [...prevContainerInView];
          updatedContainerInView[index] = inView;
          return updatedContainerInView;
        });
      }
    }, [inView, index]);

    const containerComponents = [
      <Mockup1 />,
      <Cards />,
      <Timeline />,
      <Avatar />,
      <Avatar />,
    ];

    return (
      <div
        className={`container container${index + 1}`}
        ref={containerRef}
        key={index}
      >
        {containerComponents[index]}
      </div>
    );
  });

  return (
    <HomeContainer>
      <main ref={mainRef}>
        <FirstSection />
        <CompanyLogo />
        {containerIntersectionObservers}
      </main>
    </HomeContainer>
  );
}

export default Page;
