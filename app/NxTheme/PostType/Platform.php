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
class Platform {

	// Max. 20 characters, cannot contain capital letters or spaces
	// @Link http://codex.wordpress.org/Function_Reference/register_post_type
	public static $ID = 'shsp_platform';

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
					'name'            => __( 'Platform', 'nxtheme' ),
					'singular_name'   => __( 'Platform', 'nxtheme' ),
					'add_new_item'    => __( 'Add New Plat', 'nxtheme' ),
					'edit_item'       => __( 'Edit Feature', 'nxtheme' ),
					'update_item'     => __( 'Update Feature', 'nxtheme' ),
					'add_new'         => __( 'Add new Feature', 'nxtheme' ),
				),
				'label'               => __( 'Features', 'nxtheme' ),
				'description'         => __( 'A Sharespace Product Feature', 'nxtheme' ),

				// Backend
				'hierarchical'        => false,
				'show_ui'             => true,
				'show_in_menu'        => true,
				'menu_position'       => 7, // 20 = below comments
				'menu_icon'           => 'dashicons-star-half',
				'supports' => array(
					'title',
					'editor',
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
