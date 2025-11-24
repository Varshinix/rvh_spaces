import React, { useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./home.module.css";
import coworkImg from '../../assets/cowork.jpg';
import privateImg from '../../assets/private.jpg';
import meetingImg from '../../assets/meeting.jpg';


export default function Home() {

    useEffect(() => {

        const nav = document.querySelector(`.${styles.navbar}`);
        const bg = document.querySelector(`.${styles.heroBg}`);
        const fadeItems = document.querySelectorAll(`.${styles.fadeItem}`);


        const handleScroll = () => {
            const scrollY = window.scrollY;

            // Navbar
            if (scrollY > 20) nav.classList.add(styles.scrolled);
            else nav.classList.remove(styles.scrolled);

            //  Hero Parallax 
            if (bg) {
                bg.style.transform = `translateY(${scrollY * 0.25}px) scale(${1 + scrollY * 0.0004})`;
            }

            // Scroll Fade-in items
            fadeItems.forEach((el) => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    el.classList.add(styles.visible);
                }
            });

        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return (
        <>

            <header className={styles.navbar}>
                <h2 className={styles.logo}>RVH Spaces</h2>

                <nav>
                    <ul className={styles.navLinks}>
                        <li className={`${styles.navItem} ${styles.active}`}>Home</li>
                        <li className={styles.navItem}>About</li>
                        <li className={styles.navItem}>Locations</li>
                        <li className={styles.navItem}>Our Story</li>
                        <li className={styles.navItem}>Contact</li>
                    </ul>
                </nav>
            </header>

            <section className={styles.hero}>
                <div className={styles.heroBg}></div>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>
                        Step Into <br />
                        Your Future Workspace
                    </h1>

                    <p className={styles.subText}>
                        Beautifully designed coworking spaces where ideas grow & people connect.
                    </p>

                    <button className={styles.primaryBtn}>Explore Spaces</button>
                </div>

                <div className={styles.glassFeatures}>
                    <div className={styles.featureCard}>★ Fast Wi-Fi & Private Cabins</div>
                    <div className={styles.featureCard}>★ Café Access & Events</div>
                    <div className={styles.featureCard}>★ Flexible Plans 24×7</div>
                </div>
            </section>



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




        </>
    );
}

