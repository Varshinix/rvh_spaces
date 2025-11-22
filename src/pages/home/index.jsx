import React, { useEffect } from "react";
import styles from "./home.module.css";


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
            {/*<section className={styles.hero}>
                <div className={`${styles.heroContent} ${styles.fadeItem}`}>
                    <h1 className={styles.title}>
                        Step Into <br />
                        Your Future Workspace
                    </h1>

                    <p className={styles.subText}>
                        Beautifully designed coworking spaces where ideas grow & people connect.
                    </p>

                    <button className={styles.primaryBtn}>Explore Spaces</button>
                </div>
            </section> */}

            <header className={styles.navbar}>
                <h2 className={styles.logo}>RVH Spaces</h2>

                <nav>
                    <ul className={styles.navLinks}>
                        <li>Home</li>
                        <li>About</li>
                        <li>Locations</li>
                        <li>Our Story</li>
                        <li>Contact</li>
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



        </>
    );
}

