<?
$posts = $this->getItems(array(
	'post_type' => 'post',
	'posts_per_page' => -1,
	'orderby' => array(
		'menu_order' => 'ASC',
		'date' => 'DESC',
		'ID' => 'DESC',
		'name' => 'ASC',
		'category_name' => 'novosti'
	),
));
//var_dump($posts)
?>
<div class="content-block news-page__content-block" role="main">
	<div class="container content-block__container news-page__container"> 
		<div class="breadcrumb__block  is--center">
			<ul class="breadcrumb__list  is--center">
				<li class="breadcrumb__list-item"><a href="/" class="breadcrumb__list-link">Главная</a></li>
				<li class="breadcrumb__list-item is--active"><?=t(4);?></li>
			</ul>
		</div>		
		<div class="page-header__block  is--heading  is--center">
			<h1 class="page-header__heading  is--heading  is--center"><span><?=t(4);?></span></h1>		
		</div> 
		<div class="news-page__block">
			<div class="news-page__row row  is--wrap  is--gutter">
			<?
				if(count($posts)) {
					foreach($posts as $p) {						
						$link = l($p->ID);
						$title = $p->post_title;
						$note = get_field('news__note', $p->ID);
						$preview = $this->Imgs->postImg($p->ID, '495x290');
						$date_iso = get_the_date('Y-m-d', $p);
						$date = get_the_date('d F Y', $p);
						if ($preview == ""){
							$preview = "https://placeholdit.imgix.net/~text?txtsize=50&txt=Нет фото&w=495&h=290";
						}						
				?>
				<div class="news-page__cols cols  is--cols-4">
					<article class="news-card__item   ">
						<a href="<?=$link;?>" class="news-card__preview">
							<img src="<?=$preview;?>" alt="<?=$title;?>">
						</a>
						<div class="news-card__inner">
							<time class="news-card__date" datatime="<?=$date_iso;?>"><?=$date;?> г.</time>
							<h4 class="news-card__heading"><a href="<?=$link;?>"><?=$title;?></a></h4>
							<div class="news-card__note"><?=$note;?></div>
							<div class="news-card__link">
								<a href="<?=$link;?>"><span>Подробнее</span></a>
							</div>
						</div>
					</article>
				</div>				
				<?
					}
				}
				?>
			</div>
		</div>	
	</div>	
</div>