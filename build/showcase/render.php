<?php

/**
 * Server-side rendering for Product Showcase block
 *
 * @param array    $attributes The block attributes.
 * @param string   $content    The block default content.
 * @param WP_Block $block      The block instance.
 */

// Get block attributes with defaults
$top_section_text = isset($attributes['topSectionText']) ? $attributes['topSectionText'] : 'Best for Combo Sleepers';
$rating = isset($attributes['rating']) ? floatval($attributes['rating']) : 4.8;
$carousel_images = isset($attributes['carouselImages']) ? $attributes['carouselImages'] : array();
$service_name = isset($attributes['serviceName']) ? $attributes['serviceName'] : '';
$feature_tags = isset($attributes['featureTags']) ? $attributes['featureTags'] : array();
$features = isset($attributes['features']) ? $attributes['features'] : array();
$special_offer_title = isset($attributes['specialOfferTitle']) ? $attributes['specialOfferTitle'] : '';
$special_offer_description = isset($attributes['specialOfferDescription']) ? $attributes['specialOfferDescription'] : '';
$special_offer_url = isset($attributes['specialOfferUrl']) ? $attributes['specialOfferUrl'] : '';
$primary_button_text = isset($attributes['primaryButtonText']) ? $attributes['primaryButtonText'] : 'View Packages';
$primary_button_url = isset($attributes['primaryButtonUrl']) ? $attributes['primaryButtonUrl'] : '';
$phone_button_text = isset($attributes['phoneButtonText']) ? $attributes['phoneButtonText'] : 'Call Now';
$phone_number = isset($attributes['phoneNumber']) ? $attributes['phoneNumber'] : '';
$video_button_text = isset($attributes['videoButtonText']) ? $attributes['videoButtonText'] : 'Watch Video Review';
$video_button_url = isset($attributes['videoButtonUrl']) ? $attributes['videoButtonUrl'] : '';
$review_button_text = isset($attributes['reviewButtonText']) ? $attributes['reviewButtonText'] : 'Read Full Review';
$review_button_url = isset($attributes['reviewButtonUrl']) ? $attributes['reviewButtonUrl'] : '';

// Calculate star rating
$full_stars = floor($rating);
$has_partial = ($rating - $full_stars) > 0;
$partial_percent = ($rating - $full_stars) * 100;
$empty_stars = 5 - ceil($rating);

// Star SVG path
$star_path = 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z';

// Get block wrapper attributes
$wrapper_attributes = get_block_wrapper_attributes();
?>

