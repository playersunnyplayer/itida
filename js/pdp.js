$('.datepicker').datepicker({
    format: "dd/mm/yyyy",
    autoHide: true
});

$('.addons-carousel').owlCarousel({
    margin: 10,
    loop: true,
    responsiveClass: true,
    dots: false,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 2,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 4,
        }
    }
})

$('.relatedServices-carousel').owlCarousel({
    margin: 20,
    loop: true,
    responsiveClass: true,
    dots: false,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 4,
        }
    }
})

$('.variants-carousel').owlCarousel({
    loop: false,
    margin: 10,
    autoPlay: false,
    responsive: {
        0: {
            items: 2,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 4,
        }
    }
})

function personalizationDetails() {
    $("#personalizationDetailsSection").slideDown("slow");
}

function closePersonalizationDetailsSection() {
    $("#personalizationDetailsSection").slideUp("slow");
}

$(".leftImgThumbs img").click(function() {
    let imageName = $(this).attr("data-img");
    $("#mainImg").attr("src", imageName);
    $("#fancyboxlink").attr("href", imageName);
})