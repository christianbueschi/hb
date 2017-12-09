<?php
/**
 * The template for displaying 404 pages (Not Found).
 *
 * @package nxtheme
 */

get_header(); ?>


<?php


$title = 'Error 404';
$subline = get_field('error_subline', 'options');
$text = get_field('error_text', 'options');
$backgroundImageError = get_field('error_background_image', 'options');


?>


<?=
module('stage')
	->tag('section')
	->classes('o-stage--small')
	->ctrl(array('Title' => $title, 'BackgroundImage' => $backgroundImageError['url'])) ?>


	<!-- Info Module -->
	<div class="o-info o-info--small">
		<div class="o-info__inner">
			<div class="o-info__copy">
				<?= $subline ?>
			</div>
		</div>
	</div>


	<!-- Content Module -->
	<div class="o-content">
		<div class="o-content__inner">
			<div class="o-content__one">
				<?= $text ?>
			</div>
		</div>
	</div>


<?php get_footer(); ?>