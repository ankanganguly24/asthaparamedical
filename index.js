

gsap.from("#nav-items li", {
  y: -60, 
  opacity: 0, 
  duration: 1,
  delay: 3,
  stagger: 0.2, 
});



// Wait for the DOM to be fully loaded before applying animations
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("btn-nav");
  
    // GSAP animation on hover
    button.addEventListener("mouseenter", () => {
      gsap.to(button, {
        scale: 1.2, // Increase size on hover
        opacity: 0.6, // Change opacity
        duration: 0.3, // Animation duration
        ease: "power1.out", // Easing function for smooth animation
      });
    });
  
    // GSAP animation to reset on hover leave
    button.addEventListener("mouseleave", () => {
      gsap.to(button, {
        scale: 1, // Return to original size
        opacity: 1, // Restore original opacity
        duration: 0.3, // Animation duration
        ease: "power1.in", // Easing function for smooth reset
      });
    });
  });
  
  
  document.addEventListener("DOMContentLoaded", function () {
    const toggleSidebarButton = document.getElementById("toggle-sidebar");
    const closeSidebarButton = document.getElementById("close-sidebar");
    const sidebar = document.getElementById("sidebar");
  
    // Toggle sidebar visibility on hamburger menu click
    toggleSidebarButton.addEventListener("click", function () {
      sidebar.classList.toggle("-translate-x-full"); // Slide sidebar in and out
    });
  
    // Close sidebar when the close button is clicked
    closeSidebarButton.addEventListener("click", function () {
      sidebar.classList.add("-translate-x-full"); // Ensure sidebar is hidden
    });
  });

  gsap.from('#header-main p', {
    y: 400,
    duration: 1.5,
    delay: 4,
    opacity: 0,
    stagger: 0.2,
  })

  gsap.to('#spinner', {
    rotation: 360, // Complete rotation
    duration: 4, // Duration for one complete rotation (in seconds)
    repeat: -1, // Infinite repetition
    ease: "linear"
  })

  document.addEventListener("DOMContentLoaded", function() {
    const animatedText = document.getElementById("animated-text");
  
    gsap.to(animatedText, {
      x: 80, // Move 100px to the right
      duration: 1, // Duration of the movement
      ease: "power1.out", // Easing function for smooth animation

    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
  
    const gridItems = document.querySelectorAll("#my-scroll-trigger-grid");
  
    // Apply ScrollTrigger to each grid item
    gridItems.forEach((item) => {
      gsap.from(item, {
        opacity: 0, // Start with 0 opacity
        scale: 0.6, // Start with 80% scale
        duration: 1, // Duration of the animation
        scrollTrigger: {
          trigger: item, // Trigger when this item comes into view
          start: "top 80%", // Start animation when the top of the item reaches 80% of viewport
          toggleActions: "play none none none", // Play animation when triggered
          once: true, // Trigger only once
        },
      });
    });
  });

  gsap.registerPlugin(ScrollTrigger);

  const numbers = document.querySelectorAll('#counters');
  
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: numbers,
      markers: false,
      toggleActions: 'restart pause resume pause',
    },
  });
  
  gsap.utils.toArray('.counterOne').forEach(function (el) {
    var target = { val: 0 };
    tl.to(target, {
      val: el.getAttribute('data-number'),
      duration: 3,
      onUpdate: function () {
        el.innerText = target.val.toFixed(0);
      },
    });
  });
  
  gsap.utils.toArray('.counterTwo').forEach(function (el) {
    var target = { val: 0 };
    tl.to(target, {
      val: el.getAttribute('data-number'),
      duration: 5,
      onUpdate: function () {
        el.innerText = target.val.toFixed(0);
      },
    });
  });
  
  gsap.utils.toArray('.counterThree').forEach(function (el) {
    var target = { val: 0 };
    tl.to(target, {
      val: el.getAttribute('data-number'),
      duration: 3,
      onUpdate: function () {
        el.innerText = target.val.toFixed(0);
      },
    });
  });
  
  tl.play();

  
  gsap.from('.marquee-box',{
    transform: "translateX(-180%)",
    duration:18,
    repeat:-2,
    ease:"none"
  })

  const wordsArray = ['Hello',
  'Hola',
  'Bonjour',
  'Hallo',
  'Ciao',
  'Привет',
  '你好',
  'こんにちは',
  'مرحبا',
  '안녕하세요'];

function displayWords() {
  let index = 0;
  const intervalId = setInterval(() => {
    if (index < wordsArray.length) {
      document.getElementById('container').textContent = wordsArray[index];
      index++;
    } else {
      clearInterval(intervalId);
      loader();
    }
  }, 250); // 1000 milliseconds = 1 second
}

displayWords();

function loader(){
  gsap.to('#loader', {
    y: "-100%",
    delay: 0,
    duration: 3,
    borderRadius: "100%",
    opacity: 0
  });
}
