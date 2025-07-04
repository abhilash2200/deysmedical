
// // slider js
//  var $carousel = $('[data-owl-carousel]');
//  if ($carousel.length) {
//      $carousel.each(function (index, el) {
//          $(this).owlCarousel($(this).data('owl-carousel'));
//      });
//  }

//  event tab

$(function() {
    var $tabButtonItem = $('#tab-button li'),
    $tabSelect = $('#tab-select'),
    $tabContents = $('.tab-contents'),
    activeClass = 'is-active';
    
    $tabButtonItem.first().addClass(activeClass);
    $tabContents.not(':first').hide();
    
    $tabButtonItem.find('a').on('click', function(e) {
    var target = $(this).attr('href');
    
    $tabButtonItem.removeClass(activeClass);
    $(this).parent().addClass(activeClass);
    $tabSelect.val(target);
    $tabContents.hide();
    $(target).show();
    e.preventDefault();
    });
    
    $tabSelect.on('change', function() {
    var target = $(this).val(),
    targetSelectNum = $(this).prop('selectedIndex');
    
    $tabButtonItem.removeClass(activeClass);
    $tabButtonItem.eq(targetSelectNum).addClass(activeClass);
    $tabContents.hide();
    $(target).show();
    });
    });

    // header js     
    
function handleScroll() {
    var header = document.querySelector("header");
    var logo = document.getElementById("stickyLogo");
    var section = document.querySelector("header section");

    if (window.scrollY > 100) {
        header.classList.add("stickyheader");
        header.style.position = "fixed";
        logo.classList.remove("hidden");
        section.style.justifyContent = "space-between";
    } else {
        header.classList.remove("stickyheader");
        header.style.position = "absolute";
        logo.classList.add("hidden");
        section.style.justifyContent = "flex-end";
    }
}

// On scroll
window.addEventListener("scroll", handleScroll);

// On page load
window.addEventListener("load", handleScroll);

<<<<<<< HEAD
    // Show the floating menu on scroll
  window.addEventListener("scroll", function () {
    const menu = document.getElementById("floatingMenu");
    if (window.scrollY > 100) {
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
    }
  });
=======
>>>>>>> 78f071c32ed2ad4c0ac4324f20fcd114096e6321
  

  
  
    // header active link
    
    document.addEventListener('DOMContentLoaded', function () {
        const currentPath = window.location.pathname.split("/").pop();
     
        const navLinks = document.querySelectorAll('.nav-link');
     
        navLinks.forEach(link => {
          if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      });

// top scroll

window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  var goTopButton = document.getElementById("go-top");
  if (goTopButton) {  // Check if the element exists
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goTopButton.style.display = "block";
    } else {
        goTopButton.style.display = "none";
    }
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// data aos


  // AOS.init();
  // AOS.refresh(); // initialize AOS animations
  // $(document).ready(function(){
  //     $("body,html").animate({
  //         scrollTop: 10
  //     }, 1000);
  //     $("body,html").animate({
  //         scrollTop: 0
  //     }, 1);
  // });

// loader js
var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
  /* loader.style.display = "none"; */
})


//splide js

// const splide = new Splide( '.emergency', {
//   type   : 'loop',
//   drag   : 'free',
//   focus  : 'center',
//   perPage: 3,
//   autoScroll: {
//     speed: 1,
//   },
// } );

// splide.mount();

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#banner", {
    type   : 'loop',
    perPage: 1,
    pagination:0,
    focus  : 'start',
    autoplay: false,
    rewind     : true,
    rewindSpeed: 300,
  }).mount();
})

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#partner", {
    type   : 'loop',
    arrows : false,
    perPage: 8,
    pagination:0,
    focus  : 'start',
    autoplay: true,
    rewind     : true,
    rewindSpeed: 300,
    breakpoints: {
      768: {
        perPage: 4,
      },
      600: {
        perPage: 3,
      },
    },
  }).mount();
})


document.addEventListener("DOMContentLoaded", function () {
  new Splide("#testimonial", {
    type: "loop",
    arrows: false,
    gap: 40,
    perPage: 3,
    pagination: true,
    focus: "center",
    autoplay: true,
    speed: 800,
    interval: 3000,
    rewind: true,
    rewindSpeed: 500,
    breakpoints: {
      1024: { perPage: 2, gap: 30 },
      768: { perPage: 2, gap: 20 },
      480: { perPage: 1, gap: 10 },
    },
  }).mount();
});

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#videoreview", {
    type: "loop",
    arrows: false,
    gap: 20,
    perPage: 3,
    pagination: true,
    focus: "center",
    autoplay: false, // Users manually play videos
    rewindSpeed: 500,
    breakpoints: {
      1024: { perPage: 2, gap: 15 },
      768: { perPage: 1, gap: 10 },
    },
  }).mount();
});




