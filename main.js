
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
tl.to(".ctaButtons", { x: 0, opacity: 1, duration: .8 });


gsap.to(".servicesText", {
    scrollTrigger: ".servicesText",
    opacity: 1,
    duration: 2,
    stagger: 0.5,
    ease: "ease-out"
})

