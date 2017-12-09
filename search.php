<?php
/**
 * The template for displaying Search Results pages.
 *
 * @package nxtheme
 */

get_header(); ?>

<?php

$title = get_field('search_title', 'options');
$backgroundImageSearch = get_field('search_background_image', 'options');

?>


<?=
module('stage')
	->tag('section')
	->classes('o-stage--small')
	->ctrl(array('Title' => $title, 'BackgroundImage' => $backgroundImageSearch['url'])) ?>


<?= module('teaserlist')->ctrl(); ?>


<? get_footer(); ?>
