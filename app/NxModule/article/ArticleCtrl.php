<?php

namespace NxModule\article;

class ArticleCtrl {

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

	);

	/**
	 * Get data for a teaser
	 *
	 * @param $args
	 * @return array
	 */
	public static function data(array $args = array()) {

		// Extend default args
		$ctrlArgs = array_merge(self::$DEFAULT_CTRL_ARGS, $args);

		// Set default vars for the view
		$viewData = self::$DEFAULT_VIEW_VARS;

		$id = get_the_ID();
		$viewData['title'] = get_the_title();
		$viewData['date'] = get_the_date('j F Y', $id);
		$viewData['image'] = get_the_post_thumbnail($id);
		$viewData['content'] = get_the_content();

		return $viewData;
	}

}