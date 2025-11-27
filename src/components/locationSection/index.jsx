import { useState, useEffect } from "react";
import styles from "./LocationSection.module.css";

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

export default function LocationSection() {
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
          <p className={styles.quote}>“Find your <br /> perfect workspace”</p>
          <button className={styles.exploreBtn}>Explore More</button>
          <p className={styles.desc}>Where productivity <br />finds its place</p>
        </div>
      </section>
    </>
  );
}
