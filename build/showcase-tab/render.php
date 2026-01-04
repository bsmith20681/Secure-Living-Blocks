<?php
/**
 * Server-side rendering for Showcase Tab block
 *
 * @param array    $attributes The block attributes.
 * @param string   $content    The block inner content.
 * @param WP_Block $block      The block instance.
 */

// Just return the inner content - the parent showcase block handles the wrapper
echo $content;
