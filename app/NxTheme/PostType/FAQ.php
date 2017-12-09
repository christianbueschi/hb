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
class FAQ {

	// Max. 20 characters, cannot contain capital letters or spaces
	// @Link http://codex.wordpress.org/Function_Reference/register_post_type
	public static $ID = 'shsp_faq';

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
					'name'            => __( 'FAQs', 'nxtheme' ),
					'singular_name'   => __( 'FAQ', 'nxtheme' ),
					'add_new_item'    => __( 'Add New FAQ', 'nxtheme' ),
					'edit_item'       => __( 'Edit FAQ', 'nxtheme' ),
					'update_item'     => __( 'Update FAQ', 'nxtheme' ),
					'add_new'         => __( 'Add new FAQ', 'nxtheme' ),
				),
				'label'               => __( 'FAQs', 'nxtheme' ),
				'description'         => __( 'Sharespace FAQs', 'nxtheme' ),

				// Backend
				'hierarchical'        => false,
				'show_ui'             => true,
				'show_in_menu'        => true,
				'menu_position'       => 9, // 20 = below comments
                'menu_icon'           => 'dashicons-editor-help',
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