document.addEventListener("DOMContentLoaded", function () {
  new Splide("#service", {
    type: "loop",
    arrows: false,
    gap: 10,
    perMove : 1,
    perPage: 4,
    pagination: false,
    focus: "start",
    autoplay: true,
    speed: 800,
    interval: 3000, 
    rewind: true,
    rewindSpeed: 500,
    breakpoints: {
      1024: { perPage: 2 },
      768: { perPage: 2, gap: 20 },
      400: { perPage: 1, gap: 10 },
    },
    }).mount();
});

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#tips", {
    type: "loop",
    arrows: false,
    gap: 10,
    perPage: 3,
    pagination: false,
    focus: "start",
    autoplay: false,
    speed: 800,
    interval: 3000, 
    rewind: true,
    rewindSpeed: 500,
    breakpoints: {
      1024: { perPage: 2 },
      768: { perPage: 2, gap: 20 },
      400: { perPage: 1, gap: 10 },
    },
  }).mount();
});


document.addEventListener("DOMContentLoaded", function () {
  new Splide("#items", {
    type: "loop",
    arrows: true,
    gap: 10,
    perPage: 6,
    pagination: false,
    focus: "start",
    autoplay: false,
    speed: 800,
    interval: 3000, 
    rewind: true,
    rewindSpeed: 500,
    breakpoints: {
      1024: { perPage: 5 },
      768: { perPage: 4, gap: 10 },
      400: { perPage: 3, gap: 10 },
    },
  }).mount();
});

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#launch", {
    type: "loop",
    arrows: true,
    gap: 10,
    perPage: 6,
    pagination: false,
    focus: "start",
    autoplay: false,
    speed: 800,
    interval: 3000, 
    rewind: true,
    rewindSpeed: 500,
    breakpoints: {
      1024: { perPage: 5 },
      768: { perPage: 4, gap: 10 },
      400: { perPage: 3, gap: 10 },
    },
  }).mount();
});


document.addEventListener("DOMContentLoaded", function () {
  new Splide("#brand", {
    type: "loop",
    arrows: true,
    gap: 10,
    perPage: 6,
    pagination: false,
    focus: "start",
    autoplay: false,
    speed: 800,
    interval: 3000, 
    rewind: true,
    rewindSpeed: 500,
    breakpoints: {
      1024: { perPage: 5 },
      768: { perPage: 4, gap: 10 },
      400: { perPage: 3, gap: 10 },
    },
  }).mount();
});

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#trending", {
    type: "loop",
    arrows: true,
    gap: 10,
    perPage: 6,
    pagination: false,
    focus: "start",
    autoplay: false,
    speed: 800,
    interval: 3000, 
    rewind: true,
    rewindSpeed: 500,
    breakpoints: {
      1024: { perPage: 5 },
      768: { perPage: 4, gap: 10 },
      400: { perPage: 3, gap: 10 },
    },
  }).mount();
});

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#treatment", {
    type: "loop",
    arrows: true,
    gap: 10,
    perPage: 6,
    pagination: false,
    focus: "start",
    autoplay: false,
    speed: 800,
    interval: 3000, 
    rewind: true,
    rewindSpeed: 500,
    breakpoints: {
      1024: { perPage: 5 },
      768: { perPage: 4, gap: 10 },
      400: { perPage: 2, gap: 10 },
    },
  }).mount();
});

document.querySelectorAll('.faq-toggle').forEach(button => {
  button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      const icon = button.querySelector('.toggle-icon');

      if (content.classList.contains('hidden')) {
          document.querySelectorAll('.faq-content').forEach(item => item.classList.add('hidden'));
          document.querySelectorAll('.toggle-icon').forEach(img => img.src = img.dataset.close);

          content.classList.remove('hidden');
          icon.src = icon.dataset.open;
      } else {
          content.classList.add('hidden');
          icon.src = icon.dataset.close;
      }
  });
})


	// Function to close the dropdown
	function closeDropdown() {
		var dropdown = document.getElementById('servicesDropdown');
		var icon = document.getElementById('servicesIcon');
		dropdown.classList.add('hidden');
		icon.textContent = ' +';
	}

	// Toggle dropdown when clicking on Services link
	document.getElementById('servicesLink').addEventListener('click', function(event) {
		event.stopPropagation();  // Prevent the click event from propagating to document
		var dropdown = document.getElementById('servicesDropdown');
		var icon = document.getElementById('servicesIcon');
		
		// Toggle the visibility of the dropdown
		if (dropdown.classList.contains('hidden')) {
			dropdown.classList.remove('hidden');
			icon.textContent = ' -';
		} else {
			closeDropdown();
		}
	});

	// Close dropdown if click happens outside of the dropdown or services link
	document.addEventListener('click', function(event) {
		var dropdown = document.getElementById('servicesDropdown');
		var servicesLink = document.getElementById('servicesLink');
		
		if (!dropdown.contains(event.target) && !servicesLink.contains(event.target)) {
			closeDropdown();
		}
	});

 
    



