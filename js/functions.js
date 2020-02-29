$(window).on("load", function () {	/*all things have loaded*/
	$(".loader").delay(2000).fadeOut("slow", function() {
		$("body").removeClass("preloading");
		$("#landing-page").find("h1, h3").fadeIn("slow", function() {
			new WOW().init();
		});
	});
});

$(window).scroll(function() {
	NavbarShow();
});

function NavbarShow() {
	var landingPage = $("#about");
	var offset = landingPage.offset();
	if($(window).scrollTop() >= offset.top)
		$("#navbar").css("visibility", "visible");
	else
		$("#navbar").css("visibility", "hidden");
}

/*window.onscroll = function() {
	NavbarShow();
}
function NavbarShow() {
	var landingPage = document.getElementById("about");
	var pos = landingPage.offsetTop;
	if(window.pageYOffset >= pos)
		document.getElementById("navbar").style.visibility = "visible";
	else
		document.getElementById("navbar").style.visibility = "hidden";
}*/