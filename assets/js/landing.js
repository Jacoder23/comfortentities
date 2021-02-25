(function() {
	var COOKIE_NAME = 'splash-page-cookie';
	$go = $.cookie(COOKIE_NAME);
	if ($go == null) {
		$.cookie(COOKIE_NAME, 'test', { path: '/', expires: 20*365 });
		window.location = "/design.html"
	}
	else {
	}
});