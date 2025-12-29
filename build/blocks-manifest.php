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
	)
);
