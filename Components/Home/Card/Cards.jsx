import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 3rem;
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
    display: flex;
    align-items: center;
    justify-content: center;
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
    transform: rotateY(0deg);
    font-size: var(--para);
    flex-direction: column;
    gap: 2rem;
    padding: 0 2rem;
    max-width: 30vw;
    background: #131313;

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

    h1 {
      text-align: left;
      font-family: var(--font-mid);
      font-size: var(--heading-small);
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
      text-align: left;
      width: 90%;
      line-height: 1.5;
      font-weight: 300;
      letter-spacing: 0.5px;

      @media screen and (max-width: 768px) {
        width: 95%;
      }
    }
  }

  .card-back {
    color: #fff;
    display: flex;
    align-items: center;
    border-radius: 30px;
    justify-content: center;
    transform: rotateY(180deg);

    @media screen and (max-width: 1000px) {
      max-width: 40vw;
    }

    @media screen and (max-width: 768px) {
      max-width: 95vw;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 30px;
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
      "https://res.cloudinary.com/divbobkmd/image/upload/v1694690650/domestic_wbmrol.png",
    title: "Road Transport",
    description:
      "When it comes to road transport, we navigate the highways with precision. Your products are handled with the utmost care and attention to detail, ensuring that they arrive at their destination on time and in pristine condition. Our road transport services are the heartbeat of local and national distribution, connecting you to markets near and far.",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/divbobkmd/image/upload/v1694690652/international_p9burd.png",
    title: "Air Transport",
    description:
      "Air freight represents swift and efficient shipping. ShipEx India's air cargo solutions ensure your products take flight promptly. We understand the importance of timely deliveries and provide the speed you need, whether it's across the country or around the world.",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/divbobkmd/image/upload/v1694690652/b2b_jrvj6h.png",
    title: "Ocean Shipping",
    description:
      "Shipping by sea involves navigating vast waters, and we do so with utmost care. Our ocean shipping services are perfect for international deliveries and large cargo. With ShipEx India, your products are safe as they voyage across the world's oceans.",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/divbobkmd/image/upload/v1694690651/hyperlocal_dckjea.png",
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
                    <h1>{card.title}</h1>
                    <p>{card.description}</p>
                    <div className="button">view</div>
                  </div>
                  <div className="card-back">
                    <img src={card.imageUrl} alt={card.title} />
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
