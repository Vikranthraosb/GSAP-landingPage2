var t1= gsap.timeline();


t1.from(".nav,.navpart1,.navpart2 h3, .navpart3 h5",{
y:-70,
x:40,
duration:.7,
opacity:0,
stagger:.26

})
t1.from(".left h1,.left img",{
x:-800,
duration:.4,
stagger:.2
})
t1.from(".right img",{
    scale:1.8,
    opacity:0,
    duration:.4
})

// scroll trigger code here downside
gsap.from(".page-2 .box",{
    scale:0,
    opacity:0,
    duration:1,
    stagger:.3,
    scrollTrigger:{
        trigger:".box",
        scoller:"body"
    }

})