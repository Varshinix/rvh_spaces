
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./locations.module.css";


import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";

const images = [
    { src: img1, title: "Hitech City, Hyderabad," },
    { src: img2, title: "Hinjwadi, Pune" },
    { src: img3, title: "Whitefield, Banglore" },
    { src: img4, title: "Gachibowli, Hyderabad" },
    { src: img5, title: "Noida, Delhi" },
];



export default function Locations() {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    // 🔹 Auto-slide
    useEffect(() => {
        const autoScroll = setInterval(nextSlide, 3000);
        return () => clearInterval(autoScroll);
    }, []);

    // 🔹 Scroll Reveal Animation
    useEffect(() => {
        const revealEls = document.querySelectorAll(`.${styles.revealItem}`);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, idx) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add(styles.visible);
                        }, idx * 200); // staggered
                    }
                });
            },
            { threshold: 0.2 }
        );

        revealEls.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const getVisibleImages = () => {
        return [
            images[index],
            images[(index + 1) % images.length],
            images[(index + 2) % images.length],
        ];
    };



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


            <section className={styles.locationsSection}>
                {/* Top */}
                <div className={`${styles.topRow} ${styles.revealItem}`}>
                    <h2 className={styles.heading}>Prime Locations</h2>

                    <div className={styles.navBtns}>
                        <button onClick={prevSlide} className={styles.arrowBtn}>←</button>
                        <button onClick={nextSlide} className={styles.arrowBtn}>→</button>
                    </div>
                </div>

                {/* Carousel */}
                <div className={`${styles.carousel} ${styles.revealItem}`}>
                    {getVisibleImages().map((img, i) => (
                        <div
                            key={i}
                            className={`${styles.card} ${i === 1 ? styles.centerCard : ""}`}
                        >
                            <img src={img.src} alt={img.title} />
                            <div className={styles.caption}>{img.title}</div>
                        </div>
                    ))}
                </div>

                {/* Bottom */}

                <div className={`${styles.bottomRow} ${styles.revealItem}`}>
                    <p className={styles.quote1}>“Find your <br /> perfect workspace”</p>
                    <button className={styles.exploreBtn}>Explore More</button>
                    <p className={styles.desc1}>Where productivity <br />finds its place</p>
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