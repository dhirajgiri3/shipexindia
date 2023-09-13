import styled from "styled-components";
import { motion } from "framer-motion";
import img1 from "@/Assets/Images/mockup1.png";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0;
`;

const Heading = styled.h1`
  text-align: center;
  font-family: var(--bold);
  font-size: 3rem;
  color: var(--white-bg);
  letter-spacing: -1px;
  font-weight: 700;

  span {
    background: var(--text-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
  }
`;

const Images = styled(Image)`
  width: 90vw;
  height: auto;
  object-fit: cover;
`;

const Mockup1 = () => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Heading>
          Ship your product from <span>anywhere</span> to <span>anywhere</span>{" "}
        </Heading>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <Images src={img1} alt="Centered Image" />
      </motion.div>
    </Container>
  );
};

export default Mockup1;
