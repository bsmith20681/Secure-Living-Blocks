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

// Get block attributes
$summary = isset($attributes['summary']) ? $attributes['summary'] : '';
$detail = isset($attributes['detail']) ? $attributes['detail'] : '';
$score = isset($attributes['score']) ? $attributes['score'] : '0.0';

// Get block wrapper attributes
$wrapper_attributes = get_block_wrapper_attributes();
?>

<div <?php echo $wrapper_attributes; ?>>
	<details class="wp-block-sl-blocks-rating-accordion">
		<summary class="wp-block-sl-blocks-rating-accordion__summary">
			<span><?php echo wp_kses_post($summary); ?></span>
			<span class="wp-block-sl-blocks-rating-accordion__score-wrapper">
				<span class="wp-block-sl-blocks-rating-accordion__score"><?php echo esc_html($score); ?></span>/ 5
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="12px"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="wp-block-sl-blocks-rating-accordion__chevron"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="m19.5 8.25-7.5 7.5-7.5-7.5"
					/>
				</svg>
			</span>
		</summary>
		<div class="wp-block-sl-blocks-rating-accordion__detail"><?php echo wp_kses_post($detail); ?></div>
	</details>
</div>
