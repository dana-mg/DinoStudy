


/*-------------------------------------
testimonial slider
-------------------------------------*/
function testimonialSlider(){
    const carouselOne = document.getElementById('carouselOne');
    if(carouselOne){/*si el elemento existe*/
        carouselOne.addEventListener('slid.bs.carousel', function(){
            const activeItem = this.querySelector(".active");
            document.querySelector(".js-testimonial-img").src =
            activeItem.getAttribute("data-js-testimonial-img")
        })
    }
}
testimonialSlider();