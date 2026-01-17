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
	<details class="bg-surface-light py-3 px-4 mb-4 cursor-pointer group">
		<summary class="flex justify-between items-center">
			<span class="[margin-block-start:0px]"><?php echo wp_kses_post($summary); ?></span>
			<span class="flex items-center gap-1">
				<span class="font-bold"><?php echo esc_html($score); ?></span>/ 5
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="12px"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="transition-transform duration-300 group-open:rotate-180">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="m19.5 8.25-7.5 7.5-7.5-7.5" />
				</svg>
			</span>
		</summary>
		<div class="mt-3 font-3xl text-secondary"><?php echo wp_kses_post($detail); ?></div>
	</details>
</div>