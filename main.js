// Register Scroll Trigger Plugin
gsap.registerPlugin(ScrollTrigger);

// Get all checkpoint elements with GSAP
const checkpoints = gsap.utils.toArray(".checkpoint");
// Loop through all checkpoints
checkpoints.forEach(checkpoint => {
    // Animate the line inside each checkpoint
    gsap.from(checkpoint.firstElementChild, {
        height: 0, // Animate line height
        scrollTrigger: {
            trigger: checkpoint, // Element that triggers the animation
            start: "center center",
            end: "bottom+=340 center", // End point of the animation
            scrub: true, // Animation follows the scroll position
        }
    });
});

// Get all checkpoint text elements with GSAP
const checkpointTexts = gsap.utils.toArray(".text");

// Loop through each text element
checkpointTexts.forEach(text => {
    gsap.from(text, {
        // Animate opacity and X position
        opacity: 0,
        x: 100,
        ease: "power2.inOut",
        scrollTrigger: {
            // See the parent element (checkpoint) as the trigger from the animation
            trigger: text.parentElement,
            start: "top+=200 center",
            end: "bottom+=340 center",
            // Restart the animation when scrolling again
            // Reverse the animation when scrolling back
            toggleActions: "restart none none reverse",
        }
    });
});

// Get all images from the DOM
const images = document.querySelectorAll(".images img");

// Loop through each image and get the index of each image
images.forEach((img, i) => {
    // Get the corresponding checkpoint for each image
    const adjacentCheckpoint = img.parentElement.nextElementSibling.children[i];
    // Aniimate each image
    gsap.from(img, {
        // Aniimate opacity (show/hide)
        opacity: 0,
        scrollTrigger: {
            // Set the corresponding checkpoint element as the trigger for the animation
            trigger: adjacentCheckpoint,
            start: "top+=200 center",
            end: "bottom+=340 center",
            toggleActions: "restart none none reverse",
        }
    });
});