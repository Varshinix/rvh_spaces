import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./about.module.css";

import coworkImg from '../../assets/cowork.jpg';
import privateImg from '../../assets/private.jpg';
import meetingImg from '../../assets/meeting.jpg';
import bgVideo from "../../assets/abstract.mp4";

export default function About() {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const fadeItems = document.querySelectorAll(`.${styles.fadeItem}`);
        const headingEl = document.querySelector(`.${styles.bigHeading}`);
        const cardEls = Array.from(document.querySelectorAll(`.${styles.reveal}`));

        const revealWhySection = () => {
            if (!headingEl) return;
            const r = headingEl.getBoundingClientRect();
            if (r.top < window.innerHeight - 120) {
                headingEl.classList.add(styles.revealedHeading);
            }
        };

        const revealCardsOnScroll = () => {
            cardEls.forEach((el, idx) => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight - 120) {
                    setTimeout(() => el.classList.add(styles.revealed), idx * 120);
                }
            });
        };

        const handleScroll = () => {
            // Fade-in items (if any used later)
            fadeItems.forEach((el) => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    el.classList.add(styles.visible);
                }
            });

            revealWhySection();
            revealCardsOnScroll();
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <>
            {/*<header className={styles.navbar}>
                <h2 className={styles.logo}>RVH Spaces</h2>

                <nav className={`${styles.mobileMenu} ${open ? styles.open : ""}`}>
                    <ul className={styles.navLinks}>
                        <li className={styles.navItem}>
                            <Link to="/" className={styles.link}>Home</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link to="/about" className={styles.link}>About</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link to="/locations" className={styles.link}>Locations</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link to="/ourStory" className={styles.link}>OurStory</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link to="/contact" className={styles.link}>Contact</Link>
                        </li>
                    </ul>
                </nav> 

                </header>               
            */}

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

                        <li className={styles.navItem}>
                            <Link to="/locations" className={styles.link}>Locations</Link>
                        </li>

                        <li className={styles.navItem}>
                            <Link to="/ourStory" className={styles.link}>Our Story</Link>
                        </li>

                        <li className={styles.navItem}>
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

                {/*<ul className={styles.mobileLinks}>
                    <li onClick={() => setOpen(false)}>
                        <Link to="/" className={styles.mobileLink}>Home</Link>
                    </li>

                    <li onClick={() => setOpen(false)}>
                        <Link to="/about" className={styles.mobileLink}>About</Link>
                    </li>

                    <li onClick={() => setOpen(false)}>
                        <Link to="/locations" className={styles.mobileLink}>Locations</Link>
                    </li>

                    <li onClick={() => setOpen(false)}>
                        <Link to="/ourStory" className={styles.mobileLink}>Our Story</Link>
                    </li>

                    <li onClick={() => setOpen(false)}>
                        <Link to="/contact" className={styles.mobileLink}>Contact</Link>
                    </li>
                </ul> */}

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



            {/*  OurSpaces - about  */}



            <motion.section
                className={styles.ourSpaces}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ staggerChildren: 0.18 }}
            >
                <div className={styles.ourSpacesInner}>
                    {/* Left */}
                    <motion.div
                        className={styles.quoteWrap}
                        variants={{
                            hidden: { opacity: 0, x: -80 },
                            show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
                        }}
                    >
                        <p className={styles.quote}>
                            “Productivity starts<br />with the right space.”
                        </p>
                    </motion.div>

                    {/* Right */}
                    <motion.div
                        className={styles.descWrap}
                        variants={{
                            hidden: { opacity: 0, x: 80 },
                            show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
                        }}
                    >
                        <p className={styles.desc}>
                            From high-end meeting rooms to elegant private offices, our workspaces give professionals the comfort, technology, and atmosphere they deserve. Deliver your best, every single day.
                        </p>
                    </motion.div>
                </div>

                {/* Cards row */}
                <motion.div
                    className={styles.cardsGrid}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                >

                    {/* Card 1 */}
                    <motion.article
                        className={`${styles.card} ${styles.card1}`}
                        initial={{ opacity: 0, y: 80, scale: 0.95 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: { duration: 0.85, ease: "easeOut", delay: 0.55 }
                        }}
                        viewport={{ once: false, amount: 0.3 }}
                    >

                        <div className={styles.cardMedia} style={{ backgroundImage: `url(${coworkImg})` }} />
                        <div className={styles.cardBody}>
                            <h4>Co-working Space</h4>
                            <p>A flexible shared workspace with vibrant energy and room to create and connect.</p>
                        </div>
                    </motion.article>

                    {/* Card 2 */}
                    <motion.article
                        className={`${styles.card} ${styles.card2}`}
                        initial={{ opacity: 0, y: 80, scale: 0.95 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: { duration: 0.85, ease: "easeOut", delay: 0.70 }
                        }}
                        viewport={{ once: false, amount: 0.3 }}
                    >

                        <div className={styles.cardMedia} style={{ backgroundImage: `url(${privateImg})` }} />
                        <div className={styles.cardBody}>
                            <h4>Private Spaces</h4>
                            <p>Quiet, secure offices designed for focused work and productive teamwork.</p>

                        </div>
                    </motion.article>

                    {/* Card 3 */}
                    <motion.article
                        className={`${styles.card} ${styles.card3}`}
                        initial={{ opacity: 0, y: 80, scale: 0.95 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: { duration: 0.85, ease: "easeOut", delay: 0.85 }
                        }}
                        viewport={{ once: false, amount: 0.3 }}
                    >

                        <div className={styles.cardMedia} style={{ backgroundImage: `url(${meetingImg})` }} />
                        <div className={styles.cardBody}>
                            <h4>Meeting Rooms</h4>
                            <p>Modern rooms with pro AV setup for seamless presentations and client calls.</p>

                        </div>
                    </motion.article>

                </motion.div>

                {/* Button below */}
                <motion.div
                    className={styles.learnMoreWrapper}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.8, ease: "easeOut", delay: 0.3 }
                    }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <button className={styles.learnMoreBtn}>Learn More</button>
                </motion.div>

            </motion.section>



            {/* ---------- WhyChooseUs Section ---------- */}
            <section className={styles.whyChooseUs} data-section="why-choose-us">
                <video className={styles.bgVideo} src={bgVideo} autoPlay muted loop playsInline />
                <div className={styles.videoOverlay} />

                <div className={styles.chooseContent}>
                    <h2 className={styles.bigHeading}>WHY RVH SPACES?</h2>

                    <div className={styles.cardsWrap}>

                        <article className={`${styles.hCard} ${styles.cardOne} ${styles.reveal}`}>
                            <div className={styles.hCardInner}>
                                <div className={styles.hCardTitle}>
                                    <span>Flexible Workspaces</span>
                                    <span className={styles.hCardIndex}>01</span>
                                </div>
                                <div className={styles.hCardBody}>
                                    <p>Find a space that works the way you do.
                                        Private suites, shared desks, and dynamic meeting rooms.
                                        Designed to adapt to every workflow and working style.</p>
                                </div>
                            </div>
                        </article>

                        <article className={`${styles.hCard} ${styles.cardTwo} ${styles.reveal}`}>
                            <div className={styles.hCardInner}>
                                <div className={styles.hCardTitle}>
                                    <span>Tech-Infused Productivity</span>
                                    <span className={styles.hCardIndex}>02</span>
                                </div>
                                <div className={styles.hCardBody}>
                                    <p>Powered by fast connectivity and seamless digital tools.
                                        Smart booking and integrated AV support every project.
                                        Work without interruptions, from startup to scale-up.</p>
                                </div>
                            </div>
                        </article>

                        <article className={`${styles.hCard} ${styles.cardThree} ${styles.reveal}`}>
                            <div className={styles.hCardInner}>
                                <div className={styles.hCardTitle}>
                                    <span>Community Collaboration</span>
                                    <span className={styles.hCardIndex}>03</span>
                                </div>
                                <div className={styles.hCardBody}>
                                    <p>A place where creators, founders, and innovators connect.
                                        Networking happens naturally through shared spaces and events.
                                        Build meaningful relationships that fuel progress.</p>
                                </div>
                            </div>
                        </article>

                        <article className={`${styles.hCard} ${styles.cardFour} ${styles.reveal}`}>
                            <div className={styles.hCardInner}>
                                <div className={styles.hCardTitle}>
                                    <span>Premium Comfort Spaces</span>
                                    <span className={styles.hCardIndex}>04</span>
                                </div>
                                <div className={styles.hCardBody}>
                                    <p>Thoughtful design meets everyday comfort and focus.
                                        Ergonomic seating, natural light, and calming breakout zones.
                                        Workspace that supports wellness while delivering productivity.</p>
                                </div>
                            </div>
                        </article>

                    </div>
                </div>
            </section>




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