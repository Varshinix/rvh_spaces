import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./ourStory.module.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import t1 from "../../assets/pfp1.jpg";
import t2 from "../../assets/pfp2.jpg";
import t3 from "../../assets/pfp3.jpg";
import t4 from "../../assets/pfp4.jpg";

import leftMainImage from "../../assets/ratings.jpg";


const teamImages = [t1, t2, t3, t4];

const testimonialData = [
    {
        name: "Aarav Sharma",
        role: "Product Designer",
        img: "https://i.pravatar.cc/100?img=32",
        text:
            "Loved the workspace! Comfortable seating, great lighting and super calm environment. Helped me focus better.",
    },
    {
        name: "Sanjana Rao",
        role: "Marketing Specialist",
        img: "https://i.pravatar.cc/100?img=47",
        text:
            "Such a refreshing place to work. The ambience is modern and very thoughtfully designed.",
    },
    {
        name: "Rehan Khan",
        role: "Software Engineer",
        img: "https://i.pravatar.cc/100?img=12",
        text:
            "Amazing facilities and very supportive staff. I genuinely enjoyed working here.",
    },
    {
        name: "Meghana Iyer",
        role: "Content Writer",
        img: "https://i.pravatar.cc/100?img=55",
        text:
            "Quiet, clean and productive. Honestly one of the best workspaces I've tried.",
    },
    {
        name: "Karthik Menon",
        role: "Founder, StartX",
        img: "https://i.pravatar.cc/100?img=20",
        text:
            "Our team loved it. Fast WiFi, creative environment and comfortable cabins!",
    },
    {
        name: "Ishita Patel",
        role: "UI/UX Designer",
        img: "https://i.pravatar.cc/100?img=15",
        text:
            "Perfect blend of cozy and professional. Boosted my productivity instantly.",
    },
];

export default function OurStory() {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    const [ref, inView] = useInView({ threshold: 0.25, triggerOnce: true });

    const [visibleStars, setVisibleStars] = useState(0);

    // team images reveal index for small staggered slide-in
    const [teamReveal, setTeamReveal] = useState(false);

    //  Right Slide In
    const [rightShown, setRightShown] = useState(false);

    useEffect(() => {
        if (!inView) return;

        // animate stars one-by-one
        let starCount = 0;
        const starInterval = setInterval(() => {
            starCount += 1;
            setVisibleStars(starCount);
            if (starCount >= 5) clearInterval(starInterval);
        }, 220);

        const teamTimer = setTimeout(() => setTeamReveal(true), 700);

        const rightTimer = setTimeout(() => setRightShown(true), 120);


        return () => {
            clearInterval(starInterval);
            clearTimeout(teamTimer);

            clearTimeout(rightTimer);
        };
    }, [inView]);


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



            <section
                className={styles.ratingsSection}
                ref={ref}
                aria-label="Ratings and stats"
            >
                <div className={styles.container}>
                    {/* LEFT: Ratings component (2 parts width) */}
                    <div className={styles.left}>

                        {/* LEFT ROW — holds left column (stacked blocks) + image column */}
                        <div className={styles.leftRow}>

                            {/* LEFT COLUMN: stacked blocks */}
                            <div className={styles.leftStatsCol}>

                                {/* Block 1 - Rating */}
                                <div className={`${styles.block} ${styles.ratingBlock}`}>
                                    <div className={styles.blockHead}>
                                        <div className={styles.starsWrap} aria-hidden>
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <span
                                                    key={i}
                                                    className={`${styles.star} ${i < visibleStars ? styles.starVisible : ""}`}
                                                >
                                                    ★
                                                </span>
                                            ))}
                                        </div>

                                        <div className={styles.ratingNumber}>
                                            <strong>4.9</strong>
                                            <span className={styles.small}>/5</span>
                                        </div>
                                    </div>

                                    <div className={styles.blockBody}>
                                        <div className={styles.smallStat}>
                                            {inView ? <CountUp end={3800} duration={2.2} separator="," /> : 0}
                                            <span className={styles.smallLabel}>+ Positive Reviews</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Block 2 - Experts */}
                                <div className={`${styles.block} ${styles.expertsBlock}`}>
                                    <div className={styles.blockHead}>
                                        <div className={styles.expertsThumbs}>
                                            {teamImages.map((src, i) => (
                                                <img
                                                    key={i}
                                                    src={src}
                                                    alt={`team ${i + 1}`}
                                                    className={`${styles.teamImg} ${teamReveal ? styles.teamImgVisible : ""}`}
                                                    style={{ transitionDelay: `${i * 100}ms` }}
                                                />
                                            ))}
                                        </div>

                                        <div className={styles.expertNumber}>
                                            <strong>{inView ? <CountUp end={1289} duration={2.2} separator="," /> : 0}</strong>
                                        </div>
                                    </div>

                                    <div className={styles.blockBody}>
                                        <div className={styles.smallLabel}>Our dedicated team</div>
                                    </div>
                                </div>

                                {/* Block 3 - Satisfaction */}
                                <div className={`${styles.block} ${styles.satBlock}`}>
                                    <div className={styles.blockHead}>
                                        <div className={styles.percentWrap}>
                                            <strong className={styles.percentLarge}>
                                                {inView ? <CountUp end={98} duration={1.8} /> : 0}
                                                <span className={styles.small}>%</span>
                                            </strong>
                                        </div>
                                    </div>

                                    <div className={styles.blockBody}>
                                        <div className={styles.smallLabel}>Trusted by clients worldwide</div>
                                    </div>
                                </div>

                            </div> {/* end leftStatsCol */}

                            {/* RIGHT column — image + floating 5K */}
                            <div className={styles.imageWrapper}>
                                <img src={leftMainImage} className={styles.bigImage} alt="Workspace" />

                                <div className={styles.floatingCard}>
                                    <div className={styles.floatingNumber}>
                                        {inView ? (
                                            <CountUp
                                                end={5000}
                                                duration={2.4}
                                                formattingFn={(n) => (n >= 5000 ? "5K+" : Math.round(n).toLocaleString())}
                                            />
                                        ) : (
                                            "0"
                                        )}
                                    </div>
                                    <div className={styles.floatingLabel}>Professionals love our spaces</div>
                                </div>
                            </div>

                        </div> {/* end leftRow */}

                    </div> {/* end left */}



                    {/* RIGHT: Title / Description + big floating stat card */}
                    <div className={`${styles.right} ${rightShown ? styles.rightVisible : ""}`}>
                        <h3 className={styles.title}>
                            Workspaces <br /> that elevate your potential
                        </h3>
                        <p className={styles.description}>
                            “Designed for focus, creativity, and effortless productivity. Comfortable, creative, and thoughtfully built to support your goals.
                            Flexible work environments made to boost output.”
                        </p>

                    </div>
                </div>


                {/*      CLIENT REVIEWS      */}

                <div className={styles.reviewsSection} ref={ref}>
                    <h3 className={styles.reviewsTitle}>What Our Clients Say</h3>

                    {/* Carousel Wrapper */}
                    <div className={styles.carouselOuter}>
                        <div
                            className={`${styles.carouselInner} ${inView ? styles.carouselStart : ""
                                }`}
                        >
                            {testimonialData.map((item, i) => (
                                <div key={i} className={styles.reviewCard}>
                                    <div className={styles.stars}>★★★★★</div>

                                    <p className={styles.reviewText}>{item.text}</p>

                                    <div className={styles.userRow}>
                                        <img src={item.img} className={styles.avatar} alt="" />
                                        <div>
                                            <div className={styles.userName}>{item.name}</div>
                                            <div className={styles.userRole}>{item.role}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
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