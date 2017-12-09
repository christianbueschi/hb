<?php

namespace NxModule\footer;

class FooterCtrl {

	/**
	 * Define default args for the controller
	 *
	 * @var array
	 */
	protected static $DEFAULT_CTRL_ARGS = array();

	/**
	 * Define default vars for the view
	 * In the view, test with empty() if a value is set
	 *
	 * @var array
	 */
	protected static $DEFAULT_VIEW_VARS = array(
		'menu_links' => '',
		'menu_social' => '',
		'address' => ''
	);

	/**
	 * * Get Teaser Query
	 * @param array $args
	 * @return array
	 */
	public static function data(array $args = array()) {

		// Extend default args
		$ctrlArgs = array_merge(self::$DEFAULT_CTRL_ARGS, $args);

		// Set default vars for the view
		$viewData = self::$DEFAULT_VIEW_VARS;

		$viewData['address'] = get_field('imprint_content', 'options');

		$backgroundImage = get_field('footer_image', 'options');
		$viewData['background_image'] = $backgroundImage['url'];

		$brandImage = get_field('brand_image', 'options');
		$viewData['brand_image'] = $brandImage['url'];
		$viewData['brand_link'] = get_field('brand_image_link', 'options');

		// Define menu locations
		$map_menu_locations = array(
			'menu_links' => 'footer-links',
			'menu_links_small' => 'footer-links-small'
		);

		foreach ($map_menu_locations as $menu => $menu_location) {

			$menu_object = \NxTheme\Helpers::getMenuObject($menu_location);

			$viewData[$menu] = false;
			if(is_wp_error($menu_object) == false && $menu_object !== false) {

					$viewData[$menu] = array(
					'items' => wp_get_nav_menu_items($menu_object->term_id),
					'label' => $menu_object->name
				);
			}
		}

		return $viewData;
	}
}
