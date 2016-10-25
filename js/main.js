$(document).ready(function() {
  	var isMenuOpen = false;
  	var isTeachersOpen = false;

	$("a.scrollto").click(function () {
		elementClick = $(this).attr("href")
		destination = $(elementClick).offset().top - $('#header').height() - parseInt($('#header').css('padding-top')) - parseInt($('#header').css('padding-bottom'));
		$("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
		isMenuOpen = false;
		$('.mob-nav').slideUp(300);
		return false;  
	});

	$("#header").on('click', '.menu-icon', function () {
        if (!isMenuOpen) {
            $('.mob-nav').slideDown(300);
            isMenuOpen = true;
        } else {
            $('.mob-nav').slideUp(300);
            isMenuOpen = false;
        }
    });

	$("#teachers").on('click', '.allCouch', function () {
        if (!isTeachersOpen) {
            $('.couch li:nth-child(n+3)').slideDown(300);
            $('.other').slideDown(300);
            $('.arrow-down').slideUp(300);
            $('.arrow-up').slideDown(300);
            isTeachersOpen = true;
        } else {
            $('.couch li:nth-child(n+3)').slideUp(300);
            $('.other').slideUp(300);
            $('.arrow-down').slideDown(300);
            $('.arrow-up').slideUp(300);
            elementClick = $(this).attr("href")
			destination = $(elementClick).offset().top - $('#header').height() - parseInt($('#header').css('padding-top')) - parseInt($('#header').css('padding-bottom'));
			$("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 300);
            isTeachersOpen = false;
        }
    });

    //Slider
	function Slider(selector) {
		var obj = $(selector);
		var item = obj.find('li');
		var num = 0;
		var width = item.outerWidth();
		var mobile;
		if (item.outerWidth() == obj.outerWidth()) {
			mobile = true;
		}

		$(window).resize(function() {
			width = item.outerWidth();
			if (item.outerWidth() == obj.outerWidth()) {
				mobile = true;
			}
		});

			$( ".arrow-left" ).addClass( "disabled" );

		obj.on('click', '.arrow', function () {
				if ($(this).hasClass('arrow-left')) {
					if (num > 0) {
						num--;
					}
					if (num == 0) {
						$( ".arrow-left" ).addClass( "disabled" );	
					}
					$( ".arrow-right" ).removeClass( "disabled" );
				} else {
					if (mobile) {
						if (num < item.length-1) {
							num++;
						}
						if (num == item.length-1) {
							$( ".arrow-right" ).addClass( "disabled" );	
						}
					} else {
						if (num < item.length-2) {
							num++;
						}
						if (num == item.length-2) {
							$( ".arrow-right" ).addClass( "disabled" );	
						}
					}
					$( ".arrow-left" ).removeClass( "disabled" );
				}
			margin = num*width;
			item.first().animate({ 'margin-left': "-" + margin + 'px' }, 300);
		});

	}

	Slider('.slider');

});

function set_payment (sum) {

	localStorage.setItem ("sum", sum);
	switch (sum) {

		case 1750:
		localStorage.setItem ("payment_url", "https://www.liqpay.com/api/3/checkout?data=eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXkiLCJwdWJsaWNfa2V5IjoiaTIzNzQ2NDYyNzcwIiwiYW1vdW50IjoiMTc1MCIsImN1cnJlbmN5IjoiVUFIIiwiZGVzY3JpcHRpb24iOiLQnNC10YHRj9GH0L3Ri9C5INCw0LHQvtC90LXQvNC10L3RgiIsInR5cGUiOiJidXkiLCJsYW5ndWFnZSI6InJ1In0%3D&signature=q8mDStzVPXcjcM5VlJBR32m3gHk%3D");
		localStorage.setItem ("payment_invoice", "img/nvoice_1.pdf");
		break;

		case 8750:
		localStorage.setItem ("payment_url", "https://www.liqpay.com/api/3/checkout?data=eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXkiLCJwdWJsaWNfa2V5IjoiaTIzNzQ2NDYyNzcwIiwiYW1vdW50IjoiODc1MCIsImN1cnJlbmN5IjoiVUFIIiwiZGVzY3JpcHRpb24iOiLQn9C%2B0LvRg9Cz0L7QtNC%2B0LLQvtC5INCw0LHQvtC90LXQvNC10L3RgiAoNSDQvNC10YHRj9GG0LXQsikiLCJ0eXBlIjoiYnV5IiwibGFuZ3VhZ2UiOiJydSJ9&signature=Mfp3NULCiLJtCiKnIHDQ7OT24Rs%3D");
		localStorage.setItem ("payment_invoice", "img/nvoice_2.pdf");
		break;

		case 15750:
		localStorage.setItem ("payment_url", "https://www.liqpay.com/api/3/checkout?data=eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXkiLCJwdWJsaWNfa2V5IjoiaTIzNzQ2NDYyNzcwIiwiYW1vdW50IjoiMTU3NTAiLCJjdXJyZW5jeSI6IlVBSCIsImRlc2NyaXB0aW9uIjoi0JPQvtC00L7QstC%2B0Lkg0LDQsdC%2B0L3QtdC80LXQvdGCICg5INC80LXRgdGP0YbQtdCyKSIsInR5cGUiOiJidXkiLCJsYW5ndWFnZSI6InJ1In0%3D&signature=4pAj%2BciOd60bqX0g9M%2Bux6X5T3k%3D");
		localStorage.setItem ("payment_invoice", "img/nvoice_3.pdf");
		break;
	}

}

