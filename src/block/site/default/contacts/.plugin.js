function initMap() {
 	
	
	var map_container_div_id = 'map-google';
	var cont = $('#' + map_container_div_id);
	
	var CMS__TPL_PATH = '/wp-content/themes/azbn7theme';
	var CMS__TPL_PATH = '';
	
	if(cont.length) {
		
		var map_data = JSON.parse(cont.attr('data-map') || '{}');
		
		var coordMapOfficeOne = map_data.center;
		/*if(screenJS.device()) {			
			coordMapOfficeOne = map_data.center;//{lat: 52.9765785, lng: 36.0630902};
		};
		if(screenJS.pc()) {	
			coordMapOfficeOne = map_data.center;//{lat: 52.9767305, lng: 36.0620975};
		};*/
		var //iconCoordOfficeOne = {lat: 52.976698,  lng: 36.063286}, 
			zoomMapOfficeOne = map_data.zoom,
			styleMapOfficeOne = [{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e0efef"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry","stylers":[{"lightness":"0"},{"saturation":"4"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#c7dae2"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#7bc3e4"}]}],
			optionsMapOfficeOne = {
				zoom: zoomMapOfficeOne, 
				center: new google.maps.LatLng(coordMapOfficeOne[0], coordMapOfficeOne[1]),
				//scrollwheel: false,	
				//styles: styleMapOfficeOne
			},
			idOfficeOne = document.getElementById(map_container_div_id),
			mapOfficeOne = new google.maps.Map(idOfficeOne, optionsMapOfficeOne),		
			iconOfficeOne = {		
				path: "M19.9,0C9.6,0.4,1.1,8.4,0.1,18.6c-0.2,2-0.1,4,0.3,5.9l0,0c0,0,0,0.2,0.1,0.6 c0.3,1.4,0.8,2.8,1.4,4.1c2.1,4.9,6.9,13.1,17.6,22c0.7,0.6,1.6,0.6,2.3,0c10.7-8.9,15.5-17.1,17.6-22c0.6-1.3,1.1-2.7,1.4-4.1 c0.1-0.4,0.1-0.6,0.1-0.6l0,0c0.2-1.3,0.4-2.6,0.4-3.9C41.3,9,31.6-0.4,19.9,0z M20.6,30.9c-5.5,0-10-4.5-10-10s4.5-10,10-10   s10,4.5,10,10S26.2,30.9,20.6,30.9z",
				fillColor: '#37a9e2',
				strokeColor: '#000000',
				fillOpacity: 1,
				anchor: new google.maps.Point(21,51),
				strokeWeight: 0,
				scale: 1,
			};
			OfficeOne = new google.maps.Marker({
				position: iconCoordOfficeOne,
				map: mapOfficeOne,
				icon: iconOfficeOne
			});
			
			if(map_data.placemarks.length) {
				for(var i = 0; i < map_data.placemarks.length; i++) {
					var iconCoordOfficeOne = {lat: map_data.placemarks[i].coord[0],  lng: map_data.placemarks[i].coord[1]}, 
					OfficeOne = new google.maps.Marker({
						position: iconCoordOfficeOne,
						map: mapOfficeOne,
						icon: iconOfficeOne,
					});
				}
			}
			
			
			//$(window).on('resize', function() {
			//	google.maps.event.trigger(mapOfficeOne, "resize");
			//	mapOfficeOne.setCenter(OfficeOne);
			//});
			
			/*$(document.body).on('click.azbn7', '.azbn__office__map__set-center-btn', null, function(event){
				event.preventDefault();
				
				var btn = $(this);
				var coord = btn.attr('data-coord');
				var coord_arr = coord.split(',');
				console.dir(coord_arr);
				mapOfficeOne.setCenter({
					lat : parseFloat((coord_arr[0] || '').trim()),
					lng : parseFloat((coord_arr[1] || '').trim()),
				});
				
			});*/			
		
	}
	
};
/*$(function () {
	$(document.body).on('shown.bs.modal', '.modal', {}, function(event){
		event.preventDefault();
		$(window).trigger('resize');	  
	});  
});*/
