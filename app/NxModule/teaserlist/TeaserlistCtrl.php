<?php

namespace NxModule\teaserlist;

class TeaserlistCtrl {

	/**
	 * Define default args for the controller
	 *
	 * @var array
	 */
	protected static $DEFAULT_CTRL_ARGS = array(
		'teaserTemplate' => '',
		'teaserSkin' => ''
	);

	/**
	 * Define default vars for the view
	 * In the view, test with empty() if a value is set
	 *
	 * @var array
	 */
	protected static $DEFAULT_VIEW_VARS = array(
		'teaserTemplate' => '',
		'teaserSkin' => 'default',
		'query' => ''
	);

	/**
	 * Get data for a TeaserList
	 *
	 * @param array $args
	 * @return array
	 */
	public static function data(array $args = array()) {

		global $wp_query;

		// Extend default args
		$ctrlArgs = array_merge(self::$DEFAULT_CTRL_ARGS, $args);

		// Set default vars for the view
		$viewData = self::$DEFAULT_VIEW_VARS;

		$viewData['count'] = $ctrlArgs['count'];

		$args = array(
			'numberposts' => -1,
			'orderby' => 'post_date',
			'order' => 'DESC',
			'post_type'        => 'post',
			'suppress_filters' => true
		);


		$viewData['posts'] = get_posts( $args );
		$viewData['title'] = get_sub_field('blog_teaser_title');

		if(!$viewData['title']){
			$viewData['title'] = 'Blog';
		}

		$viewData['buttonText'] = get_sub_field('blog_teaser_button_text');
		$viewData['buttonLink'] = get_sub_field('blog_teaser_button_link');
		$viewData['show_more_button'] = false;

		$viewData['show_more_button'] = true;

		return $viewData;
	}

}