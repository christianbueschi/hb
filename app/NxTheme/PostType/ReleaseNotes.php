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
class ReleaseNotes {

	// Max. 20 characters, cannot contain capital letters or spaces
	// @Link http://codex.wordpress.org/Function_Reference/register_post_type
	public static $ID = 'shsp_release_notes';

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
					'name'            => __( 'Release Notes', 'nxtheme' ),
					'singular_name'   => __( 'Release Note', 'nxtheme' ),
					'add_new_item'    => __( 'Add New Release Note', 'nxtheme' ),
					'edit_item'       => __( 'Edit Release Note', 'nxtheme' ),
					'update_item'     => __( 'Update Release Note', 'nxtheme' ),
					'add_new'         => __( 'Add new Release Note', 'nxtheme' ),
				),
				'label'               => __( 'Release Notes', 'nxtheme' ),
				'description'         => __( 'Sharespace Release Notes', 'nxtheme' ),

				// Backend
				'hierarchical'        => false,
				'show_ui'             => true,
				'show_in_menu'        => true,
				'menu_position'       => 8, // 20 = below comments
                'menu_icon'           => 'dashicons-megaphone',
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
