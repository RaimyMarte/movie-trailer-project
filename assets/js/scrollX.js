const scrollX = () => {
    const movies = gsap.utils.toArray(".gallery-item");

   gsap.to(movies, {
        xPercent: -100 * (movies.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: '.scrollx',
            pin: true,
            pinSpacing:'1000px',
            scrub: 1,
            end: "+=10000",
            start: "-100px",
        }
    });
}

setTimeout(() => {
    scrollX()
}, 2500);



