<?

?>

<nav class="navbar navbar-site scroll">
	<div class="container navbar__container">
		<div class="row navbar__row">
			<div class="cols navbar__cols  is--header"> 				
				<div class="navbar__header">
					<div class="row navbar__row-header ">
						<div class="cols navbar__cols-header  is--hamburger">
							<div class="navbar__hamburger">
								<button class="navbar__hamburger-btn hamburger__item" data-toggle="collapse" data-target="#bs-navbar-collapse" aria-expanded="false" data-toggle-nav=".navbar-site" data-body="html" data-collapse-nav=".navbar__collapse">
									<span class="hamburger__line  is--left"></span>
									<span class="hamburger__line  is--center"></span>
									<span class="hamburger__line  is--right"></span>
								</button>
							</div>
						</div>
						<div class="cols navbar__cols-header  is--brand">
							<a class="navbar__brand" href="/"><svg class="icon-svg icon-logotip" role="img">
								<use xlink:href="<?=$this->path('img');?>/svg/sprite.svg#logotip"></use>
							</svg>
							</a>
						</div>
						<div class="cols navbar__cols-header  is--tel">							
							<a href="tel:+79103033771" class="btn__icon is--tel">
								<svg class="icon-svg icon-tel" role="img">
									<use xlink:href="<?=$this->path('img');?>/svg/sprite.svg#tel"></use>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="cols navbar__cols  is--collapse">
				<div class="navbar__collapse" >
					<div class="navbar__collapse-inner">
						<div class="row navbar__collapse-row">
							<div class="cols navbar__collapse-cols  is--nav">
								<ul class="navbar__nav">
									<?
									$menu_items = $this->getMenu(2);
									//__theme_ed($menu_items);
									if(count($menu_items)) {
										foreach($menu_items as $item) {
											
											$item_class = '';
											
											if($item->object_id == $this->post['id']){
												$item_class = $item_class . ' is--active ';
											}
											
									?>
									<li class="navbar__nav-item <?=$item_class;?> ">
										<a href="<?=$item->url;?>" class="navbar__nav-link"><?=$item->title;?></a>  
									</li>
									<?
										}
									}
									?>
								</ul>
							</div>
							<div class="cols navbar__collapse-cols  is--right" >
								<div class="row navbar__right-row">
									<div class="cols navbar__right-cols  is--search">
										<div class="dropdown navbar__search-dropdown">
											<a href="#" class="navbar__search-btn dropdown-toggle" data-toggle="dropdown">
												<svg class="icon-svg icon-search" role="img">
													<use xlink:href="<?=$this->path('img');?>/svg/sprite.svg#search"></use>
												</svg>
											</a>
											<ul class="dropdown-menu navbar__search-dropdown-menu">
												<div class="search-block">
													<form role="search" action="/" method="GET" class="search__form">
														<input type="text" placeholder="Поиск" class="search__input" value="<?= get_search_query(); ?>" name="s" >
														<button type="submit" class="search__btn-submit">
															<svg class="icon-svg icon-search" role="img">
																<use xlink:href="<?=$this->path('img');?>/svg/sprite.svg#search"></use>
															</svg>
														</button>
													</form>
												</div>
											</ul>
										</div>
									</div>
									<div class="cols navbar__right-cols  is--contacts">
										<div class="row navbar__contacts-row">
											<div class="cols navbar__contacts-cols">
												<div class="navbar__tel-block">
													<?
													$phone1 = phone(getContact('phone1'));
													?>
													<a href="tel:+<?=$phone1;?>" class="navbar__tel">+<?=substr($phone1, 0, 1);?> (<?=substr($phone1, 1, 3);?>) <span><?=substr($phone1, 4, 3);?>-<?=substr($phone1, 7, 2);?>-<?=substr($phone1, 9, 2);?></span></a>
												</div>
											</div>
											
											<?
											if(!is_user_logged_in()) {
											?>
											
											<div class="cols navbar__contacts-cols  is--btn">
												<a href="<?=l(99);?>" class="btn__item is--sm  is--enter">Войти</a>
											</div>
											
											<?
											} else {
											?>
											
											<div class="cols navbar__contacts-cols">
												<?/*<a href="<?=l(is_user_logged_in() ? 103 : 97);?>" class="basket-btn__item   ">*/?>
												<a href="<?=l(154);?>" class="basket-btn__item   ">
													<svg class="icon-svg icon-basket" role="img">
														<use xlink:href="<?=$this->path('img');?>/svg/sprite.svg#basket"></use>
													</svg>
													<span class="basket-btn__item-count azbn7__cart__pos_count__value "></span>
												</a>
											</div>
											
											<div class="cols navbar__contacts-cols  is--btn">
												<a href="<?=l(95);?>" class="btn__item is--xs  is--order">Мой<br> кабинет</a>
											</div>
											
											<?
											}
											?>
											
											<div class="cols navbar__contacts-cols  is--btn">
												<a href="<?=l(97);?>" class="btn__item is--xs  is--order">Заказать в<br> один клик</a>
											</div>
											
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</nav>