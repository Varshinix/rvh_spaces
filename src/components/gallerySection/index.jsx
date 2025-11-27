// src/components/gallerySection/index.jsx
import React from "react";
import { useInView } from "react-intersection-observer";
import styles from "./gallerySection.module.css";

import g1 from "../../assets/g2.jpg";
import g2 from "../../assets/g4.jpg";
import g3 from "../../assets/g5.jpg";
import g4 from "../../assets/g3.jpg";

import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";



export default function GallerySection() {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    return (
        <div className={styles.galleryWrapper}>

            <div
                ref={ref}
                className={`${styles.galleryText} ${inView ? styles.show : ""}`}
            >
                <h2 className={styles.galleryHeading}>Spaces That Inspire Better Work</h2>
                <p className={styles.galleryDescription}>
                    A curated look at our environment - <br />intentionally designed to help you think clearer, work better, and feel good everyday.
                </p>
            </div>

            <div className={styles.galleryRow}>
                <div className={`${styles.gItem} ${styles.card1} ${inView ? styles.fadeCard1 : ""}`}>
                    <img src={g1} alt="g1" />
                    <p className={styles.card1Text}>co-working zones that keep you inspired and connected</p>
                </div>


                <div className={`${styles.gItem} ${styles.card2} ${inView ? styles.fadeCard2 : ""}`}>
                    {/* yellow card */}
                </div>

                <div className={`${styles.gItem} ${styles.card3} ${inView ? styles.fadeCard3 : ""}`}>
                    <img src={g2} alt="g2" />
                </div>

                <div className={`${styles.gItem} ${styles.card4} ${inView ? styles.fadeCard4 : ""}`}>
                    <img src={g3} alt="g3" />
                </div>

                <div className={`${styles.gItem} ${styles.card5} ${inView ? styles.fadeCard5 : ""}`}>
                    {/* green card */}
                </div>

                <div className={`${styles.gItem} ${styles.card6} ${inView ? styles.fadeCard6 : ""}`}>

                    <img src={g4} alt="g4" />
                    <p className={styles.card6Text}>A collection of spaces designed for focus, and flow.</p>
                </div>


            </div>
            <p className={`${styles.galleryBottomNote} ${inView ? styles.showLate : ""}`}>
                Dedicated office spaces that blend structure, style, and a distraction-free work environment.
            </p>



            {/* contacts */}
            <div className={styles.contactSection}>

                {/* LEFT SIDE */}
                <div className={styles.contactLeft}>
                    <h2 className={styles.contactTitle}>Contact Us</h2>
                    <p className={styles.contactDesc}>
                        We'd love to hear from you. Reach out with any questions, ideas, or collaboration opportunities.
                    </p>

                    <div className={styles.contactInfo}>
                        <p><strong>Email:</strong> contact@workspace.com</p>
                        <p><strong>Phone:</strong> +91 98765 43210</p>
                        <p><strong>Address:</strong> Hyderabad, India</p>
                    </div>

                    {/* Social Icons */}
                    <div className={styles.socialRow}>
                        <img src={instagram} alt="Instagram" />
                        <img src={linkedin} alt="LinkedIn" />
                        <img src={twitter} alt="Twitter" />
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className={styles.contactCard}>
                    <h3 className={styles.cardHeading}>Get in Touch</h3>

                    <form className={styles.contactForm}>
                        <input type="text" placeholder="Your Name" />
                        <input type="email" placeholder="Your Email" />
                        <textarea placeholder="Your Message"></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>

            </div>



            {/* footer */}
            <footer className={styles.footer}>
                <div className={styles.footerColumns}>

                    <div className={styles.footerCol}>
                        <h4>Rvh Spaces</h4>
                        <p>Designing meaningful digital experiences.</p>
                    </div>

                    <div className={styles.footerCol}>
                        <h4>Quick Links</h4>
                        <a href="#home">Home</a>
                        <a href="#gallery">Gallery</a>
                        <a href="#contact">Contact</a>
                    </div>

                    <div className={styles.footerCol}>
                        <h4>Support</h4>
                        <a>FAQ</a>
                        <a>Privacy Policy</a>
                        <a>Terms & Conditions</a>
                    </div>

                    <div className={styles.footerCol}>
                        <h4>Connect</h4>
                        <p>Email: hello@RvhSpaces.com</p>
                        <p>Instagram: @RvhSpaces</p>
                    </div>

                </div>

                <p className={styles.footerBottom}>© 2025 YRvhSpaces. All rights reserved.</p>
            </footer>




        </div>



    );
}

