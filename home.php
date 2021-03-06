<?php
get_header();

$counter = 0;
?>

<div class="ninetysixty">
	<aside class="notice">
		<article>
			<header>
				<h2>Welcome to FoOls.</h2>
			</header>
			<div class="text">
			<p>We are a team composed of translators, proofreaders, graphic editors and web developers.</p>
			<p>Our focus lies in amateur translation of Japanese manga and tool development for such.</p>
			<p>Contact with us can be established through comments to our posts, <a href="/forums">the forum</a>, <a href="irc://irc.irchighway.net/foolrulez">IRC</a>, <a href="http://webchat.irchighway.net/?channels=foolrulez">WebIRC</a>, by <a href="http://ask.foolrulez.com">asking us questions</a> or by <a href="http://github.com/FoOlRulez">filing a bug report</a>.</p>
			<br/>
			</div>
			<footer>
				<p>For the <strong>latest releases</strong>, look no further:</p>
				<dl id="list_for_foolslide">
				</dl>	
			</footer>
		</article>
	</aside>
	<div class="sixtyfourty" style="float:right;">
		<?php if (have_posts()) : ?>
			<?php while (have_posts()) : the_post(); ?>

				<article <?php post_class('small-article') ?> id="post-<?php the_ID(); ?>">
					<div class="text">
						<header>
							<h2><a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>"><?php the_title(); ?></a></h2>
							<time datetime="<?php the_time('Y-m-d') ?>"><?php the_time('F jS, Y') ?></time>
							<span class="author">by <?php the_author() ?></span>
						</header>
						<div class="wrapped"><?php the_excerpt(); ?></div>
					</div>
					<div class="image"><a href="<?php the_permalink() ?>"><?php
		get_the_image(array('custom_key' => array('Feature', 'feature'),
			'default_size' => 'type-home',
			'link_to_post' => false, 'width' => 260, 'height' => 150));
				?></a>
						<footer>
							<?php comments_popup_link('<img width="34" height="34" src="' . get_bloginfo('template_url') . '/images/comments.png" /> 0', ' <img width="34" height="34" src="' . get_bloginfo('template_url') . '/images/comments.png" />1', '<img width="34" height="34" src="' . get_bloginfo('template_url') . '/images/comments.png" /> %', '', ' <img width="34" height="34" src="' . get_bloginfo('template_url') . '/images/comments.png" /> Off'); ?>
						</footer>
					</div>
				</article>
				<div class="clearfix"></div>
				<?php
			endwhile;
			?>
		</div>
		<div class="clearfix"></div>
		<nav>
			<div style="float:right;"><?php next_posts_link(' Older Entries &raquo;') ?></div>
			<div style="float:left;"><?php previous_posts_link(' &laquo; Newer Entries') ?></div>
		</nav>
		<div class="clearfix"></div>
	<?php else : ?>

		<h2>Not Found</h2>
		<p>Sorry, but you are looking for something that isn't here.</p>
		<?php get_search_form(); ?>

	<?php endif; ?>
</div>

<?php
get_footer();
?>