(function () {
    if ( typeof NodeList.prototype.forEach === "function" ) return false;
    NodeList.prototype.forEach = Array.prototype.forEach;
})();

function initMap() {
    var directionsDisplay = new google.maps.DirectionsRenderer({
    	suppressMarkers: true,
    	polylineOptions: {
	      strokeColor: "#fa7d8e",
	      strokeWeight: 5
	    }
    });
    var directionsService = new google.maps.DirectionsService;

    var map = new google.maps.Map(document.getElementById('map'), {
     	center: { lat: 52.013054, lng: 15.423435 },
     	scrollwheel: false,
      	zoom: 11,
      	mapTypeControl: false,
      	streetViewControl: false,
      	styles: [
		    {
		        "featureType": "all",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#f5f5f5"
		            }
		        ]
		    },
		    {
		        "featureType": "all",
		        "elementType": "labels.text.fill",
		        "stylers": [
		            {
		                "color": "#616161"
		            }
		        ]
		    },
		    {
		        "featureType": "all",
		        "elementType": "labels.text.stroke",
		        "stylers": [
		            {
		                "color": "#f5f5f5"
		            }
		        ]
		    },
		    {
		        "featureType": "all",
		        "elementType": "labels.icon",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "administrative.neighborhood",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "administrative.land_parcel",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "administrative.land_parcel",
		        "elementType": "labels.text.fill",
		        "stylers": [
		            {
		                "color": "#bdbdbd"
		            }
		        ]
		    },
		    {
		        "featureType": "poi",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#eeeeee"
		            }
		        ]
		    },
		    {
		        "featureType": "poi",
		        "elementType": "labels.text",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "poi",
		        "elementType": "labels.text.fill",
		        "stylers": [
		            {
		                "color": "#757575"
		            }
		        ]
		    },
		    {
		        "featureType": "poi.business",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "poi.park",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#e5e5e5"
		            }
		        ]
		    },
		    {
		        "featureType": "poi.park",
		        "elementType": "labels.text.fill",
		        "stylers": [
		            {
		                "color": "#9e9e9e"
		            }
		        ]
		    },
		    {
		        "featureType": "road",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#ffffff"
		            }
		        ]
		    },
		    {
		        "featureType": "road",
		        "elementType": "geometry.fill",
		        "stylers": [
		            {
		                "color": "#fac7ce"
		            },
		            {
		                "weight": 1
		            }
		        ]
		    },
		    {
		        "featureType": "road",
		        "elementType": "labels.icon",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "road.highway",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#dadada"
		            }
		        ]
		    },
		    {
		        "featureType": "road.highway",
		        "elementType": "geometry.fill",
		        "stylers": [
		            {
		                "color": "#fac7ce"
		            }
		        ]
		    },
		    {
		        "featureType": "road.highway",
		        "elementType": "geometry.stroke",
		        "stylers": [
		            {
		                "color": "#fac7ce"
		            }
		        ]
		    },
		    {
		        "featureType": "road.highway",
		        "elementType": "labels.text.fill",
		        "stylers": [
		            {
		                "color": "#616161"
		            }
		        ]
		    },
		    {
		        "featureType": "road.arterial",
		        "elementType": "labels.text.fill",
		        "stylers": [
		            {
		                "color": "#757575"
		            }
		        ]
		    },
		    {
		        "featureType": "road.local",
		        "elementType": "labels.text.fill",
		        "stylers": [
		            {
		                "color": "#9e9e9e"
		            }
		        ]
		    },
		    {
		        "featureType": "transit",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "transit.line",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#e5e5e5"
		            }
		        ]
		    },
		    {
		        "featureType": "transit.station",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#eeeeee"
		            }
		        ]
		    },
		    {
		        "featureType": "water",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#c9c9c9"
		            }
		        ]
		    },
		    {
		        "featureType": "water",
		        "elementType": "labels.text",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "water",
		        "elementType": "labels.text.fill",
		        "stylers": [
		            {
		                "color": "#9e9e9e"
		            }
		        ]
		    }
		]
    });

	directionsDisplay.setMap(map);

	var icons = {
		church: {
			icon: 'img/church.png'
		},
		cheers: {
			icon: 'img/cheers.png'
		}
	};

	var features = [
		{
			position: new google.maps.LatLng(51.999711, 15.199215),
			type: 'church'
		},
		{
			position: new google.maps.LatLng(52.085408, 15.610188),
			type: 'cheers'
		}
	];

	features.forEach(function (feature) {
		var marker = new google.maps.Marker({
			position: feature.position,
			icon: icons[feature.type].icon,
			map: map
		});
	});

    directionsService.route({
    	origin: 'kościół, Kościelna 3, 66-615 Pław, Polska',
    	destination: 'Restauracja "Pod Aniołami", Przemysłowa 23, 66-100 Sulechów, Polska',
    	travelMode: 'DRIVING'
    }, function(response, status) {
    	if (status === 'OK') {
       		directionsDisplay.setDirections(response);
    	} else {
    		window.alert('Directions request failed due to ' + status);
    	}
   });
}

