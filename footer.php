<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package nxtheme
 */
?>
			</main>

			<?=
			module('footer')
				->tag('footer')
				->ctrl(); ?>

			<?php wp_footer(); ?>

		</div>


	</body>
</html>
