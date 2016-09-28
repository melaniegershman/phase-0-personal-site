$(function(){
    $("#poem").mouseout(function(){
        $("#poem").animate({
            opacity: 0.0
        });
    });
});

$(function(){
    $("span").click(function(){
        $("#poem").animate({opacity: 1});
         $("#beard").animate({ left: "-=475" }, 500);
    });
});

$(function(){
    $("#poem").hover(function(){
        $("#beard").animate({
            left: '700px'
        }, "slow");
    });
});
