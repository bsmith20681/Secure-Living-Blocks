<?php

/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
$rating = $attributes['rating'];
$maxRating = 5;
$radius = 46;
$circumference = 2 * pi() * $radius;
$scoreRatio = $rating / $maxRating;
$strokeDashOffset = $circumference * (1 - $scoreRatio);
?>

<div <?php echo get_block_wrapper_attributes(); ?>>
	<div class="relative max-w-lg aspect-square grid place-items-center">
		<svg
			class="w-full max-w-lg h-full -rotate-90 ring-svg"
			viewBox="0 0 120 120"
			aria-label="Overall score <?= esc_attr($rating); ?> out of <?= esc_attr($maxRating); ?>">
			<circle
				class="fill-none stroke-[#e9eefc] stroke-[18]"
				cx="60"
				cy="60"
				r="46"></circle>

			<circle
				class="fill-none stroke-brand-primary stroke-[18] transition-all duration-500 ease-out"
				cx="60"
				cy="60"
				r="46"
				stroke-dasharray="<?= esc_attr($circumference); ?>"
				stroke-dashoffset="<?= esc_attr($strokeDashOffset); ?>"></circle>
		</svg>

		<div class="absolute text-center left-0 right-0 mx-auto w-fit">
			<div class="font-bold text-8xl leading-none text-primary"><?= esc_html($rating); ?></div>
			<div class="font-medium text-3xl leading-tight text-primary"><?php esc_html_e('Overall Score', 'rating'); ?></div>
		</div>
	</div>
</div>