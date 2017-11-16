// javascript? more like shittyscript
// IIFE because JS is a garbage language that needs this for some reason
(function() {
	app = {
		init: function() {
			console.log('fuck js');
		}
	}
	
	// init all our shit with some api that may or may not work in any browser ever
	window.addEventListener("load", function(){
    	app.init();
	}, false);
})();