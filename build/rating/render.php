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
	<div class="score">
		<svg
			class="ring"
			viewBox="0 0 120 120"
			aria-label="Overall score <?= esc_attr($rating); ?> out of <?= esc_attr($maxRating); ?>">
			<circle
				class="track"
				cx="60"
				cy="60"
				r="46"></circle>

			<circle
				class="progress"
				cx="60"
				cy="60"
				r="46"
				stroke-dasharray="<?= esc_attr($circumference); ?>"
				stroke-dashoffset="<?= esc_attr($strokeDashOffset); ?>"></circle>
		</svg>

		<div class="center">
			<div class="value"><?= esc_html($rating); ?></div>
			<div class="label"><?php esc_html_e('Overall Score', 'rating'); ?></div>
		</div>
	</div>
</div>