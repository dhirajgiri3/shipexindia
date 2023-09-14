import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const TimelineContainer = styled.div`
  width: 100%;
  min-height: 120vh;
  height: 100%;
  position: relative;
  z-index: 0;
  margin: 5rem 0;
  margin-top: 10rem;

  .bg {
    width: 100%;
    min-height: 200vh;
    height: 100%;
    position: relative;
    z-index: 1;
    background-image: url("https://res.cloudinary.com/divbobkmd/image/upload/v1694679619/big-ship_ci1nnu.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
      width: 100%;
    }

    .containers {
      height: 100%;
      width: 100%;
      font-family: var(--font);

      .timeline {
        position: relative;
        width: 100%;
        max-width: 1140px;
        margin: 0 auto;
        padding: 15px 0;
      }

      .container {
        padding: 15px 30px;
        position: relative;
        background: inherit;
        width: 50%;
      }

      .container.left {
        left: -10%;
      }

      .container.right {
        left: 60%;
      }

      .container::after {
        content: "";
        position: absolute;
        width: 16px;
        height: 16px;
        top: calc(50% - 8px);
        right: -10px;
        background: #ffffff;
        border: 2px solid var(--secondary-color);
        border-radius: 16px;
        z-index: 1;
      }

      .container.right::after {
        left: -10px;
      }

      .container::before {
        content: "";
        position: absolute;
        width: 50px;
        height: 2px;
        top: calc(50% - 0px);
        right: 8px;
        background: var(--secondary-color);
        z-index: 1;
      }

      .container.right::before {
        left: 8px;
      }

      .container .content {
        padding: 30px 90px 30px 30px;
        background: #ffffff30;
        background: #091f4199;
        backdrop-filter: blur(10px);
        position: relative;
        border-radius: 0 500px 500px 0;
      }

      .container.right .content {
        padding: 30px 30px 30px 90px;
        border-radius: 500px 0 0 500px;
      }

      .container .content h2 {
        font-size: var(--heading-small);
        font-weight: 700;
        color: var(--white-bg);
        font-family: var(--bold);
      }

      .container .content p {
        margin: 0;
        font-size: var(--para);
        font-size: 10px;
        line-height: 1.5;
        color: var(--text-para);
        font-weight: 300;
        font-family: var(--light-font);
        letter-spacing: 0.5px;
      }

      @media (max-width: 768px) {
        .timeline::after {
          left: 20px;
        }

        .container.left {
          left: 0%;
        }

        .container.right {
          left: 50%;
        }

        .container {
          width: 100%;
          padding-left: 30px;
          padding-right: 15px;
        }

        .container.right {
          left: 0%;
        }

        .container.left::after,
        .container.right::after {
          left: 10px;
        }

        .container.left::before,
        .container.right::before {
          left: 10px;
          border-color: transparent var(--secondary-color) transparent
            transparent;
        }

        .container.left .content,
        .container.right .content {
          padding: 30px 30px 30px 90px;
          border-radius: 500px 0 0 500px;
        }
      }
    }
  }
`;

function Timeline() {
  return (
    <div>
      <TimelineContainer>
        <div className="bg">
          <div className="containers">
            <div class="timeline">
              <div class="container left">
                <div class="content">
                  <h2>Lorem ipsum dolor sit amet</h2>
                  <p>
                    Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id
                    luctus erat sagittis non. Ut blandit semper pretium.
                  </p>
                </div>
              </div>
              <div class="container right">
                <div class="content">
                  <h2>Lorem ipsum dolor sit amet</h2>
                  <p>
                    Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id
                    luctus erat sagittis non. Ut blandit semper pretium.
                  </p>
                </div>
              </div>
              <div class="container left">
                <div class="content">
                  <h2>Lorem ipsum dolor sit amet</h2>
                  <p>
                    Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id
                    luctus erat sagittis non. Ut blandit semper pretium.
                  </p>
                </div>
              </div>
              <div class="container right">
                <div class="content">
                  <h2>Lorem ipsum dolor sit amet</h2>
                  <p>
                    Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id
                    luctus erat sagittis non. Ut blandit semper pretium.
                  </p>
                </div>
              </div>
              <div class="container left">
                <div class="content">
                  <h2>Lorem ipsum dolor sit amet</h2>
                  <p>
                    Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id
                    luctus erat sagittis non. Ut blandit semper pretium.
                  </p>
                </div>
              </div>
              <div class="container right">
                <div class="content">
                  <h2>Lorem ipsum dolor sit amet</h2>
                  <p>
                    Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id
                    luctus erat sagittis non. Ut blandit semper pretium.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TimelineContainer>
    </div>
  );
}

export default Timeline;
