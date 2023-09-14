import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  gap: 1rem;
  padding: 0 10rem;
  font-family: var(--font);

  @media screen and (max-width: 1000px) {
    padding: 0 5rem;
  }

  @media screen and (max-width: 1000px) {
    padding: 0 1rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  @media screen and (max-width: 768px) {
    padding: 0 1rem;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
`;

const CardLayout = styled.div`
  height: 100%;
  width: 100%;
  .card {
    width: 100%;
    height: 80vh;
    perspective: 1000px;
  }

  .card-inner {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.999s;
  }

  .card:hover .card-inner {
    transform: rotateY(180deg);
  }

  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  .card-front {
    color: var(--text-grey);
    display: flex;
    align-items: center;
    border-radius: 30px;
    justify-content: center;
    font-size: 24px;
    transform: rotateY(0deg);
    font-size: var(--para);

    .button {
      position: absolute;
      top: 0;
      right: 0;
      background: var(--primary-color);
      padding: 0.3rem 1rem;
      border-bottom-left-radius: 10px;
      color: var(--white-bg);
      display: none;

      @media screen and (max-width: 768px) {
        display: block;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 30px;
    }
  }

  .card-back {
    background-color: #181818;
    color: #fff;
    display: flex;
    align-items: center;
    border-radius: 30px;
    justify-content: center;
    transform: rotateY(180deg);
    flex-direction: column;
    gap: 2rem;

    h1 {
      text-align: center;
      font-family: var(--font-mid);
      font-size: var(--heading);
      color: var(--white-bg);
      letter-spacing: -1px;
      font-weight: 300;

      @media screen and (max-width: 768px) {
        font-size: var(--heading-small);
      }
    }

    p {
      font-family: var(--font);
      font-size: var(--para);
      color: var(--text-para);
      text-align: center;
      width: 90%;
      line-height: 1.5;
      font-weight: 100;
      letter-spacing: 0.5px;

      @media screen and (max-width: 768px) {
        width: 95%;
      }
    }
  }
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 0 auto;
  padding: 0 5rem;

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }

  h1 {
    text-align: center;
    font-family: var(--bold);
    font-size: var(--heading);
    color: var(--white-bg);
    letter-spacing: -1px;
    font-weight: 700;

    @media screen and (max-width: 768px) {
      font-size: var(--heading-small);
    }
  }

  p {
    font-family: var(--font);
    font-size: var(--para);
    color: var(--text-para);
    text-align: center;
    width: 80%;
    line-height: 1.5;

    @media screen and (max-width: 768px) {
      width: 90%;
    }
  }
`;

const CardsConatiner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
`;

const variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
      delay: 0.5,
    },
  },
};

const cardsData = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1989&q=2000",
    title: "Road Transport",
    description:
      "When it comes to road transport, we navigate the highways with precision. Your products are handled with the utmost care and attention to detail, ensuring that they arrive at their destination on time and in pristine condition. Our road transport services are the heartbeat of local and national distribution, connecting you to markets near and far.",
  },
  {
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661957173884-901e33146e92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=2000",
    title: "Air Transport",
    description:
      "Air freight represents swift and efficient shipping. ShipEx India's air cargo solutions ensure your products take flight promptly. We understand the importance of timely deliveries and provide the speed you need, whether it's across the country or around the world.",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1598193956767-5f45a6307639?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=2000",
    title: "Ocean Shipping",
    description:
      "Shipping by sea involves navigating vast waters, and we do so with utmost care. Our ocean shipping services are perfect for international deliveries and large cargo. With ShipEx India, your products are safe as they voyage across the world's oceans.",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1598193956767-5f45a6307639?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=2000",
    title: "Ocean Shipping",
    description:
      "Shipping by sea involves navigating vast waters, and we do so with utmost care. Our ocean shipping services are perfect for international deliveries and large cargo. With ShipEx India, your products are safe as they voyage across the world's oceans.",
  },
];

function Cards() {
  return (
    <CardsConatiner>
      <Heading>
        <motion.h1 variants={variants} initial="hidden" whileInView="visible">
          Shipping Your Products with Precision and Enthusiasm
        </motion.h1>
        <motion.p variants={variants} initial="hidden" whileInView="visible">
          At ShipEx India, we do more than just transport your products. We take
          a journey with them, making sure they reach their destination smoothly
          and with enthusiasm. We offer transportation by road, air, and water,
          giving you a reliable shipping experience that covers all your needs.
        </motion.p>
      </Heading>
      <CardContainer>
        {cardsData.map((card, index) => (
          <div className={`card-${index}`} key={index}>
            <CardLayout>
              <motion.div
                variants={variants}
                initial="hidden"
                whileInView="visible"
                className="card"
              >
                <div className="card-inner">
                  <div className="card-front">
                    <img src={card.imageUrl} alt={card.title} />
                    <div className="button">view</div>
                  </div>
                  <div className="card-back">
                    <h1>{card.title}</h1>
                    <p>{card.description}</p>
                  </div>
                </div>
              </motion.div>
            </CardLayout>
          </div>
        ))}
      </CardContainer>
    </CardsConatiner>
  );
}

export default Cards;
