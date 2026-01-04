<?php
// This file is generated. Do not modify it manually.
return array(
	'rating' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/rating',
		'version' => '0.1.0',
		'title' => 'Score Rating',
		'category' => 'widgets',
		'icon' => '',
		'description' => 'A block for displaying a rating.',
		'example' => array(
			
		),
		'attributes' => array(
			'rating' => array(
				'type' => 'number',
				'default' => 4.5
			)
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'rating',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'rating-accordion' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/rating-accordion',
		'version' => '0.1.0',
		'title' => 'Rating Accordion',
		'category' => 'widgets',
		'icon' => '',
		'description' => 'Accordion Style Blocks for Score Component',
		'example' => array(
			
		),
		'attributes' => array(
			'detail' => array(
				'type' => 'string'
			),
			'summary' => array(
				'type' => 'string'
			),
			'score' => array(
				'type' => 'string'
			)
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'rating-accordion',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'showcase' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/showcase',
		'version' => '0.1.0',
		'title' => 'Product Showcase',
		'category' => 'widgets',
		'icon' => 'star-filled',
		'description' => 'Display product information with rating, carousel, and features',
		'example' => array(
			
		),
		'attributes' => array(
			'topSectionText' => array(
				'type' => 'string',
				'default' => 'Best for Combo Sleepers'
			),
			'rating' => array(
				'type' => 'number',
				'default' => 4.8
			),
			'carouselImages' => array(
				'type' => 'array',
				'default' => array(
					
				)
			),
			'serviceName' => array(
				'type' => 'string',
				'default' => ''
			),
			'featureTags' => array(
				'type' => 'array',
				'default' => array(
					
				)
			),
			'features' => array(
				'type' => 'array',
				'default' => array(
					
				)
			),
			'specialOfferTitle' => array(
				'type' => 'string',
				'default' => ''
			),
			'specialOfferDescription' => array(
				'type' => 'string',
				'default' => ''
			),
			'specialOfferUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'primaryButtonText' => array(
				'type' => 'string',
				'default' => 'View Packages'
			),
			'primaryButtonUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'phoneButtonText' => array(
				'type' => 'string',
				'default' => 'Call Now'
			),
			'phoneNumber' => array(
				'type' => 'string',
				'default' => ''
			),
			'videoButtonText' => array(
				'type' => 'string',
				'default' => 'Watch Video Review'
			),
			'videoButtonUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'reviewButtonText' => array(
				'type' => 'string',
				'default' => 'Read Full Review'
			),
			'reviewButtonUrl' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'supports' => array(
			'html' => false,
			'align' => array(
				'wide',
				'full'
			)
		),
		'textdomain' => 'showcase',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	)
);
