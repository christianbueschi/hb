<?

/**
 * The Template for displaying all pages.
 *
 * @package nxtheme
 */

get_header();
?>

<? while (have_posts()) : the_post(); ?>

	<?php if (have_rows('landingpage')): ?>


		<?php while (have_rows('landingpage')): the_row(); ?>

			<!--STAGE-->

			<?php if (get_row_layout() === 'stage') : ?>

				<?=
				module('stage')
					->tag('section')
					->ctrl(); ?>

			<?php endif; ?>

			<!--FORM-->

			<?php if (get_row_layout() === 'form') : ?>

				<?=
				module('form')
					->tag('section')
					->ctrl()
					->attrib('id', 'ebook'); ?>


			<?php endif; ?>

			<!--CONTENT-->

			<?php if (get_row_layout() === 'content') : ?>

				<?=
				module('content')
					->tag('section')
					->ctrl(); ?>


			<?php endif; ?>

			<!--BLOG TEASER-->

			<?php if (get_row_layout() === 'blog_teaser') : ?>

				<?

				$numberofposts['count'] = 3;

				echo module('teaserlist')
					->tag('section')
					->ctrl($numberofposts); ?>

			<?php endif; ?>


		<?php endwhile; ?>

	<?php endif; ?>

<? endwhile; ?>

<? get_footer(); ?>