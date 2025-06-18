/* index js */

document.addEventListener("DOMContentLoaded", function () {
    const bannerTxt = document.getElementById('bannerTxt');
    const mImgBox = document.getElementById('mImgBox');

    // 약간의 지연을 줄 수도 있음 (선택 사항)
    setTimeout(() => {
        bannerTxt.classList.add('active');
        mImgBox.classList.add('active');
    }, 500);
});

$(function () {
    $('.gnb > li').mouseenter(function () {
        $(this).find('.lnb').slideDown();
    }).mouseleave(function () {
        $('.lnb').stop().slideUp();
    });
});

var scTop = $(window).on('scroll', function () {
    scTop = Math.ceil($(this).scrollTop());
    console.log(scTop);

    if (scTop > 400) {
        $('.t-box').each(function (i) {
            $(this)
                .delay(250 * i)
                .slideDown(600);
        });
    }
});

$(window).on('scroll', function () {
    var scTop = $(this).scrollTop();

    if (scTop > 950) {
        $('.c-banner img').css({
            right: '2%',
            opacity: 1
        });
    }

    if (scTop > 950) {
        $('.c-title > .c-txtbox').css({
            left: '1%',
            opacity: 1
        });
    }
});

$(window).on('scroll', function () {
    var scTop = $(this).scrollTop();

    if (scTop > 2800) {
        $('.n-banner img').css({
            right: '5%',
            opacity: 1,
            transfrom: 'translateY(-50%)'
        });
    }

    if (scTop > 2800) {
        $('.n-inner .n-titlebox').css({
            left: '2%',
            opacity: 1,
            transfrom: 'translateY(-50%)'
        });
    }
});

$(window).on('scroll', function () {
    var scTop = $(this).scrollTop();

    if (scTop > 3400) {
        $('.n-content1').addClass('active');
    }

    if (scTop > 3800) {
        $('.n-content2').delay(500).addClass('active');
    }

    if (scTop > 4100) {
        $('.n-content3').delay(700).addClass('active');
    }
});






