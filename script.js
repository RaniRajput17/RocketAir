function show(){
    gsap.registerPlugin(ScrollTrigger);
  
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#content"),
    smooth: true,
    getDirection: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  locoScroll.on("scroll", function(dets){
    if(dets.direction==="up"){
      document.querySelector("#nav").style.top = "0%";
    }
    else if(dets.direction==="down"){
      document.querySelector("#nav").style.top = "-100%";
  
    }
  })
  
  ScrollTrigger.scrollerProxy("#content", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector("#content").style.transform ? "transform" : "fixed"
  });
  
  
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  ScrollTrigger.refresh();
  
  }
  function slideshow(){
    document.querySelector("#slide1").addEventListener("mouseover",function(){
      document.querySelector("#shutterleft1").style.width = "0%";
      document.querySelector("#shutterright1").style.width = "0%";
      document.querySelector("#vid1").style.opacity = "1";
    })
    
    document.querySelector("#slide1").addEventListener("mouseleave",function(){
       document.querySelector("#shutterleft1").style.width = "50%";
       document.querySelector("#shutterright1").style.width = "50%";
       document.querySelector("#vid1").style.opacity = "0";
     })
    
     document.querySelector("#slide2").addEventListener("mouseover",function(){
       document.querySelector("#shutterleft2").style.width = "0%";
       document.querySelector("#shutterright2").style.width = "0%";
       document.querySelector("#vid2").style.opacity = "1";
     })
     
     document.querySelector("#slide2").addEventListener("mouseleave",function(){
      document.querySelector("#shutterleft2").style.width = "50%";
        document.querySelector("#shutterright2").style.width = "50%";
        document.querySelector("#vid2").style.opacity = "0";
      })
    
      document.querySelector("#slide3").addEventListener("mouseover",function(){
         document.querySelector("#shutterleft3").style.width = "0%";
         document.querySelector("#shutterright3").style.width = "0%";
         document.querySelector("#vid3").style.opacity = "1";
       })
       
       document.querySelector("#slide3").addEventListener("mouseleave",function(){
          document.querySelector("#shutterleft3").style.width = "50%";
          document.querySelector("#shutterright3").style.width = "50%";
          document.querySelector("#vid3").style.opacity = "0";
        })
    
    /*let allSlides = document.querySelectorAll(".sld");
    allSlides = [...allSlides];
    
    var isHovered ="";
    
    allSlides.forEach(function(){
      document.querySelector().addEventListener("mouseover",function(dets){
          isHovered = dets.target.dataset.index;
          console.log(isHovered);
      })
    })
    
    */
    
    
    var elem = document.querySelector("#circular");
    
    document.querySelector("#circular").addEventListener("mousemove", function (e) {
      var value = elem.getBoundingClientRect();
      document.querySelector("#circle").style.top = `${e.clientY - value.top}px`;
      document.querySelector("#circle").style.left = `${e.clientX - value.left}px`;
    })
    
    document.querySelector("#circular").addEventListener("mouseleave", function (e) {
      document.querySelector("#circle").style.top = `50%`;
      document.querySelector("#circle").style.left = `50%`;
    })
    
    
  }
  function textshow(){
    document.querySelectorAll(".rowtxts")
          .forEach(function (row) {
              elem.innerHTML = `<div class="textwrapper">${row.innerHTML}</div>`;
          })
  
      document.querySelectorAll(".textwrapper")
          .forEach(txt => {
              let clutter = "";
              txt.textContent.split(" ").forEach(wrd => {
                  clutter += `<span>${wrd}</span>`;
              })
      
              txt.innerHTML = clutter;
          })
  
          gsap.set(".rowtxts span", {y: "200%"})
  
          document.querySelectorAll(".rowtxts")
          .forEach(function(elem){
              gsap.from(elem, {
                  scrollTrigger: {
                      scroller: "#content",
                      trigger: elem,
                      start: "top 60%"
                  },
                  onStart: function(){
                      gsap.to(elem.children[0].children, {
                          y: 0,
                          ease: Power4,
                          duration: .3,
                          stagger: .2
                      })
                  }
              })
          })
  }
  function workshow(){
    gsap.to(" #workdiv .card", {
      scrollTrigger: {
          scroller: "#content",
          trigger: "#work",
          start: "top 0%",
          scrub:2,
          pin:true,
      },
      top: "-100%",
      ease: Power4,
      stagger: .09,
      duration:1,
  })
  }
  show();
  slideshow();
  workshow();
  textshow();