import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import styles from "./ratingsSection.module.css";

import t1 from "../../assets/pfp1.jpg";
import t2 from "../../assets/pfp2.jpg";
import t3 from "../../assets/pfp3.jpg";
import t4 from "../../assets/pfp4.jpg";

import leftMainImage from "../../assets/ratings.jpg";

{/* import b1 from "../../assets/b1.png";
import b2 from "../../assets/b2.png";
import b3 from "../../assets/b3.png";
import b4 from "../../assets/b4.png";
import b5 from "../../assets/b5.png";
import b6 from "../../assets/b6.png";
import b7 from "../../assets/b7.png";

const brandLogos = [b1, b2, b3, b4, b5, b6, b7];
*/}

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




export default function RatingsSection() {
    // inView hook to trigger animations when the section scrolls into view
    const [ref, inView] = useInView({ threshold: 0.25, triggerOnce: true });

    // star animation state (1..5)
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
        }, 220); // speed between stars

        // reveal team images after a small delay
        const teamTimer = setTimeout(() => setTeamReveal(true), 700);

        // right-side slide-in after a short stagger
        const rightTimer = setTimeout(() => setRightShown(true), 120);


        return () => {
            clearInterval(starInterval);
            clearTimeout(teamTimer);

            clearTimeout(rightTimer);
        };
    }, [inView]);

    // small helper to get CSS class for two-line clamp on small blocks
    // (we ensure description text stays within two lines via CSS)
    return (
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


            {/* ========================= */}
            {/*      CLIENT REVIEWS      */}
            {/* ========================= */}

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

    
            {/*      BRAND MARQUEE      
           

            <div className={styles.marqueeSection}>
                <div className={styles.marqueeTrack}>
                    {brandLogos.map((logo, i) => (
                        <img key={i} src={logo} className={styles.brandLogo} alt="brand" />
                    ))}

                    {brandLogos.map((logo, i) => (
                        <img key={`dup-${i}`} src={logo} className={styles.brandLogo} alt="brand" />
                    ))}
                </div>
            </div> */}




        </section>



    );
}
