
$(document).ready(function() {
    sectionCoverAnimation()
    headerAnimation() 
})
   
   


function sectionCoverAnimation () {
    gsap.utils.toArray(".js-section-cover").forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top top", 
          pin: true, 
          pinSpacing: false 
        });
      });    
}

function headerAnimation() {
   gsap.from('.header__img3',{duration:1,x:'-70%',delay:0.5})
   gsap.from('.header__img4',{duration:1,y:'100%',delay:0.5})
   gsap.from('.header__img1',{duration:1,x:'-200%',y:'-140%',delay:1})
}