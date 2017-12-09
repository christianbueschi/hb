<?php

namespace NxModule\commentform;

class CommentformCtrl {

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
		'comment_status' => '',
		'comment_form_args' => array()
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

		// Comment status
		global $post;
		$viewData['comment_status'] = $post->comment_status;

		// Comment Form
		global $user_identity;

		$commenter = wp_get_current_commenter();
		$req = get_option( 'require_name_email' );
		$aria_req = ( $req ? " aria-required='true'" : '' );

		$viewData['comment_form_args'] = array(
			'label_submit' => 'Abschicken',
			'comment_notes_after' => '',
			'comment_notes_before' => '',
			'logged_in_as' => '<p class="logged-in-as">' . sprintf(__('Eingeloggt als <a href="%1$s">%2$s</a>. <a href="%3$s" title="Log out">Log out?</a>', 'nxtheme'), get_edit_user_link(), $user_identity, wp_logout_url(apply_filters('the_permalink', get_permalink()))) . '</p>',

			'fields' => apply_filters('comment_form_default_fields', array(
				'author' =>     '<input id="author" placeholder="Name" name="author" required type="text" value="' . esc_attr( $commenter['comment_author'] ) .
				  				'" size="30"' . $aria_req . ' />',
				'email' =>      '<input id="email" placeholder="Email" name="email" required type="email" value="' . esc_attr(  $commenter['comment_author_email'] ) .
				  				'" size="30"' . $aria_req . ' />',
			)),

			'comment_field' => '<textarea placeholder="Kommentar" id="comment" name="comment" required cols="30" rows="4" aria-required="true"></textarea>'
		);

		return $viewData;
	}
}
