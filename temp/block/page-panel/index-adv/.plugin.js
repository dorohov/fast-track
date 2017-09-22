(function() {
	"use strict";

	var form = $('.azbn-valid-form');	
	form.find('.azbn-step .azbn-btn').addClass('is--hidden');
	
	form.find('.azbn-step').each(function(index){ 
		
		var block = $(this);
		
		var step = parseInt(block.attr('data-azbn-step') || 0);
		
		switch(step) {
			
			case 1: { 
				
				block.find('input[type="radio"]').on('click.azbn', function(event){
					
					var input = block.find('input.azbn-input');
					
					input.attr('data-azbn-valid', 1);
					
					var val = parseInt(input.val() || 0);
					
					if(val && parseInt(input.attr('data-azbn-valid'))) {
						block.find('.azbn-btn').removeClass('is--hidden');
					}
					
				});
				
				block.find('input.azbn-input').on('keyup.azbn', function(event){
					
					var input = $(this);
					var val = parseInt(input.val() || 0);
					
					if(val && parseInt(input.attr('data-azbn-valid'))) {
						block.find('.azbn-btn').removeClass('is--hidden');
					}
					
				});
				
			}
			break;
			
			case 2: {
				
				block.find('input[type="radio"]').on('click.azbn', function(event){
					
					block.find('.azbn-btn').removeClass('is--hidden');
					
				});
				
			}
			break;
			
			case 3: {
				
				block.find('input.azbn-input').on('keyup.azbn', function(event){
					
					var input = $(this);
					var val = (input.val() || 0);
					
					if(val != '' && val.length > 8) {
						block.find('.azbn-btn').removeClass('is--hidden');
					} else {
						block.find('.azbn-btn').addClass('is--hidden');
					}
					
				});
				
			}
			break;
			
			default: {
				
			}
			break;
			
		}
		
	});
	
})();