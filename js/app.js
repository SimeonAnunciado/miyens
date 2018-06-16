	$(document).ready(function(){
		$(".menu-toggle").click(function(){
			// alert('clicked');
			$("nav ul").toggleClass("showing");
		});

    // Slideshow carousel 
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; 
        }
        slideIndex++;
        if (slideIndex> slides.length) {slideIndex = 1} 
        slides[slideIndex-1].style.display = "block"; 
        setTimeout(showSlides, 4000); // Change image every 2 seconds
    }

    // End Slideshow carousel 

    // Email subscription
    //   $("#contact-form").submit(function(e){
    //     var email = document.getElementById('email');


    //     if (!email.value) {
    //         alert('Please check your email')

    //     }else{
    //         $.ajax(){
    //             url:"htttps://formspree.io/email",
    //             method:"POST",
    //             data:$(this).serialize(),
    //             dataType:"json"
    //         }
    //         e.preventDefault()
    //         $(this).get(0).reset()
    //         alert('message success');
    //     }
    // });

    // End Email subscription


	});
