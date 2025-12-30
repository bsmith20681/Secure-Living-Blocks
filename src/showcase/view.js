/**
 * Frontend JavaScript for Product Showcase block
 * Handles carousel navigation and interactivity
 */

document.addEventListener("DOMContentLoaded", () => {
	// Find all showcase carousels on the page
	const carousels = document.querySelectorAll(".showcase__carousel");

	carousels.forEach((carousel) => {
		const mainImage = carousel.querySelector(".carousel__main");
		const currentImage = carousel.querySelector(".carousel__current-image");
		const prevBtn = carousel.querySelector(".carousel__prev");
		const nextBtn = carousel.querySelector(".carousel__next");
		const thumbnails = carousel.querySelectorAll(".carousel__thumbnail");

		if (!mainImage || !currentImage || thumbnails.length === 0) {
			return; // No images in carousel
		}

		// Get all image data from thumbnails
		const images = Array.from(thumbnails).map((thumb) => ({
			url: thumb.querySelector("img").src,
			alt: thumb.querySelector("img").alt || "",
		}));

		let currentIndex = 0;

		// Function to show specific slide
		const showSlide = (index) => {
			// Update current index
			currentIndex = index;
			mainImage.setAttribute("data-current-index", currentIndex);

			// Update main image
			currentImage.src = images[currentIndex].url;
			currentImage.alt = images[currentIndex].alt;

			// Update thumbnail active states
			thumbnails.forEach((thumb, i) => {
				if (i === currentIndex) {
					thumb.classList.add("active");
				} else {
					thumb.classList.remove("active");
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
		mainImage.addEventListener("keydown", (e) => {
			if (e.key === "ArrowLeft" && currentIndex > 0) {
				showSlide(currentIndex - 1);
			} else if (
				e.key === "ArrowRight" &&
				currentIndex < images.length - 1
			) {
				showSlide(currentIndex + 1);
			}
		});

		// Initialize with first slide
		showSlide(0);
	});
});
