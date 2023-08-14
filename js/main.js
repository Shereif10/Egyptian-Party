
// 

$(".openNav").click(function () {
    $("#leftMenu").animate({ width: '250px' }, 50)
    $("#home-content").animate({ marginLeft: '250px' }, 50)
})

$(".closeBtn").click(function () {
    $("#leftMenu").animate({ width: '0px' }, 50)
    $("#home-content").animate({ marginLeft: '0px' }, 50)
})

// 

$("#leftMenu a").click(function () {
    let section = $(this).attr("href");
    let sectionPosition = $(section).offset().top;
    $("html , body").animate({ scrollTop: sectionPosition }, 500);
})

// 

$('.singers h2').click(function () {
    $('.content').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
})

//

window.onload = function () {
    countDownToTime("7 may 2024 12:00:00");
}

function countDownToTime(count) {
    let futureDate = new Date(count);
    futureDate = (futureDate.getTime() / 1000);
    let now = new Date();
    now = (now.getTime() / 1000);
    let distance = (futureDate - now);
    let days = Math.floor(distance / (24 * 60 * 60));
    let hours = Math.floor((distance - (days * (24 * 60 * 60))) / 3600);
    let mins = Math.floor((distance - (days * (24 * 60 * 60)) - (hours * 3600)) / 60);
    let secs = Math.floor((distance - (days * (24 * 60 * 60)) - (hours * 3600) - (mins * 60)))
    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${mins} m`);
    $('.seconds').html(`${secs} s`)
    setInterval(function () { countDownToTime(count); }, 1000);
}

// 

$('textarea').keydown(function () {
    let length = $(this).val().length;
    let remainingLetters = 100 - length;
    if (remainingLetters <= 0) {
        $(".lettersNumber").text("your available character finished");
    }
    else {
        $(".lettersNumber").text(remainingLetters);
    }
});