<div <?php echo $wrapper_attributes; ?>>
	<!-- Top Section -->
	<div class="wp-block-sl-blocks-showcase__top-section">
		<div class="top-text">
			<?php echo wp_kses_post($top_section_text); ?>
		</div>
		<div class="rating-display">
			<span class="score-badge"><?php echo esc_html(number_format($rating, 1)); ?></span>
			<div class="showcase-star-rating" aria-label="<?php echo esc_attr($rating . ' out of 5 stars'); ?>">
				<?php
				// Full stars
				for ($i = 0; $i < $full_stars; $i++) {
					echo '<svg width="20" height="20" viewBox="0 0 24 24" class="star star-full">';
					echo '<path d="' . esc_attr($star_path) . '" fill="currentColor" />';
					echo '</svg>';
				}

				// Partial star
				if ($has_partial) {
					$gradient_id = 'star-gradient-' . str_replace('.', '-', $rating);
					echo '<svg width="20" height="20" viewBox="0 0 24 24" class="star star-partial">';
					echo '<defs>';
					echo '<linearGradient id="' . esc_attr($gradient_id) . '">';
					echo '<stop offset="' . esc_attr($partial_percent) . '%" stop-color="currentColor" />';
					echo '<stop offset="' . esc_attr($partial_percent) . '%" stop-color="#e0e0e0" />';
					echo '</linearGradient>';
					echo '</defs>';
					echo '<path d="' . esc_attr($star_path) . '" fill="url(#' . esc_attr($gradient_id) . ')" />';
					echo '</svg>';
				}

				// Empty stars
				for ($i = 0; $i < $empty_stars; $i++) {
					echo '<svg width="20" height="20" viewBox="0 0 24 24" class="star star-empty">';
					echo '<path d="' . esc_attr($star_path) . '" fill="#e0e0e0" />';
					echo '</svg>';
				}
				?>
			</div>
		</div>
	</div>

	<!-- Main Body -->
	<div class="wp-block-sl-blocks-showcase__body">
		<!-- Left: Carousel -->
		<div class="showcase__carousel">
			<?php if (!empty($carousel_images)): ?>
				<div class="carousel__main" data-current-index="0">
					<img
						src="<?php echo esc_url($carousel_images[0]['url']); ?>"
						alt="<?php echo esc_attr($carousel_images[0]['alt']); ?>"
						class="carousel__current-image" />
					<?php if (count($carousel_images) > 1): ?>
						<button class="carousel__arrow carousel__prev" aria-label="Previous image">‹</button>
						<button class="carousel__arrow carousel__next" aria-label="Next image">›</button>
					<?php endif; ?>
				</div>
				<div class="carousel__thumbnails">
					<?php foreach ($carousel_images as $index => $image): ?>
						<div
							class="carousel__thumbnail <?php echo $index === 0 ? 'active' : ''; ?>"
							data-index="<?php echo esc_attr($index); ?>">
							<img src="<?php echo esc_url($image['url']); ?>" alt="" />
						</div>
					<?php endforeach; ?>
				</div>
			<?php else: ?>
				<div class="carousel__placeholder">
					<p>No images added to carousel</p>
				</div>
			<?php endif; ?>
		</div>

		<!-- Right: Content -->
		<div class="showcase__content">
			<!-- Service Name -->
			<?php if ($service_name): ?>
				<h3 class="service-name"><?php echo wp_kses_post($service_name); ?></h3>
			<?php endif; ?>

			<!-- Feature Tags -->
			<?php if (!empty($feature_tags)): ?>
				<div class="showcase__feature-tags">
					<?php foreach ($feature_tags as $tag): ?>
						<?php if (!empty($tag)): ?>
							<span class="feature-tag"><?php echo esc_html($tag); ?></span>
						<?php endif; ?>
					<?php endforeach; ?>
				</div>
			<?php endif; ?>

			<!-- Features -->
			<?php if (!empty($features)): ?>
				<div class="showcase__features">
					<?php foreach ($features as $feature): ?>
						<div class="feature-item">
							<span class="dashicons dashicons-<?php echo esc_attr($feature['icon']); ?>"></span>
							<span><?php echo wp_kses_post($feature['text']); ?></span>
						</div>
					<?php endforeach; ?>
				</div>
			<?php endif; ?>

			<!-- Special Offer Box -->
			<?php if ($special_offer_title || $special_offer_description): ?>
				<?php
				$special_offer_content = '
					<div class="showcase__special-offer-box">
						' . ($special_offer_title ? '<div class="special-offer-title">' . wp_kses_post($special_offer_title) . '</div>' : '') . '
						' . ($special_offer_description ? '<div class="special-offer-description">' . wp_kses_post($special_offer_description) . '</div>' : '') . '
					</div>
				';

				if ($special_offer_url):
				?>
					<a href="<?php echo esc_url($special_offer_url); ?>" class="showcase__special-offer-link">
						<?php echo $special_offer_content; ?>
					</a>
				<?php else: ?>
					<?php echo $special_offer_content; ?>
				<?php endif; ?>
			<?php endif; ?>

			<!-- Buttons -->
			<div class="showcase__buttons">
				<!-- Primary Button -->
				<?php if ($primary_button_url): ?>
					<a href="<?php echo esc_url($primary_button_url); ?>" class="primary-button">
						<?php echo esc_html($primary_button_text); ?>
					</a>
				<?php else: ?>
					<div class="primary-button">
						<?php echo esc_html($primary_button_text); ?>
					</div>
				<?php endif; ?>

				<!-- Phone Button -->
				<?php if ($phone_number): ?>
					<a href="tel:<?php echo esc_attr($phone_number); ?>" class="secondary-button">
						<?php echo esc_html($phone_button_text); ?>
					</a>
				<?php endif; ?>

				<!-- Secondary Buttons -->
				<div class="secondary-buttons">
					<?php if ($video_button_url): ?>
						<a class="showcase__link" href="<?php echo esc_url($video_button_url); ?>">
							<span class="dashicons dashicons-video-alt3"></span><?php echo esc_html(trim($video_button_text)); ?>
						</a>
					<?php endif; ?>

					<?php if ($review_button_url): ?>
						<a class="showcase__link" href="<?php echo esc_url($review_button_url); ?>">
							<span class="dashicons dashicons-book"></span><?php echo esc_html(trim($review_button_text)); ?>
						</a>
					<?php endif; ?>
				</div>
			</div>
		</div>
	</div>
</div>