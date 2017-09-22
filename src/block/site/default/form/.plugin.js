(function() {
	"use strict";
	// form anti-spam
	$('form').each(function(){
		var key = $('input[name=key]').val();
		key = key.replace('london', 'tirana');
		key = key.replace('greatbritain', 'albania');
		$('input[name=key]').val(key);
	});
})(); 