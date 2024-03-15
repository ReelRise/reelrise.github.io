document.addEventListener("DOMContentLoaded", function () {
    const videoGallery = document.getElementById("video-gallery");
    const logo = document.querySelector(".logo");



    // Add mouseenter and mouseleave event listeners to the logo for the animation
    logo.addEventListener("mouseenter", function () {
        // Add or adjust animation properties as needed
        logo.style.transition = "transform 0.3s ease-in-out";
        logo.style.transform = "scale(1.2)";

        // Change cursor to pointer
        logo.style.cursor = "pointer";
    });

    logo.addEventListener("mouseleave", function () {
        // Reset the logo size when the mouse leaves
        logo.style.transform = "scale(1)";

        // Change cursor back to default
        logo.style.cursor = "default";
    });
});

