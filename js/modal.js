jQuery(function($){

	if(typeof window.__adBlocker_disabled__ === "undefined" ){
		window.__adBlocker_disabled__ = false;
	}
	
	if( !window.__adBlocker_disabled__ ){
		$.get('site-block.html', function(html){
			$('html').append(html);
		});
	} else {
		// No Ad-Blocker Detected
	} 

});