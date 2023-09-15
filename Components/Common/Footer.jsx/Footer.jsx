import React from "react";
import logo from "@/Assets/Images/Logos/Shipex-transparent-logo.png";
import styles from "./Footer.module.css"; // Import the CSS module
import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

function Footer() {
  return (
    <div>
      <div className={styles.footerContainer}>
        <div className={styles.container}>
          <div className={styles.first}>
            <div className={styles.logo}>
              <Image
                className={styles.logoimg}
                src={logo}
                alt="Shipexindia logo"
              />
            </div>
            <div className={styles.desc}>
              ShipEx India by ShipLogix Solutions Pvt Ltd is your SME
              cost-cutting shipping partner. Enjoy up to 40% savings with our
              "Compare & Ship" feature and bulk pricing. Trusted carriers like
              Delhivery, Spoton, and Xpressbees ensure swift, secure deliveries.
              Simplify logistics, maximize savings with ShipEx India.
            </div>
            <div className={styles.social}>
              <LinkedInIcon className={styles.icon} />
              <TwitterIcon className={styles.icon} />
              <FacebookIcon className={styles.icon} />
              <InstagramIcon className={styles.icon} />
            </div>
          </div>
          <div className={styles.second}>
            <div className={styles.heading}>Company</div>
            <div className={styles.links}>
              <Link href="/aboutus" className={styles.link}>
                About Us
              </Link>
              <Link href="/contactus" className={styles.link}>
                Contact Us
              </Link>
              <Link href="/careers" className={styles.link}>
                Careers
              </Link>
              <Link href="/blog" className={styles.link}>
                Blog
              </Link>
              <Link href="/faq" className={styles.link}>
                FAQs
              </Link>
              <Link href="/terms" className={styles.link}>
                Terms & Conditions
              </Link>
            </div>
          </div>

          <div className={styles.third}>
            <div className={styles.heading}>Services</div>
            <div className={styles.links}>
              <Link href="/services" className={styles.link}>
                Direct-to-Consumer (D2C)
              </Link>
              <Link href="/services" className={styles.link}>
                Marketplace Sellers
              </Link>
              <Link href="/services" className={styles.link}>
                Social Sellers
              </Link>
              <Link href="/services" className={styles.link}>
                Small & Medium Enterprises (SMEs)
              </Link>
              <Link href="/services" className={styles.link}>
                Service Providers
              </Link>
              <Link href="/services" className={styles.link}>
                Manufacturers
              </Link>
            </div>
          </div>
          <div className={styles.fourth}>
            <div className={styles.heading}>Contact Us</div>
            <div className={styles.links}>
              <div className={styles.link}>+91 9999999999</div>
              <div className={styles.link}>Info@shipexindia.com</div>
              <div className={styles.link}>
                2nd Floor, 1/2, 1st Cross, 1st Main, 1st Stage, Indiranagar,
                Bengaluru, Karnataka 560038
              </div>
              <div className={styles.link}>
                <Link href="/privacypolicy" className={styles.linkss}>
                  Privacy Policy
                </Link> {"  "}
                | {"  "}
                <Link href="/refundpolicy" className={styles.linkss}>
                  Refund & Cancellation Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
