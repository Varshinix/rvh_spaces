import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./contact.module.css";

import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";

export default function Contact() {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    return (
        <>
            <header className={styles.navbar}>
                <h2 className={styles.logo}>RVH Spaces</h2>

                {/* Desktop / Tablet Nav */}
                <nav className={styles.desktopNav}>
                    <ul className={styles.navLinks}>
                        <li className={`${styles.navItem} ${location.pathname === "/" ? styles.active : ""}`}>
                            <Link to="/" className={styles.link}>Home</Link>
                        </li>

                        <li className={`${styles.navItem} ${location.pathname === "/about" ? styles.active : ""}`}>
                            <Link to="/about" className={styles.link}>About</Link>
                        </li>

                        <li className={`${styles.navItem} ${location.pathname === "/locations" ? styles.active : ""}`}>
                            <Link to="/locations" className={styles.link}>Locations</Link>
                        </li>

                        <li className={`${styles.navItem} ${location.pathname === "/ourStory" ? styles.active : ""}`}>
                            <Link to="/ourStory" className={styles.link}>Our Story</Link>
                        </li>

                        <li className={`${styles.navItem} ${location.pathname === "/contact" ? styles.active : ""}`}>
                            <Link to="/contact" className={styles.link}>Contact</Link>
                        </li>
                    </ul>
                </nav>

                {/* Hamburger - mobile only */}
                <div className={styles.hamburger} onClick={() => setOpen(true)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </header>

            {/* Mobile Fullscreen Menu */}
            <div className={`${styles.mobileMenu} ${open ? styles.open : ""}`}>
                <div className={styles.menuHeader}>
                    <h2 className={styles.menuTitle}>RVH Spaces</h2>
                    <button className={styles.closeBtn} onClick={() => setOpen(false)}>✕</button>
                </div>



                <ul className={styles.mobileLinks}>
                    <li onClick={() => setOpen(false)}>
                        <Link to="/" className={`${styles.mobileLink} ${location.pathname === "/" ? styles.activeMobile : ""}`}> Home </Link>
                    </li>

                    <li onClick={() => setOpen(false)}>
                        <Link to="/about" className={`${styles.mobileLink} ${location.pathname === "/about" ? styles.activeMobile : ""}`}>About</Link>
                    </li>

                    <li onClick={() => setOpen(false)}>
                        <Link to="/locations" className={`${styles.mobileLink} ${location.pathname === "/locations" ? styles.activeMobile : ""}`}> Locations </Link>
                    </li>

                    <li onClick={() => setOpen(false)}>
                        <Link to="/ourStory" className={`${styles.mobileLink} ${location.pathname === "/ourStory" ? styles.activeMobile : ""}`}> Our Story </Link>
                    </li>

                    <li onClick={() => setOpen(false)}>
                        <Link to="/contact" className={`${styles.mobileLink} ${location.pathname === "/contact" ? styles.activeMobile : ""}`}> Contact </Link>
                    </li>
                </ul>


            </div>




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





            {/* ------- footer --------- */}
            <footer className={styles.footer}>
                <div className={styles.footerColumns}>

                    <div className={styles.footerCol}>
                        <h4>Rvh Spaces</h4>
                        <p>Designing meaningful digital <br /> experiences. Crafting digital spaces <br /> with purpose and clarity.</p>
                    </div>

                    <div className={styles.footerCol}>
                        <h4>Quick Links</h4>
                        <a href="#home">Home</a>
                        <a href="#About">About</a>
                        <a href="#locations">locations</a>
                        <a href="#Our Story">Our Story</a>
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
                        <p>Email: contact@RvhSpaces.com</p>
                        <p>Phone: +91 98765 43210</p>
                        <p>Instagram: @RvhSpaces</p>
                        <p>Address: Hyderabad, India</p>
                    </div>

                </div>

                <p className={styles.footerBottom}>© 2025 YRvhSpaces. All rights reserved.</p>
            </footer>
        </>

    )
} 