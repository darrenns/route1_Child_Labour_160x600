window.onload = function () {
    
    var tlOne, banner, FrameOne, cta, bgexit;
    var tlOne = new TimelineLite();
    var tlTwo = new TimelineLite();
    var banner = document.getElementById("banner");
    var FrameOne = document.getElementById("FrameOne");
    var FrameTwo = document.getElementById("FrameTwo");
    var FrameThree = document.getElementById("FrameThree");
    var FrameFour = document.getElementById("FrameFour");
    var worldLogo = document.getElementById("worldLogo");
    var worldLogoTwo = document.getElementById("worldLogoTwo");
    var ctaImage = document.getElementById("ctaImage");
    var ctaImageRoll = document.getElementById("ctaImageRoll");
    var FrameOneImage = document.getElementById("FrameOneImage");
    var FrameTwoImage = document.getElementById("FrameTwoImage");
    var FrameThreeImage = document.getElementById("FrameThreeImage");
    var FrameFourImage = document.getElementById("FrameFourImage");
    var copyFrameOne = document.getElementById("copyFrameOne");
    var copyFrameTwo = document.getElementById("copyFrameTwo");
    var copyFrameThree = document.getElementById("copyFrameThree");
    var copyFrameFour = document.getElementById("copyFrameFour");
    
    function initBannerAdd() {
        setPositionsObjects();
        animateAdNew();
    }

    function setPositionsObjects() {
        banner.style.opacity = "1";
        FrameOne.style.opacity = "1";
        FrameOneImage.style.opacity = "1";
        FrameTwoImage.style.opacity = "0";
        FrameThreeImage.style.opacity = "0";
        FrameFourImage.style.opacity = "0";
        
        worldLogoTwo.style.opacity = "0";
        worldLogo.style.opacity = "1";
        
        copyFrameOne.style.opacity = "0";
        copyFrameTwo.style.opacity = "0";
        copyFrameThree.style.opacity = "0";
        copyFrameFour.style.opacity = "0";
        ctaImage.style.opacity = "0";
        ctaImageRoll.style.opacity = "0";
    }

    function animateAdNew() {
    
         tlOne.to(FrameOneImage,1, {delay: 0, opacity:1, scale:1, ease:Power1.easeout}, "-=0")
        .to(copyFrameOne,1, {delay: 0, opacity:1, ease:Power1.easeout}, "-=1")
        
        .to(FrameTwoImage,1, {delay: 2, opacity:1, scale:1, ease:Power1.easeout}, "-=0")
        .to(copyFrameOne,0.5, {delay: 0, opacity:0, ease:Power1.easeout}, "-=1.5")
        .to(copyFrameTwo,1, {delay: 0, opacity:1, ease:Power1.easeout}, "-=1")
        
        .to(FrameThreeImage,1, {delay: 2, opacity:1, scale:1, ease:Power1.easeout}, "-=0")
        .to(copyFrameTwo,0.5, {delay: 0, opacity:0, ease:Power1.easeout}, "-=1.5")
        .to(copyFrameThree,1, {delay: 0, opacity:1, ease:Power1.easeout}, "-=1")
        
        .to(FrameFourImage,1, {delay: 2, opacity:1, scale:1, ease:Power1.easeout}, "-=0")
        .to(copyFrameThree,0.5, {delay: 0, opacity:0, ease:Power1.easeout}, "-=1.5")
        .to(copyFrameFour,1, {delay: 0, opacity:1, ease:Power1.easeout}, "-=1")
        
        .to(worldLogo,1, {delay: 0, opacity:0, ease:Power1.easeout}, "-=1")
        
        .to(ctaImage,0, {delay: 0, x:-270}, "-=0")
        .to(ctaImageRoll,0, {delay: 0, x:-270}, "-=0")
        .to(ctaImage,0.5, {delay: 0.5, opacity:1, ease:Power1.easeout}, "-=0.5")
        
        .to(worldLogoTwo,1, {delay: 0, opacity:1, ease:Power1.easeout}, "-=0")
        
         tlTwo.from(FrameOne,6, {scale:1.2}, "-=0")
        .from(FrameTwo,6, {delay:0, scale:1.2}, "-=4")
        .from(FrameThree,6, {delay:0, scale:1.2}, "-=4")
        .from(FrameFour,7, {delay:0, scale:1, onComplete:restartAnimation}, "-=4")
        //tlOne.totalDuration(15);
    }
    

    ////timer
    var myVar = setInterval(function () {myTimer()}, 1000);
    function myTimer() {
        var d = new Date();
        //tlOne.totalDuration(10);
    }

    var animationLoop = 1;
    function restartAnimation() {
        if (animationLoop === 1) {
            tlOne.restart();
            tlTwo.restart();
            animationLoop = animationLoop + 1;
        }
    }
    initBannerAdd(); 
    //init(); ///start initialising everything   
    /////////////// /////////////// /////////////// //////////////  
};