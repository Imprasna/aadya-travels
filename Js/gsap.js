// header__seenon--logo
// realtors__list
// realtors__details
// realtors__sold
gsap.from("#img", {
    duration: 1.5,
    opacity: 0,
    y: () => Math.random() * 300 - 200, 
    repeat: 1, 
    stagger: {
      amount:  .25,
    },
    ease: "bounce"
    // forward
});

gsap.from ('#realtor', {
        opacity: 0,
        duration: 1.5,
        y: -160, 
        repeat: 0, 
        ease: "sine.inOut",
        delay:1,
        stagger: {
          amount: 1.2, 
        }
})

gsap.from ('#h4', {
    opacity: 0,
    duration: 2,
    x: -100, 
    repeat: 0, 
    ease: "power1.inOut",
    delay:1,
    stagger: {
      amount: 1.5, 
    }
})

gsap.from ('.realtors__sold', {
    opacity: 0,
    duration: 2.3,
    x: -120, 
    repeat: 0, 
    ease: "power1.inOut",
    delay:1,
    stagger: {
      amount: 1.7, 
    }
})