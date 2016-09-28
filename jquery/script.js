$(function(){
    $("#poem").hover(function(){
        $("#beard").animate({
            left: '700px'
        }, 600);
    });
});

$(function(){
    $("#poem").mouseout(function(){
        $("#poem").fadeOut("9000");
    });
});

$(function(){
    $("span").click(function(){
        $("#poem").fadeIn("7000");
         $("#beard").animate({right: '700px'}, "slow");
    });
});

// $(function()) {
//     $("#beard").click(function(){
//         $("#beard").removeAttr("animate");
//     });
// }