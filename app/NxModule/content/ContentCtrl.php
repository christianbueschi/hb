<?php

namespace NxModule\content;

class ContentCtrl {

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
		'post_id' => '',
		'main_nav' => ''
	);

	/**
	 * Get data for an article
	 *
	 * @param $args
	 * @return array
	 */
	public static function data(array $args = array()) {

		// Extend default args
		$ctrlArgs = array_merge(self::$DEFAULT_CTRL_ARGS, $args);

		// Set default vars for the view
		$viewData = self::$DEFAULT_VIEW_VARS;

		// View Data
		$viewData['title'] = get_sub_field('content_title');
		$viewData['copy'] = get_sub_field('content_copy');
		$viewData['anchor'] = get_sub_field('content_anchor');
		$viewData['background'] = get_sub_field('content_background_color');

		return $viewData;
	}
}