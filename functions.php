<?php
/**
 * Presto Prosecco Theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package presto_prosecco
 */

add_action( 'wp_enqueue_scripts', 'bateaux_parent_theme_enqueue_styles' );

/**
 * Enqueue scripts and styles.
 */
function bateaux_parent_theme_enqueue_styles() {
	wp_enqueue_style( 'bateaux-style', get_template_directory_uri() . '/style.css' );
	wp_enqueue_style( 'presto_prosecco-style',
		get_stylesheet_directory_uri() . '/style.css',
		array( 'bateaux-style' ),
	'1.0.1'
	);

	wp_enqueue_script('tween', 'https://cdnjs.cloudflare.com/ajax/libs/tween.js/16.3.5/Tween.min.js', array(), '20190111', false);
	wp_enqueue_script('waypoints', get_stylesheet_directory_uri() . '/assets/jquery.waypoints.min.js', array('jquery'), '20190113', false);
	wp_enqueue_script('custom', get_stylesheet_directory_uri() . '/custom.js', array('jquery'), '20190111', false);
}
