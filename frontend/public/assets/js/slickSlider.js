//  Introduce Slick Slider
$('.items-layout').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
    centerMode:true,
    centerPadding: '30px', 
    arrows: false,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 740,
            settings: {
                centerMode: true,
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                centerPadding: '0px', 
            }
        },
        {
            breakpoint: 1024,
            settings: {
                centerMode: true,
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 4,
                centerPadding: '0px', 
            }
        }
    ]
});

//  Brand List Slick Slider
$('.brand-list').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode:true,
    centerPadding: '30px', 
    arrows: false,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 740,
            settings: {
                centerMode: true,
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                centerPadding: '0px', 
            }
        },
        {
            breakpoint: 1024,
            settings: {
                centerMode: true,
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 4,
                centerPadding: '0px', 
            }
        }
    ]
});