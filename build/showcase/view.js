/******/ (() => { // webpackBootstrap
/*!******************************!*\
  !*** ./src/showcase/view.js ***!
  \******************************/
/**
 * Frontend JavaScript for Product Showcase block
 * Handles carousel navigation and interactivity
 */

document.addEventListener("DOMContentLoaded", () => {
  // Find all showcase carousels on the page
  const carousels = document.querySelectorAll(".showcase__carousel");
  carousels.forEach(carousel => {
    const mainImage = carousel.querySelector(".carousel__main");
    const currentImage = carousel.querySelector(".carousel__current-image");
    const prevBtn = carousel.querySelector(".carousel__prev");
    const nextBtn = carousel.querySelector(".carousel__next");
    const thumbnails = carousel.querySelectorAll(".carousel__thumbnail");
    if (!mainImage || !currentImage || thumbnails.length === 0) {
      return; // No images in carousel
    }

    // Get all image data from thumbnails
    const images = Array.from(thumbnails).map(thumb => ({
      url: thumb.querySelector("img").src,
      alt: thumb.querySelector("img").alt || ""
    }));
    let currentIndex = 0;

    // Function to show specific slide
    const showSlide = index => {
      // Update current index
      currentIndex = index;
      mainImage.setAttribute("data-current-index", currentIndex);

      // Update main image
      currentImage.src = images[currentIndex].url;
      currentImage.alt = images[currentIndex].alt;

      // Update thumbnail active states
      thumbnails.forEach((thumb, i) => {
        if (i === currentIndex) {
          thumb.classList.add("carousel-active");
        } else {
          thumb.classList.remove("carousel-active");
        }
      });

      // Update button states
      if (prevBtn && nextBtn) {
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === images.length - 1;
      }
    };

    // Previous button click
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
          showSlide(currentIndex - 1);
        }
      });
    }

    // Next button click
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        if (currentIndex < images.length - 1) {
          showSlide(currentIndex + 1);
        }
      });
    }

    // Thumbnail clicks
    thumbnails.forEach((thumb, index) => {
      thumb.addEventListener("click", () => {
        showSlide(index);
      });
    });

    // Keyboard navigation
    mainImage.addEventListener("keydown", e => {
      if (e.key === "ArrowLeft" && currentIndex > 0) {
        showSlide(currentIndex - 1);
      } else if (e.key === "ArrowRight" && currentIndex < images.length - 1) {
        showSlide(currentIndex + 1);
      }
    });

    // Initialize with first slide
    showSlide(0);
  });

  // Tab functionality
  const tabContainers = document.querySelectorAll(".showcase__tabs");
  tabContainers.forEach(tabContainer => {
    const tabButtons = tabContainer.querySelectorAll(".tab__button");
    const tabPanels = tabContainer.querySelectorAll(".tab__panel");
    if (tabButtons.length === 0 || tabPanels.length === 0) {
      return;
    }

    // Function to switch tabs
    const switchTab = index => {
      // Update button active states
      tabButtons.forEach(btn => {
        btn.classList.remove("tab-active", "text-brand-primary");
        btn.classList.add("text-text-muted");
      });
      tabButtons[index].classList.add("tab-active", "text-brand-primary");
      tabButtons[index].classList.remove("text-text-muted");

      // Show/hide panels using Tailwind classes
      tabPanels.forEach(panel => {
        panel.classList.add("hidden");
        panel.classList.remove("block");
      });
      tabPanels[index].classList.remove("hidden");
      tabPanels[index].classList.add("block");
    };

    // Add click event to each tab button
    tabButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        switchTab(index);
      });
    });
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map