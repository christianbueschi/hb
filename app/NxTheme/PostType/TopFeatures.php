<?php

namespace NxTheme\PostType;

/**
 * Class ExamplePostType
 *
 * Stage Custom Post Type.
 * Register in: @see Theme::posttypes()
 *
 * @see Theme::posttypes()
 * @package NxTheme\PostType
 */
class TopFeatures {

	// Max. 20 characters, cannot contain capital letters or spaces
	// @Link http://codex.wordpress.org/Function_Reference/register_post_type
	public static $ID = 'shsp_top_features';

	public function __construct() {
		// Register Post Type correctly with init hook
		add_action( 'init', array(&$this, 'register') );
	}

	/**
	 * Register Custom Post Type
	 */
	public function register() {

		// Register
		register_post_type(
			static::$ID,
			array(
				// Labels
				'labels'      => array(
					'name'            => __( 'Top Features', 'nxtheme' ),
					'singular_name'   => __( 'Top Feature', 'nxtheme' ),
					'add_new_item'    => __( 'Add New Top Feature', 'nxtheme' ),
					'edit_item'       => __( 'Edit Top Feature', 'nxtheme' ),
					'update_item'     => __( 'Update Top Feature', 'nxtheme' ),
					'add_new'         => __( 'Add new Top Feature', 'nxtheme' ),
				),
				'label'               => __( 'Top Features', 'nxtheme' ),
				'description'         => __( 'A Sharespace Product Top Feature', 'nxtheme' ),

				// Backend
				'hierarchical'        => false,
				'show_ui'             => true,
				'show_in_menu'        => true,
				'menu_position'       => 6, // 20 = below comments
                'menu_icon'           => 'dashicons-star-filled',
				'supports' => array(
					'title',
					//'thumbnail',
					//'page-attributes',
					'revisions',
				),
				'show_in_nav_menus'   => false,

				// Fronted
				'has_archive'         => false,
				'public'              => false,
				'exclude_from_search' => true,
			)
		);
	}

}
