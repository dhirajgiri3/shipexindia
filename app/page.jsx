"use client";

import React, { useRef, useEffect, useState } from "react";
import FirstSection from "@/Components/Home/FirstSection/FirstSection";
import CompanyLogo from "@/Components/Home/CompanyLogo/CompanyLogo";
import styled from "styled-components";
import Avatar from "@/Components/Avatar/Avatar";
import Mockup1 from "@/Components/Home/Mockup1/Mockup1";
import Cards from "@/Components/Home/Card/Cards";
import Timeline from "@/Components/Home/Timeline/Timeline";
import Services from "@/Components/Home/Services/Services";
import Glance from "@/Components/Home/Glance/Glance";
import { gsap } from "gsap";

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  transition: background-color 1s ease-in-out;
`;

const SectionContainer = styled.div`
  min-height: 30vh;
  width: 100%;
  height: 100%;
  transition: background-color 1s ease-in-out; /* Duration of 1 second for background color change */
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

  const [activeSection, setActiveSection] = useState(0);

  const colors = ["#5065f9", "#00c27c", "#fff", "#fff", "#745fde"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const sectionTops = containerRefs.map((ref) => ref.current.offsetTop);

      for (let i = 0; i < sectionTops.length; i++) {
        if (scrollTop >= sectionTops[i] && scrollTop < sectionTops[i + 1]) {
          setActiveSection(i);

          // Use GSAP for smooth background color transition
          gsap.to(mainRef.current, {
            backgroundColor: colors[i],
            duration: .3,
            ease: "power2.inOut",
            yoyo: true,
          });
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return (
    <HomeContainer>
      <main ref={mainRef}>
        <FirstSection />
        <CompanyLogo />
        {containerRefs.map((ref, index) => (
          <SectionContainer
            ref={ref}
            key={index}
            style={{
              backgroundColor:
                activeSection === index ? colors[index] : "transparent",
            }}
          >
            {
              [<Mockup1 />, <Cards />, <Services />, <Timeline />, <Glance />][
                index
              ]
            }
          </SectionContainer>
        ))}
      </main>
    </HomeContainer>
  );
}

export default Page;