function scrollIt(destination, duration = 200, easing = 'linear', callback) {

  const easings = {
    easeOutQuad(t) {
      return t * (2 - t);
    }
  };

  const start = window.pageYOffset;
  const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

  const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
  const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
  const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

  if ('requestAnimationFrame' in window === false) {
    window.scroll(0, destinationOffsetToScroll);
    if (callback) {
      callback();
    }
    return;
  }

  function scroll() {
    const now = 'now' in window.performance ? performance.now() : new Date().getTime();
    const time = Math.min(1, ((now - startTime) / duration));
    const timeFunction = easings[easing](time);
    window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

    if (window.pageYOffset === destinationOffsetToScroll) {
      if (callback) {
        callback();
      }
      return;
    }

    requestAnimationFrame(scroll);
  }

  scroll();
}

function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top < (window.pageYOffset + window.innerHeight) &&
    left < (window.pageXOffset + window.innerWidth) &&
    (top + height) > window.pageYOffset &&
    (left + width) > window.pageXOffset
  );
} 

function counter() {
	var daysEl = document.getElementById('days');
	var hoursEl = document.getElementById('hours');
	var minsEl = document.getElementById('mins');
	var secsEl = document.getElementById('secs');
	var counterNumEl = document.querySelector('.counter');

	var weddingTime = new Date(2017, 6, 29, 14, 30, 0);

	var secs = 1000; 
	var mins = secs * 60;
	var hours = mins * 60;
	var days = hours * 24;

	function countDiff(diffTime, time, el) {
	  	var timeLeft = Math.floor(diffTime / time);
	  	el.innerHTML = ('0' + timeLeft).slice(-2);
	  	diffTime -= (timeLeft * time);
	  	return diffTime;
	}

	setInterval(function() {
	  	var nowTime = new Date();
		  var diffTime = weddingTime - nowTime;
				
		  if (diffTime <= 86400000) {
			counterNumEl.classList.add('new');
		  }
	  
	  	diffTime = countDiff(diffTime, days, daysEl);
	  	diffTime = countDiff(diffTime, hours, hoursEl);
	  	diffTime = countDiff(diffTime, mins, minsEl);
	  	diffTime = countDiff(diffTime, secs, secsEl);
	}, 1000);
}

function parallax() {
	var bgEls = document.querySelectorAll('.bg');
	bgEls.forEach(el => {
		if(elementInViewport(el)) {
			var scrolltop = el.getBoundingClientRect().top;
			el.style.top = - scrolltop * 0.1 + 'px';
		}
	});
}

var lastScrollTop = [];

function navScroll() {
	var navEl = document.querySelector('nav');
	var st = window.pageYOffset || document.documentElement.scrollTop;

	if (st > 0) {
		navEl.classList.add('sticky');
		if (st >= lastScrollTop[10]) {
		    navEl.classList.remove('show');
		} else {
		    navEl.classList.add('show');
		}
	} else {
		navEl.classList.remove('sticky');
	    navEl.classList.remove('show');
	}

	for (var i = 10; i > 0; i--) {
		lastScrollTop[i] = lastScrollTop[i-1];
	} 

   	lastScrollTop[0] = st;
}

function scrollFunctions() {
	parallax();
	navScroll();
}

function navToggle() {
	var triggEl = document.querySelector('.nav__trigg');
	var navEl = document.querySelector('nav');
	var navListEl = document.querySelector('.nav__list');

	triggEl.addEventListener("click", (e) => {
		if (navListEl.style.display != "block") {
			navListEl.style.display = "block";
			navEl.classList.add('open');
		} else {
			navListEl.style.display = "none";
			navEl.classList.remove('open');
		}
	});
}

var callback = function(){
	// counter
	counter();

	// navToggle 
	navToggle();

	// paralax and navscroll
	window.addEventListener('scroll', scrollFunctions);

	// animate scroll to sections
	var navListEl = document.querySelector('.nav__list');

	navListEl.addEventListener('click', function(e) {
		e.preventDefault();

		if (e.target.classList.contains('nav__link')) {
			var goto = e.target.getAttribute("href");
			scrollIt(document.querySelector(goto), 600, 'easeOutQuad');
		}

	});
};

if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
  callback();
} else {
  document.addEventListener("DOMContentLoaded", callback);
}
