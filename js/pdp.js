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
    nav: false,
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

$(document).ready(function () {
    $(".xzoom").xzoom({

        // top, left, right, bottom, inside, lens, fullscreen, #ID
        position: 'right',

        // inside, fullscreen
        mposition: 'inside',

        // In the HTML structure, this option gives an ability to output xzoom element, to the end of the document body or relative to the parent element of main source image.
        rootOutput: true,

        // x/y offset
        Xoffset: 0,
        Yoffset: 0,

        // Fade in effect, when zoom is opening.
        fadeIn: true,

        // Fade transition effect, when switching images by clicking on thumbnails.
        fadeTrans: true,

        // Fade out effect, when zoom is closing.
        fadeOut: false,

        // Enable smooth effects
        smooth: true,

        // Smooth move effect of the big zoomed image in the zoom output window. 
        // The higher value will make movement smoother.
        smoothZoomMove: 3,

        // Smooth move effect of lens.
        smoothLensMove: 1,

        // Smooth move effect of scale.
        smoothScale: 6,

        // From -1 to 1, that means -100% till 100% scale
        defaultScale: 0,

        // Scale on mouse scroll.
        scroll: true,

        // Tint color. Color must be provided in format like "#color". 
        tint: false,

        // Tint opacity from 0 to 1.
        tintOpacity: 0.5,

        // Lens color. Color must be provided in format like "#color". 
        lens: false,

        // Lens opacity from 0 to 1.
        lensOpacity: 0.5,

        // 'box', 'circle'
        lensShape: 'box',

        // Custom width of zoom window in pixels.
        zoomWidth: 'auto',

        // Custom height of zoom window in pixels.
        zoomHeight: 'auto',

        // Class name for source "div" container.
        sourceClass: 'xzoom-source',

        // Class name for loading "div" container that appear before zoom opens, when image is still loading.
        loadingClass: 'xzoom-loading',

        // Class name for lens "div".
        lensClass: 'xzoom-lens',

        // Class name for zoom window(div).
        zoomClass: 'xzoom-preview',

        // Class name that will be added to active thumbnail image.
        activeClass: 'xactive',

        // With this option you can make a selection action on thumbnail by hover mouse point on it.
        hover: false,

        // Adaptive functionality.
        adaptive: true,

        // When selected position "inside" and this option is set to true, the lens direction of moving will be reversed.
        lensReverse: false,

        // Same as lensReverse, but only available when adaptive is true.
        adaptiveReverse: false,

        // Lens will collide and not go out of main image borders. This option is always false for position "lens".
        lensCollision: true,

        //  Output title/caption of the image, in the zoom output window.
        title: false,

        // Class name for caption "div" container.
        titleClass: 'xzoom-caption',

        // Zoom image output as background
        bg: false

    });
});

function personalizationDetails() {
    $("#personalizationDetailsSection").slideDown("slow");
}

function closePersonalizationDetailsSection() {
    $("#personalizationDetailsSection").slideUp("slow");
}

// $(".addBtnCircle").click(function(){
//     $("#personalizationDetailsSection").slideUp()
// })

// $(".addBtnCircle").click(function(){
//     $("#personalizationDetailsSection").slideUp("slow");
// });