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

// Get tab data from inner blocks (showcase-tab children)
$tabs = array();

// Access inner_blocks from the WP_Block object
if (!empty($block->inner_blocks)) {
	foreach ($block->inner_blocks as $inner_block) {
		if ($inner_block->name === 'sl-blocks/showcase-tab') {
			$title = isset($inner_block->attributes['title']) ? $inner_block->attributes['title'] : 'Tab';
			$tabs[] = array(
				'title' => $title,
				'content' => $inner_block->render()
			);
		}
	}
}

// Fallback if no tabs found
if (empty($tabs)) {
	$tabs = array(
		array('title' => 'Overview', 'content' => ''),
		array('title' => 'Features', 'content' => ''),
		array('title' => 'Details', 'content' => '')
	);
}

// Calculate star rating
$full_stars = floor($rating);
$has_partial = ($rating - $full_stars) > 0;
$partial_percent = ($rating - $full_stars) * 100;
$empty_stars = 5 - ceil($rating);

// Star SVG path
$star_path = 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z';

// Get block wrapper attributes
$wrapper_attributes = get_block_wrapper_attributes(array('class' => 'border border-brand-primary-dark rounded-lg mb-6'));
?>

<div <?php echo $wrapper_attributes; ?>>
	<!-- Top Section -->
	<div class="text-center flex justify-between items-center bg-surface-lighter p-6 rounded-t-lg">
		<div class="text-2xl md:text-4xl font-medium text-text-primary">
			<?php echo wp_kses_post($top_section_text); ?>
		</div>
		<div class="flex items-center justify-center gap-1 flex-wrap">
			<span class="font-bold py-2 px-4 text-2xl md:text-4xl"><?php echo esc_html(number_format($rating, 1)); ?></span>
			<div class="flex items-center justify-center gap-1 flex-wrap" aria-label="<?php echo esc_attr($rating . ' out of 5 stars'); ?>">
				<?php
				// Full stars
				for ($i = 0; $i < $full_stars; $i++) {
					echo '<svg width="20" height="20" viewBox="0 0 24 24" class="text-brand-accent">';
					echo '<path d="' . esc_attr($star_path) . '" fill="currentColor" />';
					echo '</svg>';
				}

				// Partial star
				if ($has_partial) {
					$gradient_id = 'star-gradient-' . str_replace('.', '-', $rating);
					echo '<svg width="20" height="20" viewBox="0 0 24 24" class="text-brand-accent">';
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
					echo '<svg width="20" height="20" viewBox="0 0 24 24" class="text-border-light">';
					echo '<path d="' . esc_attr($star_path) . '" fill="currentColor" />';
					echo '</svg>';
				}
				?>
			</div>
		</div>
	</div>

	<!-- Main Body -->
	<div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:py-8 bg-surface-light">
		<!-- Left: Carousel -->
		<div class="w-full showcase__carousel">
			<?php if (!empty($carousel_images)): ?>
				<div class="relative w-full aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden mb-4 carousel__main" data-current-index="0">
					<img
						src="<?php echo esc_url($carousel_images[0]['url']); ?>"
						alt="<?php echo esc_attr($carousel_images[0]['alt']); ?>"
						class="w-full h-full object-cover carousel__current-image" />
					<?php if (count($carousel_images) > 1): ?>
						<button class="absolute top-1/2 left-2.5 -translate-y-1/2 bg-black/50 text-white border-none w-16 h-16 rounded-full cursor-pointer flex items-center justify-center transition-colors z-[2] hover:bg-black/70 focus:outline-2 focus:outline-brand-primary focus:outline-offset-2 disabled:opacity-30 disabled:cursor-not-allowed carousel__prev" aria-label="Previous image">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-9">
								<path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clip-rule="evenodd" />
							</svg>
						</button>
						<button class="absolute top-1/2 right-2.5 -translate-y-1/2 bg-black/50 text-white border-none w-16 h-16 rounded-full cursor-pointer flex items-center justify-center transition-colors z-[2] hover:bg-black/70 focus:outline-2 focus:outline-brand-primary focus:outline-offset-2 disabled:opacity-30 disabled:cursor-not-allowed carousel__next" aria-label="Next image">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-9">
								<path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
							</svg>
						</button>
					<?php endif; ?>
				</div>
				<div class="flex gap-2 overflow-x-auto pb-2 carousel__thumbnails">
					<?php foreach ($carousel_images as $index => $image): ?>
						<div
							class="relative w-28 h-28 border-transparent border-2 hover:border-brand-primary rounded overflow-hidden cursor-pointer transition-colors carousel__thumbnail <?php echo $index === 0 ? 'carousel-active' : ''; ?>"
							data-index="<?php echo esc_attr($index); ?>">
							<img src="<?php echo esc_url($image['url']); ?>" alt="" class="w-full h-full object-cover" />
						</div>
					<?php endforeach; ?>
				</div>
			<?php else: ?>
				<div class="w-full aspect-[4/3] bg-gray-100 rounded-lg flex items-center justify-center">
					<p class="text-text-muted">No images added to carousel</p>
				</div>
			<?php endif; ?>
		</div>

		<!-- Right: Content -->
		<div class="flex flex-col gap-6">
			<!-- Service Name -->
			<?php if ($service_name): ?>
				<h3 class="text-2xl md:text-5xl font-medium text-text-primary m-0"><?php echo wp_kses_post($service_name); ?></h3>
			<?php endif; ?>

			<!-- Feature Tags -->
			<?php if (!empty($feature_tags)): ?>
				<div class="flex flex-wrap gap-2 -mt-2">
					<?php foreach ($feature_tags as $tag): ?>
						<?php if (!empty($tag)): ?>
							<span class="inline-block py-1 px-3 bg-white border border-text-primary rounded-full text-lg font-semibold text-text-primary whitespace-nowrap"><?php echo esc_html($tag); ?></span>
						<?php endif; ?>
					<?php endforeach; ?>
				</div>
			<?php endif; ?>

			<!-- Features -->
			<?php if (!empty($features)): ?>
				<div>
					<?php foreach ($features as $feature): ?>
						<div class="flex items-center gap-3 mb-4 text-2xl text-black">
							<span class="dashicons dashicons-<?php echo esc_attr($feature['icon']); ?> text-brand-primary text-2xl flex-shrink-0"></span>
							<span class="text-text-secondary"><?php echo wp_kses_post($feature['text']); ?></span>
						</div>
					<?php endforeach; ?>
				</div>
			<?php endif; ?>

			<!-- Special Offer Box -->
			<?php if ($special_offer_title || $special_offer_description): ?>
				<?php
				$special_offer_content = '
					<div class="bg-white border border-border-light rounded p-5 text-center transition-all">
						' . ($special_offer_title ? '<div class="text-2xl font-bold text-text-primary mb-2">' . wp_kses_post($special_offer_title) . '</div>' : '') . '
						' . ($special_offer_description ? '<div class="text-xl text-text-secondary leading-relaxed">' . wp_kses_post($special_offer_description) . '</div>' : '') . '
					</div>
				';

				if ($special_offer_url):
				?>
					<a href="<?php echo esc_url($special_offer_url); ?>" class="block hover:shadow-lg focus:outline-2 focus:outline-brand-primary focus:outline-offset-2 rounded" style="text-decoration: none;">
						<?php echo $special_offer_content; ?>
					</a>
				<?php else: ?>
					<?php echo $special_offer_content; ?>
				<?php endif; ?>
			<?php endif; ?>

			<!-- Buttons -->
			<div class=" flex flex-col gap-6">
				<!-- Primary Button -->
				<?php if ($primary_button_url): ?>
					<a href="<?php echo esc_url($primary_button_url); ?>" class="bg-brand-primary !text-white py-4 px-8 border-none rounded font-semibold text-center !no-underline block cursor-pointer transition-colors hover:bg-brand-primary-dark">
						<?php echo esc_html($primary_button_text); ?>
					</a>
				<?php else: ?>
					<div class="bg-brand-primary text-white py-4 px-8 border-none rounded font-semibold text-center block">
						<?php echo esc_html($primary_button_text); ?>
					</div>
				<?php endif; ?>

				<!-- Phone Button -->
				<?php if ($phone_number): ?>
					<a href="tel:<?php echo esc_attr($phone_number); ?>" class="!text-brand-primary hover:text-brand-primary-dark py-4 px-8 border-2 border-brand-primary hover:border-brand-primary-dark border-solid rounded font-semibold text-center !no-underline flex items-center justify-center gap-2 cursor-pointer transition-all">
						<?php echo esc_html($phone_button_text); ?>
					</a>
				<?php endif; ?>

				<!-- Secondary Buttons -->
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
					<?php if ($video_button_url): ?>
						<a class="text-sm no-underline flex items-center" href="<?php echo esc_url($video_button_url); ?>">
							<span class="dashicons dashicons-video-alt3 mr-1.5 w-4 h-4"></span><?php echo esc_html(trim($video_button_text)); ?>
						</a>
					<?php endif; ?>

					<?php if ($review_button_url): ?>
						<a class="text-sm no-underline flex items-center" href="<?php echo esc_url($review_button_url); ?>">
							<span class="dashicons dashicons-book mr-1.5 w-4 h-4"></span><?php echo esc_html(trim($review_button_text)); ?>
						</a>
					<?php endif; ?>
				</div>
			</div>
		</div>
	</div>

	<!-- Tabs -->
	<div class="bg-surface-light pb-8 showcase__tabs rounded-b-lg">
		<!-- Tab Navigation -->
		<div class="bg-brand-primary pt-2">
			<div class="bg-brand-primary flex justify-center gap-2 border-b-2 border-border-light mb-6 tabs__navigation">
				<?php foreach ($tabs as $index => $tab): ?>
					<button class="bg-transparent text-white text-3xl border-none rounded-t-lg py-4 px-6 cursor-pointer relative transition-colors tab__button <?php echo $index === 0 ? 'tab-active' : 'hover:text-brand-primary hover:bg-surface-light'; ?>" data-tab="<?php echo esc_attr($index); ?>">
						<?php echo wp_kses_post($tab['title']); ?>
					</button>
				<?php endforeach; ?>
			</div>
		</div>



		<!-- Tab Content -->
		<div class="tabs__content px-4">
			<?php foreach ($tabs as $index => $tab): ?>
				<div class="tab__panel <?php echo $index === 0 ? 'block' : 'hidden'; ?>" data-panel="<?php echo esc_attr($index); ?>">
					<?php echo $tab['content']; ?>
				</div>
			<?php endforeach; ?>
		</div>
	</div>
</div>