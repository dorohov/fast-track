(function(){
	
	$(document.body).on('click', '.is--show-video', {}, function(event){
		event.preventDefault();
		
		var btn = $(this);
		var url = btn.attr('data-iframe-url') || '';
		var _modal = $('#modal-video');
		var iframe = _modal.find('iframe');
		
		
		iframe.attr('src', url);
		
		_modal.one('hide.bs.modal', function(){
			iframe.attr('src', '');
		});
		
	})
	
})();